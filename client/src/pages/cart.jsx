import React, { useState, useEffect } from 'react';
import CustomTable from '../components/customTable/customTable';
import { getTableHeadList } from '../services/api';

const Cart = (props) => {

    const storedData = localStorage.getItem('cart');
    const cartData = storedData ? JSON.parse(storedData) : [];

    const [tableHeadList, setTableHeadList] = useState([]);
    const [tableData, setTableData] = useState(cartData);
    
 
   // console.log(tableData.reduce((acc, p) => acc + Number(p.price)))

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


    return (
        <div className="m-3">
            {tableHeadList.length > 0 ? <CustomTable tableHead={tableHeadList}  tableRows={tableData} deleteRow={handleDeleteProdCart}/> : '...loading'}
            <div>Total: </div>
        </div>
    )
}

export default Cart;