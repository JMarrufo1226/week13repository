import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import LoginForm from './LoginForm'
import Navbar from './Navbar' //  I had to use this command "npm install --save react-bootstrap-validation" to get the navbar to work
                              //Only thing is i dont know what it does or how it works.
export default function App() {
  return (
    <>
      <div className="bg-light border p-3">
        <Navbar/>
      </div>
      <LoginForm/>
    </>
  )
}