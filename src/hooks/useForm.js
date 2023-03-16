import { useEffect, useRef, useState } from 'react'
import { statics } from '../logic/statics'

export const useForm = () => {
  const [error, setError] = useState(null)

  const [caudal, setCaudal] = useState('')
  const [temp1, setTemp1] = useState('')
  const [temp2, setTemp2] = useState('')
  const [servicio, setServicio] = useState('')

  const [centrifugo, setCentrifugo] = useState('')
  const [cantCentrifugo, setCantCentrifugo] = useState('')
  const [absorcion, setAbsorcion] = useState('')
  const [cantAbsorcion, setCantAbsorcion] = useState('')

  const primerInput = useRef(true)

  const potenciaChillerCentrifugo = centrifugo * cantCentrifugo
  const potenciaChillerAbsorcion = absorcion * cantAbsorcion
  const totalChillers = potenciaChillerCentrifugo + potenciaChillerAbsorcion
  const tamanioDT = Math.floor((Number(caudal) * (Number(temp1) - Number(temp2)) * Number(servicio) * statics.global1 * statics.global2))
  const tMax = tamanioDT + (tamanioDT * 0.5)

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

    if (totalChillers < tamanioDT) {
      setError('El total suministrad esta por debajo del Tamaño del DT')
      return
    }

    if (totalChillers >= tMax) {
      setError('El total suministrado excede el Tamaño del DT')
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

    setCentrifugo,
    cantCentrifugo,
    setCantCentrifugo,

    setAbsorcion,
    cantAbsorcion,
    setCantAbsorcion,
    tamanioDT,
    potenciaChillerCentrifugo,
    potenciaChillerAbsorcion
  }
}
