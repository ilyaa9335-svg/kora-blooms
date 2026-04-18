interface Props {
  label: string;
}

export default function SectionHeader({ label }: Props) {
  return (
    <div className="section-label mb-4">
      {label}
    </div>
  );
}
