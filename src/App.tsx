import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

export function App() {
    
   return(
       <>
        <form >
        <Input>
        texto1
        </Input>
        <Button onClick={() => alert('clicado')}>
            clique
        </Button>

        </form>
    </>
    )
}