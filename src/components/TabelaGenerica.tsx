import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableHead,
    TableRow,
} from "@/components/ui/table"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

interface TableGeneric {
    labels: string[],
    data: any[][],
}

export function TabelaGenerica({ labels, data }:TableGeneric) {
    return (
        <>
            <ScrollArea style={{height: '100%', width: '100%'}}>


                <Table className="bg-white">
                    <TableHeader  >
                        <TableRow>
                            {
                                labels?.map(l => {
                                    return (
                                        <>
                                            <TableHead className={` text-center`} >{l}</TableHead>
                                        </>
                                    )
                                })
                            }
                        </TableRow>
                    </TableHeader>
                    <TableBody>

                        {data?.map((d, dIndex) => (
                            <TableRow key={dIndex}>
                                {d?.map((c, cIndex) => (
                                    <TableCell style={{whiteSpace: 'nowrap'}} key={cIndex} align="center">
                                        {c ?? '-'}
                                    </TableCell>
                                ))}
                                
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
                <ScrollBar orientation="horizontal" />
            </ScrollArea >
            
        </>
    )
}