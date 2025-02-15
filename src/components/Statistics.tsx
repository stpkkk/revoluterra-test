import { useState } from 'react';
import arrowDown from '../assets/icons/ArrowDown.svg';
import arrowUp from '../assets/icons/ArrowUp.svg';

interface StatisticItem {
  id: number;
  title: string;
  absValue: number;
  percentValue: number | null;
}

export function Statistics() {
  // const [active, setActive] = useState(false);

  const statistics: StatisticItem[] = [
    { id: 0, title: 'Просмотры', absValue: 174, percentValue: 5.5 },
    { id: 1, title: 'Контакты', absValue: 0, percentValue: -100 },
    { id: 2, title: 'Избранное', absValue: 8, percentValue: null },
    { id: 2, title: 'Заказано товаров', absValue: 174, percentValue: -100 },
  ];

  // function handleSetActive(id: number) {
  //   setActive(id);
  // }

  return (
    <div className="flex flex-col p-8 mt-6 bg-white rounded-lg">
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl">Статистика за 21 — 27 дек</h2>
          <button className="border-border-grey cursor-pointer rounded-lg border px-[24px] py-[11px] text-[13px] font-medium">
            Больше статистики
          </button>
        </div>
        <ul className="flex items-center justify-between gap-2 mt-6">
          {statistics.map((item) => (
            <li
              key={item.id}
              className={`bg-bg-grey hover:border-border-lightGrey w-full max-w-[197px] rounded-lg border border-transparent p-4 hover:cursor-pointer ${item.id === 0 && 'border-green!'} flex flex-col gap-1`}
              // onClick={handleSetActive(item.id)}
            >
              <span className="text-secondary text-xs">{item.title}</span>
              <div className="flex gap-4">
                <span className="text-2xl font-semibold">{item.absValue}</span>
                <p className="flex items-center gap-1">
                  {item.percentValue !== null && (
                    <>
                      {item.percentValue < 0 ? (
                        <img
                          src={arrowDown}
                          alt="Decrease"
                          className="h-[13px] w-[13px]"
                        />
                      ) : (
                        <img
                          src={arrowUp}
                          alt="Increase"
                          className="h-[13px] w-[13px]"
                        />
                      )}
                      <span className="text-green text-xs">
                        {item.percentValue}%
                      </span>
                    </>
                  )}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
