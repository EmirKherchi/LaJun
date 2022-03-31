
function Header() {
  
  const title = 'La Maison Jungle';

  const user = {
    firstname : 'John',
    name: 'Doe',
    message: 'Nice to see you again'
  }
  
  return (
    <div>
      <h1>
        { title.toUpperCase() }      
      </h1>
      <p> Hello {`${user.firstname} ${user.name}, ${user.message}`} </p>
    </div>
  );
}



export default Header;
