import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Search, MapPin, Award, DollarSign, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router';
import { BottomNav } from '../components/BottomNav';
import { useLanguage } from '../context/LanguageContext';

const universities = [
  {
    id: 1,
    name: 'University of Indonesia',
    location: 'Jakarta',
    accreditation: 'A',
    tuition: 'Rp 10,000,000/year',
    majors: ['Computer Science', 'Engineering', 'Business'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    name: 'Bandung Institute of Technology',
    location: 'Bandung',
    accreditation: 'A',
    tuition: 'Rp 12,000,000/year',
    majors: ['Engineering', 'Architecture', 'Art & Design'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    name: 'Gadjah Mada University',
    location: 'Yogyakarta',
    accreditation: 'A',
    tuition: 'Rp 10,000,000/year',
    majors: ['Medicine', 'Law', 'Social Sciences'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 4,
    name: 'Sepuluh Nopember Institute of Technology',
    location: 'Surabaya',
    accreditation: 'A',
    tuition: 'Rp 9,000,000/year',
    majors: ['Engineering', 'Computer Science', 'Business'],
    gradient: 'from-green-500 to-teal-500',
  },
];

export function UniversityExplorerScreen() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUniversities = universities.filter(uni =>
    uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    uni.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pb-24">
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
            <Building2 className="w-7 h-7 text-white" />
            <h1 className="text-3xl text-white">{t('university.title')}</h1>
          </div>
          <p className="text-blue-100">Find universities offering your dream major</p>
        </div>
      </div>

      <div className="px-6 -mt-12 relative z-10 space-y-4">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/70 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/50"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('university.search')}
              className="w-full pl-12 pr-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </motion.div>

        {/* Universities List */}
        <div className="space-y-4">
          {filteredUniversities.map((university, index) => (
            <motion.div
              key={university.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 shadow-lg border border-white/50"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${university.gradient} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-gray-800 mb-1">{university.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    {university.location}
                  </div>
                </div>
                <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  {university.accreditation}
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <DollarSign className="w-4 h-4" />
                  {university.tuition}
                </div>
                <div className="flex flex-wrap gap-2">
                  {university.majors.map((major, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 rounded-full text-xs text-gray-700"
                    >
                      {major}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all active:scale-95 text-sm">
                {t('university.viewDetails')}
              </button>
            </motion.div>
          ))}
        </div>

        {filteredUniversities.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 text-gray-500"
          >
            No universities found
          </motion.div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
