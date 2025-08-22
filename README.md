# 🐱 Pet Gallery - Galeria Interativa de Gatos

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15.5.0-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4+-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind">
  <img src="https://img.shields.io/badge/React-18.3+-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
</div>

<p align="center">
  Uma aplicação web moderna e responsiva para explorar diferentes raças de gatos do mundo todo, com funcionalidades de favoritos, tradução automática e navegação intuitiva.
</p>

<div align="center">
  <a href="https://github.com/albertoaraujoo/pet-gallery">🚀 Ver Demo</a> •
  <a href="#-funcionalidades">✨ Funcionalidades</a> •
  <a href="#-tecnologias">🛠️ Tecnologias</a> •
  <a href="#-instalação">📦 Instalação</a>
</div>

---

## 📖 Sobre o Projeto

Pet Gallery é uma aplicação desenvolvida como desafio técnico para vaga de Front-end Developer, utilizando **Next.js 15** com **App Router** e **TypeScript**. O projeto consome a **The Cat API** para exibir informações detalhadas sobre diferentes raças de gatos em uma interface moderna e responsiva.

### 🎯 Objetivos Alcançados

- ✅ **Tabela responsiva** com listagem de gatos
- ✅ **Páginas dinâmicas** de detalhes (`/pet/[id]`)
- ✅ **Sistema de favoritos** com persistência em cookies
- ✅ **Tradução automática** de descrições e temperamentos
- ✅ **Scroll infinito** para carregamento contínuo
- ✅ **Fallback de imagens** quando API falha
- ✅ **Página 404 customizada** para pets não encontrados
- ✅ **Interface responsiva** para desktop e mobile

## ✨ Funcionalidades

### 📊 **Listagem Principal**

- Tabela interativa com informações dos gatos
- Colunas: ID, Raça, Origem (com bandeiras dos países)
- Layout responsivo que se adapta a cards no mobile
- Scroll infinito para carregamento progressivo
- Loading states durante requisições

### 🔍 **Páginas de Detalhes**

- Roteamento dinâmico com `/pet/[id]`
- Imagens em alta qualidade com fallback automático
- Informações completas: raça, origem, temperamento, peso, expectativa de vida
- Tradução automática para português usando MyMemory API
- Seção "Outros gatos que você pode gostar" com algoritmo de randomização

### ❤️ **Sistema de Favoritos**

- Botões interativos para favoritar/desfavoritar
- Persistência em cookies com duração de 30 dias
- Página dedicada `/favoritos` com grid de gatos salvos
- Server Actions para operações assíncronas
- Estado otimista para melhor UX

### 🎨 **Interface e UX**

- Design dark theme moderno
- Animações suaves com Tailwind CSS
- Header inteligente que adapta navegação por página
- Gradientes e efeitos visuais atraentes
- Feedback visual em todas as interações

### 🔧 **Recursos Técnicos**

- TypeScript rigoroso com type guards
- Server Components e Client Components otimizados
- Error boundaries e tratamento de erros
- SEO otimizado com metadados dinâmicos
- Performance otimizada com Next.js Image

## 🛠️ Tecnologias

### **Core Framework**

- **Next.js 15.5.0** - Framework React com App Router
- **React 18.3+** - Biblioteca de interface de usuário
- **TypeScript 5.0+** - Tipagem estática para JavaScript

### **Estilização**

- **Tailwind CSS 3.4+** - Framework CSS utility-first
- **Lucide React** - Biblioteca de ícones moderna
- **React Country Flag** - Componente de bandeiras de países

### **APIs e Dados**

- **The Cat API** - Dados sobre raças de gatos
- **MyMemory Translation API** - Tradução automática para português
- **Cookies** - Persistência do sistema de favoritos

### **Desenvolvimento**

- **ESLint** - Linting de código
- **Prettier** - Formatação de código
- **PostCSS** - Processamento CSS

## 📦 Instalação

### Pré-requisitos

- Node.js 18.0+
- npm ou yarn

### Passos

1. **Clone o repositório**

```bash
git clone https://github.com/albertoaraujoo/pet-gallery.git
cd pet-gallery
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
```

3. **Configure as variáveis de ambiente**

