import React from 'react';
import "../styles/TransactionHistory.css";

const TransactionHistory = () => {
    return (
        <>
            <div className="transaction_history_container">
                <div className="transaction_history_card">
                    <h1 style={{ color: 'lightseagreen' }}>Transaction History</h1>
                    <br />
                    <p className='transaction_history_para'>Demo Transaction 1</p>
                    <p className='transaction_history_para'>Demo Transaction 2</p>
                    <p className='transaction_history_para'>Demo Transaction 3</p>
                    <p className='transaction_history_para'>Demo Transaction 4</p>
                    <p className='transaction_history_para'>Demo Transaction 5</p>
                    <p className='transaction_history_para'>Demo Transaction 6</p>
                </div>
            </div>
        </>
    )
}

export default TransactionHistory;