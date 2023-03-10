import { useForm } from 'react-hook-form';
import './advanceForm.sass';

const AdvanceForm = ({onSubmitData}) => {

  const { register, handleSubmit} = useForm()

  return (
    <div className='container-form'>
      <form onSubmit={handleSubmit(onSubmitData)}>
        <h2>Simule sua Antecipação</h2>
        <div className='input-type'>
          <span className='span-title'>Infome o valor da venda *</span>
          <div>
              <span>R$</span>
              <input type="number" {...register('amount')} />
          </div>
        </div>
        <div className='input-type detail-type'>
          <span className='span-title'>Em quantas parcelas *</span>
          <input type="number" {...register('installments')}/>
          <h3>Máximo de 12 parcelas</h3>
        </div>
        <div className='input-type'>
          <span className='span-title'>Informe o percentual de MDR *</span>
          <input type="number" {...register('mdr')}/>
        </div>
        <button>calcular</button>
      </form>
    </div>  
  )
};

export default AdvanceForm;