import logo from './logo.svg';
import './App.css';
import './index.css';
import store from './lib/store';
import { Provider } from 'react-redux';
import InboxScreen from './components/InboxScreen';


import { Requirements } from 'react-comp-b';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
       <Requirements />
       <InboxScreen />
     </Provider>
    </div>
  );
}

export default App;
