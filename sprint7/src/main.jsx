import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";
import WelcomePage from "./WelcomePage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { useLocalStorage } from "react-use";

function Main() {
  const [user, setUser] = useLocalStorage('user');

  const updateUserData = (newUserData) => {
    setUser(newUserData);
    console.log("'updateUserData' has been updated in main.jsx by login.jsx")
  };

  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route element={<ProtectedRoute isLoggedIn={user} />}>
              <Route path="/starships" element={<App />} />
            </Route>
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/login"
              element={<Login updateUserData={updateUserData} />}
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
