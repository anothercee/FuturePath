import { motion } from 'motion/react';
import { Sparkles, TrendingUp, Briefcase, DollarSign, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router';
import { BottomNav } from '../components/BottomNav';
import { useLanguage } from '../context/LanguageContext';

const recommendedMajors = [
  {
    id: 1,
    name: 'Computer Science',
    compatibility: 92,
    description: 'Perfect blend of analytical thinking and technical skills',
    gradient: 'from-blue-500 to-cyan-500',
    careerPaths: ['Software Engineer', 'Data Scientist', 'AI Engineer'],
    avgSalary: '$80,000 - $150,000',
    demand: 'High',
    whyRecommended: 'Your strong analytical and mathematical skills align perfectly with this field. Your problem-solving abilities would excel in programming and algorithm design.',
  },
  {
    id: 2,
    name: 'Software Engineering',
    compatibility: 88,
    description: 'Build innovative solutions that impact millions',
    gradient: 'from-purple-500 to-pink-500',
    careerPaths: ['Full Stack Developer', 'Mobile Developer', 'DevOps Engineer'],
    avgSalary: '$75,000 - $140,000',
    demand: 'High',
    whyRecommended: 'Your technical aptitude combined with creative thinking makes you ideal for software development. You show strong potential in both logical reasoning and innovative problem-solving.',
  },
  {
    id: 3,
    name: 'Data Science',
    compatibility: 85,
    description: 'Transform data into meaningful insights',
    gradient: 'from-orange-500 to-red-500',
    careerPaths: ['Data Analyst', 'ML Engineer', 'Research Scientist'],
    avgSalary: '$85,000 - $160,000',
    demand: 'High',
    whyRecommended: 'Your analytical mindset and attention to detail are perfect for data science. Your strong mathematics foundation will help you excel in statistical analysis and modeling.',
  },
];

export function ExploreScreen() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case 'High': return 'bg-green-100 text-green-700';
      case 'Medium': return 'bg-yellow-100 text-yellow-700';
      case 'Low': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 pt-12 pb-20 rounded-b-[3rem] relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-7 h-7 text-yellow-300" />
            <h1 className="text-3xl text-white">{t('recommendation.title')}</h1>
          </div>
          <p className="text-blue-100">{t('recommendation.top3')}</p>
        </div>
      </div>

      <div className="px-6 -mt-12 relative z-10 space-y-4">
        {/* Recommended Majors */}
        {recommendedMajors.map((major, index) => (
          <motion.div
            key={major.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-16 h-16 bg-gradient-to-br ${major.gradient} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                <span className="text-3xl text-white">{index + 1}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl text-gray-800 mb-1">{major.name}</h3>
                <p className="text-sm text-gray-600">{major.description}</p>
              </div>
            </div>

            {/* Compatibility Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-700">{t('recommendation.match')}</span>
                <span className="text-lg text-gray-800">{major.compatibility}%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${major.compatibility}%` }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 1 }}
                  className={`h-full bg-gradient-to-r ${major.gradient} rounded-full`}
                />
              </div>
            </div>

            {/* Why Recommended */}
            <div className="mb-4 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100">
              <div className="flex items-start gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm text-gray-800 mb-1">{t('recommendation.whyRecommended')}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{major.whyRecommended}</p>
                </div>
              </div>
            </div>

            {/* Career Info */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="p-3 bg-white/50 rounded-xl border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-4 h-4 text-green-600" />
                  <span className="text-xs text-gray-600">{t('career.salary')}</span>
                </div>
                <p className="text-sm text-gray-800">{major.avgSalary}</p>
              </div>
              <div className="p-3 bg-white/50 rounded-xl border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-4 h-4 text-blue-600" />
                  <span className="text-xs text-gray-600">{t('career.demand')}</span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${getDemandColor(major.demand)}`}>
                  {major.demand}
                </span>
              </div>
            </div>

            {/* Career Paths */}
            <div className="mb-4">
              <h4 className="text-sm text-gray-700 mb-2">{t('career.paths')}</h4>
              <div className="flex flex-wrap gap-2">
                {major.careerPaths.map((career, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-full text-xs text-gray-700"
                  >
                    {career}
                  </span>
                ))}
              </div>
            </div>

            {/* View Details Button */}
            <button
              onClick={() => navigate(`/major-detail/${major.id}`)}
              className={`w-full py-3 bg-gradient-to-r ${major.gradient} text-white rounded-xl hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2`}
            >
              {t('result.viewDetails')}
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        ))}

        {/* Explore More */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onClick={() => navigate('/university-explorer')}
          className="w-full bg-white/70 backdrop-blur-xl rounded-2xl p-5 shadow-lg border border-white/50 hover:shadow-xl transition-all active:scale-95"
        >
          <div className="flex items-center justify-between">
            <div className="text-left">
              <h3 className="text-gray-800 mb-1">{t('home.exploreUniversities')}</h3>
              <p className="text-sm text-gray-600">Find schools for these majors</p>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400" />
          </div>
        </motion.button>
      </div>

      <BottomNav />
    </div>
  );
}
