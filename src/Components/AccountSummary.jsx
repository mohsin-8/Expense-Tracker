import React from 'react';
import "../styles/AccountSummary.css";

const AccountSummary = () => {
    return (
        <>
            <div className="account_summary_container">
                <div className="income_card">
                    <h3>INCOME</h3>
                    <span style={{ color: 'green', fontSize: '20px' }}>$0.00</span>
                </div>

                <div className="expense_card">
                    <h3>EXPENSE</h3>
                    <span style={{ color: 'red', fontSize: '20px' }}>$0.00</span>
                </div>
            </div>
        </>
    )
}

export default AccountSummary;