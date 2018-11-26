import React, { Component } from 'react';
import nivelum from '../imgs/1.png'
import niveldois from '../imgs/2.png'
import niveltres from '../imgs/3.png'

class Viking extends Component {

    render() {
        const { ...properties } = this.props;
        if (properties.pontos === 27) {
            return (
                <div>
                    <h2 className="texto-viking">{properties.name + " você é um viking nível máximo!"}</h2>

                    <img className="image-viking" src={niveltres} alt="" />
                </div>
            )
        } else if (properties.pontos < 27 && properties.pontos > 15) {
            return (
                <div>
                    <h2 className="texto-viking">{properties.name + " você é um viking nível médio!"}</h2>
                    <img className="image-viking" src={niveldois} alt="" />
                </div>
            )
        }
        else if (properties.pontos <= 15) {
            return (
                <div>
                    <h2 className="texto-viking">{properties.name + " você é um viking nível baixo!"}</h2>

                    <img className="image-viking" src={nivelum} alt="" />
                </div>
            )
        }
    }
}

export default Viking;