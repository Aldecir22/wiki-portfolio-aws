# Phase1 Summary: Cloud Infrastructure & Provisioning

## 1.Network Foundation (VPC)

**VPC Setup:** Established vpc-bootcamp with CIDR 10.0.0.0/16.

**Subnet Segmentation:** Created one Public Subnet and two Private Subnets across different Availability Zones (us-east-1a and us-east-1b) to support RDS requirements.

## 2.Resource Provisioning

**Application Server (EC2):** Provisioned an Ubuntu 22.04 LTS instance (awsuse1app01) in the Public Subnet.

**Managed Database (RDS):** Provisioned a MySQL 8.0 instance (awsuse1db01) within the VPC.

[🇧🇷 Português]

## Resumo da Parte 1: Infraestrutura e Provisionamento Cloud

## 1.Fundação de Rede (VPC)

**Configuração da VPC:** Estabelecida a vpc-bootcamp com CIDR 10.0.0.0/16.

Segmentação de Subnets: Criada uma Subnet Pública e duas Subnets Privadas em diferentes Zonas de Disponibilidade (us-east-1a e us-east-1b) para atender aos requisitos do RDS.

## 2.Provisionamento de Recursos

**Servidor de Aplicação (EC2):** Provisionada uma instância Ubuntu 22.04 LTS (awsuse1app01) na Subnet Pública.

**Banco de Dados Gerenciado (RDS):** Provisionada uma instância MySQL 8.0 (awsuse1db01) dentro da VPC.
