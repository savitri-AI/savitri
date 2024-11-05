import logo from "../assets/logo/logo.png"

const Footer = () => {
  return (
    
    <div className="footer-container">
        <div className="company-address-container">
            <img src={logo} width="10%"alt="" className="company-logo" />
            <p className="location">Location</p>
            <p className="address">sanjay colony secter-23</p>
            <p className="country">fridabad haryana INDIA</p>

            <p className="email">Contact</p>
            <p className="email-id">programersalar@gmail.com</p>


        </div>
        <div className="licence">
            <p>© 2024 savitri</p>
        </div>
    </div>
  )
}

export default Footer