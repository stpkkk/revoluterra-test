import question from '../assets/icons/Question.svg';
import { useState } from 'react';

interface TooltipProps {
  text: string;
}

export function Tooltip({ text }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="top-4 right-4 absolute inline-block">
      <button
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="text-primary-300 hover:text-primary-100 transition-colors cursor-pointer"
        aria-label="More information"
      >
        <img
          src={question}
          alt="Подсказка"
          width={24}
          height={24}
          className="text-primary-100 w-6 h-6"
        />
      </button>
      {isVisible && (
        <div className="text-primary absolute right-0 z-10 w-64 p-2 mt-2 text-sm bg-white rounded-lg shadow-2xl">
          {text}
        </div>
      )}
    </div>
  );
}
