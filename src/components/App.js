import React, { Component, Fragment } from 'react';
import styles from './App.css';

class App extends Component {

  state = { 
    topContent: 'Type your dank meme text',
    bottomContent: 'More dank meme text',
    url: 'https://s3.amazonaws.com/colorslive/jpg_512x512/3534519-BTjpDbK2uPA0vAO2.jpg'
    // url: 'https://usatftw.files.wordpress.com/2017/05/spongebob.jpg?w=1000&h=600&crop=1'
  };

  handlePictureChoose = (url = '') => {
    this.setState({ url });
  };

  handleTopContentChange = (topContent = '') => {
    this.setState({ topContent });
  };

  handleBottomContentChange = (bottomContent = '') => {
    this.setState({ bottomContent });
  };

  render() {
    const { url, topContent, bottomContent } = this.state;

    return (
      <main className={styles.app}>
        <h1>Let's make some memes!</h1>
        <section>
          <p id='how'>Upload an image, input your top and bottom text, and save! It's that easy!</p>
          <Content label='Top' content={topContent} onChange={this.handleTopContentChange}/>
          <Content label='Bottom' content={bottomContent} onChange={this.handleBottomContentChange}/>
          <Picture url={url} onChoose={this.handlePictureChoose}/>
        </section>
        <section>
          <Meme url={url} topContent={topContent} bottomContent={bottomContent}/>
        </section>
      </main>
    );
  }
}

function Meme({ url, topContent, bottomContent }) {
  return (
    <Fragment>
      <div  id='container' style={{ background: `url(${url}) no-repeat center/ auto 500px` }}>
        <p id='toptext'>{topContent}</p>
        <p id='bottomtext'>{bottomContent}</p>
      </div>
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

function Content({ content, onChange, label }) {
  return (
    <p>
      <label>
        {label} Text Here:
        <input
          value={content}
          onChange={({ target }) => onChange(target.value)}
        />
      </label>
    </p>
  );
}

export default App;