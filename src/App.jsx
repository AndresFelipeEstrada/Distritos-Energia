
import './App.css'
import Select from 'react-select'

import { Tables } from './components/Tables'
import { useForm } from './hooks/useForm'
import { useState } from 'react'
import { customStyles } from './logic/selectStyles'

function App () {
  const { caudal, setCaudal, temp1, setTemp1, temp2, setTemp2, servicio, setServicio, error } = useForm('')

  const [centrifugo, setCentrifugo] = useState('')
  const [cantCentrifugo, setCantCentrifugo] = useState('')
  const [absorcion, setAbsorcion] = useState('')
  const [cantAbsorcion, setCantAbsorcion] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const total = (Number(caudal) * (Number(temp1) - Number(temp2)) * Number(servicio) * 1000 * 0.0003069).toFixed(0)

  const selectOptios = [
    { label: '500', value: 500 },
    { label: '750', value: 750 },
    { label: '1000', value: 1000 }
  ]

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

          <div className='column'>
            <div className='inputContainer'>
              <Select styles={customStyles} options={selectOptios} onChange={e => setCentrifugo(e.value)} placeholder='chiller centrifugos:' />
            </div>

            <div className='inputContainer columnCant'>
              <input className='input' type='text' placeholder='Cantidad' />
              <label className='label'>Cantidad:</label>
            </div>

            <div className='inputContainer columnSelect'>
              <Select styles={customStyles} options={selectOptios} onChange={e => setAbsorcion(e.value)} placeholder='chiller absorcion:' />
            </div>

            <div className='inputContainer columnCant'>
              <input className='input' type='text' placeholder='Cantidad' />
              <label className='label'>Cantidad:</label>
            </div>
          </div>

          <button className='submitBtn'>Enviar</button>

          {error && <p className='error'>{error}</p>}
        </form>
      </div>

      <p>Tamaño del DT (En TR) : {total}</p>
      <p>{centrifugo}</p>
      <p>{absorcion}</p>

      <Tables caudal={caudal} temp1={temp1} temp2={temp2} servicio={servicio} total={total} />
    </>
  )
}

export default App
