import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';


const BASE_URL = 'http://localhost:3000'
const $toast = useToast()

export function useApi() {
  const get = async (endpoint) => {
    const response = await fetch(`${BASE_URL}${endpoint}`)
    if (!response.ok) {
      $toast.error(`GET failed: ${response.status}`)
      throw new Error(`GET failed: ${response.status}`)
    }
    return response.json()
  }

  const put = async (endpoint, data) => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (!response.ok) {
      $toast.error(`PUT failed: ${response.status}`)
      throw new Error(`PUT failed: ${response.status}`)
    }
    return response.json()
  }

  const post = async (endpoint, data) => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (!response.ok) {
      $toast.error(`POST failed: ${response.status}`)
      throw new Error(`POST failed: ${response.status}`)
    }
    return response.json()
  }

  const del = async (endpoint) => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'DELETE'
    })
    if (!response.ok) {
      $toast.error(`DELETE failed: ${response.status}`)
      throw new Error(`DELETE failed: ${response.status}`)
    }
    return response.json()
  }

  return { get, put, post, del }
}