import React, { Component, Fragment } from 'react';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <main className={styles.app}>
        <h1>Hello React App</h1>
        <section>
          <p id='how'>How do you do?</p>
        </section>
      </main>
    );
  }
}

export default App;