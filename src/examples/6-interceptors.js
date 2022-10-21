import { useEffect } from 'react'
import authFetch from '../axios/interceptors'

const url = 'https://course-api.com/react-store-products'

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const response1 = await authFetch('/react-store-productss')
      //  const response2 = await axios(url)
      console.log('productsUrl :', response1)
      //  console.log('randomUserUrl :', response2)
    } catch (error) {
      console.log('error catch :', error.response)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className='text-center'>interceptors</h2>
}
export default Interceptors
