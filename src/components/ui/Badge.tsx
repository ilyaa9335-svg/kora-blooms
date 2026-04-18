interface Props {
  type: "bestseller" | "new";
  label: string;
}

export default function Badge({ type, label }: Props) {
  return (
    <span
      className={`inline-block text-[10px] font-inter font-semibold tracking-wider uppercase px-3 py-1 rounded-full ${
        type === "bestseller"
          ? "bg-rose text-white"
          : "bg-mint text-white"
      }`}
    >
      {label}
    </span>
  );
}
