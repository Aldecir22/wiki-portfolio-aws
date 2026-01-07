import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Cloud, Server, Database, Code, CheckCircle, Layers, Network, Shield, Terminal, FileText, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Import evidence images
import vpcCreate from '@/assets/vpc-create.png';
import subnets from '@/assets/subnets-public-private.png';
import ec2Running from '@/assets/ec2-running.png';
import rdsActive from '@/assets/rds-active.png';
import internetGateway from '@/assets/internet-gateway.png';
import routeTable from '@/assets/route-table.png';
import securityGroup from '@/assets/security-group.png';
import vscodeRemote from '@/assets/vscode-remote.png';
import wikiappDeployed from '@/assets/wikiapp-deployed.png';
import rdsConnection from '@/assets/rds-connection.png';
import dbTablesVerified from '@/assets/db-tables-verified.png';
import appRunning from '@/assets/app-running.png';
import postCreated from '@/assets/post-created.png';
import architectureDiagram from '@/assets/architecture-diagram.png';

interface EvidenceItem {
  id: string;
  titleKey: string;
  icon: React.ReactNode;
  description: string;
  image: string;
}

export function ValidationSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  const infraEvidence: EvidenceItem[] = [
    { id: 'vpc', titleKey: 'validation.infra.vpc', icon: <Cloud className="w-4 h-4" />, description: 'VPC 10.0.0.0/16 created', image: vpcCreate },
    { id: 'subnets', titleKey: 'validation.infra.subnets', icon: <Network className="w-4 h-4" />, description: 'Public & Private Subnets', image: subnets },
    { id: 'ec2', titleKey: 'validation.infra.ec2', icon: <Server className="w-4 h-4" />, description: 'EC2 awsuse1app01 running', image: ec2Running },
    { id: 'rds', titleKey: 'validation.infra.rds', icon: <Database className="w-4 h-4" />, description: 'RDS awsuse1db01 available', image: rdsActive },
    { id: 'igw', titleKey: 'validation.infra.igw', icon: <Network className="w-4 h-4" />, description: 'Internet Gateway igw-mod03', image: internetGateway },
    { id: 'rt', titleKey: 'validation.infra.rt', icon: <Layers className="w-4 h-4" />, description: 'Route table configured', image: routeTable },
    { id: 'sg', titleKey: 'validation.infra.sg', icon: <Shield className="w-4 h-4" />, description: 'Security groups applied', image: securityGroup },
  ];

  const appEvidence: EvidenceItem[] = [
    { id: 'vscode', titleKey: 'validation.app.vscode', icon: <Code className="w-4 h-4" />, description: 'VS Code Remote SSH access', image: vscodeRemote },
    { id: 'config', titleKey: 'validation.app.config', icon: <FileText className="w-4 h-4" />, description: 'Flask app configuration', image: wikiappDeployed },
    { id: 'connection', titleKey: 'validation.app.connection', icon: <Terminal className="w-4 h-4" />, description: 'RDS endpoint connection', image: rdsConnection },
    { id: 'db', titleKey: 'validation.app.db', icon: <Database className="w-4 h-4" />, description: 'Database tables verified', image: dbTablesVerified },
    { id: 'running', titleKey: 'validation.app.running', icon: <Server className="w-4 h-4" />, description: 'Application homepage live', image: appRunning },
    { id: 'post', titleKey: 'validation.app.post', icon: <CheckCircle className="w-4 h-4" />, description: 'Post creation validated', image: postCreated },
  ];

  return (
    <section id="validation" className="py-20 lg:py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            {t('validation.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('validation.description')}
          </p>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <Tabs defaultValue="infrastructure" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-muted/50">
              <TabsTrigger value="infrastructure" className="gap-2 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
                <Cloud className="w-4 h-4" />
                <span className="hidden sm:inline">{t('validation.infra.title')}</span>
                <span className="sm:hidden">Infra</span>
              </TabsTrigger>
              <TabsTrigger value="application" className="gap-2 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
                <Server className="w-4 h-4" />
                <span className="hidden sm:inline">{t('validation.app.title')}</span>
                <span className="sm:hidden">App</span>
              </TabsTrigger>
              <TabsTrigger value="architecture" className="gap-2 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
                <Layers className="w-4 h-4" />
                <span className="hidden sm:inline">{t('validation.arch.title')}</span>
                <span className="sm:hidden">Arch</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="infrastructure">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {infraEvidence.map((item, index) => (
                  <EvidenceCard 
                    key={item.id} 
                    item={item} 
                    t={t} 
                    index={index} 
                    onClick={() => setSelectedImage({ src: item.image, title: t(item.titleKey) })}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="application">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {appEvidence.map((item, index) => (
                  <EvidenceCard 
                    key={item.id} 
                    item={item} 
                    t={t} 
                    index={index}
                    onClick={() => setSelectedImage({ src: item.image, title: t(item.titleKey) })}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="architecture">
              <div 
                className="glass-card rounded-2xl p-4 cursor-pointer hover:glow-orange transition-all"
                onClick={() => setSelectedImage({ src: architectureDiagram, title: 'AWS Architecture Diagram' })}
              >
                <img 
                  src={architectureDiagram} 
                  alt="AWS Architecture Diagram - VPC, EC2, RDS, S3" 
                  className="w-full rounded-xl evidence-image"
                />
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  On-premises to AWS Cloud migration architecture
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Final Validation Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-6 border-l-4 border-l-green-500 glow-orange">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 shrink-0">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Migration Validated Successfully
                </h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    Application accessible at IP:8080
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    User authentication working (login/logout)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    CRUD operations validated with post creation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    Database connection via RDS endpoint secure
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Image Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-6xl max-h-[90vh] overflow-auto">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-center text-white/80 mt-4 text-lg font-medium">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

function EvidenceCard({ 
  item, 
  t, 
  index,
  onClick
}: { 
  item: EvidenceItem; 
  t: (key: string) => string; 
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="glass-card rounded-xl p-3 hover:glow-orange transition-all cursor-pointer group"
      onClick={onClick}
    >
      <div className="aspect-video rounded-lg mb-3 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.description}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-secondary">{item.icon}</span>
        <h4 className="font-medium text-sm text-foreground">{t(item.titleKey)}</h4>
      </div>
      <p className="text-xs text-muted-foreground">{item.description}</p>
    </motion.div>
  );
}
