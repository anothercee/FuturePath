import { motion } from 'motion/react';
import { User, Bookmark, History, Settings, LogOut, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router';
import { BottomNav } from '../components/BottomNav';
import { useLanguage } from '../context/LanguageContext';

export function ProfileScreen() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const name = localStorage.getItem("userName");
  const email = localStorage.getItem("userEmail");

  const menuItems = [
    { icon: Bookmark, label: t('profile.savedMajors'), path: '/saved-majors', count: 12 },
    { icon: History, label: t('profile.quizHistory'), path: '/quiz-history', count: 3 },
    { icon: Settings, label: t('profile.settings'), path: '/settings', count: null },
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 pt-12 pb-24 rounded-b-[3rem] relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <h1 className="text-3xl text-white mb-2">{t('profile.title')}</h1>
          <p className="text-blue-100">Manage your profile and preferences</p>
        </div>
      </div>

      <div className="px-6 -mt-16 relative z-10 space-y-4">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <User className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl text-gray-800 mb-1">
                {name || "Guest User"}
              </h2>

              <p className="text-sm text-gray-600">
                {email || "guest@email.com"}
              </p>
              <p className="text-xs text-gray-500 mt-1">Grade 12 Student</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl mb-1 text-blue-600">85%</div>
              <div className="text-xs text-gray-600">Match Score</div>
            </div>
            <div className="text-center border-x border-gray-200">
              <div className="text-2xl mb-1 text-purple-600">12</div>
              <div className="text-xs text-gray-600">Saved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1 text-pink-600">3</div>
              <div className="text-xs text-gray-600">Quizzes</div>
            </div>
          </div>
        </motion.div>

        {/* Menu Items */}
        <div className="space-y-3">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                onClick={() => navigate(item.path)}
                className="w-full bg-white/70 backdrop-blur-xl rounded-2xl p-5 shadow-lg border border-white/50 hover:shadow-xl transition-all active:scale-95 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-gray-800">{item.label}</h3>
                </div>
                {item.count !== null && (
                  <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    {item.count}
                  </div>
                )}
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </motion.button>
            );
          })}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50"
        >
          <h2 className="text-lg mb-4 text-gray-800">Achievements</h2>
          <div className="grid grid-cols-4 gap-3">
            {['🎯', '🏆', '⭐', '🔥'].map((emoji, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="aspect-square bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center text-3xl border border-blue-100"
              >
                {emoji}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Logout Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          onClick={() => {
          localStorage.clear();
          navigate('/login');
          }}
          className="w-full bg-red-500/10 backdrop-blur-xl rounded-2xl p-5 shadow-lg border border-red-200 hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2 text-red-600"
        >
          <LogOut className="w-5 h-5" />
          {t('profile.logout')}
        </motion.button>
      </div>

      <BottomNav />
    </div>
  );
}
