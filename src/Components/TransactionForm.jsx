import React, { useContext, useState } from 'react';
import "../styles/TransactionForm.css";
import { GlobalContext } from '../context/GlobalState';

const TransactionForm = () => {
    const [isDetail, setDetail] = useState("");
    const [isAmount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            desc: isDetail,
            amount: +isAmount
        }

        addTransaction(newTransaction);

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