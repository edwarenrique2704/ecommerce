import axios from './axiosInstance';


export const getProductsRequest=() =>axios.get(`/products/`)
export const createNewProductRequest= (data) => {return axios.post(`/product/`, data, {
    headers:{
        'Content-Type': 'multipart/form-data'
    }
})}

export const updateProductRequest = (id, data) => axios.put(`/product/${id}`, data, {
    headers:{
        'Content-Type': 'multipart/form-data'
    }
})


export const deleteProductsRequest=(id) => axios.delete(`/product/${id}`)
export const getProductByIdRequest = (id) => axios.get(`/product/${id}`);