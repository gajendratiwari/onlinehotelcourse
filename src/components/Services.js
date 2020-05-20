import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktail",
        info: "Lets enjoy the night with free party!",
      },
      {
        icon: <FaHiking />,
        title: "Hiking",
        info: "Lets enjoy the night with free party!",
      },
      {
        icon: <FaShuttleVan />,
        title: "Shuttle Van",
        info: "Lets enjoy the night with free party!",
      },
      {
        icon: <FaBeer />,
        title: "Beer ",
        info: "Lets enjoy the night with free party!",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
