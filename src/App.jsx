
import './App.css'
import Select from 'react-select'

import { Tables } from './components/Tables'
import { useForm } from './hooks/useForm'
import { useState } from 'react'
import { selectStyle } from './logic/selectStyles'

function App () {
  const { caudal, setCaudal, temp1, setTemp1, temp2, setTemp2, servicio, setServicio, error } = useForm('')
  const [select, setSelect] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const total = (Number(caudal) * (Number(temp1) - Number(temp2)) * Number(servicio) * 1000 * 0.0003069).toFixed(0)

  // const redirectTables = () => {
  //   window.location.replace('http://localhost:5173/tables')
  // }
  const selectOptios = [
    { label: '500', value: 500 },
    { label: '700', value: 700 },
    { label: '1000', value: 1000 }
  ]

  return (

    <>
      <h1>Formulario</h1>

      <div className='signupFrm '>
        <form action='' onSubmit={handleSubmit} className='form'>

          <div className='inputContainer'>
            <input className='input' type='number' placeholder='caudal' onChange={e => setCaudal(e.target.value)} value={caudal} />
            <label className='label' htmlFor=''>Caudal:</label>
          </div>

          <div className='inputContainer'>
            <input className='input' type='number' placeholder='temperatura de entrada' onChange={e => setTemp1(e.target.value)} value={temp1} />
            <label className='label' htmlFor=''>Temperatura de entrada:</label>
          </div>

          <div className='inputContainer'>
            <input className='input' type='number' placeholder='temperatura de salida' onChange={e => setTemp2(e.target.value)} value={temp2} />
            <label className='label' htmlFor=''>Temperatura de salida:</label>
          </div>

          <div className='inputContainer'>
            <input className='input' type='number' placeholder='factor servicio' onChange={e => setServicio(e.target.value)} value={servicio} />
            <label className='label' htmlFor=''>Servicio:</label>
          </div>

          <div className='inputContainer'>
            <Select styles={selectStyle()} options={selectOptios} onChange={e => setSelect(e.value)} placeholder='chiller:' />
          </div>

          <button className='submitBtn'>Enviar</button>

          {error && <p className='error'>{error}</p>}
        </form>
      </div>

      <p>Tamaño del DT (En TR) : {total}</p>
      <p>{select}</p>

      <Tables caudal={caudal} temp1={temp1} temp2={temp2} servicio={servicio} total={total} />
    </>
  )
}

export default App
