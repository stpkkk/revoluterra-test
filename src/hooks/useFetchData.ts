import { useEffect, useState } from 'react';
import { Revenue } from '../types/revenue';
import { Advertisement } from '../types/advertisement';

type MockData = {
  revenues: Revenue[];
  advertisements: Advertisement[];
};

const mockData: MockData = {
  revenues: [
    { id: 0, title: 'Всего', value: 56000 },
    { id: 1, title: 'За последний год', value: 48000 },
    { id: 2, title: 'За последний месяц', value: 8600 },
    { id: 3, title: 'За последнюю неделю', value: 2000 },
  ],
  advertisements: [
    { id: 0, color: '#74B200', title: 'Активные', value: 14 },
    { id: 1, color: '#FF9F31', title: 'Неактивные', value: 2 },
    { id: 2, color: '#636570', title: 'Черновики', value: 3 },
    { id: 3, color: '#898B94', title: 'Проданные', value: 0 },
  ],
};

const useFetchData = () => {
  const [data, setData] = useState<MockData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await new Promise<MockData>((resolve, reject) => {
          setTimeout(() => {
            resolve(mockData);
            reject(new Error('Ошибка загрузки данных'));
          }, 1000);
        });

        setData(response);
        setLoading(false);
      } catch (err) {
        setError((err as Error).message);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetchData;
