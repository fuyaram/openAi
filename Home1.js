// App.js

import React from 'react';
import './Home1.css';

const images = [
  {
    src: 'https://images.openai.com/blob/9eb94b23-a383-4771-884f-cc1d88e296bd/brand-guidelines.png?trim=0,0,0,0&width=800',
    alt: 'Image 1',
    title: 'OpenAI announces leadership transition',
    description: 'Nov 17, 2023',
  },
  {
    src: 'https://images.openai.com/blob/abb3c0a3-ec87-4cd5-8bec-55475bf3d757/data-partnerships.png?trim=0,0,0,0&width=800',
    alt: 'Image 1',
    title: 'OpenAI Data Partnerships',
    description: 'Nov 9, 2023',
  },
  {
    src: 'https://images.openai.com/blob/2014517b-1a80-4b62-bbb6-caa490f69299/introducing-gpts.png?trim=0,30,0,809&width=800',
    alt: 'Image 1',
    title: 'Introducing GPTs',
    description: ' Nov 6, 2023',
  },
  {
    src: 'https://images.openai.com/blob/a2e49de2-ba5b-4869-9c2d-db3b4b5dcc19/new-models-and-developer-products-announced-at-devday.jpg?width=800',
    alt: 'Image 1',
    title: 'Title 1',
    description: 'Description for image 1.',
  },
];

const Home1 = ({ images }) => {
  return (
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
