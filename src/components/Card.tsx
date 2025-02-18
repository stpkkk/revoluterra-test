import { ReactNode } from 'react';
import { Tooltip } from './Tooltip';

type CardProps = {
  children: ReactNode;
  title: string;
  isTooltip?: boolean;
  tooltipText?: string;
};

export default function Card({
  children,
  title,
  isTooltip,
  tooltipText,
}: CardProps) {
  return (
    <article className="hover:border-red border-transparen hover:border relative p-8 bg-white border rounded-lg">
      {isTooltip && tooltipText && <Tooltip text={tooltipText} />}

      <h2 className="text-2xl font-semibold">{title}</h2>

      {children}
    </article>
  );
}
