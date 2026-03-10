import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Splash
    'splash.tagline': 'Find Your Future Major',
    
    // Auth
    'auth.login': 'Login',
    'auth.register': 'Register',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.confirmPassword': 'Confirm Password',
    'auth.fullName': 'Full Name',
    'auth.noAccount': "Don't have an account?",
    'auth.hasAccount': 'Already have an account?',
    'auth.forgotPassword': 'Forgot password?',
    
    // Home
    'home.welcome': 'Welcome to FuturePath',
    'home.subtitle': 'Discover your ideal career path',
    'home.startQuiz': 'Start Personality Quiz',
    'home.academicAnalysis': 'Academic Analysis',
    'home.exploreUniversities': 'Explore Universities',
    'home.viewDashboard': 'View Dashboard',
    
    // Quiz
    'quiz.title': 'Personality Quiz',
    'quiz.question': 'Question',
    'quiz.of': 'of',
    'quiz.next': 'Next',
    'quiz.submit': 'Submit',
    'quiz.previous': 'Previous',
    
    // Results
    'result.title': 'Your Results',
    'result.personalityScore': 'Personality Score',
    'result.recommended': 'Recommended Majors',
    'result.compatibility': 'Compatibility',
    'result.viewDetails': 'View Details',
    'result.saveResults': 'Save Results',
    
    // Major Detail
    'major.description': 'Description',
    'major.skillsNeeded': 'Skills Needed',
    'major.careerProspects': 'Career Prospects',
    'major.universities': 'Universities Offering This Major',
    'major.save': 'Save Major',
    'major.salaryRange': 'Salary Range',
    'major.jobOutlook': 'Job Outlook',
    
    // Profile
    'profile.title': 'Profile',
    'profile.savedMajors': 'Saved Majors',
    'profile.quizHistory': 'Quiz History',
    'profile.settings': 'Settings',
    'profile.logout': 'Logout',
    
    // Academic Analysis
    'academic.title': 'Academic Score Analysis',
    'academic.inputGrades': 'Input Your Report Card Grades',
    'academic.subject': 'Subject',
    'academic.grade': 'Grade',
    'academic.analyze': 'Analyze',
    'academic.strengths': 'Your Academic Strengths',
    'academic.mathematics': 'Mathematics',
    'academic.science': 'Science',
    'academic.language': 'Language',
    'academic.social': 'Social Studies',
    'academic.art': 'Art',
    'academic.physics': 'Physics',
    'academic.chemistry': 'Chemistry',
    'academic.biology': 'Biology',
    'academic.english': 'English',
    'academic.indonesian': 'Indonesian',
    
    // Major Recommendation
    'recommendation.title': 'Major Recommendations',
    'recommendation.top3': 'Your Top 3 Recommended Majors',
    'recommendation.match': 'Match',
    'recommendation.whyRecommended': 'Why Recommended',
    
    // Career Insight
    'career.title': 'Career Insights',
    'career.paths': 'Career Paths',
    'career.skills': 'Required Skills',
    'career.salary': 'Average Salary',
    'career.demand': 'Market Demand',
    'career.high': 'High',
    'career.medium': 'Medium',
    'career.low': 'Low',
    
    // University Explorer
    'university.title': 'University Explorer',
    'university.search': 'Search universities...',
    'university.filter': 'Filter by Major',
    'university.location': 'Location',
    'university.accreditation': 'Accreditation',
    'university.tuition': 'Tuition Fee',
    'university.viewDetails': 'View Details',
    
    // Dashboard
    'dashboard.title': 'Personal Dashboard',
    'dashboard.quizResults': 'Quiz Results',
    'dashboard.academicStrengths': 'Academic Strengths',
    'dashboard.savedMajors': 'Saved Majors',
    'dashboard.progress': 'Progress',
    'dashboard.completed': 'Completed',
    'dashboard.notCompleted': 'Not Completed',
    
    // Settings
    'settings.title': 'Settings',
    'settings.language': 'Language',
    'settings.english': 'English',
    'settings.indonesian': 'Bahasa Indonesia',
    'settings.notifications': 'Notifications',
    'settings.darkMode': 'Dark Mode',
    'settings.about': 'About FuturePath',
    
    // Bottom Nav
    'nav.home': 'Home',
    'nav.explore': 'Explore',
    'nav.dashboard': 'Dashboard',
    'nav.profile': 'Profile',
    
    // Common
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.delete': 'Delete',
    'common.edit': 'Edit',
    'common.back': 'Back',
    'common.loading': 'Loading...',
  },
  id: {
    // Splash
    'splash.tagline': 'Temukan Jurusan Masa Depanmu',
    
    // Auth
    'auth.login': 'Masuk',
    'auth.register': 'Daftar',
    'auth.email': 'Email',
    'auth.password': 'Kata Sandi',
    'auth.confirmPassword': 'Konfirmasi Kata Sandi',
    'auth.fullName': 'Nama Lengkap',
    'auth.noAccount': 'Belum punya akun?',
    'auth.hasAccount': 'Sudah punya akun?',
    'auth.forgotPassword': 'Lupa kata sandi?',
    
    // Home
    'home.welcome': 'Selamat Datang di FuturePath',
    'home.subtitle': 'Temukan jalur karir idealmu',
    'home.startQuiz': 'Mulai Kuis Kepribadian',
    'home.academicAnalysis': 'Analisis Akademik',
    'home.exploreUniversities': 'Jelajahi Universitas',
    'home.viewDashboard': 'Lihat Dasbor',
    
    // Quiz
    'quiz.title': 'Kuis Kepribadian',
    'quiz.question': 'Pertanyaan',
    'quiz.of': 'dari',
    'quiz.next': 'Berikutnya',
    'quiz.submit': 'Kirim',
    'quiz.previous': 'Sebelumnya',
    
    // Results
    'result.title': 'Hasil Anda',
    'result.personalityScore': 'Skor Kepribadian',
    'result.recommended': 'Jurusan yang Direkomendasikan',
    'result.compatibility': 'Kompatibilitas',
    'result.viewDetails': 'Lihat Detail',
    'result.saveResults': 'Simpan Hasil',
    
    // Major Detail
    'major.description': 'Deskripsi',
    'major.skillsNeeded': 'Keterampilan yang Dibutuhkan',
    'major.careerProspects': 'Prospek Karir',
    'major.universities': 'Universitas yang Menawarkan Jurusan Ini',
    'major.save': 'Simpan Jurusan',
    'major.salaryRange': 'Kisaran Gaji',
    'major.jobOutlook': 'Prospek Kerja',
    
    // Profile
    'profile.title': 'Profil',
    'profile.savedMajors': 'Jurusan Tersimpan',
    'profile.quizHistory': 'Riwayat Kuis',
    'profile.settings': 'Pengaturan',
    'profile.logout': 'Keluar',
    
    // Academic Analysis
    'academic.title': 'Analisis Nilai Akademik',
    'academic.inputGrades': 'Masukkan Nilai Raport Anda',
    'academic.subject': 'Mata Pelajaran',
    'academic.grade': 'Nilai',
    'academic.analyze': 'Analisis',
    'academic.strengths': 'Kekuatan Akademik Anda',
    'academic.mathematics': 'Matematika',
    'academic.science': 'IPA',
    'academic.language': 'Bahasa',
    'academic.social': 'IPS',
    'academic.art': 'Seni',
    'academic.physics': 'Fisika',
    'academic.chemistry': 'Kimia',
    'academic.biology': 'Biologi',
    'academic.english': 'Bahasa Inggris',
    'academic.indonesian': 'Bahasa Indonesia',
    
    // Major Recommendation
    'recommendation.title': 'Rekomendasi Jurusan',
    'recommendation.top3': 'Top 3 Jurusan yang Direkomendasikan',
    'recommendation.match': 'Kecocokan',
    'recommendation.whyRecommended': 'Mengapa Direkomendasikan',
    
    // Career Insight
    'career.title': 'Wawasan Karir',
    'career.paths': 'Jalur Karir',
    'career.skills': 'Keterampilan yang Dibutuhkan',
    'career.salary': 'Gaji Rata-rata',
    'career.demand': 'Permintaan Pasar',
    'career.high': 'Tinggi',
    'career.medium': 'Sedang',
    'career.low': 'Rendah',
    
    // University Explorer
    'university.title': 'Penjelajah Universitas',
    'university.search': 'Cari universitas...',
    'university.filter': 'Filter berdasarkan Jurusan',
    'university.location': 'Lokasi',
    'university.accreditation': 'Akreditasi',
    'university.tuition': 'Biaya Kuliah',
    'university.viewDetails': 'Lihat Detail',
    
    // Dashboard
    'dashboard.title': 'Dasbor Pribadi',
    'dashboard.quizResults': 'Hasil Kuis',
    'dashboard.academicStrengths': 'Kekuatan Akademik',
    'dashboard.savedMajors': 'Jurusan Tersimpan',
    'dashboard.progress': 'Progres',
    'dashboard.completed': 'Selesai',
    'dashboard.notCompleted': 'Belum Selesai',
    
    // Settings
    'settings.title': 'Pengaturan',
    'settings.language': 'Bahasa',
    'settings.english': 'English',
    'settings.indonesian': 'Bahasa Indonesia',
    'settings.notifications': 'Notifikasi',
    'settings.darkMode': 'Mode Gelap',
    'settings.about': 'Tentang FuturePath',
    
    // Bottom Nav
    'nav.home': 'Beranda',
    'nav.explore': 'Jelajah',
    'nav.dashboard': 'Dasbor',
    'nav.profile': 'Profil',
    
    // Common
    'common.save': 'Simpan',
    'common.cancel': 'Batal',
    'common.delete': 'Hapus',
    'common.edit': 'Edit',
    'common.back': 'Kembali',
    'common.loading': 'Memuat...',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