```bash
# Crie um arquivo .env.local na raiz do projeto
NEXT_PUBLIC_CAT_API_KEY=your_cat_api_key_here
```

4. **Execute o projeto**

```bash
npm run dev
# ou
yarn dev
```

5. **Acesse a aplicação**

```
http://localhost:3000
```

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Produção
npm run build        # Gera build de produção
npm run start        # Inicia servidor de produção

# Qualidade de Código
npm run lint         # Executa ESLint
npm run lint:fix     # Corrige problemas do ESLint automaticamente
```

## 📁 Estrutura do Projeto

```
src/
├── app/                      # App Router do Next.js
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Página inicial
│   ├── not-found.tsx        # Página 404 customizada
│   ├── favoritos/           # Página de favoritos
│   └── pet/[id]/           # Páginas dinâmicas de pets
├── actions/                 # Server Actions
│   ├── favorites.ts         # Ações do sistema de favoritos
│   ├── fetch-cats.ts        # Busca de gatos
│   └── fetch-cat-by-id.ts   # Busca gato específico
├── components/              # Componentes React
│   ├── shared/              # Componentes reutilizáveis
│   ├── header/              # Header da aplicação
│   ├── hero/                # Seção hero da homepage
│   ├── pets-table/          # Tabela de pets
│   ├── pet-page/            # Componentes da página de detalhes
│   ├── favorites/           # Componentes do sistema de favoritos
│   └── ui/                  # Componentes de UI base
├── hooks/                   # Custom Hooks
│   └── use-infinite-cats.ts # Hook para scroll infinito
├── utils/                   # Utilitários
│   └── translate.ts         # Função de tradução
└── types/                   # Definições de tipos TypeScript
```

## 🎨 Funcionalidades Técnicas Detalhadas

### **Scroll Infinito**

Implementado com Intersection Observer API para detectar quando o usuário chega ao final da lista, carregando automaticamente mais gatos.

### **Sistema de Tradução**

Utiliza a MyMemory API para traduzir descrições e temperamentos do inglês para português, com cache para evitar requisições desnecessárias.

### **Algoritmo de Gatos Relacionados**

Sistema inteligente que:

- Busca gatos de múltiplas páginas da API
- Remove duplicatas usando Set de IDs
- Embaralha usando algoritmo Fisher-Yates com seed híbrida
- Garante 4 sugestões únicas por página

### **Fallback de Imagens**

Componente `ImageWithFallback` que:

- Detecta falhas de carregamento automaticamente
- Mostra placeholder com ícone de gato
- Mantém dimensões originais do layout
- Funciona em todas as telas (300x300, 528x313, etc.)

### **Server Actions**

Implementação de Server Actions para:

- Operações de favoritos assíncronas
- Validação de dados no servidor
- Melhor performance e SEO

## 📱 Responsividade

- **Desktop**: Layout em duas colunas com tabela completa
- **Tablet**: Grid responsivo com cards
- **Mobile**: Cards empilhados com informações essenciais
- **Breakpoints**: Seguindo padrões do Tailwind CSS

## 🔧 API Integration

### The Cat API

- **Endpoint principal**: `https://api.thecatapi.com/v1/images/search`
- **Filtros**: Busca apenas gatos com informações de raça
- **Paginação**: Sistema de páginas para scroll infinito
- **Rate Limit**: Otimizado para evitar limites da API

### Translation API

- **Serviço**: MyMemory Translation API
- **Idiomas**: Inglês → Português
- **Cache**: Evita traduções repetidas
- **Fallback**: Texto original em caso de falha

## 👨‍💻 Desenvolvedor

<div align="center">
  <img src="https://github.com/albertoaraujoo.png" width="100px" style="border-radius: 50%"/>
  <h3>Alberto Araújo</h3>
  <p>Front-end Developer</p>
  
  <div>
    <a href="https://linkedin.com/in/albertoaraujoo">
      <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
    </a>
    <a href="https://github.com/albertoaraujoo">
      <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
    </a>
  </div>
</div>

---

<div align="center">
  <p>Desenvolvido com ❤️ usando Next.js, TypeScript e Tailwind CSS</p>
  <p>© 2025 Alberto Araújo - Todos os direitos reservados</p>
</div>
