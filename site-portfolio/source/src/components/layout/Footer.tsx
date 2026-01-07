import { Github, Linkedin, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-sm">ABC</span>
              </div>
              <span className="font-semibold text-foreground">Wiki Migration</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t('footer.project')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#architecture" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Architecture
              </a>
              <a href="#validation" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Evidence
              </a>
              <a href="#stack" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Tech Stack
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Aldecir22/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://www.linkedin.com/in/aldecir-santana-66b960187/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 {t('footer.author')}. {t('footer.rights')}.
          </p>
          <p className="text-xs text-muted-foreground">
            The Cloud Bootcamp • Module 3
          </p>
        </div>
      </div>
    </footer>
  );
}
