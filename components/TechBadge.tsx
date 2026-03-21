interface TechBadgeProps {
  name: string;
}

export function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="inline-flex items-center px-3 py-1 text-sm border border-neutral-300 text-neutral-700">
      {name}
    </span>
  );
}
