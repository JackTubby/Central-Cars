import '../style sheets/navbar.css';
import logo from '../img/logo1.png'

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg'>
      <div className='container-fluid'>
        {/* Website title and logo */}
        <div className='nav--logo'>
        <img src={logo} className='nav--logo'></img>
        <a href='#' className='navbar-brand'>
          Main Cars
        </a>
        </div>


        {/* Button for mobile users burger icon */}
        <button
          type='button'
          class='navbar-toggler'
          data-bs-toggle='collapse'
          data-bs-target='#navbarCollapse'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        
        {/* Nav Items */}
        <div className='collapse navbar-collapse' id='navbarCollapse'>
          <div className='navbar-nav ms-auto'>
          <a href='#' className='nav-item nav-link'>
              Home
            </a>
            <a href='#' className='nav-item nav-link'>
              Used Cars
            </a>
            <a href='#' className='nav-item nav-link'>
              AA Dealer Promise
            </a>
            <a href='#' className='nav-item nav-link'>
              Warranty
            </a>
            <a href='#' className='nav-item nav-link'>
              Finance
            </a>
            <a href='#' className='nav-item nav-link'>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
