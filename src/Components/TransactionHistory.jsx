import React, { useContext } from 'react';
import "../styles/TransactionHistory.css";
import { GlobalContext } from '../context/GlobalState';

// import Component
import Transactions from './Transactions';

const TransactionHistory = () => {
    const { transactions } = useContext(GlobalContext);
    // console.log(transactions);
    return (
        <>
            <div className="transaction_history_container">
                <div className="transaction_history_card">
                    <h1 style={{ color: 'lightseagreen' }}>Transaction History</h1>
                    <hr />
                    <br />
                    <ul className="transaction_list">
                        {transactions.map((transObj) => {
                            return (
                                <Transactions key={transObj.id} transObj={transObj} />
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TransactionHistory;