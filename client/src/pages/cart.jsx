import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import CustomTable from '../components/customTable/customTable';
import { getTableHeadList } from '../services/api';
import { Button, InputGroup } from 'react-bootstrap';
import './pages.css';


const Cart = (props) => {

    const storedData = localStorage.getItem('cart');
    const cartData = storedData ? JSON.parse(storedData) : [];

    const [tableHeadList, setTableHeadList] = useState([]);
    const [tableData, setTableData] = useState(cartData);

    const navigate = useNavigate();

    const totalPrice = tableData.reduce((acc, p) => acc + Number(p.price), 0);

    useEffect(() => {
        getTableHeadList()
            .then(res => {
                console.log(res)
                setTableHeadList(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    const handleDeleteProdCart = (i) => {
        const newTableData = tableData.filter((e, index) => index !== i);
        setTableData(newTableData);
        localStorage.setItem('cart', JSON.stringify(newTableData))
    }

    const routeChange = () => {
        navigate(`/orderForm`)
    }

    // const processTableData = (data) => {
    //     const tempArr = [];
    //     const existentProduct = data.find((item) => item.id === product.id);
    //     if (existentProduct) {
    //         tempArr = data.map((item) =>
    //             item.id === product.id
    //                 ? { ...existentProduct, cantitate: existentProduct.cantitate + 1 }
    //                 : item
    //         )
    //     } else {
    //         tempArr = [...tableData, { ...product, cantitate: 1 }];
    //     }
    //     return tempArr
    // }


    return (
        <div className="m-3 mb-5">
            {tableHeadList.length > 0 ? <CustomTable tableHead={tableHeadList} tableRows={tableData} deleteRow={handleDeleteProdCart} /> : '...loading'}

            <div className="total-input">
                <InputGroup className="mb-3" size="lg">
                    <InputGroup.Text><b>Preț total:</b></InputGroup.Text>
                    <InputGroup.Text>{totalPrice} ron</InputGroup.Text>
                </InputGroup>
                <Button variant="dark" size="lg" onClick={routeChange}>Comandă</Button>{' '}
            </div>
        </div>
    )
}

export default Cart;