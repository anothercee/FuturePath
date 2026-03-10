import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, TrendingUp, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { useLanguage } from '../context/LanguageContext';

interface Subject {
  name: string;
  grade: number;
}

export function AcademicAnalysisScreen() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [analyzed, setAnalyzed] = useState(false);
  
  const [subjects, setSubjects] = useState<Subject[]>([
    { name: t('academic.mathematics'), grade: 0 },
    { name: t('academic.physics'), grade: 0 },
    { name: t('academic.chemistry'), grade: 0 },
    { name: t('academic.biology'), grade: 0 },
    { name: t('academic.english'), grade: 0 },
    { name: t('academic.indonesian'), grade: 0 },
  ]);

  const handleGradeChange = (index: number, value: string) => {
    const grade = parseInt(value) || 0;
    const newSubjects = [...subjects];
    newSubjects[index].grade = Math.min(100, Math.max(0, grade));
    setSubjects(newSubjects);
  };

  const handleAnalyze = () => {
    setAnalyzed(true);
  };

  const chartData = subjects.map(s => ({ subject: s.name.split(' ')[0], score: s.grade }));
  const radarData = subjects.map(s => ({ subject: s.name.split(' ')[0], value: s.grade }));

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
            <BarChart3 className="w-7 h-7 text-white" />
            <h1 className="text-3xl text-white">{t('academic.title')}</h1>
          </div>
          <p className="text-blue-100">Discover your academic strengths</p>
        </div>
      </div>

      <div className="px-6 -mt-12 relative z-10 space-y-4">
        {/* Input Grades */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50"
        >
          <h2 className="text-lg mb-4 text-gray-800">{t('academic.inputGrades')}</h2>
          <div className="space-y-3">
            {subjects.map((subject, index) => (
              <div key={index} className="flex items-center gap-4">
                <label className="flex-1 text-gray-700 text-sm">{subject.name}</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={subject.grade || ''}
                  onChange={(e) => handleGradeChange(index, e.target.value)}
                  className="w-20 px-3 py-2 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                  placeholder="0-100"
                />
              </div>
            ))}
          </div>

          <button
            onClick={handleAnalyze}
            className="w-full mt-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <TrendingUp className="w-5 h-5" />
            {t('academic.analyze')}
          </button>
        </motion.div>

        {/* Analysis Results */}
        {analyzed && (
          <>
            {/* Bar Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50"
            >
              <h2 className="text-lg mb-4 text-gray-800">{t('academic.strengths')}</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="subject" tick={{ fill: '#6b7280', fontSize: 12 }} />
                    <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} domain={[0, 100]} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        border: 'none',
                        borderRadius: '12px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                      }}
                    />
                    <Bar dataKey="score" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
                    <defs>
                      <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Radar Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50"
            >
              <h2 className="text-lg mb-4 text-gray-800">Performance Overview</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="#e5e7eb" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#6b7280', fontSize: 11 }} />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#9ca3af' }} />
                    <Radar
                      dataKey="value"
                      stroke="#8b5cf6"
                      fill="#8b5cf6"
                      fillOpacity={0.6}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Top Strengths */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50"
            >
              <h2 className="text-lg mb-4 text-gray-800">Your Top Subjects</h2>
              <div className="space-y-3">
                {[...subjects]
                  .sort((a, b) => b.grade - a.grade)
                  .slice(0, 3)
                  .map((subject, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="text-gray-800 mb-1">{subject.name}</div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${subject.grade}%` }}
                              transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
                              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                            />
                          </div>
                          <span className="text-sm text-gray-700 w-10 text-right">{subject.grade}</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>

            {/* Recommendations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl"
            >
              <h3 className="text-lg mb-2">Suggested Majors</h3>
              <p className="text-blue-100 mb-4 text-sm">
                Based on your academic strengths, consider these majors
              </p>
              <button
                onClick={() => navigate('/explore')}
                className="w-full py-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all"
              >
                View Recommendations
              </button>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
