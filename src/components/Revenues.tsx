import { Revenue } from '../types/revenue';
import { formatToRussianRubles } from '../helpers/formatToRussianRubles';
import CardList from './CardList';

interface RevenueProps {
  revenues: Revenue[];
}

export default function Revenues({ revenues }: RevenueProps) {
  return (
    <CardList
      title="Доходы от заказов"
      items={revenues}
      renderItem={(revenue) => (
        <>
          <span className="text-secondary">{revenue.title}</span>
          <span className="font-semibold">
            {formatToRussianRubles(+revenue.value)}
          </span>
        </>
      )}
    />
  );
}
