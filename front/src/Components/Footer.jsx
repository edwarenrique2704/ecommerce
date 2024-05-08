import Logo from '../images/Logo.png'
import Facebook from '../images/facebook-app-symbol.png'
import Instagram from '../images/instagram.png'
import Wpp from '../images/whatsapp.png'
const Footer = () => {
  return (

    <div className='flex flex-col min-h-screen"'>
            <div className="flex-grow"></div>

    <footer className="bg-pink-600 text-white py-8   ">
      <img src={Logo} alt="" className="logo" /> 
      <div className="flex justify-center space-x-4 mt-4">
        <a href="https://www.facebook.com/Amor.porloscrespos?mibextid=ZbWKwL" className="social-icon"><img src={Facebook} alt="Facebook" className="w-10 h-10"></img></a>
        <a href="https://instagram.com/amor.porloscrespos?igshid=MmU2YjMzNjRlOQ==" className="social-icon"><img src={Instagram} alt="Instagram" className="w-10 h-10"></img></a>
        <a href="https://api.whatsapp.com/send?phone=%2B573195029879&data=ARA-nc-a32wVchUvAWY7LG1Tpw2i1xF5Flfs6t8xG99y5hHR_nHAHJNdBY4evNIQtMmxW5FUh_-DwgfsryryeGD-qUxStWvhh7qspSXIwobenK4n8AdHJQO-0TAa0gD9lKOBeP8dM4tgT6qSUP8su58bKQ&source=FB_Page&app=facebook&entry_point=page_cta" className="social-icon"><img src={Wpp} alt="WhatsApp" className="w-13 h-13"></img></a>
      </div>
      <span className="block text-center mt-4">By: Valentina Muñoz</span>
      <span className="block text-center">&copy;2023, Amor por los crespos. All rights reserved.</span>

    </footer>
  </div>
  
    
    
    )
}

export default Footer