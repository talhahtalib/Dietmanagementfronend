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
        <img src="https://img.freepik.com/free-photo/top-view-food-banquet_23-2149893486.jpg?w=360&t=st=1693730698~exp=1693731298~hmac=d9fc44f2ee6cd48975f9d0ba4205a2e9de884b4cfef523daa4a46794cf787bcb" alt="" />
      </div>
      
    </div>
  );
}


export default HomePage;
