import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cloud, Settings, Shield, CheckSquare } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function LessonsSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const lessons = [
    {
      icon: <Cloud className="w-6 h-6" />,
      titleKey: 'lessons.lesson1.title',
      textKey: 'lessons.lesson1.text',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-l-blue-500',
    },
    {
      icon: <Settings className="w-6 h-6" />,
      titleKey: 'lessons.lesson2.title',
      textKey: 'lessons.lesson2.text',
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-l-green-500',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      titleKey: 'lessons.lesson3.title',
      textKey: 'lessons.lesson3.text',
      color: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-l-red-500',
    },
    {
      icon: <CheckSquare className="w-6 h-6" />,
      titleKey: 'lessons.lesson4.title',
      textKey: 'lessons.lesson4.text',
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-l-purple-500',
    },
  ];

  return (
    <section id="lessons" className="py-20 lg:py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('lessons.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('lessons.description')}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {lessons.map((lesson, index) => (
            <motion.div
              key={lesson.titleKey}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card rounded-2xl p-6 border-l-4 ${lesson.borderColor} hover:shadow-lg transition-shadow`}
            >
              <div className={`w-12 h-12 rounded-xl ${lesson.bgColor} flex items-center justify-center ${lesson.color} mb-4`}>
                {lesson.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {t(lesson.titleKey)}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(lesson.textKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
