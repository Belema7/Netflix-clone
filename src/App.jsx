import React from "react";
import Banner from "./components/Banner/Banner";
import Row from "./components/Row/Row";
import requests from "./utils/requests";

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Banner />
      <div className="space-y-10">
        <Row title="Netflix Originals" fetchUrl={requests.netflixOriginals} isLarge />
        <Row title="Trending Now" fetchUrl={requests.trending} />
        <Row title="Top Rated" fetchUrl={requests.topRated} />
        <Row title="Popular" fetchUrl={requests.popular} />
        <Row title="Upcoming" fetchUrl={requests.upcoming} />
      </div>
    </div>
  );
}

export default App;
