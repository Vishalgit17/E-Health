import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import A from '../pictures/Patient 1.jpg';
import B from '../pictures/Patient 2.jpg';

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Our Healthcare App</h1>
        <p>Improving Lives, One Step at a Time</p>
      </header>

      <section className="testimonial-section">
        <h2>See What Our Patients Are Saying</h2>
        <div className="testimonial-wrapper">
          <div className="testimonial-card">
            <img src={A} alt="Patient 1" />
            <p>"I've never felt better! This app has transformed my healthcare experience."</p>
            <span>- Magdalene Shaw, 72</span>
          </div>

          <div className="testimonial-card">
            <img src={B} alt="Patient 2" />
            <p>"I highly recommend this app to all seniors. It's user-friendly and helps me manage my health effortlessly."</p>
            <span>- John Wick, 80</span>
          </div>
        </div>
      </section>

      <div className="button-container">
        <Link to="/login" className="button">Login</Link>
        <Link to="/signup" className="button">Signup</Link>
      </div>
    </div>
  );
}

export default Home;

