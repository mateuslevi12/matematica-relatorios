import { CardComponent } from "@/components/CardComponent";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { IoBookOutline, IoBus } from "react-icons/io5";
import { GiHealthNormal } from "react-icons/gi";
import styles from './Home.module.css'

export function Home() {

    return (
        <div className="p-4 flex flex-col gap-3">
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl">Res Problema Nat Discretas - Relatorios da cidade XPTO</CardTitle>
                    <CardDescription className="text-lg">Mateus Levi, Gabriel de Paula, Sergio Adriano, Marina Gabriela</CardDescription>
                </CardHeader>
            </Card>
            <div className="flex flex-col gap-2">
                <h1 className="text-xl">Base De Dados</h1>
                <div className={`gap-2 ${styles.Bases}`}>
                    <CardComponent titulo='Base de educação' descricao='Dados de cidadãos matriculados em escolas' icon={<IoBookOutline />} quantidade={263} />
                    <CardComponent titulo='Base de saúde' descricao='Dados de cidadãos que tiverem dengue' icon={<GiHealthNormal />} quantidade={202} />
                    <CardComponent titulo='Base de mobilidade' descricao='Dados de cidadãos que andam de ônibus' icon={<IoBus />} quantidade={195} />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-xl">Relatorios</h1>
                <div className={`gap-2 ${styles.relatorios}`}>
                    <CardComponent titulo='Relatorio 1 - Educação' descricao='Cidadãos que frequentam a escola menos os que tiveram dengue.' icon={<IoBookOutline />} quantidade={238} />
                    <CardComponent titulo='Relatorio 2 - Saúde' descricao='Cidadãos que frequentaram o posto de saúde menos os que não utilizam onibus.' icon={<GiHealthNormal />} quantidade={191} />
                    <CardComponent titulo='Relatorio 3 - Mobilidade' descricao='Cidadãos que utilizaram o transporte público e não tiveram dengue.' icon={<IoBus />} quantidade={183} />
                    <CardComponent titulo='Relatorio 4 - Educação e Saúde' descricao='Cidadãos que frequentaram a escola e tiveram dengue.' icon={<IoBookOutline />} quantidade={25} />
                    <CardComponent titulo='Relatorio 5 - Educação e Mobilidade' descricao='Cidadãos que frequentaram a escola e utilizaram transporte público.' icon={<GiHealthNormal />} quantidade={23} />
                    <CardComponent titulo='Relatorio 6 - Saúde e Mobilidade' descricao='Cidadãos que frequentaram o posto de saúde e utilizaram transporte público.' icon={<IoBus />} quantidade={11} />
                    <CardComponent titulo='Relatorio 7 - Saúde, Mobilidade, Educação' descricao='Cidadãos que frequentaram o posto de saúde, utilizaram transporte público e frequentaram a escola.' icon={<IoBookOutline />} quantidade={2} />
                    <CardComponent titulo='Relatorio 8' descricao='Cidadãos que frequentaram o posto de saúde, mas não utilizaram transporte público.' icon={<GiHealthNormal />} quantidade={191} />
                    <CardComponent titulo='Relatorio 9' descricao='Cidadãos que frequentaram o posto de saúde, mas não frequentaram a escola.' icon={<IoBus />} quantidade={177} />
                    <CardComponent titulo='Relatorio 10' descricao='Cidadãos que frequentaram o posto de saúde, mas não frequentaram a escola, nem utilizaram transporte público.' icon={<IoBus />} quantidade={168} />
                </div>
            </div>
        </div>
    )
} 