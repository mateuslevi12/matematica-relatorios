import { ReactElement } from "react";
import { CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Link } from "react-router-dom";

interface CardProps {
    titulo: string;
    descricao: string;
    icon: ReactElement;
    quantidade: number;
}

export function CardComponent({ titulo, descricao, icon, quantidade }: CardProps) {
    return (
        <>
            <Link to={`/DetalheRelatorio/${titulo}/${quantidade}`} className="rounded-xl border bg-card text-card-foreground shadow  bg-white transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:cursor-pointer">
                <CardHeader className="flex flex-col gap-2">
                    <CardTitle className="flex justify-between">{titulo} {icon}</CardTitle>
                    <CardDescription className="flex justify-between items-center gap-2">{descricao} </CardDescription>
                </CardHeader>
            </Link>
        </>
    )
}