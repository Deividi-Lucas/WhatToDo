import { Button, TextField } from "@mui/material"
import { useState } from "react"
import { produce } from 'immer'

type taskProps = {
    title: string,
    description: string
}

export const SaveUser = () => {
    const [list, setList] = useState<taskProps[]>([])
    const [task, setTask] = useState({
        title: "",
        description: ""
    })

    function addTask() {
        setList(
            produce(list, draft => {
                draft.push(task)
            })
        )
    }

    return (
        <>
            <TextField label='Titulo' variant="outlined" onChange={e => setTask(produce(task, draft => {
                draft.title = e.target.value
            }))} />
            <TextField placeholder="Mensagem" style={{ resize: "none", width: '10rem', padding: '1rem', display: 'flex' }} onChange={e => setTask(produce(task, draft => {
                draft.description = e.target.value
            }))} />
            <Button variant="outlined" onClick={addTask}>Click</Button>
            <div>
                {list.map((item: any) => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <h1>{item.description}</h1>
                    </div>
                ))}
            </div>
        </>
    )

}