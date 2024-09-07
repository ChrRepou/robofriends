import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

const App = () => {

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.cypress.io/users")
  //     .then((response) => response.json())
  //     .then((users) => this.setState({ robots: users }));
  // }

  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  }

    useEffect(() => {
      fetch("https://jsonplaceholder.cypress.io/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
    }, []);

    const filteredRobots = robots.filter((robot) =>
      robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return !robots.length ? (
      <h1 className="tc">Loading...</h1>
    ) : (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );

}

export default App;
