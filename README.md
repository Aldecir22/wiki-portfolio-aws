# Cloud Migration Project: On-Premises to AWS

![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)

### 🔗 Contact & Live Demo | Contato e Demonstração

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/aldecir-santana-66b960187/) [![Portfolio](https://img.shields.io/badge/my_portfolio-%23000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://d9zt3nyze4shs.cloudfront.net)

## Migração de Aplicação Web e Banco de Dados: On-Premises para AWS

## Phase 1 - Planning and Preparation |Planejamento e Preparação

[🇺🇸 English]
This repository documents a real-world cloud migration project. The workload consists of a web application with authentication and a MySQL database, moved from a corporate on-premises environment to a custom AWS infrastructure.

-**Goal:** Full migration with zero data loss and validated functionality.
-**Tech Stack:** AWS (EC2, RDS, VPC, S3), Python/Flask, MySQL, Git.
-**Status:** Phase 1 - Planning and Preparation.

[🇧🇷 Português]
Este repositório documenta um projeto real de migração para nuvem. O workload consiste em uma aplicação web com autenticação e banco de dados MySQL, migrados de um ambiente on-premises corporativo para uma infraestrutura AWS personalizada.

-**Objetivo:** Migração completa com zero perda de dados e funcionalidade validada.
-**Tech Stack:** AWS (EC2, RDS, VPC, S3), Python/Flask, MySQL, Git.
-**Status:** Etapa 1 - Planejamento e Preparação.

---

## 🛠️ Phase 2: Connectivity & OS Baseline | Conectividade e Base do SO

[🇺🇸 English]

- **Secure Access:** Established remote management via VS Code SSH using .pem keys.
- **Network Setup:** Attached Internet Gateway (igw-mod03) and configured Public Route Tables.
- **System Hardening:** Installed essential libraries (`libmysqlclient-dev`) and updated repositories to support the application runtime.

[🇧🇷 Português]

- **Acesso Seguro:** Gestão remota via VS Code SSH utilizando chaves .pem.
- **Configuração de Rede:** Conexão do Internet Gateway (igw-mod03) e ajuste das Tabelas de Rotas Públicas.
- **Preparação do SO:** Instalação de bibliotecas essenciais (`libmysqlclient-dev`) e atualização de repositórios para suporte ao runtime da aplicação.

---

## 🚀 Phase 3: Application Deployment & Migration | Deploy e Migração

[🇺🇸 English]

- **Runtime Strategy:** Solved Python 3.12 vs 3.10 conflict using **PPA Deadsnakes** and isolated environments with `venv`.
- **Database Migration:** Successfully imported `dump.sql` into Amazon RDS (MySQL) and created a dedicated application user following the Principle of Least Privilege (PoLP).
- **Go-Live:** Application decoupled from on-premises and validated online at `EC2_PUBLIC_IP:8080`.

[🇧🇷 Português]

- **Estratégia de Runtime:** Resolução do conflito Python 3.12 vs 3.10 via **PPA Deadsnakes** e isolamento com `venv`.
- **Migração de Dados:** Importação do `dump.sql` para o Amazon RDS e criação de usuário dedicado seguindo o Princípio do Menor Privilégio (PoLP).
- **Go-Live:** Aplicação desacoplada do ambiente local e validada em `IP_PUBLICO_EC2:8080`.

---

## ⚡ Phase 4: Modern Infrastructure & CI/CD (The Upgrade)

[🇺🇸 English]

## In the final stage, the project was upgraded to a professional-grade DevOps workflow

- **CloudFront & S3:** The static frontend and evidence assets were moved to a private S3 Bucket, served globally via **Amazon CloudFront** with **Origin Access Control (OAC)** for enhanced security.
- **CI/CD Pipeline:** Fully automated deployment using **GitHub Actions**. Every `git push` triggers:
  1. Automated build of the source code.
  2. Synchronization with S3 (`aws s3 sync --delete`).
  3. Automatic CloudFront cache invalidation.

[🇧🇷 Português]

## Na etapa final, o projeto foi elevado para um workflow DevOps de nível profissional

- **CloudFront & S3:** O frontend estático e as evidências foram movidos para um Bucket S3 privado, servido globalmente via **Amazon CloudFront** com **Origin Access Control (OAC)** para segurança máxima.
- **Pipeline CI/CD:** Automação completa de deploy via **GitHub Actions**. Cada `git push` dispara:
  1. Build automatizado do código fonte.
  2. Sincronização com S3 (`aws s3 sync --delete`).
  3. Invalidação automática do cache do CloudFront.

---

## 💡 Technical Decisions | Decisões Técnicas

[🇺🇸 English]

- **t3.micro Sizing:** Optimized for AWS Free Tier while meeting the 1GB RAM requirement.
- **Environment Isolation:** Used `venv` to prevent conflicts with Ubuntu system binaries.
- **Global Delivery:** Implemented CloudFront to ensure low-latency access and HTTPS encryption.

[🇧🇷 Português]

- **Sizing t3.micro:** Otimizado para o AWS Free Tier, atendendo ao requisito de 1GB de RAM.
- **Isolamento de Ambiente:** Uso de `venv` para evitar conflitos com binários do sistema Ubuntu.
- **Entrega Global:** Implementação do CloudFront para garantir baixa latência e criptografia HTTPS.

---

## ✅ Final Status: **Project Completed & Automated**

🔗 Project documentation available in /docs
🔗 Evidence records available in /evidence
🔗 Evidence of successful deployment and CI/CD logs available in `/evidence`.
