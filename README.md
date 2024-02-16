# setup project

```sh
npm create vite@latest
cd $your_project
npm i
```

## install axios

```sh
npm i axios
```

## install jest

```sh
npm i -D jest @types/jest ts-jest
```

## setup dom-test

```sh
npm i -D jest-environment-jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

## create jest.json

```sh
npx ts-jest config:init
```

## jest.config

```js
export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ["./jest.setup.ts"],
};
```

## tsconfig.json

```json
  "compilerOptions": {
    ...,
    "esModuleInterop": true,
    "types": ["@testing-library/jest-dom"]
  }
```

## jest.setup.ts

```sh
touch jest.setup.ts
```

## jest.setup.ts
```ts
import "@testing-library/jest-dom"
```

## package.json

```json
  "scripts": {
    ...,
    "test": "jest",
  }
```

## snapshot更新

```sh
 npm test src/components/SnapshotComponent.test.tsx -- -u
 ```

# setup storybook

```sh
npx sb@7 init
```

## install storybook/jest

```sh
npm i @storybook/jest @storybook/testing-library
```

## publish chromatic

* package.json (buildエラー、act()... が出たら)

```json
  "scripts": {
    ...,
    "build-storybook": "NODE_ENV=development npx storybook build",
  }
```
