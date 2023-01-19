
import axios from 'axios';
import { useState } from 'react';
import { useMutation } from 'react-query';
import AdvanceForm from './components/AdvanceForm/AdvanceForm';
import Result from './components/Result/Result';

import './styles/app.sass';

function App() {

  const [newValues, setNewValues] = useState({
    1: 0.00,
    15: 0.00,
    30: 0.00,
    90: 0.00
  })
  
  const onSubmitData = (data) => {
    axios.post('https://frontend-challenge-7bu3nxh76a-uc.a.run.app', data)
    .then(response => setNewValues(response.data))
    .catch(err => console.log(err))
  }

  return (
    <main className="App">
      <div className='box'>
        <AdvanceForm onSubmitData={onSubmitData}/>
        <Result newValues={newValues}/>
      </div>
    </main>
  )
};

export default App;
