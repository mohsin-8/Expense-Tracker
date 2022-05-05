import React from 'react';
import "../styles/Balance.css";

// import Component
import AccountSummary from './AccountSummary';

const Balance = () => {
    return (
        <>
            <div className="balance_container">
                <div className="balance">
                    <h2>Current Balance</h2>
                    <br />
                    <span className='balance_amount'>$0.00</span>
                    <AccountSummary />
                </div>
            </div>
        </>
    )
}

export default Balance;