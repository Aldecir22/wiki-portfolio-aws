# Technical Decisions | Decisões Técnicas

[🇺🇸 English]

- **Storage:** Use of S3 as a staging area to ensure data integrity during transfer.
- **OS:** Selection of Ubuntu 22.04 LTS for long-term support and package compatibility.

___

## Technical Decisions & Problem Solving

**Compute (EC2 Sizing):** Selected t3.micro to remain within the AWS Free Tier while meeting the application's requirement of 1GB RAM.

**Runtime Isolation (Python 3.10):** The system's default Python 3.12 caused incompatibilities with the legacy application code (Flask/MySQLdb). Decided to implement a Virtual Environment (venv) using Python 3.10 to ensure stability.

**PPA Deadsnakes Implementation:** Utilized ppa:deadsnakes/ppa to safely install Python 3.10 headers without breaking the Ubuntu 22.04 system binaries.

**Version Upgrades:** Updated Flask to 3.1.2 and adjusted dependencies to resolve security vulnerabilities and ensure compatibility with modern mysqlclient libraries.

**Professional Portfilio:** Chose Git/GitHub for version control and documentation, enabling the project to be showcased as a professional DevOps portfolio.

___

[🇧🇷 Português]

- **Storage:** Uso do S3 como área de estágio para garantir integridade dos dados na transferência.
- **SO:** Seleção do Ubuntu 22.04 LTS para suporte de longo prazo e compatibilidade de pacotes.

___

## Decisões Técnicas e Resolução de Problemas

**Computação (Sizing EC2):** Selecionada a t3.micro para permanecer dentro do AWS Free Tier enquanto atende ao requisito de 1GB de RAM da aplicação.

**Isolamento de Runtime (Python 3.10):** O Python 3.12 padrão do sistema causou incompatibilidades com o código legado da aplicação (Flask/MySQLdb). Decidi implementar um Ambiente Virtual (venv) usando Python 3.10 para garantir estabilidade.

**Implementação do PPA Deadsnakes:** Utilizado o ppa:deadsnakes/ppa para instalar os headers do Python 3.10 de forma segura, sem quebrar os binários do sistema Ubuntu 22.04.

**Atualização de Versões:** Atualizado o Flask para 3.1.2 e ajustadas as dependências para resolver vulnerabilidades de segurança e garantir compatibilidade com as bibliotecas modernas do mysqlclient.

**Portfólio Profissional:** Escolha do Git/GitHub para controle de versão e documentação, permitindo que o projeto seja apresentado como um portfólio DevOps profissional.
