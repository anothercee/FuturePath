import { motion } from 'motion/react';
import { BookOpen, TrendingUp, Bookmark, CheckCircle, Circle, Target, Zap } from 'lucide-react';
import { useNavigate } from 'react-router';
import { BottomNav } from '../components/BottomNav';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { useLanguage } from '../context/LanguageContext';

const completionData = [
  { name: 'Completed', value: 75, color: '#3b82f6' },
  { name: 'Remaining', value: 25, color: '#e5e7eb' },
];

const savedMajors = [
  { name: 'Computer Science', match: 92, color: 'from-blue-500 to-cyan-500' },
  { name: 'Software Engineering', match: 88, color: 'from-purple-500 to-pink-500' },
  { name: 'Data Science', match: 85, color: 'from-orange-500 to-red-500' },
];

const quizResults = [
  { name: 'Analytical', score: 85 },
  { name: 'Creative', score: 70 },
  { name: 'Technical', score: 90 },
];

export function DashboardScreen() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const tasks = [
    { task: 'Complete Personality Quiz', completed: true },
    { task: 'Analyze Academic Scores', completed: true },
    { task: 'Explore Universities', completed: true },
    { task: 'Save Favorite Majors', completed: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 pt-12 pb-20 rounded-b-[3rem] relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-7 h-7 text-white" />
            <h1 className="text-3xl text-white">{t('dashboard.title')}</h1>
          </div>
          <p className="text-blue-100">Track your career discovery journey</p>
        </div>
      </div>

      <div className="px-6 -mt-12 relative z-10 space-y-4">
        {/* Overall Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50"
        >
          <h2 className="text-lg mb-4 text-gray-800 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            {t('dashboard.progress')}
          </h2>
          <div className="flex items-center gap-6">
            <div className="w-32 h-32">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={completionData}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    innerRadius={35}
                    outerRadius={60}
                    paddingAngle={5}
                  >
                    {completionData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex-1">
              <div className="text-4xl mb-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                75%
              </div>
              <p className="text-gray-600 text-sm">Profile completion</p>
              <div className="mt-3 space-y-2">
                {tasks.map((task, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    {task.completed ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <Circle className="w-4 h-4 text-gray-300" />
                    )}
                    <span className={task.completed ? 'text-gray-600' : 'text-gray-400'}>
                      {task.task}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quiz Results Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50"
        >
          <h2 className="text-lg mb-4 text-gray-800 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            {t('dashboard.quizResults')}
          </h2>
          <div className="space-y-3">
            {quizResults.map((result, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-700">{result.name}</span>
                  <span className="text-sm text-gray-800">{result.score}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${result.score}%` }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Academic Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50"
        >
          <h2 className="text-lg mb-4 text-gray-800 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-purple-600" />
            {t('dashboard.academicStrengths')}
          </h2>
          <div className="grid grid-cols-3 gap-3">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl text-center border border-blue-100">
              <div className="text-2xl mb-1 text-blue-600">92</div>
              <div className="text-xs text-gray-600">Math</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl text-center border border-blue-100">
              <div className="text-2xl mb-1 text-purple-600">88</div>
              <div className="text-xs text-gray-600">Physics</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl text-center border border-blue-100">
              <div className="text-2xl mb-1 text-pink-600">85</div>
              <div className="text-xs text-gray-600">Chemistry</div>
            </div>
          </div>
        </motion.div>

        {/* Saved Majors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50"
        >
          <h2 className="text-lg mb-4 text-gray-800 flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-orange-600" />
            {t('dashboard.savedMajors')}
          </h2>
          <div className="space-y-3">
            {savedMajors.map((major, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                onClick={() => navigate(`/major-detail/${index + 1}`)}
                className="w-full p-4 bg-gradient-to-br from-white to-blue-50/50 rounded-xl border border-blue-100 hover:shadow-md transition-all text-left"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-800">{major.name}</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-xs">
                    {major.match}% match
                  </span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${major.match}%` }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                    className={`h-full bg-gradient-to-r ${major.color} rounded-full`}
                  />
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Action Card */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onClick={() => navigate('/quiz')}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 shadow-xl text-white hover:shadow-2xl transition-all active:scale-95"
        >
          <h3 className="text-lg mb-2">Retake Personality Quiz</h3>
          <p className="text-sm text-blue-100">Update your profile with new insights</p>
        </motion.button>
      </div>

      <BottomNav />
    </div>
  );
}
