import React from 'react';
import "./App.css";

// import Components
import Header from './Components/Header';
import Balance from './Components/Balance';
import TransactionHistory from './Components/TransactionHistory';
import TransactionForm from './Components/TransactionForm';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <div className="main_container">
        <Balance />
        <TransactionHistory />
      </div>
      <TransactionForm />
      <Footer />
    </>
  )
}

export default App;