import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Materials from './pages/Materials';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'materials'>('home');

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="pt-20">
        {currentPage === 'home' && <Home onNavigateToMaterials={() => setCurrentPage('materials')} />}
        {currentPage === 'materials' && <Materials />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
