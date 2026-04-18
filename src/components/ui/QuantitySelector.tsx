"use client";

interface Props {
  quantity: number;
  onChange: (quantity: number) => void;
}

export default function QuantitySelector({ quantity, onChange }: Props) {
  return (
    <div className="flex items-center border border-mint-light rounded-[10px] overflow-hidden">
      <button
        onClick={() => onChange(quantity - 1)}
        className="px-3 py-2 min-w-[40px] min-h-[40px] text-dark/60 hover:text-dark hover:bg-mint-light/50 transition-colors flex items-center justify-center"
        aria-label="Decrease"
      >
        −
      </button>
      <span className="px-3 py-2 text-sm font-medium min-w-[32px] text-center">
        {quantity}
      </span>
      <button
        onClick={() => onChange(quantity + 1)}
        className="px-3 py-2 min-w-[40px] min-h-[40px] text-dark/60 hover:text-dark hover:bg-mint-light/50 transition-colors flex items-center justify-center"
        aria-label="Increase"
      >
        +
      </button>
    </div>
  );
}
