# CLAUDE.md - Configuração e Tracking do Projeto

## Comandos para Executar o Projeto

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Executar linter
npm run lint
```

## Tracking de Tempo e Custos

### Sessão 1 - 2025-01-16 (Fase 1: Fundação)
- **Início:** [PREENCHER_INICIO]
- **Fim:** [PREENCHER_FIM]
- **Duração:** [CALCULAR_MINUTOS] minutos
- **Custo Estimado:** [DURACAO] × [TAXA_HORA] = R$ [VALOR]
- **Atividades:**
  - ✅ Inicialização do projeto React + TypeScript
  - ✅ Configuração TailwindCSS + Shadcn/UI
  - ✅ Instalação de dependências (React Router, React Query, etc.)
  - ✅ Criação de estrutura básica de pastas
  - ✅ Desenvolvimento de landing page com login por celular
  - ✅ Criação de componentes PhoneLoginForm e OTPVerificationModal
  - ✅ Configuração de rotas e navegação
  - ✅ Criação de estrutura de gestão e documentação
  - ✅ Desenvolvimento do roadmap v1.0

### Template para Próximas Sessões
```
### Sessão X - YYYY-MM-DD
- **Início:** [TIMESTAMP_INICIO]
- **Fim:** [TIMESTAMP_FIM]
- **Duração:** [DURACAO_MINUTOS] minutos
- **Atividades:**
  - [LISTA_DE_ATIVIDADES]
```

## Configurações do Projeto

### Dependências Principais
- React 18.3.1
- TypeScript ~5.6.2
- TailwindCSS ^3.4.17
- React Router DOM ^7.6.2
- React Hook Form ^7.58.0
- React Query ^5.80.7
- Lucide React ^0.515.0
- React Input Mask ^2.0.4

### Estrutura de Pastas
```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes base do Shadcn/UI
│   └── features/       # Componentes específicos de features
├── pages/              # Páginas da aplicação
├── hooks/              # Custom hooks
├── services/           # Serviços e APIs
├── types/              # Definições de tipos TypeScript
├── constants/          # Constantes da aplicação
└── lib/               # Utilitários e configurações
```

### Ferramentas de Desenvolvimento
- Vite para bundling
- ESLint para linting
- PostCSS + Autoprefixer
- Tailwind CSS Animate

## Notas Importantes
- Sempre executar `npm run lint` antes de commits
- Usar Conventional Commits para mensagens de commit
- Seguir padrões do React Hook Form para formulários
- Usar React Query para gerenciamento de estado servidor