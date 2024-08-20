
import "./mainDonador.css"
import Donacion from '../../components/Donacion/Donacion'
import NavbarDonador from '../../components/NavbarDonador/NavbarDonador'
import "./mainDonador.css"
import Donador from "./Donador"

export default function MainDonador() {  
  return (
    <div className='mainDonador'>
      <NavbarDonador/>
      <Donador/>
    </div>
)
}
