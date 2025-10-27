// src/utils/storage.ts

// --------------------
// Safe JSON helpers
// --------------------
const safeParse = <T,>(raw: string | null): T | null => {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
};

// Minimal, SSR-safe localStorage wrapper you already use
export const storage = {
  get<T>(key: string): T | null {
    if (typeof window === "undefined") return null; // SSR guard
    try {
      return safeParse<T>(window.localStorage.getItem(key));
    } catch {
      return null;
    }
  },
  set<T>(key: string, value: T) {
    if (typeof window === "undefined") return; // SSR guard
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* ignore quota/private mode errors */
    }
  },
  remove(key: string) {
    if (typeof window === "undefined") return; // SSR guard
    try {
      window.localStorage.removeItem(key);
    } catch {}
  },
};

// --------------------
// Resume/Progress model
// --------------------
export type ToolKind = "risk" | "compliance";

export interface ToolProgress {
  // Map these to your page state (section/module IDs, page/question index, etc.)
  sectionId: string | null;
  step: number; // 0-based
  progress: number; // 0..100
  started: boolean;
}

export interface ResumeState {
  lastVisited: ToolKind | null;
  risk: ToolProgress;
  compliance: ToolProgress;
}

const RESUME_KEY = "cw_resume_state_v1";

const defaultProgress: ToolProgress = {
  sectionId: null,
  step: 0,
  progress: 0,
  started: false,
};

const defaultState: ResumeState = {
  lastVisited: null,
  risk: { ...defaultProgress },
  compliance: { ...defaultProgress },
};

// --------------------
// Core getters/setters
// --------------------
export function getResumeState(): ResumeState {
  const saved = storage.get<ResumeState>(RESUME_KEY);
  // Merge defensively so older shapes don’t crash
  const state: ResumeState = {
    ...defaultState,
    ...(saved ?? {}),
    risk: { ...defaultProgress, ...(saved?.risk ?? {}) },
    compliance: { ...defaultProgress, ...(saved?.compliance ?? {}) },
  };
  return state;
}

function saveResumeState(next: ResumeState) {
  storage.set<ResumeState>(RESUME_KEY, next);
}

export function clearAllProgress() {
  saveResumeState({ ...defaultState });
}

export function setLastVisited(kind: ToolKind) {
  const s = getResumeState();
  s.lastVisited = kind;
  saveResumeState(s);
}

/**
 * Call this inside each tool when the user moves to a new section/step
 * and when you recompute progress.
 */
export function setToolProgress(
  kind: ToolKind,
  partial: Partial<ToolProgress>
) {
  const s = getResumeState();
  const current = kind === "risk" ? s.risk : s.compliance;
  const merged: ToolProgress = {
    ...current,
    ...partial,
    started: true,
  };
  if (kind === "risk") s.risk = merged;
  else s.compliance = merged;

  // Mark the tool the user most recently interacted with
  s.lastVisited = kind;
  saveResumeState(s);
}

// --------------------
// Computed helpers
// --------------------

/**
 * Combined progress for the Home "Resume" button.
 * Strategy: average of any tools that have started.
 * If none started, returns 0.
 * Change this to a weighted average if you prefer.
 */
export function getCombinedProgress(): number {
  const s = getResumeState();
  const parts: number[] = [];
  if (s.risk.started) parts.push(s.risk.progress);
  if (s.compliance.started) parts.push(s.compliance.progress);
  if (parts.length === 0) return 0;
  const sum = parts.reduce((a, b) => a + b, 0);
  return Math.round(sum / parts.length);
}

/**
 * Returns where to resume:
 * - If nothing started: sends user to Compliance at step 0
 * - Otherwise prefers the last visited tool
 * - Fallback: whichever has less remaining work
 */
export function getResumeDestination(): {
  kind: ToolKind;
  sectionId: string | null;
  step: number;
} {
  const s = getResumeState();

  if (!s.risk.started && !s.compliance.started) {
    return { kind: "compliance", sectionId: null, step: 0 };
  }

  if (s.lastVisited) {
    const t = s.lastVisited === "risk" ? s.risk : s.compliance;
    return { kind: s.lastVisited, sectionId: t.sectionId, step: t.step };
  }

  const remainingRisk = 100 - s.risk.progress;
  const remainingComp = 100 - s.compliance.progress;
  const kind: ToolKind = remainingRisk <= remainingComp ? "risk" : "compliance";
  const t = kind === "risk" ? s.risk : s.compliance;
  return { kind, sectionId: t.sectionId, step: t.step };
}
