import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './utils/utils';
import Dashboard from './pages/Dashboard';
import AllUsers from './pages/User/AllUsers';
import AdviserList from './pages/Adviser/AdviserList';
import PendingRequest from './pages/Adviser/PendingRequest';
import SuspendedList from './pages/Adviser/SuspendedList';
import Appointment from './pages/Appointment/Appointment';

const Login = lazy(() => import('./pages/Login'));


const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-primary">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="mt-4 text-primary font-inter">Loading...</p>
    </div>
  </div>
);


export default function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingFallback />}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<AllUsers />} />
          <Route path="/adviser/list" element={<AdviserList />} />
          <Route path="/adviser/pending" element={<PendingRequest />} />
          <Route path="/adviser/suspended" element={<SuspendedList />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </Suspense>
    </Router>
  );
}