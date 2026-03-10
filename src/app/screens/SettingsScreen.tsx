import { motion } from 'motion/react';
import { ArrowLeft, Globe, Bell, Moon, Info, Check } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useLanguage, Language } from '../context/LanguageContext';

export function SettingsScreen() {
  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 pt-12 pb-20 rounded-b-[3rem] relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>

          <h1 className="text-3xl text-white mb-2">{t('settings.title')}</h1>
          <p className="text-blue-100">Customize your app experience</p>
        </div>
      </div>

      <div className="px-6 -mt-12 relative z-10 space-y-4">
        {/* Language Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-lg text-gray-800">{t('settings.language')}</h2>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => handleLanguageChange('en')}
              className={`w-full p-4 rounded-xl border-2 transition-all flex items-center justify-between ${
                language === 'en'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 border-transparent text-white'
                  : 'bg-white/50 border-gray-200 text-gray-700 hover:border-blue-300'
              }`}
            >
              <span>{t('settings.english')}</span>
              {language === 'en' && <Check className="w-5 h-5" />}
            </button>

            <button
              onClick={() => handleLanguageChange('id')}
              className={`w-full p-4 rounded-xl border-2 transition-all flex items-center justify-between ${
                language === 'id'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 border-transparent text-white'
                  : 'bg-white/50 border-gray-200 text-gray-700 hover:border-blue-300'
              }`}
            >
              <span>{t('settings.indonesian')}</span>
              {language === 'id' && <Check className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>

        {/* Notifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                <Bell className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg text-gray-800">{t('settings.notifications')}</h2>
                <p className="text-sm text-gray-500">Get updates about new features</p>
              </div>
            </div>
            <div className="relative">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-14 h-8 bg-gray-300 rounded-full peer-checked:bg-gradient-to-r peer-checked:from-blue-500 peer-checked:to-purple-600 transition-all" />
              <div className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md peer-checked:translate-x-6 transition-transform" />
            </div>
          </div>
        </motion.div>

        {/* Dark Mode */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Moon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg text-gray-800">{t('settings.darkMode')}</h2>
                <p className="text-sm text-gray-500">Coming soon</p>
              </div>
            </div>
            <div className="relative opacity-50">
              <input type="checkbox" className="sr-only peer" disabled />
              <div className="w-14 h-8 bg-gray-300 rounded-full" />
              <div className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md" />
            </div>
          </div>
        </motion.div>

        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl flex items-center justify-center">
              <Info className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-lg text-gray-800">{t('settings.about')}</h2>
          </div>
          <div className="space-y-2 text-sm text-gray-600">
            <p>Version 1.0.0</p>
            <p className="leading-relaxed">
              FuturePath helps high school students discover their ideal career path through personality assessments and academic analysis.
            </p>
            <p className="text-xs text-gray-500 mt-4">
              © 2026 FuturePath. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
