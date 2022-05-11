import React from 'react';
import { Table } from 'react-bootstrap';
import { GoTrashcan } from 'react-icons/go';

const CustomTable = ({ tableHead=[], tableRows=[], deleteRow }) => {
    console.log(tableRows)
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    {tableHead.map((th, index) => <th key={th}>{th}</th>)}
                </tr>
            </thead>
            <tbody>
                {tableRows.map((p, index) => (
                <tr>
                    <td><img src={p.img} alt="..." width={120}/></td>
                    <td>{p.name}</td>
                    <td>{1}</td>
                    <td>{p.price}</td>
                    <td><button onClick={() => deleteRow(index)}><GoTrashcan /></button></td>
                </tr>))}
            </tbody>
        </Table>
    )
}

export default CustomTable;