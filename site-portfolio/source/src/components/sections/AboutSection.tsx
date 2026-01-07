import { motion } from 'framer-motion';
import { Target, Server, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function AboutSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      icon: <Target className="w-6 h-6" />,
      titleKey: 'about.objective.title',
      textKey: 'about.objective.text',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: <Server className="w-6 h-6" />,
      titleKey: 'about.context.title',
      textKey: 'about.context.text',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      titleKey: 'about.result.title',
      textKey: 'about.result.text',
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-500/10',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('about.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.titleKey}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:shadow-xl transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl ${card.bgColor} flex items-center justify-center mb-4 ${card.color}`}>
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {t(card.titleKey)}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(card.textKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
