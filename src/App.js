import { Route } from 'react-router-dom';

import Table from './components/Table/Table';
import Form from './components/Form/Form';
import Todo from './components/ToDo/Todo';
import Creator from './components/Creator/Creator';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <>
    <Sidebar />
    <Route path="/" exact component={Form} />
    <Route path="/table" component={Table} />
    <Route path="/todo" component={Todo} />
    <Route path="/creator" component={Creator} />
    </>
  );
}

export default App;
