import { useEffect, useRef, useState } from 'react'

export const useForm = () => {
  const [error, setError] = useState(null)

  const [caudal, setCaudal] = useState('')
  const [temp1, setTemp1] = useState('')
  const [temp2, setTemp2] = useState('')
  const [servicio, setServicio] = useState('')

  const [centrifugo, setCentrifugo] = useState('')
  const [cantCentrifugo, setCantCentrifugo] = useState(0)
  const [absorcion, setAbsorcion] = useState('')
  const [cantAbsorcion, setCantAbsorcion] = useState(0)

  const primerInput = useRef(true)

  useEffect(() => {
    if (primerInput.current) {
      primerInput.current = caudal === ''
      return
    }

    if (caudal === '' || temp1 === '' || temp2 === '' || servicio === '' || cantCentrifugo === '' || cantAbsorcion === '') {
      setError('Los campos no pueden estar vacios')
      return
    }

    if ((servicio < 1) || (servicio > 3)) {
      setError('El servicio no puede ser mayor a 3 ni menor que 1')
      return
    }

    if (isNaN(cantCentrifugo) || isNaN(cantAbsorcion)) {
      setError('Las cantidades deben ser en numeros')
      return
    }

    setError(null)
  }, [caudal, temp1, temp2, servicio, cantCentrifugo, cantAbsorcion])

  return {
    error,
    caudal,
    setCaudal,
    temp1,
    setTemp1,
    temp2,
    setTemp2,
    servicio,
    setServicio,
    centrifugo,
    setCentrifugo,
    cantCentrifugo,
    setCantCentrifugo,
    absorcion,
    setAbsorcion,
    cantAbsorcion,
    setCantAbsorcion
  }
}
