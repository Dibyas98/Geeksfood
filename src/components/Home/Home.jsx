import React from 'react'
import Hero from '../Hero/Hero';
import Card from '../card/Card'
import Grid_com from '../grid/Grid_com';

export default function Home(props) {
  console.log(props.mode);
  return (
    <>
    <Hero mode ={props.mode}></Hero>
    <Card mode = {props.mode}></Card>
    <Grid_com mode ={props.mode}></Grid_com></>
  )
}
