import "../index.css"
import logoimage from '../assets/LogoImage.png'

export default function Header() {
    return (
        <header>
            <img src={logoimage} />
            <h1>ChefAI</h1>
        </header>
    )
}