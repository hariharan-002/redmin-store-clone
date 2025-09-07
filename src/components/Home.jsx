import React,{useState} from 'react'
import ControlledCarousel from './ControlledCarousel';
import image1 from '../components/Asset/nextimage1.webp';
import image2 from '../components/Asset/nextimage2.webp';
import image3 from '../components/Asset/nextimage3.webp';
import image4 from '../components/Asset/nextimage 4.webp';
import image5 from '../components/Asset/nextimage5.webp';
import image6 from '../components/Asset/nextimage6.webp';
import image7 from '../components/Asset/nextimage7.webp';
import image8 from '../components/Asset/nextimage8.webp';
import image9 from '../components/Asset/nextimage9.webp';
import image10 from '../components/Asset/nextimage10.webp';
import cart1 from '../components/Asset/cart1.jpg'
import cart2 from '../components/Asset/cart2.jpg'
import cart3 from '../components/Asset/cart3.jpg'
import cart4 from '../components/Asset/cart4.jpg'
import cart5 from '../components/Asset/cart5.jpg'
import cart6 from '../components/Asset/cart6.jpg'
import cart7 from '../components/Asset/cart7.jpg'
import cart8 from '../components/Asset/cart8.jpg'
import cart9 from '../components/Asset/cart9.jpg'
import cart10 from '../components/Asset/cart10.jpg'
import cart11 from '../components/Asset/cart11.jpg'
import cart12 from '../components/Asset/cart12.jpg'
import cart13 from '../components/Asset/cart13.jpg'
import cart14 from '../components/Asset/cart14.jpg'
import cart15 from '../components/Asset/cart15.jpg'
import cart16 from '../components/Asset/cart16.jpg'




