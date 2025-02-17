import { ChangeEvent } from 'react';

type RageInputProps = {
  level: number;
  min: string;
  max: string;
  thumbColor: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  trackGradientColorStart: string;
  trackGradientColorEnd: string;
};

export default function RangeInput({
  level,
  min,
  max,
  thumbColor,
  handleChange,
  trackGradientColorStart,
  trackGradientColorEnd,
}: RageInputProps) {
  return (
    <input
      className={`[&::-webkit-slider-thumb]:border-${thumbColor} h-4 w-full cursor-pointer appearance-none rounded-full [&::-moz-range-thumb]:rounded-full [&::-webkit-slider-thumb]:h-7 [&::-webkit-slider-thumb]:w-7 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-[6px] [&::-webkit-slider-thumb]:bg-white`}
      value={level}
      onChange={handleChange}
      type="range"
      min={min}
      max={max}
      aria-label="Уровень сервиса"
      style={{
        background: `linear-gradient(to right, ${trackGradientColorStart} 0%, ${trackGradientColorEnd} ${level}%, #dcdde5 ${level}%, #dcdde5 100%)`,
      }}
    />
  );
}
