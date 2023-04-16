import { useState } from 'react';
import { Botao, Write, Writes } from './style';

interface ButtonProps{
    title: string;
    width: string;
    padding?: string;
    backgroundColor?: string;
    color?: string;

}



export default function Forms({title, width, padding,backgroundColor,color}:ButtonProps) {
    const [Valueinput, setValueinput] = useState(0)
    return (<>
    <Writes placeholder='Digite aqui:' style={{width, padding, backgroundColor, color}} maxLength={80}/>
    <Write placeholder='Mensagem: ' style={{height:'20rem',width,padding, overflowY:'auto',backgroundColor,color}} maxLength={1000} onChange={(e)=> setValueinput(e.target.value.length)
    }/>
    
    <span style={{color, textShadow:'1px 3px 0.5rem black'}}>{`${1000-Valueinput} restam`}</span>
    <Botao>{title}</Botao>
    
    </>)
}