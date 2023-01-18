import './result.sass';

function Result() {
  return (
    <aside>
        <div className='container-result'>
            <h2>Você receberá:</h2>
            <div>
                <i>amanhã:</i>
                <span>R$ 0.00</span>
            </div>
            <div>
                <i>Em 15 dias:</i>
                <span>R$ 0.00</span>
            </div>
            <div>
                <i>Em 30 dias:</i>
                <span>R$ 0.00</span>
            </div>
            <div>
                <i>Em 90 dias:</i>
                <span>R$ 0.00</span>
            </div>
        </div>
    </aside>
  )
};

export default Result;