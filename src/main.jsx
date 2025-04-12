import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import PrivateRoute from "./components/Private";
import Profile from "./pages/Profile";
import PatientDashboard from "./pages/PatientDashboard";
import ProviderDashBoard from "./pages/ProviderDashBoard";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/patient"
            element={
              <PrivateRoute>
                <PatientDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/provider"
            element={
              <PrivateRoute>
                <ProviderDashBoard />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
