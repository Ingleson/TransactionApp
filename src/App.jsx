
import axios from 'axios';
import AdvanceForm from './components/AdvanceForm/AdvanceForm';
import Result from './components/Result/Result';
import './styles/app.sass';

function App() {

  const onSubmitValues = (data) => {
    axios.post
  }

  return (
    <main className="App">
      <div className='box'>
        <AdvanceForm/>
        <Result/>
      </div>
    </main>
  )
};

export default App;
