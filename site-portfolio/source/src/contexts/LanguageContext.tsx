import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

type Language = 'en' | 'pt-br';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.architecture': 'Architecture',
    'nav.migration': 'Migration',
    'nav.decisions': 'Decisions',
    'nav.validation': 'Validation',
    'nav.stack': 'Stack',
    'nav.lessons': 'Lessons',

    // Hero Section
    'hero.title': 'ABC Company Wiki',
    'hero.subtitle': 'Cloud Migration to AWS',
    'hero.description': 'Complete migration of a legacy Wiki web application from on-premises infrastructure to a custom-built AWS cloud architecture.',
    'hero.cta.architecture': 'View Architecture',
    'hero.cta.evidence': 'See Evidence',

    // About Section
    'about.title': 'About the Project',
    'about.objective.title': 'Objective',
    'about.objective.text': 'Complete migration of a web platform (Python + MySQL) and relational database from simulated on-premises environment to a Cloud Native architecture on AWS (us-east-1 region).',
    'about.context.title': 'Initial Context',
    'about.context.text': 'Legacy server with 2 vCPU and 1GB RAM in a simulated corporate Data Center environment with limited scalability and physical infrastructure constraints. The system required migration to managed services for improved resilience and scalability.',
    'about.result.title': 'Final Result',
    'about.result.text': 'Migration completed successfully. Application stable and isolated via virtual environment, connected to RDS via secure endpoint, with CRUD operations and Login functionality 100% validated.',

    // Architecture Section
    'architecture.title': 'AWS Architecture',
    'architecture.description': 'Custom VPC design with network isolation and security-first approach.',
    'architecture.vpc.title': 'VPC Configuration',
    'architecture.vpc.cidr': 'CIDR Block',
    'architecture.vpc.name': 'VPC Name',
    'architecture.public.title': 'Public Subnet',
    'architecture.public.cidr': '10.0.0.0/24',
    'architecture.public.desc': 'Hosts EC2 application server with internet access via Internet Gateway',
    'architecture.private.title': 'Private Subnet',
    'architecture.private.cidr': '10.0.1.0/24',
    'architecture.private.desc': 'Hosts RDS MySQL instance with no direct internet access',
    'architecture.ec2.title': 'Application Server',
    'architecture.ec2.type': 't3.micro',
    'architecture.ec2.os': 'Ubuntu 22.04 LTS',
    'architecture.ec2.name': 'awsuse1app01',
    'architecture.rds.title': 'Database Server',
    'architecture.rds.type': 'db.t3.micro',
    'architecture.rds.engine': 'MySQL 8.0',
    'architecture.rds.name': 'awsuse1db01',
    'architecture.sg.title': 'Security Groups',
    'architecture.sg.app': 'Application SG: SSH (22), Web (8080)',
    'architecture.sg.db': 'Database SG: MySQL (3306) restricted to Application SG',
    'architecture.igw.title': 'Internet Gateway',
    'architecture.igw.desc': 'Enables bidirectional traffic for the public subnet',

    // Migration Section
    'migration.title': 'Migration Process',
    'migration.description': 'Strategic approach for migrating application and database workloads.',
    'migration.step1.title': 'Infrastructure Provisioning',
    'migration.step1.desc': 'Created VPC with public and private subnets, Internet Gateway, and route tables. Provisioned EC2 for application layer and RDS for database layer.',
    'migration.step2.title': 'Runtime Environment Setup',
    'migration.step2.desc': 'Installed Python 3.10 via deadsnakes PPA to resolve compatibility issues. Created isolated virtual environment for dependency management.',
    'migration.step3.title': 'Database Migration',
    'migration.step3.desc': 'Used Amazon S3 as staging layer for dump.sql transfer. Imported database schema and data into RDS MySQL. Created restricted database user following least privilege principle.',
    'migration.step4.title': 'Application Deployment',
    'migration.step4.desc': 'Deployed Flask application with MySQL connector. Configured environment variables for secure RDS connection. Validated application accessibility via public IP.',
    'migration.staging.title': 'S3 Staging Layer',
    'migration.staging.desc': 'Amazon S3 used as intermediary storage for secure artifact transfer between environments.',

    // Decisions Section
    'decisions.title': 'Engineering Decisions',
    'decisions.description': 'Key technical decisions made during the migration process.',
    'decisions.python.title': 'Python Runtime Downgrade',
    'decisions.python.problem': 'Problem',
    'decisions.python.problem.text': 'Python 3.12 (Ubuntu 22.04 default) caused compatibility issues with legacy Flask-MySQLdb and mysqlclient libraries.',
    'decisions.python.alternatives': 'Alternatives Considered',
    'decisions.python.alt1': 'Complete application code refactoring',
    'decisions.python.alt2': 'Runtime isolation with older Python version',
    'decisions.python.solution': 'Solution',
    'decisions.python.solution.text': 'Implemented Python 3.10 via ppa:deadsnakes/ppa in an isolated virtual environment (venv).',
    'decisions.python.rationale': 'Rationale',
    'decisions.python.rationale.text': 'Ensured application stability without immediate refactoring needs while maintaining operating system security.',
    'decisions.rds.title': 'Managed Database (RDS)',
    'decisions.rds.rationale': 'Chose Amazon RDS over self-managed MySQL on EC2 for automated backups, patching, and high availability capabilities.',
    'decisions.security.title': 'Network Isolation',
    'decisions.security.rationale': 'Implemented database in private subnet with Security Group rules allowing only application server access, following defense-in-depth principles.',
    'decisions.privilege.title': 'Least Privilege Principle',
    'decisions.privilege.rationale': 'Created dedicated wiki@% database user with permissions restricted to wikidb only, avoiding use of admin account for application connections.',

    // Validation Section
    'validation.title': 'Validation & Evidence',
    'validation.description': 'Documented proof of successful migration and system functionality.',
    'validation.infra.title': 'Infrastructure Evidence',
    'validation.infra.vpc': 'VPC Created',
    'validation.infra.subnets': 'Subnets Configured',
    'validation.infra.ec2': 'EC2 Instance Running',
    'validation.infra.rds': 'RDS Instance Available',
    'validation.infra.igw': 'Internet Gateway',
    'validation.infra.rt': 'Route Table',
    'validation.infra.sg': 'Security Groups',
    'validation.app.title': 'Application Evidence',
    'validation.app.vscode': 'Remote SSH Access via VS Code',
    'validation.app.config': 'Application Configuration',
    'validation.app.connection': 'RDS Endpoint Connection',
    'validation.app.db': 'Database Validation',
    'validation.app.running': 'Application Running',
    'validation.app.post': 'Post Creation Validated',
    'validation.arch.title': 'Architecture Diagrams',

    // Stack Section
    'stack.title': 'Technology Stack',
    'stack.description': 'Technologies and tools used in this migration project.',
    'stack.cloud': 'Cloud Platform',
    'stack.os': 'Operating System',
    'stack.backend': 'Backend',
    'stack.database': 'Database',
    'stack.infrastructure': 'Infrastructure',
    'stack.tools': 'Development Tools',

    // Lessons Section
    'lessons.title': 'Lessons Learned',
    'lessons.description': 'Key insights gained from this cloud migration project.',
    'lessons.lesson1.title': 'Practical Cloud Architecture',
    'lessons.lesson1.text': 'Hands-on experience with VPC design, subnet segmentation, and security group configuration provides deeper understanding than theoretical knowledge alone.',
    'lessons.lesson2.title': 'Runtime Compatibility',
    'lessons.lesson2.text': 'Legacy application migration often requires careful runtime version management. Virtual environments are essential for isolation and reproducibility.',
    'lessons.lesson3.title': 'Infrastructure Security',
    'lessons.lesson3.text': 'Defense-in-depth through network isolation, Security Groups, and least privilege access should be built into the architecture from the start.',
    'lessons.lesson4.title': 'Real Validation',
    'lessons.lesson4.text': 'End-to-end validation with actual user workflows (login, CRUD operations) provides confidence that theoretical migration plans work in practice.',

    // Footer
    'footer.project': 'ABC Company Wiki — Cloud Migration',
    'footer.author': 'Aldecir Santana',
    'footer.rights': 'Professional Portfolio Project',

    // Common
    'common.viewDetails': 'View Details',
    'common.learnMore': 'Learn More',
  },
  'pt-br': {
    // Navigation
    'nav.about': 'Sobre',
    'nav.architecture': 'Arquitetura',
    'nav.migration': 'Migração',
    'nav.decisions': 'Decisões',
    'nav.validation': 'Validação',
    'nav.stack': 'Stack',
    'nav.lessons': 'Lições',

    // Hero Section
    'hero.title': 'ABC Company Wiki',
    'hero.subtitle': 'Migração para Cloud AWS',
    'hero.description': 'Migração completa de uma aplicação Web Wiki legada de infraestrutura on-premises para arquitetura cloud customizada na AWS.',
    'hero.cta.architecture': 'Ver Arquitetura',
    'hero.cta.evidence': 'Ver Evidências',

    // About Section
    'about.title': 'Sobre o Projeto',
    'about.objective.title': 'Objetivo',
    'about.objective.text': 'Migração completa de uma plataforma web (Python + MySQL) e banco de dados relacional de um ambiente on-premises simulado para uma arquitetura Cloud Native na AWS (região us-east-1).',
    'about.context.title': 'Contexto Inicial',
    'about.context.text': 'Servidor legado com 2 vCPU e 1GB RAM em ambiente de Data Center corporativo simulado com limitações de escalabilidade e restrições de infraestrutura física. O sistema necessitava migração para serviços gerenciados para maior resiliência e escalabilidade.',
    'about.result.title': 'Resultado Final',
    'about.result.text': 'Migração concluída com sucesso. Aplicação estável e isolada via ambiente virtual, conectada ao RDS via endpoint seguro, com operações CRUD e funcionalidade de Login 100% validadas.',

    // Architecture Section
    'architecture.title': 'Arquitetura AWS',
    'architecture.description': 'Design de VPC customizada com isolamento de rede e abordagem security-first.',
    'architecture.vpc.title': 'Configuração VPC',
    'architecture.vpc.cidr': 'Bloco CIDR',
    'architecture.vpc.name': 'Nome da VPC',
    'architecture.public.title': 'Subnet Pública',
    'architecture.public.cidr': '10.0.0.0/24',
    'architecture.public.desc': 'Hospeda servidor de aplicação EC2 com acesso à internet via Internet Gateway',
    'architecture.private.title': 'Subnet Privada',
    'architecture.private.cidr': '10.0.1.0/24',
    'architecture.private.desc': 'Hospeda instância RDS MySQL sem acesso direto à internet',
    'architecture.ec2.title': 'Servidor de Aplicação',
    'architecture.ec2.type': 't3.micro',
    'architecture.ec2.os': 'Ubuntu 22.04 LTS',
    'architecture.ec2.name': 'awsuse1app01',
    'architecture.rds.title': 'Servidor de Banco de Dados',
    'architecture.rds.type': 'db.t3.micro',
    'architecture.rds.engine': 'MySQL 8.0',
    'architecture.rds.name': 'awsuse1db01',
    'architecture.sg.title': 'Security Groups',
    'architecture.sg.app': 'SG Aplicação: SSH (22), Web (8080)',
    'architecture.sg.db': 'SG Banco de Dados: MySQL (3306) restrito ao SG da Aplicação',
    'architecture.igw.title': 'Internet Gateway',
    'architecture.igw.desc': 'Habilita tráfego bidirecional para a subnet pública',

    // Migration Section
    'migration.title': 'Processo de Migração',
    'migration.description': 'Abordagem estratégica para migração de workloads de aplicação e banco de dados.',
    'migration.step1.title': 'Provisionamento de Infraestrutura',
    'migration.step1.desc': 'Criação de VPC com subnets pública e privada, Internet Gateway e tabelas de roteamento. Provisionamento de EC2 para camada de aplicação e RDS para camada de dados.',
    'migration.step2.title': 'Configuração de Runtime',
    'migration.step2.desc': 'Instalação do Python 3.10 via PPA deadsnakes para resolver problemas de compatibilidade. Criação de ambiente virtual isolado para gerenciamento de dependências.',
    'migration.step3.title': 'Migração do Banco de Dados',
    'migration.step3.desc': 'Uso do Amazon S3 como camada de staging para transferência do dump.sql. Importação do schema e dados para RDS MySQL. Criação de usuário restrito seguindo princípio do menor privilégio.',
    'migration.step4.title': 'Deploy da Aplicação',
    'migration.step4.desc': 'Deploy da aplicação Flask com conector MySQL. Configuração de variáveis de ambiente para conexão segura com RDS. Validação de acessibilidade via IP público.',
    'migration.staging.title': 'Camada S3 Staging',
    'migration.staging.desc': 'Amazon S3 utilizado como armazenamento intermediário para transferência segura de artefatos entre ambientes.',

    // Decisions Section
    'decisions.title': 'Decisões de Engenharia',
    'decisions.description': 'Principais decisões técnicas tomadas durante o processo de migração.',
    'decisions.python.title': 'Downgrade do Runtime Python',
    'decisions.python.problem': 'Problema',
    'decisions.python.problem.text': 'Python 3.12 (padrão do Ubuntu 22.04) causou problemas de compatibilidade com bibliotecas legadas Flask-MySQLdb e mysqlclient.',
    'decisions.python.alternatives': 'Alternativas Consideradas',
    'decisions.python.alt1': 'Refatoração completa do código da aplicação',
    'decisions.python.alt2': 'Isolamento de runtime com versão anterior do Python',
    'decisions.python.solution': 'Solução',
    'decisions.python.solution.text': 'Implementação do Python 3.10 via ppa:deadsnakes/ppa em ambiente virtual isolado (venv).',
    'decisions.python.rationale': 'Justificativa',
    'decisions.python.rationale.text': 'Garantia de estabilidade da aplicação sem necessidade imediata de refatoração, mantendo a segurança do sistema operacional.',
    'decisions.rds.title': 'Banco de Dados Gerenciado (RDS)',
    'decisions.rds.rationale': 'Escolha do Amazon RDS em vez de MySQL auto-gerenciado em EC2 para backups automatizados, patching e capacidades de alta disponibilidade.',
    'decisions.security.title': 'Isolamento de Rede',
    'decisions.security.rationale': 'Implementação do banco de dados em subnet privada com regras de Security Group permitindo apenas acesso do servidor de aplicação, seguindo princípios de defesa em profundidade.',
    'decisions.privilege.title': 'Princípio do Menor Privilégio',
    'decisions.privilege.rationale': 'Criação de usuário de banco dedicado wiki@% com permissões restritas apenas ao wikidb, evitando uso da conta admin para conexões da aplicação.',

    // Validation Section
    'validation.title': 'Validação & Evidências',
    'validation.description': 'Prova documentada da migração bem-sucedida e funcionalidade do sistema.',
    'validation.infra.title': 'Evidências de Infraestrutura',
    'validation.infra.vpc': 'VPC Criada',
    'validation.infra.subnets': 'Subnets Configuradas',
    'validation.infra.ec2': 'Instância EC2 Running',
    'validation.infra.rds': 'Instância RDS Available',
    'validation.infra.igw': 'Internet Gateway',
    'validation.infra.rt': 'Tabela de Rotas',
    'validation.infra.sg': 'Security Groups',
    'validation.app.title': 'Evidências da Aplicação',
    'validation.app.vscode': 'Acesso Remoto SSH via VS Code',
    'validation.app.config': 'Configuração da Aplicação',
    'validation.app.connection': 'Conexão com Endpoint RDS',
    'validation.app.db': 'Validação do Banco de Dados',
    'validation.app.running': 'Aplicação em Execução',
    'validation.app.post': 'Criação de Post Validada',
    'validation.arch.title': 'Diagramas de Arquitetura',

    // Stack Section
    'stack.title': 'Stack Tecnológico',
    'stack.description': 'Tecnologias e ferramentas utilizadas neste projeto de migração.',
    'stack.cloud': 'Plataforma Cloud',
    'stack.os': 'Sistema Operacional',
    'stack.backend': 'Backend',
    'stack.database': 'Banco de Dados',
    'stack.infrastructure': 'Infraestrutura',
    'stack.tools': 'Ferramentas de Desenvolvimento',

    // Lessons Section
    'lessons.title': 'Lições Aprendidas',
    'lessons.description': 'Principais insights obtidos deste projeto de migração para cloud.',
    'lessons.lesson1.title': 'Arquitetura Cloud Prática',
    'lessons.lesson1.text': 'Experiência hands-on com design de VPC, segmentação de subnets e configuração de security groups proporciona entendimento mais profundo do que conhecimento apenas teórico.',
    'lessons.lesson2.title': 'Compatibilidade de Runtime',
    'lessons.lesson2.text': 'Migração de aplicações legadas frequentemente requer gerenciamento cuidadoso de versões de runtime. Ambientes virtuais são essenciais para isolamento e reprodutibilidade.',
    'lessons.lesson3.title': 'Segurança de Infraestrutura',
    'lessons.lesson3.text': 'Defesa em profundidade através de isolamento de rede, Security Groups e acesso com menor privilégio deve ser incorporada à arquitetura desde o início.',
    'lessons.lesson4.title': 'Validação Real',
    'lessons.lesson4.text': 'Validação end-to-end com workflows reais de usuário (login, operações CRUD) fornece confiança de que planos teóricos de migração funcionam na prática.',

    // Footer
    'footer.project': 'ABC Company Wiki — Migração Cloud',
    'footer.author': 'Aldecir Santana',
    'footer.rights': 'Projeto de Portfólio Profissional',

    // Common
    'common.viewDetails': 'Ver Detalhes',
    'common.learnMore': 'Saiba Mais',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = useCallback((key: string): string => {
    return translations[language][key] || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
