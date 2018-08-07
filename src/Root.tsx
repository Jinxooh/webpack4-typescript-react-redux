import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Hello } from "./components/Hello";

const Root = () => <Hello compiler="TypeScript" framework="React" />;

export default hot(module)(Root);
