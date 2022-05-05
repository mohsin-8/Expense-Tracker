import React, { useState } from 'react';
import "../styles/TransactionForm.css";

const TransactionForm = () => {
    const [isDetail, setDetail] = useState("");
    const [isAmount, setAmount] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Detail:", isDetail);
        console.log("Amount:", isAmount);

        setDetail("");
        setAmount("");
    }

    return (
        <>
            <div className="transaction_form_container">
                <h1 style={{ color: 'lightseagreen' }}>Transaction form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Enter Transaction Detail'
                        className='transaction_input'
                        value={isDetail}
                        onChange={(e) => setDetail(e.target.value)}
                    />
                    <br />
                    <br />
                    <input
                        type="number"
                        placeholder='Enter Transaction Amount'
                        className='transaction_input'
                        value={isAmount}
                        onChange={(e) => setAmount(e.target.value)}
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