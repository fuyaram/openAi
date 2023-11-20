
import React from 'react';
import './Home4.css';

const images = [
  {
    src: 'https://images.openai.com/blob/2014517b-1a80-4b62-bbb6-caa490f69299/introducing-gpts.png?trim=0,30,0,809&width=800',
    alt: 'Image 1',
    title: 'Introducing GPTs',
    description: 'Nov 6, 2023 ',
  },
  {
    src: 'https://images.openai.com/blob/a2e49de2-ba5b-4869-9c2d-db3b4b5dcc19/new-models-and-developer-products-announced-at-devday.jpg?width=800',
    alt: 'Image 1vscode-file://vscode-app/c:/Users/Hp/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html',
    title: 'New models and developer products announced at DevDay',
    description: 'Nov 6, 2023',
  },
  {
    src: 'https://images.openai.com/blob/f698e023-3373-4385-93f3-f0e0a24adbf0/VALERIECloudAstronaut.png?trim=0,320,0,448&width=800',
    alt: 'Image 1',
    title: ' DALL·E 3 is now available in ChatGPT Plus and Enterprise',
    description: ' Oct 19, 2023',
  },
  {
    src: 'https://images.openai.com/blob/9c95036b-c2f5-4af8-a9c4-ed6c411f77e4/chatgpt-can-now-see-hear-and-speak-alt.jpg?trim=0,420,0,420&width=800',
    alt: 'Image 1',
    title: 'ChatGPT can now see, hear, and speak',
    description: 'Sep 25, 2023',
  },
];

const Home1 = ({ images }) => {
  return (
    <>
    <div className="image-container">
      {images.map((image, index) => (
        <div key={index} className="image-item">
          <img src={image.src} alt={image.alt} />
          <div className="image-info">
            <h3>{image.title}</h3>
            <p>{image.description}</p>
          </div>
        </div>
      ))}
    </div>
    
    </>
  );
};

function App() {
  return (
    <div className="app">
      <Home1 images={images} />
    </div>
  );
}

export default App;
