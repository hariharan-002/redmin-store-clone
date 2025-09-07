import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer style={{backgroundColor:' black',height:'100%'}} >
            <div className='container'>

                <div className='1st'>
                       <h6>SUPPORT</h6>
                    <div className='link' style={{ color: 'gray' }}>
                        <a> Online Help</a><br />
                        <a> Customer Service</a><br />
                        <a>Shipping FAQ</a><br />
                        <a>   Warranty</a><br />
                        <a>Mi Exchange</a><br />
                        <a>Bulk Orders</a><br />
                        <a>User Guide</a><br />
                        <a> Laptop Drivers</a><br />
                        <a>Mi Screen Protect</a><br />
                        <a> Mi Extended Warranty</a><br />
                        <a>  Mi Complete Protect</a><br />
                        <a>  Certification</a><br />
                        <a> Service Centre</a>
                    </div>
                </div>
                <div className='2nd'>
                        <h6>SHOP AND LEARN</h6>
                    <div className='link' style={{ color: 'gray' }}>
                        <a>Xiaomi Phones</a> <br />
                        <a>Redmi Phones</a> <br />
                        <a> Tv's</a> <br />
                        <a>Laptops and Tablets</a><br />
                        <a>  Audio</a> <br />
                        <a> Lifestyle</a> <br />
                        <a> Smart Home</a>
                    </div>
                </div>
                <div className='3rd'>
                    <h6>RETAIL STORE</h6>
                    <div className='link' style={{ color: 'gray' }}>
                    <a>Mi Home</a><br />
                    <a>Mi Authorized Store</a><br />
                    <a>Mi Store Franchise</a>
                    </div>
                </div>
            
            <div className='4th' >
                    <h6>ABOUT US</h6>
                <div className='link' style={{ color: 'gray' }}>
                    <a>Xiaomi</a><br />
                    <a>Privacy Policy</a><br />
                    <a>User Agreement</a><br />
                    <a>Integrity & Compliance</a><br />
                    <a>CSR and Disclosures</a><br />
                    <a>E-Waste Management</a><br />
                    <a>In The Press</a><br />
                    <a>Trust Center</a><br />
                    <a>Culture</a><br />
                    <a>Smartphone Quality</a><br />
                    <a>TV Quality</a><br />
                    <a>Service Quality</a><br />
                    <a>Xiaomi HyperOS</a><br />
                    <a>Join Our Team</a>
                </div>
            </div>



            <div  className='social-links '>
                <h4 style={{ color: 'white' }}> Follow MI</h4>
                <div className='social'>
                    <FaFacebook color='white' />
                    <FaTwitter color='white' />
                    <FaInstagram color='white' />
                </div>
                <div className='5th' style={{display:'flex',flexDirection:'column',}}>
                <h4>Let's Stay in touch</h4>
                <input type='email' placeholder='Enter email address' style={{ background: 'transparent', border: '1px solid white ', borderRadius: '10px', color:'white ', marginLeft:'120px',height:'40px', width:'250px' }}></input>
                </div>
            </div>
            </div>


        </footer>
    )
}
