import { Button, TextField } from "@mui/material"
import { useState } from "react"

export const SaveUser = ({onAddUser}:any)=>{
    const [title, setTitle]:any = useState()
    const [descrition, setDescrition]:any = useState()

    function handleSaveUser(){
        const data = {title, descrition}
        onAddUser(data)
        
    }

    return( 
    <>
    <TextField label='Titulo' variant="outlined" onChange={(e)=> setTitle(e.target.value)}/>
    <TextField placeholder="Mensagem" style={{resize:"none", width:'10rem', padding:'1rem', display:'flex'}} onChange={(e)=> setDescrition(e.target.value)}/>
    <Button variant="outlined" onClick={handleSaveUser}>Click</Button>
    </>
    )

}