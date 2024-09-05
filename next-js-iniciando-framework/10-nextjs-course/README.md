# 10-nextjs-course

## Inicializar projeto

```bash
npm init -y
```

### momento onde que vc pode alterar o nome do projeto

### To manually create a new Next.js app, install the required packages

```bash
npm install next@latest react@latest react-dom@latest
```

### criar o arquivo .gitignore

```bash
npx gitignore node
```

## Open your package.json file and add the following scripts

```bash
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

### Criar uma pasta pages

pages/index.js
pages/faq.js

### Utilizar o next/link

### Criando o primeiro componente

src/components/Link/index.js
