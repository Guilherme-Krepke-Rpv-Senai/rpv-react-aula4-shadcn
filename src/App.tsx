import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";


export function App() {

    const regras = z.object({
        nome: z.string().min(1, "Incompleto"),
        ano: z.string().min(1, "Incompleto"),
        marca: z.string().min(1, "Incompleto"),
        modelo: z.string().min(1, "Incompleto"),
        cor: z.string().min(1, "Incompleto"),
    })

    type formType = z.infer<typeof regras>

    const formulario = useForm<formType>({
        resolver: zodResolver(regras)
        
    })

    function enviarform(nome) {
        console.log('gui')
    }

    return (
        <>
            <div>
                <h1 className="bg-amber-100 w-full flex items-center justify-center">
                    form
                </h1>
                <form onSubmit={formulario.handleSubmit(enviarform)} className=" flex flex-col gap-4">
                    <div className="flex flex-col gap-4">
                        <label htmlFor="nome" className="flex gap-2">
                            Nome
                            <input type="text" />
                        </label>
                    </div>
                    <div className="flex flex-col gap-4">
                        <label className="flex gap-2">
                            Ano
                            <input type="text" />
                        </label>
                    </div>
                    <div className="flex flex-col gap-4">
                        <label className="flex gap-2">
                            Marca
                            <input type="text" />
                        </label>
                    </div>
                    <div className="flex flex-col gap-4">
                        <label className="flex gap-2">
                            Modelo
                            <input type="text" />
                        </label>
                    </div>
                    <div className="flex flex-col gap-4">
                        <label className="flex gap-2">
                            Cor
                            <input type="text" />
                        </label>
                    </div>
                    <button type="submit">enviar</button>
                </form>
            </div>
        </>
    )
}