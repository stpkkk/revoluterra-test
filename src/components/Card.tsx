import { ReactNode } from 'react';
import { Tooltip } from './Tooltip';

type CardProps = {
  children: ReactNode;
  title: string;
  isTooltip?: boolean;
  tooltipText?: string;
  border?: string;
};

export default function Card({
  children,
  title,
  isTooltip,
  tooltipText,
  border = 'transparent',
}: CardProps) {
  return (
    <article
      className={`relative min-h-[297px] rounded-lg bg-white p-8`}
      style={{ border: `1px solid ${border}` }}
    >
      {isTooltip && tooltipText && <Tooltip text={tooltipText} />}

      <h2 className="text-2xl font-semibold">{title}</h2>

      {children}
    </article>
  );
}
