import axios from "axios"
import {Fornecedor} from "../types"

const api = axios.create({
    baseURL: "http://localhost:3333"
})

export const renderFornecedores = (): Promise<Fornecedor[]> => {
    return api.get<Fornecedor[]>("/fornecedores").then(response => response.data)
}

export const createFornecedor = (fornecedor: Omit<Fornecedor, "id">): Promise<Fornecedor> => {
    return api.post<Fornecedor>("/fornecedores", fornecedor).then(response => response.data)
}

export const deleteFornecedor = async (id: number): Promise<void> => {
    await api.delete(`/fornecedores/${id}`)
}

export const updateFornecedor = (id: number, fornecedor: Omit<Fornecedor, "id">): Promise<Fornecedor> => {
    return api.put<Fornecedor>(`/fornecedores/${id}`, fornecedor).then(response => response.data)
}