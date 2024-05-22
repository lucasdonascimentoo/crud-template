import './styles.css'
import Logo from '../../../public/logouni.png' 
import { useNavigate } from 'react-router-dom'
export function Header() {

    const navigate = useNavigate()

    return (
        <header>
            <img src={Logo} alt="" />
            <button onClick={()=>navigate('/createPost')}>Cadastro</button>
        </header>
    )
}