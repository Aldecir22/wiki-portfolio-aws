# Database Connection (MySQL)

[🇺🇸 English]

## Connect to RDS from the EC2 instance

```bash
mysql -h <RDS-ENDPOINT> -P 3306 -u admin -p
```

___

## Database Migration & User Configuration

## 1.Initial Connection and Schema Creation

**Access the RDS instance using the MySQL client:** mysql -h <YOUR-RDS-ENDPOINT> -P 3306 -u admin -p

**Create the application database:** CREATE DATABASE wikidb;

## 2. Data Import (Dump Restoration)

**Select the database:** USE wikidb;.

**Import the SQL dump file:** SOURCE dump.sql;.

Verify data integrity: SELECT * FROM articles;.

## 3.Application User & Privilege Setup

**Create a dedicated user for the application:** CREATE USER wiki@'%' IDENTIFIED BY 'admin123456';.

**Grant full privileges on the specific schema:** GRANT ALL PRIVILEGES ON wikidb.* TO wiki@'%';.

**Apply changes:** FLUSH PRIVILEGES;.

___

[🇧🇷 Português]

## Conectar ao RDS a partir da instância EC2

```bash
mysql -h <RDS-ENDPOINT> -P 3306 -u admin -p
```

___

## Database Migration Commands

**1. Conexão inicial e criação do schema:**
   `create database wikidb;`

**2. Importação do dump:**

   `use wikidb; source dump.sql;`

**3. Configuração de privilégios:**

   `CREATE USER wiki@'%' IDENTIFIED BY 'admin123456';`
   `GRANT ALL PRIVILEGES ON wikidb.* TO wiki@'%';`

___
