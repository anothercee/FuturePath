import { motion } from 'motion/react';
import { BookOpen, TrendingUp, School, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router';
import { BottomNav } from '../components/BottomNav';
import { useLanguage } from '../context/LanguageContext';

export function HomeScreen() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const quickActions = [
    {
      title: t('home.startQuiz'),
      subtitle: 'Discover your personality',
      icon: BookOpen,
      gradient: 'from-blue-500 to-cyan-500',
      path: '/quiz',
    },
    {
      title: t('home.academicAnalysis'),
      subtitle: 'Analyze your grades',
      icon: TrendingUp,
      gradient: 'from-purple-500 to-pink-500',
      path: '/academic-analysis',
    },
    {
      title: t('home.exploreUniversities'),
      subtitle: 'Find the perfect fit',
      icon: School,
      gradient: 'from-orange-500 to-red-500',
      path: '/university-explorer',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 pt-12 pb-32 rounded-b-[3rem] relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-between items-center mb-8"
          >
            <div>
              <h1 className="text-3xl text-white mb-1">
                {t('home.welcome')}
              </h1>
              <p className="text-blue-100">{t('home.subtitle')}</p>
            </div>
            <button
              onClick={() => navigate('/settings')}
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 -mt-20 relative z-10">
        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/50 mb-6"
        >
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl mb-1 text-blue-600">85%</div>
              <div className="text-xs text-gray-600">Match Score</div>
            </div>
            <div className="text-center border-x border-gray-200">
              <div className="text-2xl mb-1 text-purple-600">12</div>
              <div className="text-xs text-gray-600">Saved Majors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1 text-pink-600">3</div>
              <div className="text-xs text-gray-600">Quizzes Done</div>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <div className="mb-6">
          <h2 className="text-xl mb-4 text-gray-800">Quick Actions</h2>
          <div className="space-y-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.button
                  key={action.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  onClick={() => navigate(action.path)}
                  className="w-full bg-white/70 backdrop-blur-xl rounded-2xl p-5 shadow-lg border border-white/50 hover:shadow-xl transition-all active:scale-95 flex items-center gap-4"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${action.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-gray-800 mb-1">{action.title}</h3>
                    <p className="text-sm text-gray-500">{action.subtitle}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Dashboard Preview */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          onClick={() => navigate('/dashboard')}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 shadow-xl text-white hover:shadow-2xl transition-all active:scale-95"
        >
          <div className="flex items-center justify-between">
            <div className="text-left">
              <h3 className="text-lg mb-1">{t('home.viewDashboard')}</h3>
              <p className="text-sm text-blue-100">View your complete profile</p>
            </div>
            <ArrowRight className="w-6 h-6" />
          </div>
        </motion.button>
      </div>

      <BottomNav />
    </div>
  );
}
