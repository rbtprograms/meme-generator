import React, { Component, Fragment } from 'react';
import styles from './App.css';

class App extends Component {

  state = { 
    url: 'http://i.imgflip.com/18visq.jpg'
  }

  render() {
    const { url } = this.state;

    return (
      <main className={styles.app}>
        <h1>Let's make some memes!</h1>
        <section>
          <p id='how'>Upload an image, input your top and bottom text, and save! It's that easy!</p>
          <Picture url={url}/>
        </section>
      </main>
    );
  }
}

function Picture({ url }) {
  return (
    <label>
      Picture:
      <input value={url}/>
    </label>
  )
}

export default App;