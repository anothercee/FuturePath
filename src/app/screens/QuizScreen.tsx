import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useLanguage } from '../context/LanguageContext';

interface Question {
  id: number;
  question: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: 1,
    question: 'What type of activities do you enjoy most?',
    options: [
      'Problem-solving and logical thinking',
      'Creative and artistic expression',
      'Helping and caring for others',
      'Leading and organizing people',
    ],
  },
  {
    id: 2,
    question: 'Which environment do you thrive in?',
    options: [
      'Structured and analytical',
      'Open and innovative',
      'Collaborative and social',
      'Dynamic and fast-paced',
    ],
  },
  {
    id: 3,
    question: 'What are your strongest skills?',
    options: [
      'Mathematics and logic',
      'Design and creativity',
      'Communication and empathy',
      'Leadership and strategy',
    ],
  },
  {
    id: 4,
    question: 'What motivates you the most?',
    options: [
      'Solving complex problems',
      'Creating something new',
      'Making a positive impact',
      'Achieving ambitious goals',
    ],
  },
  {
    id: 5,
    question: 'How do you prefer to work?',
    options: [
      'Independently with clear objectives',
      'In creative teams with flexibility',
      'Collaboratively helping others',
      'Leading projects and teams',
    ],
  },
];

export function QuizScreen() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedOption !== null) {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = selectedOption;
      setAnswers(newAnswers);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(newAnswers[currentQuestion + 1] ?? null);
      } else {
        // Quiz completed
        navigate('/result');
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[currentQuestion - 1] ?? null);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col">
      {/* Header */}
      <div className="bg-white/70 backdrop-blur-xl border-b border-gray-100 px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate('/home')}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <div className="text-center">
            <h1 className="text-lg text-gray-800">{t('quiz.title')}</h1>
            <p className="text-sm text-gray-500">
              {t('quiz.question')} {currentQuestion + 1} {t('quiz.of')} {questions.length}
            </p>
          </div>
          <div className="w-10" />
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question Content */}
      <div className="flex-1 px-6 py-8 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Question Card */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-lg mb-4">
                {currentQuestion + 1}
              </div>
              <h2 className="text-xl text-gray-800 leading-relaxed">
                {questions[currentQuestion].question}
              </h2>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedOption(index)}
                  className={`w-full p-5 rounded-2xl border-2 transition-all text-left ${
                    selectedOption === index
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 border-transparent text-white shadow-lg'
                      : 'bg-white/70 backdrop-blur-xl border-gray-200 text-gray-700 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedOption === index
                          ? 'border-white bg-white'
                          : 'border-gray-300'
                      }`}
                    >
                      {selectedOption === index && (
                        <Check className="w-4 h-4 text-blue-600" />
                      )}
                    </div>
                    <span className="flex-1">{option}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="bg-white/70 backdrop-blur-xl border-t border-gray-100 px-6 py-4">
        <div className="flex gap-3">
          {currentQuestion > 0 && (
            <button
              onClick={handlePrevious}
              className="px-6 py-3 bg-gray-200 rounded-xl text-gray-700 hover:bg-gray-300 transition-all active:scale-95"
            >
              {t('quiz.previous')}
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={selectedOption === null}
            className={`flex-1 py-3 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 ${
              selectedOption === null
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg'
            }`}
          >
            {currentQuestion === questions.length - 1 ? t('quiz.submit') : t('quiz.next')}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
