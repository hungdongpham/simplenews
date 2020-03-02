import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import history from 'routes/history';
import middleware from '../middleware';
import rootReducer from '../reducers';

export default function configureStore() {
  const store = createStore(
    rootReducer(history),
    composeWithDevTools(applyMiddleware(routerMiddleware(history), ...middleware))
  );
  return store;
}
