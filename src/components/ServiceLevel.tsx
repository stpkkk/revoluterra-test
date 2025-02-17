import { useState } from 'react';
import { Tooltip } from './Tooltip';
import RangeInput from './RangeInput';

export default function ServiceLevel() {
  const [level, setLevel] = useState<number>(100);

  function handleChangeLevel(e: React.ChangeEvent<HTMLInputElement>) {
    setLevel(+e.target.value);
  }

  return (
    <article className="relative p-8 bg-white rounded-lg">
      <Tooltip text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit necessitatibus ipsam rerum odio, vero quaerat tenetur neque placeat repudiandae quae!" />

      <h2 className="text-2xl">Уровень сервиса</h2>

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
          handleChange={handleChangeLevel}
          thumbColor="green"
          trackGradientColorStart="#BFBF00"
          trackGradientColorEnd="#7DBF00"
        />
      </div>

      <p className="mb-2 text-sm font-semibold">У вас высокий уровень</p>

      <p className="text-secondary text-[13px]">
        Спасибо, что следуете правилам, — за это положены преимущества
      </p>
    </article>
  );
}
