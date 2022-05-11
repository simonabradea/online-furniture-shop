import { useEffect, useState, useRef } from 'react';
//import { useNavigate } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';
import { getProducts, getProductCategories } from '../services/api';
import { useSearchParams } from 'react-router-dom';
import CustomCard from '../components/cardComponent/cardComponent';

const Products = () => {

    const [selectedCategory, setSelectedCategory] = useState();
    const [products, setProducts] = useState([]);
    const [productCategories, setProductCategories] = useState([]);

    const cartList = useRef([]);

    const [searchParams] = useSearchParams();

    const urlParams = Object.fromEntries([...searchParams]);

    //const navigate = useNavigate();

    useEffect(() => {
        getProductCategories()
            .then(res => {
                setProductCategories(res);
                setSelectedCategory(res[0]);
            })
    }, [])

    useEffect(() => {
        if (selectedCategory) {
            getProducts(selectedCategory)
                .then(res => {
                    const filteredProductsByType = res.filter(prod => prod.type === urlParams.type);
                    setProducts(filteredProductsByType)
                })
        }
    }, [selectedCategory])

    const handleTabOnChange = (tabKey) => {
        setSelectedCategory(tabKey)
    }

    const handleAddToCart = (product) => {
        console.log(product)
        cartList.current.push(product)
        localStorage.setItem('cart', JSON.stringify(cartList.current))
    }

    return (
        <div>
            <Tabs defaultActiveKey={productCategories[0]} id="uncontrolled-tab-example" className="mb-3" onSelect={handleTabOnChange}>
                {(productCategories && productCategories.length > 0) && productCategories.map(cat => (
                    <Tab key={cat} eventKey={cat} title={cat}>
                        <div className="d-flex flex-wrap justify-content-center">
                            {products.length > 0 ? products.map(p => (
                                <CustomCard
                                    key={p.name}
                                    className="m-2"
                                    title={p.name}
                                    imgSrc={`/${p.img}`}
                                    showButton={true}
                                    buttonLabel="Pune în coș"
                                    buttononClick={() => handleAddToCart(p)}
                                >
                                    <p>{p.description}</p>
                                    <p>{`${p.price} ron`}</p>
                                </CustomCard>
                            ))
                            : <div>Nu există {selectedCategory} pentru {urlParams.type} în această categorie.</div>}
                        </div>
                    </Tab>))}
            </Tabs>
        </div>
    )
}

export default Products;