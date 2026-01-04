# Project Context | Contexto do Projeto

![AWS Migration Architecture](./images/arquiteture.png)

## Target Architecture Design

### 1.Network Topology (VPC)

**Region:** us-east-1.

**CIDR Block:** 10.0.0.0/16 to avoid overlapping with the simulated on-premises environment.

**Public Subnet (10.0.0.0/24):** Hosts the EC2 instance (Application Server) to allow external access via Internet Gateway.

**Private Subnet (10.0.1.0/24):** Isolates the RDS instance (Database) from direct internet exposure.

## 2.Compute & Storage (Sizing)

**Application:** EC2 t3.micro running Ubuntu 22.04 LTS. Chosen for Free Tier eligibility while meeting the 2 vCPU / 1GB RAM requirement.

**Database:** RDS MySQL db.t3.micro. Selected to provide a managed, scalable environment with automated backups.

## 3.Security Strategy

**app01-sg:** Permitting inbound traffic on ports 22 (SSH) for management and 8080 (Application).

**EC2toRDS-sg:** Restricted to port 3306, allowing traffic ONLY from the Application Security Group.
___

**Phase 2:** Connectivity and Security Implementation

## 1. External Access (Internet Gateway)

**Component:** igw-mod03.

**Function:** Attached to vpc-bootcamp to allow bidirectional traffic between the Public Subnet and the Internet.

**Routing:** Updated the Public Route Table to forward all outbound traffic (0.0.0.0/0) to the Internet Gateway.

## 2.Traffic Control (Security Groups)

**app01-sg (Application Layer): * Inbound:** Port 22 (SSH) for management and Port 8080 for application access.

E**C2toRDS-sg (Database Layer): * Inbound:** Port 3306 (MySQL) restricted exclusively to traffic originating from app01-sg.
___
[🇧🇷 Português]

## Design da Arquitetura Alvo

![AWS Migration Architecture](./images/arquitetura.png)

## 1. Topologia de Rede (VPC)

**Região:** us-east-1.

**Bloco CIDR:** 10.0.0.0/16 para evitar sobreposição com o ambiente on-premises.

**Subnet Pública (10.0.0.0/24):** Hospeda a instância EC2 (App) para permitir acesso externo via Internet Gateway.

**Subnet Privada (10.0.1.0/24):** Isola a instância RDS (DB) de exposição direta à internet.

## 2.Computação e Armazenamento (Sizing)

**Aplicação:** EC2 t3.micro rodando Ubuntu 22.04 LTS. Escolhida por ser elegível ao Free Tier e atender ao requisito de 2 vCPU / 1GB RAM.

**Banco de Dados:** RDS MySQL db.t3.micro. Selecionado para fornecer um ambiente gerenciado e escalável com backups automáticos.

## 3.Estratégia de Segurança

**app01-sg:** Permite tráfego de entrada nas portas 22 (SSH) para gerência e 8080 (Aplicação).

**EC2toRDS-sg:** Restrito à porta 3306, permitindo tráfego APENAS vindo do Security Group da Aplicação.
___
**Etapa 2:** Implementação de Conectividade e Segurança

## 1. Acesso Externo (Internet Gateway)

**Componente:** igw-mod03.

**Função:** Anexado à vpc-bootcamp para permitir tráfego bidirecional entre a Subnet Pública e a Internet.

**Roteamento:** Tabela de Rotas Pública atualizada para direcionar todo o tráfego de saída (0.0.0.0/0) para o Internet Gateway.

## 2. Controle de Tráfego (Security Groups)

**app01-sg (Camada de Aplicação): * Entrada:** Porta 22 (SSH) para gerência e Porta 8080 para acesso à aplicação.

**EC2toRDS-sg (Camada de Dados): * Entrada:** Porta 3306 (MySQL) restrita exclusivamente ao tráfego originado do app01-sg.
___
