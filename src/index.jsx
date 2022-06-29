/* @refresh reload */
import { render } from 'solid-js/web';
import { injectGlobal } from '@emotion/css';
import { globalStyles } from 'twin.macro';
import App from './App';

injectGlobal(globalStyles);

render(() => <App />, document.getElementById('root'));
