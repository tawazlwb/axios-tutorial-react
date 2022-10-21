import { useEffect } from 'react'
import axios from 'axios'
import { authFetch } from '../axios/custom'

const randomUserUrl = 'https://randomuser.me/api'

const CustomInstance = () => {
  const fetchData = async () => {
    console.log('custom axios instance')
    try {
      const response1 = await authFetch('/react-store-products')
      const response2 = await axios(randomUserUrl)
      console.log('productsUrl :', response1)
      console.log('randomUserUrl :', response2)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className='text-center'>custom instance</h2>
}
export default CustomInstance
