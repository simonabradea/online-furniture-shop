import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Carusel from '../components/caruselComponent/caruselComponent';
import CustomCard from '../components/cardComponent/cardComponent';
import { getProductTypeList, getCarouselImages } from '../services/api';
import './pages.css';

const Home = () => {

    const [carouselImgs, setCarouselImgs] = useState([]);
    const [productTypes, setProductTypes] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getProductTypeList()
            .then(res => {
                setProductTypes(res)
            })
            .catch(err => console.log(err))

        getCarouselImages()
            .then(res => {
                setCarouselImgs(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const handleRedirect = (productType) => {
        navigate(`/portofolio?type=${productType}`)
    }

    return (
        <div className="m-3">
            <div className="carousel-container">
                {carouselImgs.length > 0 && <Carusel imgs={carouselImgs} />}
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                {productTypes.length > 0 && productTypes.map(type => (
                    <CustomCard
                        key={type}
                        className="m-2"
                        title={type}
                        showButton={true}
                        buttonLabel="Mergi la produse"
                        buttononClick={() => handleRedirect(type)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home;