import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router';
import { ArrowLeft, History, Calendar, Award, Eye } from 'lucide-react';

export function QuizHistoryScreen() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const quizHistory = [
    {
      id: 1,
      date: '2026-03-08',
      score: 95,
      personalityType: 'INTJ - The Architect',
      personalityTypeId: 'INTJ - Arsitek',
      topMajor: 'Computer Science',
      topMajorId: 'Ilmu Komputer',
      duration: '12 min',
    },
    {
      id: 2,
      date: '2026-02-20',
      score: 88,
      personalityType: 'ENTJ - The Commander',
      personalityTypeId: 'ENTJ - Komandan',
      topMajor: 'Business Administration',
      topMajorId: 'Administrasi Bisnis',
      duration: '15 min',
    },
    {
      id: 3,
      date: '2026-02-10',
      score: 82,
      personalityType: 'INTP - The Thinker',
      personalityTypeId: 'INTP - Pemikir',
      topMajor: 'Data Science',
      topMajorId: 'Sains Data',
      duration: '14 min',
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(t('settings.language') === 'English' ? 'en-US' : 'id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pb-20">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-10">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-gray-800">{t('profile.quizHistory')}</h1>
              <p className="text-sm text-gray-600">{quizHistory.length} quizzes completed</p>
            </div>
            <History className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-6 pt-6 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {quizHistory.map((quiz, index) => (
            <motion.div
              key={quiz.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/70 backdrop-blur-lg rounded-3xl p-5 shadow-lg border border-white/50"
            >
              {/* Header with Date */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(quiz.date)}</span>
                </div>
                <div className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                  {quiz.duration}
                </div>
              </div>

              {/* Score */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-20 h-20">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="#E5E7EB"
                      strokeWidth="6"
                      fill="none"
                    />
                    <motion.circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="url(#gradient)"
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 32}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 32 }}
                      animate={{ strokeDashoffset: 2 * Math.PI * 32 * (1 - quiz.score / 100) }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#9333EA" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-gray-800">{quiz.score}</span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="w-4 h-4 text-purple-600" />
                    <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                      {t('result.personalityScore')}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1">
                    {t('settings.language') === 'English' ? quiz.personalityType : quiz.personalityTypeId}
                  </h3>
                </div>
              </div>

              {/* Top Major */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 mb-4">
                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
                  Top Recommended Major
                </p>
                <p className="font-bold text-gray-800">
                  {t('settings.language') === 'English' ? quiz.topMajor : quiz.topMajorId}
                </p>
              </div>

              {/* View Details Button */}
              <button
                onClick={() => navigate('/result')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition-all"
              >
                <Eye className="w-4 h-4" />
                {t('result.viewDetails')}
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {quizHistory.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-4">
              <History className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">No Quiz History</h3>
            <p className="text-gray-500 mb-6">Take your first personality quiz to get started</p>
            <button
              onClick={() => navigate('/quiz')}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition-all"
            >
              {t('home.startQuiz')}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
