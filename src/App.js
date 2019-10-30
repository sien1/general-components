import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BaseLayout, MenuContainer, Card, Button, LoadBar }  from './components';


function App() {
  return (
    
    <BaseLayout color1="rgb(209, 212, 211)" color2="white">
      
      <MenuContainer/>
      <Card color1="rgb(60, 10, 95)" color2="rgb(119, 52, 179)">
      <LoadBar barColor="blue" progress={45}/>
      </Card>
      <Button/>
      
    </BaseLayout>
    
  );
}

export default App;
