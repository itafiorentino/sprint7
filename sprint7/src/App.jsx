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
    <div className="App flex flex-col w-full justify-center items-center bg-black font-mono text-stone-200">
      <div name="ship-list-element" className="flex-row w-5/6 md:w-4/6 mt-4">
        {shipsData.map((ship) => (
          <ul key={ship.name} className=" bg-stone-900 p-4 mb-4">
            <label onClick={() => handleShipClick(ship.name)}>
            <strong className="text-xl my-2">{ship.name.toUpperCase()}</strong>
              <p>{ship.model}</p>

              {selectedShip === ship.name && (
                <div name="card" className="flex flex-col mt-5">
                  <div name="title">
                    <p className="text-base my-4">
                      All the Star Wars data you've ever wanted: Planets,
                      Spaceships, Vehicles, People, Films and Species From all
                      SEVEN Star Wars films.
                    </p>
                  </div>
                  <div name="details" className="flex flex-row w-full">
                    <div className="w-1/2">
                      <p className="my-2">
                        <strong>Model:</strong> {ship.model}
                      </p>
                      <p className="my-2">
                        <strong>Cost in credits:</strong> {ship.cost_in_credits}{" "}
                      </p>
                      <p className="my-2">
                        <strong>Atmospheric speed:</strong>{" "}
                        {ship.max_atmosphering_speed}
                      </p>
                    </div>
                    <div className="w-1/2">
                      <p className="my-2">
                        <strong>Manufacturer:</strong> {ship.manufacturer}
                      </p>
                      <p className="my-2">
                        <strong>Length:</strong> {ship.length}
                      </p>
                      <p className="my-2">
                        <strong>Crew:</strong> {ship.crew}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </label>
          </ul>
        ))}
      </div>
      {isLoading && (
        <>
          <span className="loading loading-dots loading-md"></span>
        </>
      )}
      <button
        className="flex sm:text-base md:text-lg lg:text-xl xl:text-2xl m-5 mb-10 p-5 border-2 border-stone-500 rounded-lg text-white transition-all duration-300 ease-in-out"
        onClick={() => handleLoadMore()}
      >
        Load More
      </button>
    </div>
  );
}

export default App;
