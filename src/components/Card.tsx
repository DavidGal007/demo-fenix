import React, { FC } from "react";
import '../styles/invest.css'
import Graph from '../assets/graph.svg'
interface CardProps {
  icon: JSX.Element
  name: string
  currancy: string
  graph: JSX.Element
  action: string
  cryptocurrency: string
  topNot: JSX.Element
  red?: boolean
}

const Card: FC<CardProps> = ({ red, topNot, name, icon, action, cryptocurrency, currancy, graph }) => {
  return (<div className="card-wrapper">
    <div className="frame__statistic">

      {icon}
      <div className="frame-name">{name}</div>
      <div className="frame-current__price">{currancy}</div>
    </div>
    <div className="frame__grow">
      {graph}
      <div className="frame-currency">
        {topNot}
        <span className={red ? "red" : ""}>{action}</span>
      </div>
      <p className="current-currency">{cryptocurrency}</p>
    </div>

  </div>);
}

export default Card;