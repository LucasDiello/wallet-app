import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <main id="main-table">
        <section id="container">
          <div id="align-table">
            <div id="header">
              <Header />
              <WalletForm />
            </div>
            <div id="table">
              <Table />
            </div>
          </div>
        </section>
      </main>

    );
  }
}

export default Wallet;
