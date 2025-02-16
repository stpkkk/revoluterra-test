import Advertisements from './components/Advertisements';
import Revenues from './components/Revenues';
import { Statistics } from './components/Statistics';
import { Advertisement } from './types/advertisement';
import { Revenue } from './types/revenue';

function App() {
  const revenues: Revenue[] = [
    { id: 0, title: 'Всего', value: 56000 },
    { id: 1, title: 'За последний год', value: 48000 },
    { id: 2, title: 'За последний месяц', value: 8600 },
    { id: 3, title: 'За последнюю неделю', value: 2000 },
  ];

  const advertisements: Advertisement[] = [
    { id: 0, color: '#74B200', title: 'Активные', value: 14 },
    { id: 1, color: '#FF9F31', title: 'Неактивные', value: 2 },
    { id: 2, color: '#636570', title: 'Черновики', value: 3 },
    { id: 3, color: '#898B94', title: 'Проданные', value: 0 },
  ];

  return (
    <div className="my-8 flex w-full max-w-[876px] flex-col">
      <h1 className="text-[32px]">Сводка</h1>

      <Statistics />

      <div className="mt-4 grid grid-cols-2 gap-4">
        <Revenues revenues={revenues} />
        <Advertisements advertisements={advertisements} />
      </div>
    </div>
  );
}

export default App;
