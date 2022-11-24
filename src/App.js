import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Cards';
import Login from './pages/Login';
import Search from './pages/Search';
import Profile from './pages/Profile';
import { Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
            <Route path="/" element={<Card />} />
            <Route path="/login" element={<Login />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    );
  }
}

export default App;