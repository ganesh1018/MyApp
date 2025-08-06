import download from '../assets/download.png';
export default function Header(){
    return(
        <header>
            <img src={download}/>
            <h1>Chef Claude</h1>
        </header>
    )
}