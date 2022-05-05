import React from 'react';
import "../styles/TransactionForm.css";

const TransactionForm = () => {
    return (
        <>
            <div className="transaction_form_container">
                <h1 style={{ color: 'lightseagreen' }}>Transaction form</h1>
                <br />
                <form>
                    <input
                        type="text"
                        placeholder='Enter Transaction Detail'
                        className='transaction_input'
                    />
                    <br />
                    <br />
                    <input
                        type="text"
                        placeholder='Enter Transaction Amount'
                        className='transaction_input'
                    />
                    <br />
                    <br />
                    <button className='button'>Add Transaction</button>
                </form>
            </div>
        </>
    )
}

export default TransactionForm;