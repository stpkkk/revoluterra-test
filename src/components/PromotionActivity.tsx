import { useState } from 'react';
import Card from './Card';
import RangeInput from './RangeInput';

export default function PromotionActivity() {
  const [level, setLevel] = useState<number>(0.2);

  function handleChangeLevel(e: React.ChangeEvent<HTMLInputElement>) {
    setLevel(+e.target.value);
  }

  return (
    <Card
      title="Активность продвижения"
      isTooltip={true}
      tooltipText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, corrupti?"
      border="#f33939"
    >
      <div className="mt-6 flex min-w-[55px] place-items-baseline gap-2">
        <span className="text-2xl font-bold">{level}</span>
        <span className="text-secondary text-2xl font-bold"> / 10</span>
        <span className="text-secondary text-xs"> За 7 дней</span>
      </div>

      <div className="flex items-center justify-between gap-2 my-4">
        <RangeInput
          level={level}
          min={'0'}
          max={'10'}
          step={0.1}
          label="Активность продвижения"
          handleChange={handleChangeLevel}
          thumbColor="#f33939"
          trackGradientColorStart="#f33939"
          trackGradientColorEnd="#f39039"
        />
        <div className="bg-border-lightGrey h-4 w-full max-w-[104px] rounded-full" />
        <div className="bg-border-lightGrey h-4 w-full max-w-[72px] rounded-full" />
      </div>

      <p className="mb-2 text-sm font-semibold">Продвиньте объявления</p>

      <p className="text-secondary text-[13px]">Конкуренты активнее, чем вы</p>
    </Card>
  );
}
