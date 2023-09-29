import React from 'react';

function HomePage() {
  return (
    <main className = "center" id = 'main'>
      <div className = "page-area">
        {/* <!-- This is an Semantic HTML change --> */}
        <article className = "text-box">
          <h1 id = "main">Stay on track</h1>
          <p>
              Do you know where you are spending your money? If you really stop to track it down,
              you would get surprised! Proper budget management depends on real data... and this
              app will help you with that!
          </p>
        </article>

        {/* <!-- This is an Semantic HTML change --> */}
        <article className = "text-box">
          <h1>Alerts</h1>
          <p>
              What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
          </p>
        </article>

        {/* <!-- This is an Semantic HTML change --> */}
        <article className = "text-box">
          <h1>Results</h1>
          <p>
              People who stick to a financial plan, budgeting every expense, get out of debt faster!
              Also, they to live happier lives... since they expend without guilt or fear... 
              because they know it is all good and accounted for.
          </p>
        </article>

        {/* <!-- This is an Semantic HTML change --> */}
        <article className = "text-box">
          <h1>Free</h1>
          <p>
              This app is free!!! And you are the only one holding your data!
          </p>
        </article>

        <article className = "text-box">
          <h1>Chart.js</h1>
          <p><canvas id="myChart" width="1vw" height="1vh"></canvas></p>
        </article>

        <article className = "text-box">
          <h1>D3.js</h1>
          <svg width="20rem" height="12rem"></svg>
        </article>
      </div>
    </main>
  );
}

export default HomePage;
