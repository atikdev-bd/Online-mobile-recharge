import React from 'react';
import Header from '../Header/Header';

const Home = () => {
    return (
      <div>
        <div className="bg-gradient-to-r from-sky-400 to-transparent p-4">
          <h2 className="text-4xl font-medium text-center mt-4">
            Recharge your mobile from any operator just a click. <br />{" "}
            <span className="text-indigo-600">Anytime. Anywhere.</span>
          </h2>
        </div>
        <div className="mt-36">
          <Header></Header>
        </div>
      </div>
    );
};

export default Home;