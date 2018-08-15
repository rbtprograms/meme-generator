import React, { Component, Fragment } from 'react';
import styles from './App.css';

class App extends Component {

  state = { 
    topContent: 'Type your dank meme text',
    url: 'http://i.imgflip.com/18visq.jpg'
  };

  handlePictureChoose = (url = '') => {
    this.setState({ url });
  };

  handleTopContentChange = (topContent = '') => {
    this.setState({ topContent });
  }

  render() {
    const { url, topContent } = this.state;

    return (
      <main className={styles.app}>
        <h1>Let's make some memes!</h1>
        <section>
          <p id='how'>Upload an image, input your top and bottom text, and save! It's that easy!</p>
          <Content content={topContent} onChange={this.handleTopContentChange}/>
          <Picture url={url} onChoose={this.handlePictureChoose}/>
        </section>
        <section>
          <Meme url={url} topContent={topContent}/>
        </section>
      </main>
    );
  }
}

function Meme({ url, topContent }) {
  return (
    <Fragment>
      <pre style={{ background: `url(${url})` }}>{topContent}</pre>
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

function Content({ content, onChange }) {
  return (
    <p>
      <label>
        Top Text Here:
        <input
          value={content}
          onChange={({ target }) => onChange(target.value)}
        />
      </label>
    </p>
  );
}

export default App;