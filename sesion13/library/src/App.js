import logo from './logo.svg';
import BookList from './components/BookList'
import Login from './components/Login';
import './App.css';

import React, { useEffect } from 'react'

function App() {

  const [logged, setLogged] = React.useState(false)

  function checkLogin() {
    let token = localStorage.getItem('token')

    if(token) {
      setLogged(true)
    } else {
      setLogged(false)
    }
  }

  useEffect(()=>{
    checkLogin()
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        { logged ? (
          <BookList logoutCallback={checkLogin}></BookList>
        ) : (
          <Login loginCallback={checkLogin}></Login>
        ) }
      </header>
    </div>
  );
}

export default App;
