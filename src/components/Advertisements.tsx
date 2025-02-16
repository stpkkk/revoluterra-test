import { Advertisement } from '../types/advertisement';
import CardList from './CardList';

interface AdvertisementsProps {
  advertisements: Advertisement[];
}

export default function Advertisements({
  advertisements,
}: AdvertisementsProps) {
  return (
    <CardList
      title="Объявления"
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
          <span className="ml-auto font-semibold">{advertisement.value}</span>
        </>
      )}
    />
  );
}
