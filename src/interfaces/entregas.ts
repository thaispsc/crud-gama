import axios from "axios"
import {Entrega} from "../types"

const api = axios.create({
    baseURL: "http://localhost:3333"
})

export const renderEntregas = (): Promise<Entrega[]> => {
    return api.get<Entrega[]>("/entregas").then(response => response.data)
}

export const createEntrega = (entrega: Omit<Entrega, "id">): Promise<Entrega> => {
    return api.post<Entrega>("/entregas", entrega).then(response => response.data)
}

export const deleteEntrega = async (id: number): Promise<void> => {
    await api.delete(`/entregas/${id}`)
}

export const updateEntrega = (id: number, entrega: Omit<Entrega, "id">): Promise<Entrega> => {
    return api.put<Entrega>(`/entregas/${id}`, entrega).then(response => response.data)
}