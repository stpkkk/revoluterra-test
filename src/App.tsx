import Advertisements from './components/Advertisements';
import PromotionActivity from './components/PromotionActivity';
import Revenues from './components/Revenues';
import ServiceLevel from './components/ServiceLevel';
import { Statistics } from './components/Statistics';
import useFetchData from './hooks/useFetchData';

function App() {
  const { data, loading, error } = useFetchData();

  return (
    <div className="my-8 flex w-full max-w-[876px] flex-col">
      <h1 className="text-[32px] font-semibold">Сводка</h1>
      <Statistics />
      <div className="grid grid-cols-2 gap-4 mt-4">
        <Revenues
          revenues={data?.revenues || []}
          loading={loading}
          error={error}
        />
        <Advertisements
          advertisements={data?.advertisements || []}
          loading={loading}
          error={error}
        />
        <ServiceLevel />
        <PromotionActivity />
      </div>
    </div>
  );
}

export default App;
