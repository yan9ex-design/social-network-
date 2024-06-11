import reportWebVitals from './reportWebVitals';
import state from './components/Redux/state';
import { rerenderEntireTree } from './rerender';


rerenderEntireTree(state);

reportWebVitals();
