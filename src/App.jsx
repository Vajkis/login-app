import { useReducer } from 'react';
import './App.scss';
import DataContext from './components/DataContext';
import Registration from './components/Registration';
import data_reducer from './reducers/dataReducer';

function App() {

  const [data, dispachData] = useReducer(data_reducer, null);

  return (
    <DataContext.Provider value={{
      data,
      dispachData
    }}>
      <Registration />
    </DataContext.Provider>
  );
}

export default App;
