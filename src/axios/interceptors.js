import axios from 'axios'

const authFetch = axios.create({
  baseURL: 'https://course-api.com',
})

authFetch.interceptors.request.use(
  (request) => {
    request.headers.common['Accept'] = 'application/json'
    console.log('request sent :', request)

    return request
  },
  (error) => {
    console.log('response error :', error)

    return Promise.reject(error)
  }
)

authFetch.interceptors.response.use(
  (response) => {
    console.log('got response :', response)
    return response
  },
  (error) => {
    console.log('response error :', error)
    if (error.response.status === 404) {
      // do somthing
      console.log('NOT FOUND')
    }

    return Promise.reject(error)
  }
)

export { authFetch }
export default authFetch
