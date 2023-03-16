
import './App.css'
import Select from 'react-select'

import { Tables } from './components/Tables'
import { useForm } from './hooks/useForm'
import { customStyles, selectOptios } from './logic/selectLogic'

function App () {
  const {
    caudal, setCaudal,
    temp1, setTemp1,
    temp2, setTemp2,
    servicio, setServicio,

    setCentrifugo,
    setAbsorcion,

    cantCentrifugo, setCantCentrifugo,
    cantAbsorcion, setCantAbsorcion,
    error, tamanioDT,

    potenciaChillerCentrifugo,
    potenciaChillerAbsorcion
  } = useForm()

  const handleSubmit = (event) => {
    event.preventDefault()

    const element = document.getElementById('1')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
            <div className='inputContainer select select1'>
              <Select
                styles={customStyles}
                options={selectOptios}
                onChange={e => setCentrifugo(e.value)}
                placeholder='chiller centrifugos:'

              />
            </div>

            <div className='inputContainer'>
              <input className='input' type='text' placeholder='Cantidad' onChange={e => setCantCentrifugo(e.target.value)} value={cantCentrifugo} />
              <label className='label'>Cantidad:</label>
            </div>
          </div>

          <div className=''>
            <div className='inputContainer select2'>
              <Select
                styles={customStyles}
                options={selectOptios}
                onChange={e => setAbsorcion(e.value)}
                placeholder='chiller absorcion:'
              />
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
        <p className='dt'>Tamaño del DT (En TR) : {tamanioDT}</p>
      </div>

      <Tables totalCentrifugo={potenciaChillerCentrifugo} totalAbsorcion={potenciaChillerAbsorcion} />
    </>
  )
}

export default App
