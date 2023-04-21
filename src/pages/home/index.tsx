import { useState } from "react"
import { SaveUser } from "../../components/SaveUser"
import { color } from "../../utils/color"
import { Main, Titulo } from "./style"

export default function Home (){
    const [list, setList] = useState([])

    function handleSaveUser({user}:any) {
        let newList = [...list]
        newList.push(user)        
        setList(newList)
    }
    return (
        <Main>
            <Titulo style={{color:`${color.ciano}`}}>What To Do</Titulo>
            <SaveUser onAddUser={handleSaveUser}/>

        </Main>
    )
}