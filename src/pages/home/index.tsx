import Forms from "../../components/forms"
import { color } from "../../utils/color"
import { Main, Titulo } from "./style"
export default function Home (){
    return (
        <Main>
            <Titulo style={{color:`${color.ciano}`}}>Aprendendo a mexer com typescript </Titulo>
            <Forms title="Click" width="30rem" padding="1rem" backgroundColor={color.preto} color={color.green}/>
        </Main>
    )
}