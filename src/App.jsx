import "./index.css";
import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { player } from "./Data";



export  default function App() {
    const [isClick ,setIsclick]=useState(false);
  

function handleClick(){
  setIsclick(isClick=>!isClick);

}
  
  const arrayDataItems = player.map(player => 
    <ListGroup variant="flush" key={player.id}>
       <span>{player.age} : {player.name}</span>
      </ListGroup>
  )

  return (
    <>
     <h1 id="title">Data Fetching</h1>
    <div className={isClick ? "border border-primary text-center "  : undefined}>
 <div>
    <ListGroup >
    {isClick ?  <ListGroup.Item>
      {arrayDataItems} </ListGroup.Item>:undefined}
      </ListGroup>

  </div>
    </div>
    <Button className="b1" onClick={handleClick}>
      {isClick? 'Remove data':'Fetch data'}</Button>

  
    </>
  );
}
  