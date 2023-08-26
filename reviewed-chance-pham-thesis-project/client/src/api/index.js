import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})


export const insertOrder = payload => api.post(`/order`, payload)
export const getAllOrders = () => api.get(`/orders`)
export const checkPass = payload => api.post(`/pass`, payload)
export const updateOrderById = (id, payload) => api.put(`/order/${id}`, payload)
export const deleteOrderById = id => api.delete(`/order/${id}`)
export const getOrderById = id => api.get(`/order/${id}`)
const apis = {
    insertOrder,
    getAllOrders,
    updateOrderById,
    deleteOrderById,
    getOrderById,
    checkPass,
}

export default apis