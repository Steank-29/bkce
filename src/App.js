import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import image1 from './assets/bg1.jpg'; // Adjust the paths as necessary
import image2 from './assets/bg2.jpg';
import image3 from './assets/bg3.jpg';

const images = [image1, image2, image3];

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const appStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div style={appStyle}>
      <Navbar />
    </div>
  );
}

export default App;
