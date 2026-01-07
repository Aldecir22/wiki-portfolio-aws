# ABC Company Wiki - AWS Cloud Migration Portfolio

O objetivo deste site é demonstrar a apresentação da transição da infraestrutura da ABC Company, um ambiente On-Premises, e gerenciá-la na Amazon Web Services (AWS) registrando: cada etapa da migração, ferramentas e stacks utilizadas, validação, decisões e aprendizados com o hand-son como parte do portifólio.

## 🔗 Acesso ao Projeto

**🌐 Documentação Visual (Site):** Acesse o Portfólio Online Aqui (Substitua pelo seu link real)

**💻 Repositório do Portfólio:** github.com/Aldecir22/cloud-migration-aws-portifolio

## 🏗️ Arquitetura do Estudo de Caso

A migração foi baseada em uma topologia de rede isolada e segura, utilizando o AWS Free Tier de forma otimizada.

**Cloud AWS:** Instância EC2 (Aplicação), RDS MySQL (Banco de Dados), VPC personalizada, S3 (Staging de Artefatos) e Bucket S3 (Site/portifólio).

**Ambiente Operacional:** Ubuntu Server 22.04 LTS.

**Stack da Aplicação:** Python 3.10 (isolado via venv) e Framework Flask.

**Segurança:** Segmentação em subnets públicas/privadas e Security Groups com regras de tráfego restritivas.

## 🛠️ Tecnologias Utilizadas na Documentação

Para apresentar este projeto com o máximo de clareza e profissionalismo, utilizei uma stack moderna de desenvolvimento web:

**Vite, React & TypeScript:** Para garantir uma aplicação web rápida, tipada e com excelente experiência de usuário.

**shadcn/ui & Tailwind CSS:** Interface focada em legibilidade técnica, seguindo padrões modernos de design de software.

**Documentação em Markdown:** Todos os guias de comandos e decisões técnicas foram versionados para garantir rastreabilidade.

## 🚀 Implementação e Destaques Técnicos

O portfólio destaca os pontos críticos que diferenciam uma migração bem-sucedida:

**Apresentação Lógica:** Navegação cronológica do provisionamento (Fase 1) ao Go-Live (Fase 4).

**Resolução de Conflitos:** Detalhamento da correção do runtime Python (Downgrade de 3.12 para 3.10 via PPA) para garantir compatibilidade com código legado.

**Conectividade e Segurança:** Configuração de tabelas de rotas, Internet Gateway e isolamento de banco de dados em subnet privada.

**Organização Modular:** Componentes React desenvolvidos para exibir blocos de código e diagramas de forma intuitiva.

## 💻 Como Executar este Portfólio Localmente

Se desejar explorar o código do site de documentação em sua máquina:

## Clone o repositório

```Bash
git clone https://github.com/Aldecir22/cloud-migration-aws-portifolio.git
```

## Entre na pasta do projeto

```Bash
cd cloud-migration-aws-portifolio
```

## Instale as dependências

```bash
npm install
```

## Inicie o servidor de desenvolvimento

```bash
npm run dev
```

## 👤 Contato

**LinkedIn:** [linkedin.com/in/aldecir-santana](https://www.linkedin.com/in/aldecir-santana-66b960187/)

**GitHub:** [github.com/Aldecir22](https://github.com/Aldecir22/)
