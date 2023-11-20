
import React from 'react';
import './Home4.css';

const images = [
  {
    src: 'https://images.openai.com/blob/de9e8dc2-a39b-46c9-b7a0-54dd5c56b1df/dall-e-3-system-card.png?trim=0,0,0,0&width=800',
    alt: 'Image 1',
    title: 'DALL·E 3 system car ',
    description: 'Oct 3, 2023',
  },
  {
    src: 'https://images.openai.com/blob/96a6dba4-e46c-4f98-b718-915479d1c133/gpt-4vision-system-card.png?trim=0,0,0,0&width=800',
    alt: 'Image 1',
    title: 'GPT-4V(ision) system card',
    description: 'Sep 25, 2023',
  },
  {
    src: 'https://images.openai.com/blob/169a9863-5725-45cf-b096-6d2e5b6cebe9/confidence-building-measures-for-artificial-intelligence-workshop-proceedings.png?trim=0,0,0,0&width=800',
    alt: 'Image 1',
    title: ' Artificial Intelligence: Workshop proceedings',
    description: ' Aug 1, 2023',
  },
  {
    src: 'https://images.openai.com/blob/d4f299e7-2084-43d6-80f5-40e9404f15e2/frontier-ai-regulation-managing-emerging-risks-to-public-safety.png?trim=0,0,0,0&width=800',
    alt: 'Image 1',
    title: 'Managing emerging risks to public safety',
    description: 'Jul 6, 2023',
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
