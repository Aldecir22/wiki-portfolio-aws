import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cloud, Monitor, Server, Database, Network, Wrench } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface TechCategory {
  titleKey: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  items: string[];
}

export function StackSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories: TechCategory[] = [
    {
      titleKey: 'stack.cloud',
      icon: <Cloud className="w-5 h-5" />,
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-500/10',
      items: ['EC2', 'RDS', 'VPC', 'S3', 'Internet Gateway'],
    },
    {
      titleKey: 'stack.os',
      icon: <Monitor className="w-5 h-5" />,
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-500/10',
      items: ['Ubuntu 22.04 LTS', 'PPA Deadsnakes'],
    },
    {
      titleKey: 'stack.backend',
      icon: <Server className="w-5 h-5" />,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-500/10',
      items: ['Python 3.10', 'Flask 3.1.2', 'Flask-MySQLdb', 'Passlib', 'WTForms'],
    },
    {
      titleKey: 'stack.database',
      icon: <Database className="w-5 h-5" />,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-500/10',
      items: ['MySQL 8.0', 'RDS MySQL', 'mysqlclient'],
    },
    {
      titleKey: 'stack.infrastructure',
      icon: <Network className="w-5 h-5" />,
      color: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-500/10',
      items: ['Security Groups', 'Route Tables', 'Public Subnet', 'Private Subnet'],
    },
    {
      titleKey: 'stack.tools',
      icon: <Wrench className="w-5 h-5" />,
      color: 'text-cyan-600 dark:text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      items: ['Git', 'GitHub', 'VS Code', 'Remote SSH', 'AWS CLI'],
    },
  ];

  return (
    <section id="stack" className="py-20 lg:py-32 bg-muted/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('stack.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('stack.description')}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={category.titleKey}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl ${category.bgColor} flex items-center justify-center ${category.color} mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {t(category.titleKey)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span key={item} className="tech-badge">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
