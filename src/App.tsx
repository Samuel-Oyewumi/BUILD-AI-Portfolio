import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Work from './components/Work';
import Services from './components/Services';
import IntakeForm from './components/IntakeForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-tech-bg font-sans">
      <Navigation />
      <main>
        <Hero />
        <Work />
        <Services />
        <IntakeForm />
      </main>
      <Footer />
    </div>
  );
}
