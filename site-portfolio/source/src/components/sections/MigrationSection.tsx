import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cloud, Server, Database, Rocket, HardDrive } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function MigrationSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: <Cloud className="w-5 h-5" />,
      titleKey: 'migration.step1.title',
      descKey: 'migration.step1.desc',
      color: 'bg-blue-500',
    },
    {
      icon: <Server className="w-5 h-5" />,
      titleKey: 'migration.step2.title',
      descKey: 'migration.step2.desc',
      color: 'bg-green-500',
    },
    {
      icon: <Database className="w-5 h-5" />,
      titleKey: 'migration.step3.title',
      descKey: 'migration.step3.desc',
      color: 'bg-orange-500',
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      titleKey: 'migration.step4.title',
      descKey: 'migration.step4.desc',
      color: 'bg-purple-500',
    },
  ];

  return (
    <section id="migration" className="py-20 lg:py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('migration.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('migration.description')}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Migration Steps Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.titleKey}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex gap-6"
              >
                {/* Step Number */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center text-white shadow-lg`}>
                    {step.icon}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-background border-2 border-border flex items-center justify-center">
                    <span className="text-xs font-bold text-foreground">{index + 1}</span>
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1 glass-card rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(step.descKey)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* S3 Staging Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-6 border-l-4 border-l-primary">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <HardDrive className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  {t('migration.staging.title')}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t('migration.staging.desc')}
                </p>
                <div className="mt-3">
                  <code className="code-block text-xs">
                    aws s3 cp s3://tcb-bootcamps/.../dump.sql .
                  </code>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
