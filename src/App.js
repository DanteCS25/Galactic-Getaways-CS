import React from 'react';
import Navbar from './navbar';
import './App.css';
import Footer from './footer'

// Images
import mars from './content/mars.png';
import saturn from './content/saturn.png';
import moon from './content/moon.png';
import iphone from './content/Iphone.png'
import character from './content/character.png'



function App() {
  return (
    <div className="App">
      <Navbar />
      <div id='Information'>
        <h2>Tired of Global Warning?</h2>
        <h1>VISIT A <br></br> DIFFERENT PLANET</h1>
        <p>Welcome to Celestial Voyages, where your dreams of interplanetary <br></br> exploration come to life. Join us in venturing beyond the stars, discovering <br></br> the wonders of otherworldly landscapes.</p>
      </div>
      <button className='Dest-But position-1'><a href="#Selector" style={{textDecoration: 'none', color: 'white'}}>Destinations</a></button>
      <button className='Stay-But'><a href='#ComingSoon' style={{textDecoration: 'none', color: 'white'}}>Stay up-to date</a></button>

      <div id='Selector'>
        <h1 className='selection'>A STELLAR SELECTION</h1>
        <p className='selectPar'>Explore three breathtaking destinations, each with <br></br> its own unique charm and mystery.</p>

        <div class="card">
          <img src={mars} alt="Image 1" />
          <div class="card-info">
            <h2>MARS</h2>
            <p className='pMars'>Engage in thrilling activities like rover <br></br> expeditions and marvel at the breathtaking <br></br> Martian sunsets. Say hey to Elon!</p>
          </div>
        </div>

        <div class="card">
          <img src={saturn} alt="Image 1" />
          <div class="card-info">
            <h2>SATURN</h2>
            <p className='pMars'>Experience weightlessness as you float among <br></br> Saturn's rings to witness the grandeur of the <br></br> gas giant from close quarters.</p>
          </div>
        </div>

        <div class="card">
          <img src={moon} alt="Image 1" />
          <div class="card-info">
            <h2>PLUTO</h2>
            <p className='pMars'>Uncover the mysteries of the distant dwarf <br></br> “planet” Pluto. Traverse its icy plains that <br></br> resides on the outskirts of our solar system.</p>
          </div>
        </div>

      </div>

      <div id='ComingSoon'>
        <h1 className='ComingTitle'>THE STARS IN YOUR POCKET... Coming soon</h1>
        <p className='ComingPar'>We are very excited to launch our very own <br></br> Celestial Voyages mobile application coming soon <br></br> to the App Store & Google Play Store.</p>
        <img src={iphone} alt="Image 1" style={{marginTop: '44px'}}/> <br></br>
        <img src={character} alt="Image 1" style={{ display: 'flex', marginTop: '59px', marginLeft: '99px'}}/>
        
        <div id='Subscribe'>
          <h1 className='SubTitle'>SUBSCRIBE TO STAY UPDATED</h1>
          <input id="inputField"  className='input' placeholder='Space traveller name'></input>
          <input className='input' placeholder='Contact email address'></input>
          <button className='JoinNews'>Join newsletter</button>
        </div>
      </div>

      <Footer />


    </div>
  );
}

export default App;
