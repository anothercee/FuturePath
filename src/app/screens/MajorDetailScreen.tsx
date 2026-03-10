import { motion } from 'motion/react';
import { ArrowLeft, Bookmark, TrendingUp, Briefcase, GraduationCap, DollarSign, Target } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';
import { useLanguage } from '../context/LanguageContext';

const majorData = {
  name: 'Computer Science',
  compatibility: 92,
  description: 'Computer Science is the study of computers and computational systems. It encompasses both the theoretical foundations of computation and practical techniques for implementation and application in computer systems.',
  skills: [
    'Programming & Software Development',
    'Algorithm Design & Analysis',
    'Data Structures',
    'Problem Solving',
    'Mathematical Thinking',
    'System Architecture',
  ],
  careerPaths: [
    { title: 'Software Engineer', demand: 'High', salary: '$80,000 - $150,000' },
    { title: 'Data Scientist', demand: 'High', salary: '$90,000 - $160,000' },
    { title: 'AI/ML Engineer', demand: 'High', salary: '$100,000 - $180,000' },
    { title: 'System Architect', demand: 'Medium', salary: '$110,000 - $170,000' },
  ],
  universities: [
    { name: 'University of Indonesia', location: 'Jakarta', accreditation: 'A', tuition: 'Rp 10,000,000/year' },
    { name: 'Bandung Institute of Technology', location: 'Bandung', accreditation: 'A', tuition: 'Rp 12,000,000/year' },
    { name: 'Gadjah Mada University', location: 'Yogyakarta', accreditation: 'A', tuition: 'Rp 10,000,000/year' },
    { name: 'Sepuluh Nopember Institute of Technology', location: 'Surabaya', accreditation: 'A', tuition: 'Rp 9,000,000/year' },
  ],
};

export function MajorDetailScreen() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { id } = useParams();

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case 'High': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Low': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 pt-12 pb-20 rounded-b-[3rem] relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Bookmark className="w-5 h-5 text-white" />
            </button>
          </div>

          <h1 className="text-3xl text-white mb-2">{majorData.name}</h1>
          <div className="flex items-center gap-2">
            <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
              {majorData.compatibility}% {t('result.compatibility')}
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 -mt-12 relative z-10 space-y-4">
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50"
        >
          <h2 className="text-lg mb-3 text-gray-800 flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" />
            {t('major.description')}
          </h2>
          <p className="text-gray-600 leading-relaxed">{majorData.description}</p>
        </motion.div>

        {/* Skills Needed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50"
        >
          <h2 className="text-lg mb-4 text-gray-800 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-purple-600" />
            {t('major.skillsNeeded')}
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {majorData.skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                className="px-4 py-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl text-sm text-gray-700 text-center border border-blue-100"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Career Prospects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50"
        >
          <h2 className="text-lg mb-4 text-gray-800 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-orange-600" />
            {t('major.careerProspects')}
          </h2>
          <div className="space-y-3">
            {majorData.careerPaths.map((career, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="p-4 bg-gradient-to-br from-white to-blue-50/50 rounded-xl border border-blue-100"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-gray-800">{career.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${getDemandColor(career.demand)}`}>
                    {career.demand}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <DollarSign className="w-4 h-4" />
                  {career.salary}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Universities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50"
        >
          <h2 className="text-lg mb-4 text-gray-800 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-pink-600" />
            {t('major.universities')}
          </h2>
          <div className="space-y-3">
            {majorData.universities.map((university, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="p-4 bg-gradient-to-br from-white to-purple-50/50 rounded-xl border border-purple-100"
              >
                <h3 className="text-gray-800 mb-2">{university.name}</h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">{university.location}</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                    Akreditasi {university.accreditation}
                  </span>
                </div>
                <div className="mt-2 text-sm text-gray-600">{university.tuition}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Save Button */}
        <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2">
          <Bookmark className="w-5 h-5" />
          {t('major.save')}
        </button>
      </div>
    </div>
  );
}
