import { LanguageProvider } from '@/contexts/LanguageContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ArchitectureSection } from '@/components/sections/ArchitectureSection';
import { MigrationSection } from '@/components/sections/MigrationSection';
import { DecisionsSection } from '@/components/sections/DecisionsSection';
import { ValidationSection } from '@/components/sections/ValidationSection';
import { StackSection } from '@/components/sections/StackSection';
import { LessonsSection } from '@/components/sections/LessonsSection';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ArchitectureSection />
          <MigrationSection />
          <DecisionsSection />
          <ValidationSection />
          <StackSection />
          <LessonsSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
