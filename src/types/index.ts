export interface User {
    id: number,
    nome: string,
    idade: number,
    cpf: number,
    endereco: string,
    email: string,
    telefone: string
}

export interface Fornecedor {
    id: number,
    razao: string,
    cnpj: number,
    endereco: string,
    email: string,
    telefone: string
}

export interface Produto {
    id: number,
    nome: string,
    descricao: string,
    preco: number,
    quantidade: number
}

export interface Entrega {
    id: number,
    nome: string,
    cnpj: number,
    endereco: string,
    email: string,
    telefone: string
}