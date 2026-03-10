import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, ArrowRight, BookmarkPlus } from 'lucide-react';
import { useNavigate } from 'react-router';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import { useLanguage } from '../context/LanguageContext';

const personalityData = [
  { trait: 'Analytical', score: 85 },
  { trait: 'Creative', score: 70 },
  { trait: 'Social', score: 65 },
  { trait: 'Leadership', score: 75 },
  { trait: 'Technical', score: 90 },
];

const recommendedMajors = [
  {
    id: 1,
    name: 'Computer Science',
    compatibility: 92,
    description: 'Perfect for analytical and technical minds',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    name: 'Software Engineering',
    compatibility: 88,
    description: 'Blend of technical skills and creativity',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    name: 'Data Science',
    compatibility: 85,
    description: 'Analytical thinking meets real-world impact',
    gradient: 'from-orange-500 to-red-500',
  },
];

export function ResultScreen() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 pt-12 pb-20 rounded-b-[3rem] relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <button
            onClick={() => navigate('/home')}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-6 h-6 text-yellow-300" />
            <h1 className="text-3xl text-white">{t('result.title')}</h1>
          </div>
          <p className="text-blue-100">Based on your personality assessment</p>
        </div>
      </div>

      <div className="px-6 -mt-12 relative z-10 space-y-4">
        {/* Personality Score Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50"
        >
          <h2 className="text-lg mb-4 text-gray-800">{t('result.personalityScore')}</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={personalityData}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis
                  dataKey="trait"
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                />
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#9ca3af' }} />
                <Radar
                  dataKey="score"
                  stroke="#8b5cf6"
                  fill="#8b5cf6"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Recommended Majors */}
        <div>
          <h2 className="text-lg mb-3 text-gray-800 px-1">{t('result.recommended')}</h2>
          <div className="space-y-3">
            {recommendedMajors.map((major, index) => (
              <motion.div
                key={major.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 shadow-lg border border-white/50"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${major.gradient} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <span className="text-2xl text-white">{index + 1}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-gray-800 mb-1">{major.name}</h3>
                    <p className="text-sm text-gray-500 mb-3">{major.description}</p>
                    
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs text-gray-600">{t('result.compatibility')}</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${major.compatibility}%` }}
                          transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                          className={`h-full bg-gradient-to-r ${major.gradient} rounded-full`}
                        />
                      </div>
                      <span className="text-sm text-gray-800">{major.compatibility}%</span>
                    </div>

                    <button
                      onClick={() => navigate(`/major-detail/${major.id}`)}
                      className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
                    >
                      {t('result.viewDetails')}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <button
            onClick={() => navigate('/home')}
            className="flex-1 py-3 bg-white/70 backdrop-blur-xl rounded-xl text-gray-700 border border-gray-200 hover:border-blue-300 transition-all active:scale-95"
          >
            {t('common.back')}
          </button>
          <button className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2">
            <BookmarkPlus className="w-5 h-5" />
            {t('result.saveResults')}
          </button>
        </div>
      </div>
    </div>
  );
}
