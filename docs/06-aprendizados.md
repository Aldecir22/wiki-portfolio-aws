# Lessons Learned | Aprendizados

**Phase 1:** Infrastructure & Cloud Foundation
Cost Optimization: Importance of sizing alignment with AWS Free Tier limits (t3.micro) to maintain a zero-cost environment for POCs.

**Network Segmentation:** Understanding the critical role of Private Subnets for database security, ensuring RDS is never directly exposed to the internet.

**Phase 2:** Connectivity & System Hardening
Remote Management: Configuring secure access via VS Code Remote SSH proved to be more efficient than standard terminals for complex file editing in cloud instances.

**Automation Readiness:** Implementing tools like needrestart and pre-installing OS headers (libmysqlclient-dev) is essential to prevent manual interrupts during automated deployments.

**Phase 3:** Deployment & Troubleshooting (The Turning Point)
Runtime Compatibility: The most significant lesson was handling the Python 3.12 vs 3.10 conflict. Learning to use PPA Deadsnakes allowed the installation of specific versions without compromising OS stability.

**Environment Isolation:** Mastering Virtual Environments (venv) is non-negotiable for DevOps; it ensured the WikiApp dependencies (Flask, MySQLdb) were isolated from system-wide updates.

**Database Granularity:** Creating a dedicated application user (wiki) instead of using the admin account for RDS connections follows the Principle of Least Privilege (PoLP).

[🇧🇷 Português]

**Etapa 1:** Infraestrutura e Fundação Cloud
Otimização de Custos: Importância do alinhamento de sizing com os limites do AWS Free Tier (t3.micro) para manter um ambiente de custo zero para POCs.

**Segmentação de Rede:** Compreensão do papel crítico das Subnets Privadas para a segurança de dados, garantindo que o RDS nunca seja exposto diretamente à internet.

**Etapa 2:** Conectividade e Hardening do SO
Gestão Remota: A configuração do acesso via VS Code Remote SSH provou ser mais eficiente do que terminais padrão para edição complexa de arquivos em instâncias cloud.

**Prontidão para Automação:** Implementar ferramentas como needrestart e pré-instalar headers do sistema (libmysqlclient-dev) é essencial para evitar interrupções manuais em deploys automatizados.

**Etapa 3:** Deploy e Resolução de Problemas (O Diferencial)
Compatibilidade de Runtime: O aprendizado mais significativo foi lidar com o conflito Python 3.12 vs 3.10. Utilizar o PPA Deadsnakes permitiu a instalação de versões específicas sem comprometer a estabilidade do SO.

**Isolamento de Ambiente:** Dominar Ambientes Virtuais (venv) é inegociável para DevOps; isso garantiu que as dependências da WikiApp (Flask, MySQLdb) ficassem isoladas de atualizações globais do sistema.

**Granularidade de Banco de Dados:** Criar um usuário de aplicação dedicado (wiki) em vez de usar a conta admin para conexões RDS segue o Princípio do Menor Privilégio (PoLP).
