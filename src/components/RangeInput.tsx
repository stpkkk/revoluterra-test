import type { ChangeEvent } from 'react';

type RangeInputProps = {
  level: number;
  min: string;
  max: string;
  step?: number;
  label: string;
  thumbColor: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  trackGradientColorStart: string;
  trackGradientColorEnd: string;
};

export default function RangeInput({
  level,
  min,
  max,
  step,
  label,
  thumbColor,
  handleChange,
  trackGradientColorStart,
  trackGradientColorEnd,
}: RangeInputProps) {
  return (
    <input
      className={`h-4 w-full cursor-pointer appearance-none rounded-full bg-[#dcdde5] [&::-moz-range-thumb]:h-7 [&::-moz-range-thumb]:w-7 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-[6px] [&::-moz-range-thumb]:bg-white [&::-webkit-slider-thumb]:h-7 [&::-webkit-slider-thumb]:w-7 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-[6px] [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-${thumbColor}`}
      style={{
        background: `linear-gradient(to right, ${trackGradientColorStart} 0%, ${trackGradientColorEnd} 100%, #dcdde5 100%, #dcdde5 100%)`,
      }}
      value={level}
      onChange={handleChange}
      type="range"
      min={min}
      step={step}
      max={max}
      aria-label={label}
    />
  );
}
