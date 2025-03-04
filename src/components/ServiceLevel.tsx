import { useState } from 'react';
import RangeInput from './RangeInput';
import Card from './Card';

export default function ServiceLevel() {
  const [level, setLevel] = useState<number>(100);

  function handleChangeLevel(e: React.ChangeEvent<HTMLInputElement>) {
    setLevel(+e.target.value);
  }
  return (
    <Card
      title="Уровень сервиса"
      isTooltip={true}
      tooltipText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, unde?"
    >
      <div className="mt-6 flex min-w-[55px] place-items-baseline gap-2">
        <span className="text-2xl font-bold">{level}%</span>
        <span className="text-secondary text-xs"> За 30 дней</span>
      </div>

      <div className="flex items-center justify-between gap-2 my-4">
        <div className="bg-border-lightGrey h-4 w-full max-w-[120px] rounded-full" />
        <RangeInput
          level={level}
          min="0"
          max="100"
          label="Уровень сервиса"
          handleChange={handleChangeLevel}
          thumbColor="#74b200"
          trackGradientColorStart="#BFBF00"
          trackGradientColorEnd="#7DBF00"
        />
      </div>

      <p className="mb-2 text-sm font-semibold">У вас высокий уровень</p>

      <p className="text-secondary text-[13px]">
        Спасибо, что следуете правилам, — за это положены преимущества
      </p>
    </Card>
  );
}
