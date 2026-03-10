import { createBrowserRouter } from 'react-router';
import { SplashScreen } from './screens/SplashScreen';
import { LoginScreen } from './screens/LoginScreen';
import { RegisterScreen } from './screens/RegisterScreen';
import { HomeScreen } from './screens/HomeScreen';
import { QuizScreen } from './screens/QuizScreen';
import { ResultScreen } from './screens/ResultScreen';
import { MajorDetailScreen } from './screens/MajorDetailScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { AcademicAnalysisScreen } from './screens/AcademicAnalysisScreen';
import { UniversityExplorerScreen } from './screens/UniversityExplorerScreen';
import { DashboardScreen } from './screens/DashboardScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { ExploreScreen } from './screens/ExploreScreen';
import { SavedMajorsScreen } from './screens/SavedMajorsScreen';
import { QuizHistoryScreen } from './screens/QuizHistoryScreen';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: SplashScreen,
  },
  {
    path: '/login',
    Component: LoginScreen,
  },
  {
    path: '/register',
    Component: RegisterScreen,
  },
  {
    path: '/home',
    Component: HomeScreen,
  },
  {
    path: '/quiz',
    Component: QuizScreen,
  },
  {
    path: '/result',
    Component: ResultScreen,
  },
  {
    path: '/major-detail/:id',
    Component: MajorDetailScreen,
  },
  {
    path: '/profile',
    Component: ProfileScreen,
  },
  {
    path: '/academic-analysis',
    Component: AcademicAnalysisScreen,
  },
  {
    path: '/university-explorer',
    Component: UniversityExplorerScreen,
  },
  {
    path: '/dashboard',
    Component: DashboardScreen,
  },
  {
    path: '/settings',
    Component: SettingsScreen,
  },
  {
    path: '/explore',
    Component: ExploreScreen,
  },
  {
    path: '/saved-majors',
    Component: SavedMajorsScreen,
  },
  {
    path: '/quiz-history',
    Component: QuizHistoryScreen,
  },
]);