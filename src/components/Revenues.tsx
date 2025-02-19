import { Revenue } from '../types/revenue';
import { formatToRussianRubles } from '../helpers/formatToRussianRubles';
import CardList from './CardList';
import Card from './Card';
import Spinner from './Spinner';

interface RevenueProps {
  revenues: Revenue[];
  loading: boolean;
  error: string | null;
}

export default function Revenues({ revenues, loading, error }: RevenueProps) {
  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <Card title="Доходы от заказов">
      {loading ? (
        <Spinner />
      ) : (
        <CardList
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
      )}
    </Card>
  );
}
