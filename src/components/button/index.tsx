import { Botao, Write } from './style';

interface ButtonProps{
    title: string;
    label?: string;
    
}


export default function Forms({title, label}:ButtonProps) {
    return (<>
    <label>{label}</label>
    <Write placeholder='Digite aqui:'/>
    <Write placeholder='Mensagem' style={{height: "5rem"}}/>
    <Botao>{title}</Botao>
    
    </>)
}