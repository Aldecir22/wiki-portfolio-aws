import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cloud, Server, Database, Shield, Network, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import architectureDiagram from '@/assets/architecture-diagram.png';

export function ArchitectureSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="architecture" className="py-20 lg:py-32 bg-muted/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            {t('architecture.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('architecture.description')}
          </p>
          <div className="section-divider" />
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="glass-card rounded-2xl p-4 glow-orange">
            <img 
              src={architectureDiagram} 
              alt="AWS Architecture Diagram showing VPC, EC2, RDS, and S3 configuration" 
              className="w-full rounded-xl evidence-image"
            />
            <p className="text-center text-sm text-muted-foreground mt-4">
              On-premises Data Center → AWS Cloud (us-east-1) Migration Architecture
            </p>
          </div>
        </motion.div>

        {/* Architecture Components Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* VPC Configuration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Network className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {t('architecture.vpc.title')}
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-sm text-muted-foreground">{t('architecture.vpc.cidr')}</span>
                <code className="text-sm font-mono bg-muted px-2 py-1 rounded text-secondary">10.0.0.0/16</code>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-sm text-muted-foreground">{t('architecture.vpc.name')}</span>
                <code className="text-sm font-mono bg-muted px-2 py-1 rounded text-secondary">vpc-bootcamp</code>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-muted-foreground">Region</span>
                <code className="text-sm font-mono bg-muted px-2 py-1 rounded text-secondary">us-east-1</code>
              </div>
            </div>
          </motion.div>

          {/* Internet Gateway */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {t('architecture.igw.title')}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {t('architecture.igw.desc')}
            </p>
            <code className="text-sm font-mono bg-muted px-3 py-2 rounded block text-secondary">
              igw-mod03
            </code>
          </motion.div>

          {/* Public Subnet */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card rounded-2xl p-6 border-l-4 border-l-green-500"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {t('architecture.public.title')}
                </h3>
                <code className="text-xs font-mono text-green-400">
                  {t('architecture.public.cidr')}
                </code>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {t('architecture.public.desc')}
            </p>
            <div className="bg-muted/50 rounded-lg p-4 border border-border">
              <div className="flex items-center gap-2 mb-2">
                <Server className="w-4 h-4 text-secondary" />
                <span className="font-medium text-sm">{t('architecture.ec2.title')}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-muted-foreground">Instance: </span>
                  <span className="font-mono text-foreground">{t('architecture.ec2.name')}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Type: </span>
                  <span className="font-mono text-foreground">{t('architecture.ec2.type')}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-muted-foreground">OS: </span>
                  <span className="font-mono text-foreground">{t('architecture.ec2.os')}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Private Subnet */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="glass-card rounded-2xl p-6 border-l-4 border-l-secondary"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {t('architecture.private.title')}
                </h3>
                <code className="text-xs font-mono text-secondary">
                  {t('architecture.private.cidr')}
                </code>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {t('architecture.private.desc')}
            </p>
            <div className="bg-muted/50 rounded-lg p-4 border border-border">
              <div className="flex items-center gap-2 mb-2">
                <Database className="w-4 h-4 text-secondary" />
                <span className="font-medium text-sm">{t('architecture.rds.title')}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-muted-foreground">Instance: </span>
                  <span className="font-mono text-foreground">{t('architecture.rds.name')}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Type: </span>
                  <span className="font-mono text-foreground">{t('architecture.rds.type')}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-muted-foreground">Engine: </span>
                  <span className="font-mono text-foreground">{t('architecture.rds.engine')}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Security Groups */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="lg:col-span-2 glass-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {t('architecture.sg.title')}
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted/50 rounded-lg p-4 border border-border">
                <h4 className="font-medium text-sm mb-2 text-foreground">Application Security Group</h4>
                <p className="text-xs text-muted-foreground mb-2">{t('architecture.sg.app')}</p>
                <div className="flex gap-2">
                  <span className="aws-badge">SSH:22</span>
                  <span className="aws-badge">HTTP:8080</span>
                </div>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 border border-border">
                <h4 className="font-medium text-sm mb-2 text-foreground">Database Security Group</h4>
                <p className="text-xs text-muted-foreground mb-2">{t('architecture.sg.db')}</p>
                <div className="flex gap-2">
                  <span className="aws-badge">MySQL:3306</span>
                  <span className="aws-badge">App SG Only</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
