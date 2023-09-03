import React from 'react';
import './Home.css'; // Import the CSS file

function HomePage() {
  return (
    <div className={'Home'} >
      <main>
        <section>
          <h2>Track Your Meals</h2>
          <p>Log your meals to keep track of your diet and nutritional intake.</p>
        </section>
        <section>
          <h2>Plan Your Diet</h2>
          <p>Create personalized diet plans to achieve your health goals.</p>
        </section>
        <section>
          <h2>Progress Tracking</h2>
          <p>Monitor your progress over time and stay motivated.</p>
        </section>
      </main>
      <div className="img">
        <img src="asset\diet mng.avif" alt="" />
      </div>
      
    </div>
  );
}


export default HomePage;
