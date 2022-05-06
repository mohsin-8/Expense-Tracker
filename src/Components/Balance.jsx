import React, { useContext } from 'react';
import "../styles/Balance.css";
import { GlobalContext } from "../context/GlobalState";

// import Component
import AccountSummary from './AccountSummary';

const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transObj => transObj.amount);
    // console.log(amounts);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    // console.log(total);
    return (
        <>
            <div className="balance_container">
                <div className="balance">
                    <h2>Current Balance</h2>
                    <br />
                    <span className='balance_amount'>${total}</span>
                    <AccountSummary />
                </div>
            </div>
        </>
    )
}

export default Balance;