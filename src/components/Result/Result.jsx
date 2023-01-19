import './result.sass';

function Result({newValues}) {

  return (
    <aside>
      <div className='container-result'>
        <h2>Você receberá:</h2>
        <div>
          <i>amanhã:</i>
          <span>R$ {newValues[1].toFixed(2)}</span>
        </div>
        <div>
          <i>Em 15 dias:</i>
          <span>R$ {newValues[15].toFixed(2)}</span>
        </div>
        <div>
          <i>Em 30 dias:</i>
          <span>R$ {newValues[30].toFixed(2)}</span>
        </div>
        <div>
          <i>Em 90 dias:</i>
          <span>R$ {newValues[90].toFixed(2)}</span>
        </div>
      </div>
    </aside>
  )
};

export default Result;