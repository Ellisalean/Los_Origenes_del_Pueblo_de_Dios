
import React, { useState } from 'react';
import { Hotspot, QuizQuestion, Slide } from '../types';
import { ChevronDownIcon, ChevronUpIcon } from '../constants';

// --- Accordion ---
interface AccordionProps {
  items: { title: string; content: string }[];
}
export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-slate-200 rounded-lg overflow-hidden shadow-sm">
          <button
            onClick={() => toggleItem(index)}
            className="w-full p-4 flex justify-between items-center text-left bg-white hover:bg-slate-50 transition"
          >
            <span className="font-semibold text-cisco-blue">{item.title}</span>
            {openIndex === index ? <ChevronUpIcon className="w-5 h-5 text-cisco-blue" /> : <ChevronDownIcon className="w-5 h-5 text-cisco-blue" />}
          </button>
          {openIndex === index && (
            <div className="p-4 bg-white border-t border-slate-200 text-slate-700">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};


// --- Quiz ---
export const Quiz: React.FC<{ data: QuizQuestion }> = ({ data }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const isCorrect = selectedOption === data.correctAnswer;

  const handleSelect = (option: string) => {
    if (showResult) return;
    setSelectedOption(option);
  };

  const checkAnswer = () => {
    if (selectedOption) {
      setShowResult(true);
    }
  };
  
  const resetQuiz = () => {
    setSelectedOption(null);
    setShowResult(false);
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-200">
      <h4 className="text-xl font-semibold text-cisco-blue-dark mb-4">{data.question}</h4>
      <div className="space-y-3">
        {data.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelect(option)}
            className={`w-full text-left p-3 border rounded-lg transition-all duration-200 ${
              showResult 
                ? (option === data.correctAnswer ? 'bg-green-100 border-green-400 text-green-800' : (option === selectedOption ? 'bg-red-100 border-red-400 text-red-800' : 'border-slate-300'))
                : (selectedOption === option ? 'bg-accent-light border-accent text-cisco-blue-dark ring-2 ring-accent' : 'bg-slate-50 hover:bg-slate-100 border-slate-300')
            }`}
            disabled={showResult}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="mt-6 text-center">
        {!showResult ? (
            <button 
                onClick={checkAnswer} 
                disabled={!selectedOption}
                className="px-6 py-2 bg-cisco-blue text-white font-semibold rounded-lg shadow-md hover:bg-cisco-blue-light transition disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
                Revelar Respuesta
            </button>
        ) : (
             <button 
                onClick={resetQuiz}
                className="px-6 py-2 bg-accent text-cisco-blue-dark font-semibold rounded-lg shadow-md hover:bg-accent-light transition"
            >
                Intentar de Nuevo
            </button>
        )}
      </div>
      {showResult && (
        <div className={`mt-4 p-4 rounded-lg text-center ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          <h5 className="font-bold">{isCorrect ? '¡Correcto!' : 'Incorrecto.'}</h5>
          <p>{data.explanation}</p>
        </div>
      )}
    </div>
  );
};

// --- InteractiveImage ---
export const InteractiveImage: React.FC<{ src: string, alt: string, hotspots: Hotspot[] }> = ({ src, alt, hotspots }) => {
    const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);

    return (
        <div className="relative w-full max-w-3xl mx-auto" onMouseLeave={() => setActiveHotspot(null)}>
            <img src={src} alt={alt} className="w-full h-auto rounded-lg shadow-xl" />
            {hotspots.map((hotspot, index) => (
                <div key={index} style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }} className="absolute">
                    <button
                        onMouseEnter={() => setActiveHotspot(hotspot)}
                        className="w-6 h-6 bg-accent rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-125 focus:outline-none ring-2 ring-white"
                    >
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                    </button>
                </div>
            ))}
             {activeHotspot && (
                <div 
                    style={{ left: `${activeHotspot.x}%`, top: `${activeHotspot.y}%` }}
                    className="absolute transform translate-y-[-110%] -translate-x-1/2 p-3 bg-cisco-blue-dark text-white rounded-lg shadow-2xl w-64 z-10"
                >
                    <h5 className="font-bold text-accent-light">{activeHotspot.title}</h5>
                    <p className="text-sm">{activeHotspot.description}</p>
                </div>
            )}
        </div>
    );
};

// --- Slideshow ---
export const Slideshow: React.FC<{ slides: Slide[] }> = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="relative w-full max-w-3xl mx-auto h-96 rounded-lg overflow-hidden shadow-xl">
            <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10 cursor-pointer p-2 bg-black/30 rounded-full hover:bg-black/50" onClick={goToPrevious}>
                <ChevronDownIcon className="w-6 h-6 text-white rotate-90" />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10 cursor-pointer p-2 bg-black/30 rounded-full hover:bg-black/50" onClick={goToNext}>
                 <ChevronUpIcon className="w-6 h-6 text-white rotate-90" />
            </div>
            <div className="w-full h-full bg-cover bg-center transition-all duration-500" style={{backgroundImage: `url(${slides[currentIndex].image})`}}></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-center font-medium drop-shadow-lg">{slides[currentIndex].caption}</p>
            </div>
        </div>
    );
};

// --- Reflection ---
interface ReflectionProps {
  questions: { question: string; perspective: string; }[];
}
export const Reflection: React.FC<ReflectionProps> = ({ questions }) => {
    return <Accordion items={questions.map(q => ({title: q.question, content: q.perspective}))} />
}
