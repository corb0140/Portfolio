export default function InfoRow({
  icon,
  label,
  value,
  valueClass,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | undefined;
  valueClass?: "Completed" | "In_progress";
}) {
  const statusColor = {
    Base: "text-white",
    Completed: "text-green-400",
    In_progress: "text-blue",
  }[valueClass ?? "Base"];

  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 text-blue">{icon}</div>

      <div>
        <p className="text-xs text-muted">{label}</p>
        <p className={`text-sm ${statusColor}`}>{value}</p>
      </div>
    </div>
  );
}
