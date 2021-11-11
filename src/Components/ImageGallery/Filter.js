import React, { Component } from "react";
import { Card,CardImg, ButtonGroup, Button } from "reactstrap";
import {FILTERS} from "../../Data/data"


class Filter extends Component {
    render() {
      const card = this.props.cards
        .filter(({ type }) => {
          return !this.props.filter || type === this.props.filter;
        })
        .map(card => {
          return (
            <div
              key={Math.random()
                .toString(36)
                .slice(2)}
              className="col-2 m-1"
            >
              <Card onClick={() => this.props.cardSelect(card.id)}>
                <CardImg src={card.img} alt={card.name} />
              </Card>
            </div>
          );
        });
      return (
        <div className="container">
          <div className="row">
            <div className="col d-flex align-content-start flex-wrap">{card}</div>
          </div>
        </div>
      );
    }
  }
  export default Filter;