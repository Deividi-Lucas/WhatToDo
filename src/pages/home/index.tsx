import { SaveUser } from "../../components/SaveUser"
import { color } from "../../utils/color"
import { Main, Titulo } from "./style"

export default function Home() {

    return (
        <Main>
            <Titulo style={{ color: `${color.ciano}` }}>What To Do</Titulo>
            <SaveUser />
        </Main>
    )
}