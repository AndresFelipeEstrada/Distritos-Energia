
import './App.css'
import Select from 'react-select'

import { statics } from './logic/statics'
import { Tables } from './components/Tables'
import { useForm } from './hooks/useForm'
import { customStyles, selectOptios } from './logic/selectLogic'

function App () {
  const {
    caudal, setCaudal,
    temp1, setTemp1,
    temp2, setTemp2,
    servicio, setServicio,
    centrifugo, setCentrifugo,
    absorcion, setAbsorcion,
    cantCentrifugo, setCantCentrifugo,
    cantAbsorcion, setCantAbsorcion,
    error
  } = useForm()

  const handleSubmit = (event) => {
    event.preventDefault()

    const element = document.getElementById('1')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const total = Math.floor((Number(caudal) * (Number(temp1) - Number(temp2)) * Number(servicio) * statics.global1 * statics.global2))

  return (

    <>
      <h1>Formulario</h1>

      <div className='signupFrm '>
        <form action='' onSubmit={handleSubmit} className='form'>

          <div className='inputContainer'>
            <input className='input' type='number' placeholder='caudal' onChange={e => setCaudal(e.target.value)} value={caudal} />
            <label className='label'>Caudal:</label>
          </div>

          <div className='inputContainer'>
            <input className='input' type='number' placeholder='temperatura de entrada' onChange={e => setTemp1(e.target.value)} value={temp1} />
            <label className='label'>Temperatura de entrada:</label>
          </div>

          <div className='inputContainer'>
            <input className='input' type='number' placeholder='temperatura de salida' onChange={e => setTemp2(e.target.value)} value={temp2} />
            <label className='label'>Temperatura de salida:</label>
          </div>

          <div className='inputContainer'>
            <input className='input' type='number' placeholder='factor servicio' onChange={e => setServicio(e.target.value)} value={servicio} />
            <label className='label'>Servicio:</label>
          </div>

          <div className=''>
            <div className='inputContainer select1'>
              <Select styles={customStyles} options={selectOptios} onChange={e => setCentrifugo(e.value)} placeholder='chiller centrifugos:' />
            </div>

            <div className='inputContainer'>
              <input className='input' type='text' placeholder='Cantidad' onChange={e => setCantCentrifugo(e.target.value)} value={cantCentrifugo} />
              <label className='label'>Cantidad:</label>
            </div>
          </div>

          <div className=''>
            <div className='inputContainer select2'>
              <Select styles={customStyles} options={selectOptios} onChange={e => setAbsorcion(e.value)} placeholder='chiller absorcion:' />
            </div>

            <div className='inputContainer'>
              <input className='input' type='text' placeholder='Cantidad' onChange={e => setCantAbsorcion(e.target.value)} value={cantAbsorcion} />
              <label className='label'>Cantidad:</label>
            </div>
          </div>

          <a href='1'>
            <button className='submitBtn'>Mostrar</button>
          </a>

          {error && <p className='error'>{error}</p>}
        </form>
      </div>

      <div className='container total-container'>
        <p className='dt'>Tamaño del DT (En TR) : {total}</p>
      </div>

      <Tables caudal={caudal} temp1={temp1} temp2={temp2} servicio={servicio} total={total} centrifugo={centrifugo} absorcion={absorcion} />
    </>
  )
}

export default App
