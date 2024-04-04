import './footer.css';
import './App'

import logo from './content/Logo.png'; // Import logo image
import instagram from './content/instagram.png';
import tiktok from './content/tiktok.png';
import facebook from './content/facebook.png';
import twitter from './content/twitter (1) 1.png'

function Footer() {
    return (
        <>
            <footer className="bg-white">
                <img src={logo} alt="Image 1" style={{ width: '66px', height: '66px' }} />
                <p className='auther'>CS Strijom <span>© 2024</span></p>

                <div className="menu">
                    <ul >

                        <li class="item-508"><a href="#" style={{ textDecoration: 'none', color: 'white' }}>Links</a>
                        </li>
                        <li class="item-509"><a href="#" style={{ textDecoration: 'none', color: 'white' }}>Home</a>
                        </li>
                        <li class="item-509"><a href="#Selector" style={{ textDecoration: 'none', color: 'white' }}>Destination</a>
                        </li>
                        <li class="item-509"><a href="#ComingSoon" style={{ textDecoration: 'none', color: 'white' }}>Mobile App</a>
                        </li>

                    </ul>
                </div>

                <div className='Follow'>
                    <p>Follow us</p>
                    <a href="https://www.instagram.com/galactic-getaways/">
                        <img src={instagram} alt="Image 1" style={{ width: '37px', height: '37px', marginRight: '12px' }} />
                    </a>
                    <a href="https://www.tiktok.com/@galactic-getaways">
                        <img src={tiktok} alt="Image 1" style={{ width: '37px', height: '37px' }} />
                    </a>
                    <br></br>
                    <a href="https://www.facebook.com/galactic-getaways">
                        <img src={facebook} alt="Image 1" style={{ width: '37px', height: '37px', marginTop: '5px', marginRight: '12px' }} />
                    </a>
                    <a href="https://twitter.com/galactic-getaways">
                        <img src={twitter} alt="Image 1" style={{ width: '37px', height: '37px' }} />
                    </a>
                </div>


            </footer>
        </>
    );
}

export default Footer;