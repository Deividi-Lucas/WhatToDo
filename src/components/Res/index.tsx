import { Main } from "./style";

interface PostResultProps{
    title?: string;
    result?: string;
    width: string;
    height: string;
}

export default function PostResult({result,title,height,width}:PostResultProps){
return(
<Main style={{border:'1px solid red', height, width}}>
    <h2>{title}</h2>
    <span>{result}</span>

</Main>)
}