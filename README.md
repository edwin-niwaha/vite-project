# vite-project
npm create vite@latest

cd vite-project

npm install

npm run dev

npm install -D vitest

npm i -D jsdom @testing-library/react @testing-library/jest-dom

Open vit.config.ts file and some lines of code
Add these lines
/// <reference types="vitest" />
/// <reference types="vite/client" />
and 
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
  },
  
Open tsconfig.json file
Add 
"types": ["vitest/globals"]

Create App.test.tsx file
Write your tests

Create test folder - add setup.ts file
