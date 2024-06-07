import logo from "../assets/kp.png"
import { FaLinkedin } from "react-icons/fa"
// import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 item-center gap-5 text-7xl">
            <img src={logo} className="mx-2 w-10 text-6xl" alt="KP" style={{
                       borderRadius: '50%', 
                       objectFit: 'cover' 
                    }}/>
        </div>
        
        <div className="m-1 flex item-center justify-center gap-4 text-3xl">

            <a href="https://www.linkedin.com/in/karampreet-singh-7530b022b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-400"/>
            </a>

            {/* <a href="https://github.com/Karampreet-Singh" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-400"/>
            </a> */}

            <a href="https://www.instagram.com/karampreet98/?utm_source=qr&igsh=MTM0bHh2dGxkaGlseg%3D%3D" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-500"/>
            </a>
        </div>
    </nav>
  )
}
