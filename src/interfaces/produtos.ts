import axios from "axios"
import {Produto} from "../types"

const api = axios.create({
    baseURL: "http://localhost:3333"
})

export const renderProdutos = (): Promise<Produto[]> => {
    return api.get<Produto[]>("/produtos").then(response => response.data)
}

export const createProduto = (produto: Omit<Produto, "id">): Promise<Produto> => {
    return api.post<Produto>("/produtos", produto).then(response => response.data)
}

export const deleteProduto = async (id: number): Promise<void> => {
    await api.delete(`/produtos/${id}`)
}

export const updateProduto = (id: number, produto: Omit<Produto, "id">): Promise<Produto> => {
    return api.put<Produto>(`/produtos/${id}`, produto).then(response => response.data)
}