import { useEffect, useState } from 'react'

export const useForm = () => {
  const [error, setError] = useState(null)

  const [caudal, setCaudal] = useState('')
  const [temp1, setTemp1] = useState('')
  const [temp2, setTemp2] = useState('')
  const [servicio, setServicio] = useState('')

  const [centrifugo, setCentrifugo] = useState('')
  const [cantCentrifugo, setCantCentrifugo] = useState(1)
  const [absorcion, setAbsorcion] = useState('')
  const [cantAbsorcion, setCantAbsorcion] = useState(1)

  useEffect(() => {
    if (caudal === '' || temp1 === '' || temp2 === '' || servicio === '' || cantCentrifugo === '' || cantAbsorcion === '') {
      setError('Los campos no pueden estar vacios')
      return
    }

    if ((servicio < 1) || (servicio > 3)) {
      setError('El servicio no puede ser mayor a 3 ni menor que 1')
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
