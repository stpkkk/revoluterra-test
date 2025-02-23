import Advertisements from './components/Advertisements';
import Footer from './components/Footer';
import Header from './components/Header';
import PromotionActivity from './components/PromotionActivity';
import Revenues from './components/Revenues';
import ServiceLevel from './components/ServiceLevel';
import Sidebar from './components/Sidebar';
import { Statistics } from './components/Statistics';
import useFetchData from './hooks/useFetchData';

function App() {
  const { data, loading, error } = useFetchData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="flex gap-6">
        <Sidebar />
        <div className="flex w-full max-w-[876px] flex-col">
          <h1 className="text-[32px] font-semibold">Сводка</h1>
          <Statistics />
          <div className="mt-4 mb-5 grid grid-cols-2 gap-4">
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
      </div>
      <Footer />
    </main>
  );
}

export default App;
