import { TabelaGenerica } from "@/components/TabelaGenerica";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { fetchData } from "@/data/api-methods";
import { IRelatorios } from "@/data/interfaces";
import { exportToExcel, getBaseAlunos, getBaseDengue, getBaseOnibus, getRelatorio1, getRelatorio10, getRelatorio2, getRelatorio3, getRelatorio4, getRelatorio5, getRelatorio6, getRelatorio7, getRelatorio8, getRelatorio9 } from "@/data/relatorios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function DetalheRelatorio() {

    const { nome, quantidade } = useParams()

    const [baseAlunos, setBaseAlunos] = useState<IRelatorios[]>([])
    const [baseDengue, setBaseDengue] = useState<IRelatorios[]>([])
    const [baseOnibus, setBaseOnibus] = useState<IRelatorios[]>([])
    const [relatorio1, setRelatorio1] = useState<IRelatorios[]>([])
    const [relatorio2, setRelatorio2] = useState<IRelatorios[]>([])
    const [relatorio3, setRelatorio3] = useState<IRelatorios[]>([])
    const [relatorio4, setRelatorio4] = useState<IRelatorios[]>([])
    const [relatorio5, setRelatorio5] = useState<IRelatorios[]>([])
    const [relatorio6, setRelatorio6] = useState<IRelatorios[]>([])
    const [relatorio7, setRelatorio7] = useState<IRelatorios[]>([])
    const [relatorio8, setRelatorio8] = useState<IRelatorios[]>([])
    const [relatorio9, setRelatorio9] = useState<IRelatorios[]>([])
    const [relatorio10, setRelatorio10] = useState<IRelatorios[]>([])
    const [filtro, setFiltro] = useState('')

    useEffect(() => {
        if (nome == 'Base de educação') fetchData(getBaseAlunos, setBaseAlunos)
        if (nome == 'Base de saúde') fetchData(getBaseDengue, setBaseDengue)
        if (nome == 'Base de mobilidade') fetchData(getBaseOnibus, setBaseOnibus)
        if (nome == 'Relatorio 1 - Educação') fetchData(getRelatorio1, setRelatorio1)
        if (nome == 'Relatorio 2 - Saúde') fetchData(getRelatorio2, setRelatorio2)
        if (nome == 'Relatorio 3 - Mobilidade') fetchData(getRelatorio3, setRelatorio3)
        if (nome == 'Relatorio 4 - Educação e Saúde') fetchData(getRelatorio4, setRelatorio4)
        if (nome == 'Relatorio 5 - Educação e Mobilidade') fetchData(getRelatorio5, setRelatorio5)
        if (nome == 'Relatorio 6 - Saúde e Mobilidade') fetchData(getRelatorio6, setRelatorio6)
        if (nome == 'Relatorio 7 - Saúde, Mobilidade, Educação') fetchData(getRelatorio7, setRelatorio7)
        if (nome == 'Relatorio 8') fetchData(getRelatorio8, setRelatorio8)
        if (nome == 'Relatorio 9') fetchData(getRelatorio9, setRelatorio9)
        if (nome == 'Relatorio 10') fetchData(getRelatorio10, setRelatorio10)
    }, [nome])

    const labelAlunos = ['ID', 'Nome', 'Data Nascimento']
    const dataAlunos = baseAlunos?.filter(ba => ba.nome?.includes(filtro)).map(ba => [ba.id, ba.nome, formatarData(ba.data_de_nascimento)])

    const labelDengue = ['ID', 'Nome', 'Data Nascimento', 'Data Dengue']
    const dataDengue = baseDengue?.filter(ba => ba.nome?.includes(filtro)).map(ba => [ba.id, ba.nome, formatarData(ba.data_de_nascimento), formatarData(ba.data_de_dengue)])

    const labelOnibus = ['ID', 'Nome', 'Data Nascimento', 'Linhas de onibus']
    const dataOnibus = baseOnibus?.slice(1, baseOnibus.length).filter(ba => ba.nome?.includes(filtro)).map(ba => [ba.id, ba.nome, ba.data_de_nascimento, ba.onibus])

    const label1 = ['ID', 'Nome', 'Data Nascimento']
    const data1 = relatorio1?.filter(ba => ba.nome_aluno?.includes(filtro)).map(ba => [ba.id, ba.nome_aluno, formatarData(ba.data_de_nascimento)])

    const label2 = ['Nome', 'Data Nascimento', 'Data Dengue']
    const data2 = relatorio2?.filter(ba => ba.nome_dengue?.includes(filtro)).map(ba => [ba.nome_dengue, formatarData(ba.data_de_nascimento), formatarData(ba.data_de_dengue)])

    const label3 = ['Nome', 'Data Nascimento', 'Linhas']
    const data3 = relatorio3?.filter(ba => ba.nome_onibus?.includes(filtro)).map(ba => [ba.nome_onibus, ba.data_de_nascimento, ba.linha_onibus])

    const label4 = ['ID', 'Nome', 'Data Nascimento', 'Data Dengue']
    const data4 = relatorio4?.filter(ba => ba.nome_aluno?.includes(filtro)).map(ba => [ba.id, ba.nome_aluno, formatarData(ba.data_de_nascimento), formatarData(ba.data_de_dengue)])

    const label5 = ['ID', 'Nome', 'Data Nascimento', 'Linhas']
    const data5 = relatorio5?.filter(ba => ba.nome_aluno?.includes(filtro)).map(ba => [ba.id, ba.nome_aluno, formatarData(ba.data_de_nascimento), ba.linha_onibus])

    const label6 = ['Nome', 'Data Nascimento', 'Data Dengue', 'Linhas']
    const data6 = relatorio6?.filter(ba => ba.nome_onibus?.includes(filtro)).map(ba => [ba.nome_onibus, ba.data_de_nascimento, formatarData(ba.data_de_dengue), ba.linha_onibus])

    const label7 = ['Nome', 'Data Nascimento', 'Data Dengue', 'Linhas']
    const data7 = relatorio7?.filter(ba => ba.nome_aluno?.includes(filtro)).map(ba => [ba.nome_aluno, formatarData(ba.data_de_nascimento), formatarData(ba.data_de_dengue), ba.linha_onibus])

    const label8 = ['Nome', 'Data Nascimento', 'Data Dengue']
    const data8 = relatorio8?.filter(ba => ba.nome_dengue?.includes(filtro)).map(ba => [ba.nome_dengue, formatarData(ba.data_de_nascimento), formatarData(ba.data_de_dengue)])

    const label9 = ['Nome', 'Data Nascimento', 'Data Dengue']
    const data9 = relatorio9?.filter(ba => ba.nome_dengue?.includes(filtro)).map(ba => [ba.nome_dengue, formatarData(ba.data_de_nascimento), formatarData(ba.data_de_dengue)])

    const label10 = ['Nome', 'Data Nascimento', 'Data Dengue']
    const data10 = relatorio10?.filter(ba => ba.nome_dengue?.includes(filtro)).map(ba => [ba.nome_dengue, formatarData(ba.data_de_nascimento), formatarData(ba.data_de_dengue)])

    function formatarData(data: string) {
        const dataObj = new Date(data);
        const dia = String(dataObj.getDate()).padStart(2, '0');
        const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
        const ano = dataObj.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }

    function exportExcel() {
        if (nome == 'Relatorio 1 - Educação') exportToExcel(getRelatorio1, '1')
        if (nome == 'Relatorio 2 - Saúde') exportToExcel(getRelatorio2, '2')
        if (nome == 'Relatorio 3 - Mobilidade') exportToExcel(getRelatorio3, '3')
        if (nome == 'Relatorio 4 - Educação e Saúde') exportToExcel(getRelatorio4, '4')
        if (nome == 'Relatorio 5 - Educação e Mobilidade') exportToExcel(getRelatorio5, '5')
        if (nome == 'Relatorio 6 - Saúde e Mobilidade') exportToExcel(getRelatorio6, '6')
        if (nome == 'Relatorio 7 - Saúde, Mobilidade, Educação') exportToExcel(getRelatorio7, '7')
        if (nome == 'Relatorio 8') exportToExcel(getRelatorio8, '8')
        if (nome == 'Relatorio 9') exportToExcel(getRelatorio9, '9')
        if (nome == 'Relatorio 10') exportToExcel(getRelatorio10, '10')
    }

    return (
        <>
            <div className="p-4 flex flex-col gap-3">
                <Card className="flex justify-between items-center pr-4">
                    <CardHeader>
                        <CardTitle className="text-xl">Relatorios da cidade XPTO - {nome} - {quantidade}</CardTitle>
                        <CardDescription className="text-lg">Mateus Levi, Gabriel de Paula, Sergio Adriano, Marina Gabriela</CardDescription>
                    </CardHeader>
                    <Button variant='outline' onClick={() => exportExcel()}>Exportar</Button>
                </Card>

                <Card style={{ height: '60vh' }} className="p-4 flex flex-col gap-2">
                    <Input value={filtro} placeholder='Pesquisar por nome' className="h-16" onChange={(e) => setFiltro(e.target.value.toUpperCase())} />
                    {
                        nome == 'Base de educação' ? <TabelaGenerica labels={labelAlunos} data={dataAlunos} /> :
                            nome == 'Base de saúde' ? <TabelaGenerica labels={labelDengue} data={dataDengue} /> :
                                nome == 'Base de mobilidade' ? <TabelaGenerica labels={labelOnibus} data={dataOnibus} /> :
                                    nome == 'Relatorio 1 - Educação' ? <TabelaGenerica labels={label1} data={data1} /> :
                                        nome == 'Relatorio 2 - Saúde' ? <TabelaGenerica labels={label2} data={data2} /> :
                                            nome == 'Relatorio 3 - Mobilidade' ? <TabelaGenerica labels={label3} data={data3} /> :
                                                nome == 'Relatorio 4 - Educação e Saúde' ? <TabelaGenerica labels={label4} data={data4} /> :
                                                    nome == 'Relatorio 5 - Educação e Mobilidade' ? <TabelaGenerica labels={label5} data={data5} /> :
                                                        nome == 'Relatorio 6 - Saúde e Mobilidade' ? <TabelaGenerica labels={label6} data={data6} /> :
                                                            nome == 'Relatorio 7 - Saúde, Mobilidade, Educação' ? <TabelaGenerica labels={label7} data={data7} /> :
                                                                nome == 'Relatorio 8' ? <TabelaGenerica labels={label8} data={data8} /> :
                                                                    nome == 'Relatorio 9' ? <TabelaGenerica labels={label9} data={data9} /> :
                                                                        <TabelaGenerica labels={label10} data={data10} />
                    }
                </Card>
            </div>
        </>
    )
}