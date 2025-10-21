// src/utils/storage.ts
const safeParse = <T,>(raw: string | null): T | null => {
  if (!raw) return null;
  try { return JSON.parse(raw) as T; } catch { return null; }
};

export const storage = {
  get<T>(key: string): T | null {
    if (typeof window === "undefined") return null; // SSR guard
    try { return safeParse<T>(window.localStorage.getItem(key)); }
    catch { return null; }
  },
  set<T>(key: string, value: T) {
    if (typeof window === "undefined") return; // SSR guard
    try { window.localStorage.setItem(key, JSON.stringify(value)); }
    catch { /* ignore quota/private mode errors */ }
  },
  remove(key: string) {
    if (typeof window === "undefined") return; // SSR guard
    try { window.localStorage.removeItem(key); } catch {}
  }
};
