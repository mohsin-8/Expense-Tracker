import React, { useContext } from 'react';
import "../styles/Transactions.css";
import { GlobalContext } from "../context/GlobalState";

const Transactions = ({ transObj }) => {
    const { delTransaction } = useContext(GlobalContext);
    const sign = transObj.amount < 0 ? '-' : '+';

    return (
        <>
            <li className={"list", transObj.amount < 0 ? 'minus' : 'plus'}>
                <span>{transObj.desc}</span>
                <span>{sign}${Math.abs(transObj.amount)}</span>
                <button className='del_button' onClick={() => delTransaction(transObj.id)}>X</button>
            </li>
        </>
    )
}

export default Transactions;