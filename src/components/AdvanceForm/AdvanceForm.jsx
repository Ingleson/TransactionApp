import './advanceForm.sass';

const AdvanceForm = () => {
  return (
    <form>
        <h2>Simule sua Antecipação</h2>
        <div className='input-type'>
            <span className='span-title'>Infome o valor da venda *</span>
            <div>
                <span>R$</span>
                <input type="number" />
            </div>
        </div>
        <div className='input-type detail-type'>
            <span className='span-title'>Em quantas parcelas *</span>
            <input type="number" />
            <h3>Máximo de 12 parcelas</h3>
        </div>
        <div className='input-type'>
            <span className='span-title'>Informe o percentual de MDR *</span>
            <input type="number" />
        </div>
    </form>
  )
};

export default AdvanceForm;