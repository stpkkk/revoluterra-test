import { useState } from 'react';

interface View {
  id: number;
  date: string;
  value: number;
}
export default function ViewCount() {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  const views: View[] = [
    { id: 1, date: '22, вс', value: 50 },
    { id: 2, date: '23, пн', value: 55 },
    { id: 0, date: '21, сб', value: 70 },
    { id: 3, date: '24, вт', value: 60 },
    { id: 4, date: '25, ср', value: 0 },
    { id: 5, date: '26, чт', value: 100 },
    { id: 6, date: '27, пт', value: 0 },
  ];

  // Calculate the maximum value to normalize the heights
  const maxValue = Math.max(...views.map((view) => view.value));
  const maxBarHeight = 240;

  return (
    <ul className="flex items-center gap-6 mt-6">
      {views.map((view) => {
        // Calculate the height of the green bar based on the value
        const barHeight = (view.value / maxValue) * maxBarHeight;

        return (
          <li className="flex w-full max-w-[95px] flex-col gap-2" key={view.id}>
            <div
              className="bg-bg-grey relative h-[240px] cursor-pointer rounded-lg transition-all duration-200 ease-in-out"
              onMouseEnter={() => setHoveredBar(view.id)}
              onMouseLeave={() => setHoveredBar(null)}
            >
              {hoveredBar === view.id && (
                <div className="bg-primary absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-full transform rounded-lg px-2 py-1 text-xs leading-[16.8px] text-white">
                  {view.value}
                </div>
              )}
              <div
                className="bg-light-green absolute bottom-0 w-full rounded-lg"
                style={{ height: `${barHeight}px` }}
              />
            </div>
            <span className="text-secondary self-center text-[13px] leading-[18.2px]">
              {view.date}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
