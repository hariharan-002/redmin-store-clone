import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import image1 from '../components/Asset/image1.webp';
import image2 from '../components/Asset/image2.webp';
import image3 from '../components/Asset/image3.webp';
import image4 from '../components/Asset/image4.webp';
import image5 from '../components/Asset/image5.webp';
import 'bootstrap/dist/css/bootstrap.min.css';



function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img src={image1} alt="First slide" className='carousel' />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={image2} alt="Second slide" className='carousel' />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={image3} alt="Third slide" className='carousel' />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={image4} alt="fourth slide" className='carousel' />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={image5} alt="fifth slide" className='carousel' />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;
