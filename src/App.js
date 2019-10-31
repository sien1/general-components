import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BaseLayout, MenuContainer, Card, Button, LoadBar, CardTitle, Container }  from './components';


function App() {
  return (
    
    <BaseLayout color1="white" color2="white">
      <Container bg=''>
        <Card color1="white" color2="white">
       
          <CardTitle>Tarjeta</CardTitle>
        </Card>
        <Card color1="white" color2="white">
          
          <CardTitle>Botones</CardTitle>
          <Button/>
        </Card>
        <Card color1="white" color2="white">
          <LoadBar barColor="gray" progress={95}/>
          <CardTitle>Loaders</CardTitle>
        </Card>

        <Card color1="white" color2="white">
          <CardTitle>Video Card</CardTitle>
        </Card>

        <Card color1="white" color2="white">
          <CardTitle>Tarjeta con Imagen</CardTitle>
        </Card>

        <Card color1="white" color2="white">
          
          <CardTitle>Botones</CardTitle>
          <Button/>
        </Card>
        <Card color1="white" color2="white">
          <LoadBar barColor="gray" progress={95}/>
          <CardTitle>Loaders</CardTitle>
        </Card>

        <Card color1="white" color2="white">
          <CardTitle>Video Card</CardTitle>
        </Card>

        <Card color1="white" color2="white">
          <CardTitle>Tarjeta con Imagen</CardTitle>
        </Card>
        <Card color1="white" color2="white">
          
          <CardTitle>Botones</CardTitle>
          <Button/>
        </Card>
        <Card color1="white" color2="white">
          <LoadBar barColor="gray" progress={95}/>
          <CardTitle>Loaders</CardTitle>
        </Card>

        <Card color1="white" color2="white">
          <CardTitle>Video Card</CardTitle>
        </Card>

        <Card color1="white" color2="white">
          <CardTitle>Tarjeta con Imagen</CardTitle>
        </Card>
        <Card color1="white" color2="white">
          
          <CardTitle>Botones</CardTitle>
          <Button/>
        </Card>
        <Card color1="white" color2="white">
          <LoadBar barColor="gray" progress={95}/>
          <CardTitle>Loaders</CardTitle>
        </Card>

        <Card color1="white" color2="white">
          <CardTitle>Video Card</CardTitle>
        </Card>

        <Card color1="white" color2="white">
          <CardTitle>Tarjeta con Imagen</CardTitle>
        </Card>
        <Card color1="white" color2="white">
          
          <CardTitle>Botones</CardTitle>
          <Button/>
        </Card>
        <Card color1="white" color2="white">
          <LoadBar barColor="gray" progress={95}/>
          <CardTitle>Loaders</CardTitle>
        </Card>

        <Card color1="white" color2="white">
          <CardTitle>Video Card</CardTitle>
        </Card>

        <Card color1="white" color2="white">
          <CardTitle>Tarjeta con Imagen</CardTitle>
        </Card>
        
        
      </Container>
    </BaseLayout>

  );
}

export default App;