import { Link } from 'react-router-dom';
import Button from '../Button/Button'
import './Navbar.css';
import LogoNAsa from '/src/assets/NASA_logo.png'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
// Importar imagen desde una ruta

const Navbar = () => {
  return(
    <>
    {/*Podemos prescindir de los fragmentos*/}
    <nav className='navbar--container'>
       {/*Logo*/}
        <div className='navbar--logo'>
          {/*Opción 1*/}
          {/* Componente que me permite linkear a otro proyecto */}
          <Link to='/'>
            <img src={LogoNAsa} alt="Logo NASA" />
          </Link>
        </div>
       {/*Menú*/}
        <div className='navbar--menu'>
          <div className='menu--links'>
            <Link to='/astros-api'>
              <span>Astros</span>
            </Link>
            <a href='#'>Nasa</a>
            <a href='#'>ISS</a>
          </div>
          {/*Button*/}
            <Button text='Buscar'/>
          <Link to='/login'>
            <AccountCircleRoundedIcon style={{fontSize:'xx-large'}} />
          </Link>
        </div>


    </nav>
    </>
  )
}

export default Navbar
