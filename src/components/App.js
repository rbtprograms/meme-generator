import React, { Component, Fragment } from 'react';
import styles from './App.css';

class App extends Component {

  state = { 
    url: 'http://i.imgflip.com/18visq.jpg'
  };

  handlePictureChoose = (url = '') => {
    this.setState({ url });
  };

  render() {
    const { url } = this.state;

    return (
      <main className={styles.app}>
        <h1>Let's make some memes!</h1>
        <section>
          <p id='how'>Upload an image, input your top and bottom text, and save! It's that easy!</p>
          <Picture url={url} onChoose={this.handlePictureChoose}/>
        </section>
        <section>
          <Meme url={url}/>
        </section>
      </main>
    );
  }
}

function Meme({ url }) {
  return (
    <Fragment>
      <pre style={{ background: `url(${url})` }}>What up</pre>
    </Fragment>
  );
}

function Picture({ url, onChoose }) {
  return (
    <label>
      Picture:
      <input value={url} onChange={({ target }) => onChoose(target.value)}/>
    </label>
  );
}

export default App;