import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import {Link} from "react-router-dom";
const NoteOrder = ({items, qt, total, name, phone}) => {
    return (
        <div className="note">
            <table className="ord">

                <tr>
                    <th>Order</th>
                    {items.map(item => {
                        return(<td>{item}</td>)
                    })}
                </tr>
                <tr>
                    <th>Qty</th>
                    {qt.map(q => {
                        return(<td>{q}</td>)
                    })}
                </tr>
            </table>
            <hr />
            <table>
                <tr>
                    <th>Total:-</th>
                    <td>{total}</td>
                </tr>
            </table>
            <hr />
            <table>
                <tr>
                    <th>Name:-</th>
                    <td>{name}</td>
                </tr>
            </table>
            <table>
                <tr>
                    <th>Phone:-</th>
                    <td>{phone}</td>
                </tr>
            </table>
            <SendIcon className="sbtn"/>
        </div>
    )
}

export default NoteOrder
