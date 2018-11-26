import React, { Component } from 'react';
import Viking from './Viking';

class FormMiddle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pontuacao: ''
        }
    }

    handleSubmit = () => {
        this.setState({ viking: true })
    }
    handleChange = (event) => {
        let tipo = ''
        tipo = event.target.id;


        if (tipo === "cerveja") {
            const valor = event.target.value
            let pontuacao_cerveja = 0
            if (valor === "3") {

                pontuacao_cerveja = 3
            }
            if (valor === "6") {

                pontuacao_cerveja = 6
            }
            if (valor === "9") {

                pontuacao_cerveja = 9
            }
            this.setState({ pontuacao: pontuacao_cerveja })
        }
        if (tipo === "tipo_cerveja") {
            const valor = event.target.value
            let pontuacao_tipo = 0


            if (valor === "Fraca") {
                pontuacao_tipo = 3
            }
            if (valor === "Média") {
                pontuacao_tipo = 6
            }
            if (valor === "Forte") {
                pontuacao_tipo = 9
            }
            pontuacao_tipo += this.state.pontuacao;
            this.setState({ pontuacao: pontuacao_tipo })

        }
        if (tipo === "comida") {
            const valor = event.target.value
            let pontuacao_comida = 0


            if (valor === "Porção") {
                pontuacao_comida = 3
            }
            if (valor === "Porção + acompanhamento") {
                pontuacao_comida = 6
            }
            if (valor === "Porção + acompanhamento + molho de pimenta") {
                pontuacao_comida = 9
            }
            pontuacao_comida += this.state.pontuacao;
            this.setState({ pontuacao: pontuacao_comida })
        }

    }

    render() {
        const { ...properties } = this.props;
        const { pontuacao } = this.state
        if (this.state.viking) {
            return <Viking pontos={pontuacao} name={properties.name} />
        } else {
            return (
                <div>
                    <fieldset >
                        <h3 className="fs-subtitle">Segundo passo</h3>
                        <label htmlFor="exampleFormControlSelect1">Quantas cervejas você bebeu hoje {properties.name}?</label>
                        <select className="select" id="cerveja" onChange={(event) => {
                            this.handleChange(event)
                        }}>
                            <option>Escolha uma opção</option>

                            <option>3</option>
                            <option>6</option>
                            <option>9</option>

                        </select>


                        <label htmlFor="exampleFormControlSelect2">Qual tipo de cerveja você bebeu {properties.name}?</label>
                        <select className="select" id="tipo_cerveja" onChange={(event) => {
                            this.handleChange(event)
                        }}>
                            <option>Escolha uma opção</option>
                            <option>Fraca</option>
                            <option>Média</option>
                            <option>Forte</option>
                        </select>
                        <label htmlFor="exampleFormControlSelect3">Qual tipo de comida você comeu {properties.name}?</label>
                        <select className="select padding-3" id="comida" onChange={(event) => {
                            this.handleChange(event)
                        }}>
                            <option>Escolha uma opção</option>
                            <option>Porção</option>
                            <option>Porção + acompanhamento</option>
                            <option>Porção + acompanhamento + molho de pimenta</option>

                        </select>
                        <div>
                            <button type="button" className="next action-button" onClick={() => { this.handleSubmit() }}>LIKE A VIKING</button>
                        </div>
                    </fieldset>

                </div>)
        }
    }
}

export default FormMiddle;
