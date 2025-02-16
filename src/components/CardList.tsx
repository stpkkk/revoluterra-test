import React from 'react';

interface Item {
  id: number;
  title: string;
  value: string | number;
  color?: string;
}

interface CardListProps {
  title: string;
  items: Item[];
  renderItem: (item: Item, index: number) => React.ReactNode;
}

export default function CardList({ title, items, renderItem }: CardListProps) {
  return (
    <article className="rounded-lg bg-white p-8">
      <h2 className="text-2xl">{title}</h2>
      <ul className="mt-2.5 list-decimal">
        {items.map((item, index) => (
          <li
            className={`flex items-center justify-between py-[14px] text-sm ${
              index !== items.length - 1 && 'border-b-border-grey border-b'
            }`}
            key={item.id}
          >
            {renderItem(item, index)}
          </li>
        ))}
      </ul>
    </article>
  );
}