export const Home = () => {
    const [productDetail, setProductDetail] = useState(null);



    const handleDetail = (productName) => {
       
        switch (productName) {
          case 'Xiaomi Pad 6':
            setProductDetail({
              name: 'Xiaomi Pad 6',
              description: 'This is the description of Xiaomi Pad 6',
              price: '₹26,999',
              discount: '30% Off',
              image: image1 
            });
            break;
          case 'Redmi TV X55':
            setProductDetail({
              name: 'Redmi TV X55',
              description: 'This is the description of Redmi TV X55',
              price: '₹39,999',
              discount: '27% Off',
              image: image2 
            });
            break;
        
          default:
            setProductDetail(null);
        }
      };
  return (
    <>
    
    <div>
    <ControlledCarousel/>
    </div>


    <div className='next-image'> 
    <img src={image1}></img>
    <img src={image2}></img>
    <img src={image3}></img>
    <img src={image4}></img>
    <img src={image5}></img>
    <img src={image6}></img>
    
    </div>

    <div className='product-container-1'>
        <div className='pc1' onClick={() => handleDetail('Xiaomi Pad 6')}>
            <br/>
            <p color='black' style={{marginLeft:'30px'}}>Xiaomi Pad 6 <br/></p>
            <button style={{color:'red',background:' ',border:'1px solid red ', height:'20px', width:'90px' ,fontSize:'11PX', borderRadius:'7px',marginLeft:'30px' }}>30% Off</button>
           <br/><img src={cart1}  style={{marginLeft:'180px',height:'100px'}}/>
            <p color='black' style={{marginLeft:'30px'}}>From  <br/> ₹26,999 <br/><span color='gray'> ₹3̶9̶,9̶9̶9̶</span>  </p>
            

        </div>
        <div className='pc1' onClick={() => handleDetail('Xiaomi Pad 6')}>
        <br/>
            <p color='black' style={{marginLeft:'30px'}}>Redmi TV X55 <br/> </p>
            <button style={{color:'red',background:' ',border:'1px solid red ', height:'20px', width:'90px' ,fontSize:'11PX', borderRadius:'7px',marginLeft:'30px' }}>27% Off</button>
           <br/><img src={cart2}  style={{marginLeft:'180px',height:'100px'}}/>
            <p color='black' style={{marginLeft:'30px'}}>From  <br/> ₹39,999 <br/><span color='gray'> ₹5̶4̶,9̶9̶9̶</span>  </p>

        </div>
        <div className='pc1' onClick={() => handleDetail('Xiaomi Pad 6')}>
        <br/>
            <p color='black' style={{marginLeft:'30px'}}>Xiaomi Smart Air Purifier 4 Lite <br/> </p>
            <button style={{color:'red',background:' ',border:'1px solid red ', height:'20px', width:'90px' ,fontSize:'11PX', borderRadius:'7px',marginLeft:'30px' }}>26% Off</button>
           <br/><img src={cart3}  style={{marginLeft:'180px',height:'100px'}}/>
            <p color='black' style={{marginLeft:'30px'}}>From  <br/> ₹10,999 <br/><span color='gray'> ₹1̶4̶,9̶9̶9̶</span>  </p>

        </div>
        <div className='pc1' onClick={() => handleDetail('Xiaomi Pad 6')}>
        <br/>
            <p color='black' style={{marginLeft:'30px'}}>Xiaomi Smart Air Purifier 4 Lite<br/> </p>
            <button style={{color:'red',background:' ',border:'1px solid red ', height:'20px', width:'90px' ,fontSize:'11PX', borderRadius:'7px',marginLeft:'30px' }}>60% Off</button>
           <br/><img src={cart4}  style={{marginLeft:'180px',height:'100px'}}/>
            <p color='black' style={{marginLeft:'30px'}}>From  <br/> ₹3,599 <br/><span color='gray'> ₹8̶,9̶9̶8̶</span>  </p>

        </div>
        
    </div>
    <div className='next-image'> 
    <img src={image7}></img>
    </div>
    <div className='product-container-1'>
        <div className='pc1' onClick={() => handleDetail('Xiaomi Pad 6')}>
            <br/>
            <p color='black' style={{marginLeft:'30px'}}>Xiaomi Pad 6 <br/></p>
            <button style={{color:'red',background:' ',border:'1px solid red ', height:'20px', width:'90px' ,fontSize:'11PX', borderRadius:'7px',marginLeft:'30px' }}>30% Off</button>
           <br/><img src={cart5}  style={{marginLeft:'180px',height:'100px'}}/>
            <p color='black' style={{marginLeft:'30px'}}>From  <br/> ₹26,999 <br/><span color='gray'> ₹3̶9̶,9̶9̶9̶</span>  </p>
            

        </div>
        <div className='pc1' onClick={() => handleDetail('Xiaomi Pad 6')}>
        <br/>
            <p color='black' style={{marginLeft:'30px'}}>Redmi TV X55 <br/> </p>
            <button style={{color:'red',background:' ',border:'1px solid red ', height:'20px', width:'90px' ,fontSize:'11PX', borderRadius:'7px',marginLeft:'30px' }}>27% Off</button>
           <br/><img src={cart6}  style={{marginLeft:'180px',height:'100px'}}/>
            <p color='black' style={{marginLeft:'30px'}}>From  <br/> ₹39,999 <br/><span color='gray'> ₹5̶4̶,9̶9̶9̶</span>  </p>

        </div>
        <div className='pc1' onClick={() => handleDetail('Xiaomi Pad 6')}>
        <br/>
            <p color='black' style={{marginLeft:'30px'}}>Xiaomi Smart Air Purifier 4 Lite <br/> </p>
            <button style={{color:'red',background:' ',border:'1px solid red ', height:'20px', width:'90px' ,fontSize:'11PX', borderRadius:'7px',marginLeft:'30px' }}>26% Off</button>
           <br/><img src={cart7}  style={{marginLeft:'180px',height:'100px'}}/>
            <p color='black' style={{marginLeft:'30px'}}>From  <br/> ₹10,999 <br/><span color='gray'> ₹1̶4̶,9̶9̶9̶</span>  </p>

        </div>
        <div className='pc1'onClick={() => handleDetail('Xiaomi Pad 6')}>
        <br/>
            <p color='black' style={{marginLeft:'30px'}}>Xiaomi Smart Air Purifier 4 Lite<br/> </p>
            <button style={{color:'red',background:' ',border:'1px solid red ', height:'20px', width:'90px' ,fontSize:'11PX', borderRadius:'7px',marginLeft:'30px' }}>60% Off</button>
           <br/><img src={cart8}  style={{marginLeft:'180px',height:'100px'}}/>
            <p color='black' style={{marginLeft:'30px'}}>From  <br/> ₹3,599 <br/><span color='gray'> ₹8̶,9̶9̶8̶</span>  </p>

        </div>
        
    </div>
    <div className='next-image' > 
    <img src={image8}></img>
    </div>
    <div className='product-container-1' onClick={() => handleDetail('Xiaomi Pad 6')}>
        <div className='pc1'>
            <br/>
            <p color='black' style={{marginLeft:'30px'}}>Xiaomi Pad 6 <br/></p>
            <button style={{color:'red',background:' ',border:'1px solid red ', height:'20px', width:'90px' ,fontSize:'11PX', borderRadius:'7px',marginLeft:'30px' }}>30% Off</button>
           <br/><img src={cart9}  style={{marginLeft:'180px',height:'100px'}}/>
            <p color='black' style={{marginLeft:'30px'}}>From  <br/> ₹26,999 <br/><span color='gray'> ₹3̶9̶,9̶9̶9̶</span>  </p>
            

        </div>
        <div className='pc1' onClick={() => handleDetail('Xiaomi Pad 6')}>
        <br/>
            <p color='black' style={{marginLeft:'30px'}}>Redmi TV X55 <br/> </p>
            <button style={{color:'red',background:' ',border:'1px solid red ', height:'20px', width:'90px' ,fontSize:'11PX', borderRadius:'7px',marginLeft:'30px' }}>27% Off</button>
           <br/><img src={cart10}  style={{marginLeft:'180px',height:'100px'}}/>
            <p color='black' style={{marginLeft:'30px'}}>From  <br/> ₹39,999 <br/><span color='gray'> ₹5̶4̶,9̶9̶9̶</span>  </p>

        </div>
        <div className='pc1' onClick={() => handleDetail('Xiaomi Pad 6')}>
        <br/>
            <p color='black' style={{marginLeft:'30px'}}>Xiaomi Smart Air Purifier 4 Lite <br/> </p>
            <button style={{color:'red',background:' ',border:'1px solid red ', height:'20px', width:'90px' ,fontSize:'11PX', borderRadius:'7px',marginLeft:'30px' }}>26% Off</button>
           <br/><img src={cart11}  style={{marginLeft:'180px',height:'100px'}}/>
            <p color='black' style={{marginLeft:'30px'}}>From  <br/> ₹10,999 <br/><span color='gray'> ₹1̶4̶,9̶9̶9̶</span>  </p>

        </div>
        <div className='pc1' onClick={() => handleDetail('Xiaomi Pad 6')}>
        <br/>
            <p color='black' style={{marginLeft:'30px'}}>Xiaomi Smart Air Purifier 4 Lite<br/> </p>
            <button style={{color:'red',background:' ',border:'1px solid red ', height:'20px', width:'90px' ,fontSize:'11PX', borderRadius:'7px',marginLeft:'30px' }}>60% Off</button>
           <br/><img src={cart12}  style={{marginLeft:'180px',height:'100px'}}/>
            <p color='black' style={{marginLeft:'30px'}}>From  <br/> ₹3,599 <br/><span color='gray'> ₹8̶,9̶9̶8̶</span>  </p>

        </div>
        
    </div>
    <div className='next-image'> 
    <img src={image9}></img>
    </div>
    <div className='next-image'> 
    <img src={image10}></img>
    </div>
    <div className='product-container-1'>
        <div className='pc1' onClick={() => handleDetail('Xiaomi Pad 6')}>
            <br/>
            <p color='black' style={{marginLeft:'30px'}}>Xiaomi Pad 6 <br/></p>
            <button style={{color:'red',background:' ',border:'1px solid red ', height:'20px', width:'90px' ,fontSize:'11PX', borderRadius:'7px',marginLeft:'30px' }}>30% Off</button>
           <br/><img src={cart13}  style={{marginLeft:'180px',height:'100px'}}/>
            <p color='black' style={{marginLeft:'30px'}}>From  <br/> ₹26,999 <br/><span color='gray'> ₹3̶9̶,9̶9̶9̶</span>  </p>
            

        </div>
        <div className='pc1 ' onClick={() => handleDetail('Xiaomi Pad 6')}>
        <br/>
            <p color='black' style={{marginLeft:'30px'}}>Redmi TV X55 <br/> </p>
            <button style={{color:'red',background:' ',border:'1px solid red ', height:'20px', width:'90px' ,fontSize:'11PX', borderRadius:'7px',marginLeft:'30px' }}>27% Off</button>
           <br/><img src={cart14}  style={{marginLeft:'180px',height:'100px'}}/>
            <p color='black' style={{marginLeft:'30px'}}>From  <br/> ₹39,999 <br/><span color='gray'> ₹5̶4̶,9̶9̶9̶</span>  </p>

        </div>
        <div className='pc1' onClick={() => handleDetail('Xiaomi Pad 6')}>
        <br/>
            <p color='black' style={{marginLeft:'30px'}}>Xiaomi Smart Air Purifier 4 Lite <br/> </p>
            <button style={{color:'red',background:' ',border:'1px solid red ', height:'20px', width:'90px' ,fontSize:'11PX', borderRadius:'7px',marginLeft:'30px' }}>26% Off</button>
           <br/><img src={cart15}  style={{marginLeft:'180px',height:'100px'}}/>
            <p color='black' style={{marginLeft:'30px'}}>From  <br/> ₹10,999 <br/><span color='gray'> ₹1̶4̶,9̶9̶9̶</span>  </p>

        </div>
        <div className='pc1' onClick={() => handleDetail('Xiaomi Pad 6')}>
        <br/>
            <p color='black' style={{marginLeft:'30px'}}>Xiaomi Smart Air Purifier 4 Lite<br/> </p>
            <button style={{color:'red',background:' ',border:'1px solid red ', height:'20px', width:'90px' ,fontSize:'11PX', borderRadius:'7px',marginLeft:'30px' }}>60% Off</button>
           <br/><img src={cart16}  style={{marginLeft:'180px',height:'100px'}}/>
            <p color='black' style={{marginLeft:'30px'}}>From  <br/> ₹3,599 <br/><span color='gray'> ₹8̶,9̶9̶8̶</span>  </p>

        </div>
        
    </div>
    <productDetail productDetail={productDetail} />
    </>
  )
}
export default Home;
