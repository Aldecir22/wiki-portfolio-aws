import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertTriangle, CheckCircle, Lightbulb, Database, Shield, UserCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function DecisionsSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="decisions" className="py-20 lg:py-32 bg-muted/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('decisions.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('decisions.description')}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Main Decision - Python Runtime */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-8"
        >
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-primary/80 p-4">
              <h3 className="text-lg font-semibold text-primary-foreground flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                {t('decisions.python.title')}
              </h3>
            </div>
            <div className="p-6 space-y-6">
              {/* Problem */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-600 dark:text-red-400 shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">{t('decisions.python.problem')}</h4>
                  <p className="text-sm text-muted-foreground">{t('decisions.python.problem.text')}</p>
                </div>
              </div>

              {/* Alternatives */}
              <div className="pl-14">
                <h4 className="font-medium text-foreground mb-2">{t('decisions.python.alternatives')}</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                    {t('decisions.python.alt1')}
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                    {t('decisions.python.alt2')}
                  </li>
                </ul>
              </div>

              {/* Solution */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">{t('decisions.python.solution')}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{t('decisions.python.solution.text')}</p>
                  <div className="code-block text-xs">
                    <pre>{`sudo add-apt-repository ppa:deadsnakes/ppa -y
sudo apt install python3.10 python3.10-venv python3.10-dev -y
python3.10 -m venv projeto_flask
source projeto_flask/bin/activate`}</pre>
                  </div>
                </div>
              </div>

              {/* Rationale */}
              <div className="pl-14 border-l-2 border-primary/30 ml-5">
                <h4 className="font-medium text-foreground mb-1">{t('decisions.python.rationale')}</h4>
                <p className="text-sm text-muted-foreground">{t('decisions.python.rationale.text')}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Decisions */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-4">
              <Database className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">{t('decisions.rds.title')}</h4>
            <p className="text-sm text-muted-foreground">{t('decisions.rds.rationale')}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">{t('decisions.security.title')}</h4>
            <p className="text-sm text-muted-foreground">{t('decisions.security.rationale')}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
              <UserCheck className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">{t('decisions.privilege.title')}</h4>
            <p className="text-sm text-muted-foreground">{t('decisions.privilege.rationale')}</p>
            <div className="mt-3 code-block text-xs">
              <pre>{`CREATE USER wiki@'%'
GRANT ALL ON wikidb.*`}</pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
