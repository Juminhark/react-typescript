# react-typescript

## tutorial

- [`Classsed - react typescript tutorial`](https://www.youtube.com/watch?v=0_C2X1yRRac)
- [`velopert - using hooks with typescript`](https://velog.io/@velopert/using-hooks-with-typescript)
- [`Microsotf - Typescript-react-starter`](https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter)
- [`Ben Award - React Typescript Tutorial`](https://www.youtube.com/watch?v=Z5iWr6Srsj8)

## init

```sh
npx create-react-app my-app --typescript

npx create-react-app my-app --template typescript
```

```ts
export const TextField: React.FC<{ text: string }> = () => {
  // ...
};

// or

interface Props {
  text: string;
}

export const TextField: React.FC<Props> = () => {
  // ...
};
```

위 예처럼 props 를 강제 하면 component 사용시 arg를 갖지 않으면 error

```ts
import TextField from './components/TextField';

const App: React.FC = () => {
  return (
    <div className='App'>
      <TextField /> // error
    </div>
  );
};
```

```ts
<TextField text='hello world' />
```

```ts
interface Props {
  text: string;
  ok?: boolean;
}
```

```ts
export const TextField: React.FC<Props> = ({ text }) => {
  return <div>{text}</div>;
};
```

```ts
const [count, setCount] = useState<number | null>(5);

setCount(12);
```
