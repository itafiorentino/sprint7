import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { fetchShips } from "./redux/slice/shipsSlice";
import "./App.css";
import React from "react";

function App() {
  const dispatch = useDispatch();
  const fetchedData = useSelector((state) => state.ships.data);
  const [shipsData, setShipsData] = useState([]);
  const isLoading = useSelector((state) => state.ships.isLoading);

  const [selectedShip, setSelectedShip] = useState(null);

  const [page, setPage] = useState(1);

  //Initial page load dispatch
  useEffect(() => {
    dispatch(fetchShips(page));
  }, [page]);

  //Load more dispatch
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleShipClick = (shipName) => {
    setSelectedShip((prevSelectedShip) =>
      prevSelectedShip === shipName ? null : shipName
    );
  };

  useEffect(() => {
    setShipsData((prevShipsData) => [...prevShipsData, ...fetchedData]);
  }, [fetchedData, page]);

  //console.log("hi from App.jsx");

  return (
    <div className="App text-white bg-black h-full">
      {shipsData.map((ship) => (
        <ul key={ship.name} className="m-0 p-0">
          <label onClick={() => handleShipClick(ship.name)}>
            <h3>{ship.name}</h3>
            <p>{ship.model}</p>
            {selectedShip === ship.name && (
              <div>
                <h2>{ship.name}</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Temporibus doloremque praesentium consectetur id tenetur sit
                  minus enim aperiam, voluptatem, magnam velit illo aspernatur
                  numquam esse vitae rerum! Alias, iusto excepturi.
                </p>
                <div id="ship_card">
                <p>Model: {ship.model}</p>
                <p>Cost in credits: {ship.cost_in_credits} </p>
                <p>Atmospheric speed: {ship.max_atmosphering_speed}</p>
                <p>Manufacturer: {ship.manufacturer}</p>
                <p>Length: {ship.length}</p>
                <p>Crew: {ship.crew}</p>
                </div>
              </div>
            )}
          </label>
        </ul>
      ))}
{isLoading && (
        <>
          <span className="loading loading-dots loading-md"></span>
        </>
      )}
      <button className="block btn btn-ghost text-white" onClick={() => handleLoadMore()}>Load More</button>
    </div>
  );
}

export default App;
