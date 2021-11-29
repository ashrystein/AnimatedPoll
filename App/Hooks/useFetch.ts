import { useEffect, useState } from 'react'

export default function useFetch(endpoint: Function) {
  const [isLoading, setIsloading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [data, setData] = useState(null)

  const getData = async () => {
    setIsloading(true)
    setIsError(false)
    try {
      const data = await endpoint()
      if (data) {
        setData(data)
      }
    } catch (error) {
      setIsError(true)
    }
    setIsloading(false)
  }

  useEffect(() => {
    getData()
  }, [endpoint])

  return [isLoading, isError, data]
}
