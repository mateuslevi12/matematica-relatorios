import { api } from "./api"
import * as XLSX from 'xlsx';

export async function getBaseAlunos(): Promise<[]> {
    const response = await api.get(`/baseDeAlunos`)

    return response.data.result
}

export async function getBaseDengue(): Promise<[]> {
    const response = await api.get(`/baseDeDengue`)

    return response.data.result
}

export async function getBaseOnibus(): Promise<[]> {
    const response = await api.get(`/baseDeOnibus`)

    return response.data.result
}

export async function getRelatorio1(): Promise<[]> {
    const response = await api.get(`/relatorio1`)

    return response.data.result
}

export async function getRelatorio2(): Promise<[]> {
    const response = await api.get(`/relatorio2`)

    return response.data.result
}

export async function getRelatorio3(): Promise<[]> {
    const response = await api.get(`/relatorio3`)

    return response.data.result
}

export async function getRelatorio4(): Promise<[]> {
    const response = await api.get(`/relatorio4`)

    return response.data.result
}

export async function getRelatorio5(): Promise<[]> {
    const response = await api.get(`/relatorio5`)

    return response.data.result
}

export async function getRelatorio6(): Promise<[]> {
    const response = await api.get(`/relatorio6`)

    return response.data.result
}

export async function getRelatorio7(): Promise<[]> {
    const response = await api.get(`/relatorio7`)

    return response.data.result
}
export async function getRelatorio8(): Promise<[]> {
    const response = await api.get(`/relatorio8`)

    return response.data.result
}
export async function getRelatorio9(): Promise<[]> {
    const response = await api.get(`/relatorio9`)

    return response.data.result
}
export async function getRelatorio10(): Promise<[]> {
    const response = await api.get(`/relatorio10`)

    return response.data.result
}

export async function exportToExcel<IRelatorios>(method: () => Promise<IRelatorios>, numero: string) {
    try {
        const response = await method();

        const responseData = response as { [key: string]: string };
        console.log(responseData)
        // Transforma o objeto em um array de objetos
        const arrayDeObjetos = Object.values(responseData);

        // Mapeia os objetos para um array de arrays
        const arrayDeArrays = arrayDeObjetos.map(objeto => Object.values(objeto));

        const ws = XLSX.utils.aoa_to_sheet(arrayDeArrays);

        ws['!cols'] = [
            { wch: 5 },
            { wch: 20 },
            { wch: 20 },
            { wch: 20 },
            { wch: 15 },
            { wch: 15 },
            { wch: 15 },
            { wch: 10 },
            { wch: 10 },
            { wch: 10 },
            { wch: 10 },
            { wch: 10 },
        ];

        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Dados');

        XLSX.writeFile(wb, `Relatorio ${numero}.xlsx`);
    } catch (err) {
        console.log(err);
    }
}
