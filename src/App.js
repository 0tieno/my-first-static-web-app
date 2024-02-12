import React from 'react';
// import './index.css';

import Header from './Header.jsx'
import Card from './card.jsx'  
import profile1 from './assets/ronney.jpg'
import profile2 from './assets/Khush Soni.jpg'
import Footer from './Footer.jsx'
import CountDown from './countDown.jsx'

function App() {
  return (
    <>
      <Header/>
      <CountDown/>
      
      <div className="card-container">
        <Card
         imageSrc={profile1}
         title={"Ronney Otieno"}
          description={"Alpha MLSA"}
        />
        <Card 
        imageSrc={profile2}
        title={"Khush Soni"}
        description={"Beta MLSA"}
        />
      </div>
      <Footer/>
    </>
  );
}

export default App;
