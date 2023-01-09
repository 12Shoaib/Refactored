import {Link} from 'react-router-dom'
import '../Components/Navbar.css'


const Navbar = () => {

    return(
        <div className='pageComponents'>
            <nav className='mainComponents' >
            <label className='logo' >Simple React Application </label>
            <Link className='linker' to='/' > Home</Link>
            <Link  className='linker' to='/data' > DataBase</Link>
            </nav>
        </div>
    )
}
export default Navbar