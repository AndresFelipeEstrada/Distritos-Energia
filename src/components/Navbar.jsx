export const NavBar = () => {
  return (
    <nav id='navbar' class=''>
      <div class='nav-wrapper'>
        <div>
          <a href='/'><img src='src/assets/logo.png' alt='' className='logo' /></a>
        </div>

        <ul id='menu'>
          <li className='navbar-li'><a href='/'>Inicio</a></li>
          <li className='navbar-li'><a href='/tables'>Tablas</a></li>
        </ul>
      </div>
    </nav>
  )
}
