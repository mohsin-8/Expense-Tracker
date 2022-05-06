import React from 'react';
import "./App.css";
import { GlobalProvider } from './context/GlobalState';

// import Components
import Header from './Components/Header';
import Balance from './Components/Balance';
import TransactionHistory from './Components/TransactionHistory';
import TransactionForm from './Components/TransactionForm';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      <GlobalProvider>
        <Header />
        <div className="main_container">
          <Balance />
          <TransactionHistory />
        </div>
        <TransactionForm />
        <Footer />
      </GlobalProvider>
    </>
  )
}

export default App;