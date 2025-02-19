import Advertisements from './components/Advertisements';
import PromotionActivity from './components/PromotionActivity';
import Revenues from './components/Revenues';
import ServiceLevel from './components/ServiceLevel';
import Spinner from './components/Spinner';
import { Statistics } from './components/Statistics';
import useFetchData from './hooks/useFetchData';

function App() {
  const { data, loading, error } = useFetchData();

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }
  return (
    <div className="my-8 flex w-full max-w-[876px] flex-col">
      <h1 className="text-[32px] font-semibold">Сводка</h1>
      <Statistics />
      <div className="grid grid-cols-2 gap-4 mt-4">
        <Revenues revenues={data?.revenues || []} />
        <Advertisements advertisements={data?.advertisements || []} />
        <ServiceLevel />
        <PromotionActivity />
      </div>
    </div>
  );
}

export default App;
