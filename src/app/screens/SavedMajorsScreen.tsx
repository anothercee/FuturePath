import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router';
import { ArrowLeft, Bookmark, Trash2, GraduationCap, Briefcase } from 'lucide-react';

export function SavedMajorsScreen() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const savedMajors = [
    {
      id: 1,
      name: 'Computer Science',
      nameId: 'Ilmu Komputer',
      university: 'MIT',
      compatibility: 95,
      category: 'Technology',
      savedDate: '2026-03-05',
      icon: '💻'
    },
    {
      id: 2,
      name: 'Data Science',
      nameId: 'Sains Data',
      university: 'Stanford University',
      compatibility: 92,
      category: 'Technology',
      savedDate: '2026-03-04',
      icon: '📊'
    },
    {
      id: 3,
      name: 'Business Administration',
      nameId: 'Administrasi Bisnis',
      university: 'Harvard Business School',
      compatibility: 88,
      category: 'Business',
      savedDate: '2026-03-02',
      icon: '💼'
    },
    {
      id: 4,
      name: 'Psychology',
      nameId: 'Psikologi',
      university: 'Oxford University',
      compatibility: 85,
      category: 'Social Science',
      savedDate: '2026-03-01',
      icon: '🧠'
    },
  ];

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
              <h1 className="text-xl font-bold text-gray-800">{t('profile.savedMajors')}</h1>
              <p className="text-sm text-gray-600">{savedMajors.length} majors saved</p>
            </div>
            <Bookmark className="w-6 h-6 text-blue-600" />
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
          {savedMajors.map((major, index) => (
            <motion.div
              key={major.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/70 backdrop-blur-lg rounded-3xl p-5 shadow-lg border border-white/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-2xl shrink-0">
                  {major.icon}
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-800 text-lg mb-1">
                    {t('settings.language') === 'English' ? major.name : major.nameId}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <GraduationCap className="w-4 h-4" />
                    <span className="truncate">{major.university}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <Briefcase className="w-4 h-4" />
                    <span>{major.category}</span>
                  </div>
                  
                  {/* Compatibility Bar */}
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-600">{t('result.compatibility')}</span>
                      <span className="text-xs font-bold text-blue-600">{major.compatibility}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${major.compatibility}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => navigate(`/major-detail/${major.id}`)}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-xl hover:shadow-lg transition-all"
                    >
                      {t('result.viewDetails')}
                    </button>
                    <button
                      className="px-4 py-2 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State (if no saved majors) */}
        {savedMajors.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-4">
              <Bookmark className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">No Saved Majors</h3>
            <p className="text-gray-500 mb-6">Start exploring and save majors you're interested in</p>
            <button
              onClick={() => navigate('/explore')}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition-all"
            >
              Explore Majors
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
