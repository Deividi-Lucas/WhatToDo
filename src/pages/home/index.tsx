import Forms  from "../../components/Post"
import { color } from "../../utils/color"
import { Main, Titulo } from "./style"

export default function Home (){
    return (
        <Main>
            <Titulo style={{color:`${color.ciano}`}}>What To Do</Titulo>
            <Forms title="Click" width="30rem" padding="1rem" backgroundColor={color.preto} color={color.green} />
        </Main>
    )
}