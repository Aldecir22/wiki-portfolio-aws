# Project Context | Contexto do Projeto

![Arquitetuura de Migração para AWS](./images/image.png)

[🇺🇸 English]

## Target Architecture Design

1.Network Topology (VPC)

Region: us-east-1.

**CIDR Block:** 10.0.0.0/16 to avoid overlapping with the simulated on-premises environment.

**Public Subnet (10.0.0.0/24):** Hosts the EC2 instance (Application Server) to allow external access via Internet Gateway.

**Private Subnet (10.0.1.0/24):** Isolates the RDS instance (Database) from direct internet exposure.

## 2.Compute & Storage (Sizing)

**Application:** EC2 t2.micro running Ubuntu 22.04 LTS. Chosen for Free Tier eligibility while meeting the 1 vCPU / 1GB RAM requirement.

**Database:** RDS MySQL db.t3.micro. Selected to provide a managed, scalable environment with automated backups.

## 3.Security Strategy

**app01-sg:** Permitting inbound traffic on ports 22 (SSH) for management and 8080 (Application).

**EC2toRDS-sg:** Restricted to port 3306, allowing traffic ONLY from the Application Security Group.

[🇧🇷 Português]

## Design da Arquitetura Alvo

## 1. Topologia de Rede (VPC)

**Região:** us-east-1.

**Bloco CIDR:** 10.0.0.0/16 para evitar sobreposição com o ambiente on-premises.

**Subnet Pública (10.0.0.0/24):** Hospeda a instância EC2 (App) para permitir acesso externo via Internet Gateway.

**Subnet Privada (10.0.1.0/24):** Isola a instância RDS (DB) de exposição direta à internet.

## 2.Computação e Armazenamento (Sizing)

**Aplicação:** EC2 t2.micro rodando Ubuntu 22.04 LTS. Escolhida por ser elegível ao Free Tier e atender ao requisito de 1 vCPU / 1GB RAM.

**Banco de Dados:** RDS MySQL db.t3.micro. Selecionado para fornecer um ambiente gerenciado e escalável com backups automáticos.

## 3.Estratégia de Segurança

**app01-sg:** Permite tráfego de entrada nas portas 22 (SSH) para gerência e 8080 (Aplicação).

**EC2toRDS-sg:** Restrito à porta 3306, permitindo tráfego APENAS vindo do Security Group da Aplicação.
