import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WelcomeSection from '@/components/WelcomeSection';
import AimsObjectivesSection from '@/components/AimsObjectivesSection';
import FeaturedAwardsSection from '@/components/FeaturedAwardsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <WelcomeSection />
        <AimsObjectivesSection />
        <FeaturedAwardsSection />
      </main>
      <Footer />
    </div>
  );
}
