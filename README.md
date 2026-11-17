# Meu Portfólio Pessoal

Portfólio responsivo para estudante de Tecnologia da Informação, com apresentação, habilidades e projetos acadêmicos ou em desenvolvimento.

## Tecnologias

- React e JavaScript
- Vite
- React Router DOM
- HTML5 e CSS3

## Funcionalidades

- Navegação entre as páginas inicial, projetos, contato e página 404 sem recarregar o navegador.
- Menu responsivo com botão hambúrguer.
- Seções de apresentação, sobre mim, habilidades e projetos.
- Cards reutilizáveis de habilidades e projetos.
- Modal com detalhes do projeto, fechado pelo botão, clique fora ou tecla Escape.
- Formulário controlado com `useState` e validação demonstrativa; não envia dados a um servidor.
- Layout adaptável para celulares, tablets e computadores.

## Estrutura principal

```text
src/
├── components/       # Navbar, seções, cards, modal, contato e rodapé
├── data/             # Dados de habilidades, projetos e contatos editáveis
├── pages/            # Páginas das rotas e página 404
├── App.jsx           # Configuração das rotas
├── App.css           # Estilos dos componentes e layout
├── index.css         # Variáveis e estilos globais
└── main.jsx          # Inicialização React
public/
└── profile-placeholder.svg
```

## Instalação

É necessário ter Node.js e npm instalados. Na pasta do projeto, instale as dependências:

```bash
npm install
```

## Executar localmente

```bash
npm run dev
```

O Vite informará o endereço local no terminal (por padrão, `http://localhost:5173`). Para verificar a versão de produção:

```bash
npm run build
npm run preview
```

## Personalização antes de publicar

1. Substitua `public/profile-placeholder.svg` pela foto real. Mantenha o caminho `/profile-placeholder.svg` ou atualize o `src` em `src/components/Hero.jsx`.
2. Informe apenas contatos reais em `src/data/contact.js`.
3. Adicione a URL de cada repositório no campo `githubUrl` em `src/data/projects.js`. Os links ficam indisponíveis enquanto estiverem vazios.
4. Atualize os dados dos projetos conforme o desenvolvimento real. Os itens existentes são descrições de projetos acadêmicos ou em desenvolvimento.

## Publicação no GitHub

1. Crie um repositório vazio no GitHub e envie os arquivos do projeto, sem `node_modules` ou `dist` (ambos estão no `.gitignore`).
2. Configure a publicação do site com GitHub Pages ou outro serviço de hospedagem que ofereça suporte a aplicações React/Vite e fallback de SPA para as rotas do React Router.
3. Depois da publicação, adicione aqui o endereço real da versão publicada. **Ainda não há uma URL publicada configurada.**

## Conceitos React usados

- **Componentes:** a interface foi separada em arquivos menores dentro de `src/components/` e `src/pages/`.
- **Props:** `SkillCard` recebe os dados de cada habilidade; `ProjectCard` recebe os dados do projeto e a função para abrir seus detalhes.
- **Estado:** o menu, o projeto selecionado/modal e os campos do formulário utilizam `useState`.
- **Rotas:** `BrowserRouter`, `Routes` e `Route` definem `/`, `/projetos`, `/contato` e a página 404.
