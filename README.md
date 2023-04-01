## vite + React + TypeScript - project
npm create vite@latest

cd vite-project

npm install

npm run dev

npm install -D vitest

npm i -D jsdom @testing-library/react @testing-library/jest-dom

Open vit.config.ts file and some lines of code
/// <reference types="vitest" />
/// <reference types="vite/client" />

and 
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
  },

Open tsconfig.json file and add..
"types": ["vitest/globals"]

Create App.test.tsx file
Write your tests
Create test folder - add setup.ts file

The setup
* eslint, eslint-airbnb-config, prettier
  -npm i -D eslint
  -npx eslint --init
  -npx install-peerdeps --dev eslint-config-airbnb
  -add the folowing in exlintrc.cjs with after extends
        "airbnb",
        "airbnb/hooks",
  -install plugin eslint-config-airbnb-typescript
  npm i -D eslint-config-airbnb-typescript
  - add after extends
    'airbnb-typescript'
  - npm i -D prettier eslint-config-prettier eslint-plugin-prettier
  

* vitest, jsdom, @testing-library
* react-router

Backend setup
npm init -y
npm install express cors mongoose dotenv
* cors stands for - "cross origin resource sharing;
npm i nodemon
npm start

* install MySQL2
npm install --save mysql2