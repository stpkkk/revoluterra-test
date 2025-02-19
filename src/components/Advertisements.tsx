import { Advertisement } from '../types/advertisement';
import CardList from './CardList';
import careRight from '../assets/icons/CaretRight.svg';
import Spinner from './Spinner';
import Card from './Card';

interface AdvertisementsProps {
  advertisements: Advertisement[];
  loading: boolean;
  error: string | null;
}

export default function Advertisements({
  advertisements,
  loading,
  error,
}: AdvertisementsProps) {
  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <Card title="Объявления">
      {loading ? (
        <Spinner />
      ) : (
        <CardList
          items={advertisements}
          renderItem={(advertisement) => (
            <>
              {advertisement.color && (
                <span
                  className="mr-2 h-2 w-2 rounded-[3px]"
                  style={{ background: advertisement.color }}
                />
              )}
              <span className="text-secondary">{advertisement.title}</span>
              <span className="ml-auto font-semibold">
                {advertisement.value}
              </span>
              <img
                src={careRight}
                className="ml-1"
                alt="Раскрыть"
                width={16}
                height={16}
              />
            </>
          )}
        />
      )}
    </Card>
  );
}
