import React from 'react'

export default function QuoteCard(props) {
  return (
    <div id={props.id} className={`quoteCard ${props.mode}QuoteCard`}>
      <h1>{props.para}</h1>
      <p>{props.author}</p>
    </div>
  )
}
