
import './Header.css';
import img1 from  '../img/img1.jpeg';
const Header=()=>{
    return(
        <header>
            <img src={img1} alt="" />
            <h1>Languages</h1>
        </header>
    )
}

export default Header