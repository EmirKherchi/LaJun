import '../styles/Header.css';
import logo from '../assets/logo192.png'

function Header() {
  
  const title = 'La Maison Jungle';

  const user = {
    firstname : 'John',
    name: 'Doe',
    message: 'Nice to see you again...'
  }
  
  return (
    <div>
      <div className='lmj-header'>
        <img src={logo} alt='logo la maison jungle' className='lmj-logo'></img>
        { title.toUpperCase() }      
      </div>
      <p className='ljm-title'> Hello {`${user.firstname} ${user.name}, ${user.message}`} </p>
    </div>
  );
}



export default Header;
