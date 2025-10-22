import { Progress } from "./ui/progress";

interface Props {
  title: string;
  percent: number;            // 0..100
  leftLabel?: string;         // e.g., "12 of 42 completed"
  rightLabel?: string;        // e.g., "30 remaining"
  sticky?: boolean;           // make it stick to top
}

export default function ProgressTracker({
  title,
  percent,
  leftLabel,
  rightLabel,
  sticky = false,
}: Props) {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-xl p-4 ${
        sticky ? "sticky top-0 z-30" : ""
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-gray-900">{title}</h3>
        <div className="text-xs text-gray-600">{percent}%</div>
      </div>
      <Progress value={percent} />
      {(leftLabel || rightLabel) && (
        <div className="mt-2 flex justify-between text-xs text-gray-600">
          <span>{leftLabel}</span>
          <span>{rightLabel}</span>
        </div>
      )}
    </div>
  );
}
