import React from "react";
import Quotestext from "./Quotes.json";
import QuoteCard from "./QuoteCard";
import './QuotesCard.css'
import { nanoid } from 'nanoid'

export default function Quote(props) {
  

  return (
    <div className={`quote quote${props.mode}`}>
      {Quotestext.quotes.map((ele, index) => (
        <QuoteCard mode={props.mode} key ={nanoid()} para={ele.quote} author= {ele.author} id={index}></QuoteCard>
      ))}
    </div>
  );
}
