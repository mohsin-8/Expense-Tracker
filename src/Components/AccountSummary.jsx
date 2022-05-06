import React, { useContext } from 'react';
import "../styles/AccountSummary.css";
import { GlobalContext } from "../context/GlobalState";


const AccountSummary = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transObj => transObj.amount);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2);
    console.log(expense);

    return (
        <>
            <div className="account_summary_container">
                <div className="income_card">
                    <h3>INCOME</h3>
                    <span style={{ color: 'green', fontSize: '20px' }}>${income}</span>
                </div>

                <div className="expense_card">
                    <h3>EXPENSE</h3>
                    <span style={{ color: 'red', fontSize: '20px' }}>${expense}</span>
                </div>
            </div>
        </>
    )
}

export default AccountSummary;