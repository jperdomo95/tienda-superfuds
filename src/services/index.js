const Http = {}

const headers = new Headers()
headers.append("X-Requested-With", "XMLHttpRequest")
headers.append("Content-Type", "application/json")

Http.get = async (url, params, token) => {

  token && headers.append("Authorization", `Bearer ${token}`)
  try {
    const requestResponse = await fetch(url, { method: 'GET', headers })
    const response = await requestResponse.json()
    return response
  } catch (error) {
    return new Error(error)
  }
}

Http.post = async () => null

export default Http