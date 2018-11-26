import React, { Component } from 'react';
import FormMiddle from './PrincipalFolder/FormMiddle';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            nextWhat: false,
            principal: true
        }
    }
    handleSubmit = event => {
        if (this.state.age < 18) {
            alert("Você é muito novo para ser um Viking!")
        } else if (
            this.state.age >= 18) {
            if (this.state.name === "") {
                alert("Por favor, preencha seu nome Viking!")
            } else if (this.state.name !== "") {
                this.setState({ nextWhat: true, principal: false })
            }
        }


    }
    handleChangeName = event => {
        const name = event.target.value;
        this.setState({ name })
    }
    handleChangeAge = event => {
        const age = event.target.value;
        this.setState({ age })
    }
    render() {
        const { nextWhat, principal, name, age } = this.state;
        let whatYouDo = '';
        let principalField = '';

        if (principal) {
            principalField =
                <fieldset>
                    <h2 className="fs-title">Qual seu nome e idade viking?</h2>
                    <input type="text" name="email" placeholder="Nome" onChange={(event) => { this.handleChangeName(event) }} />
                    <input type="number" name="pass" placeholder="Idade" onChange={(event) => { this.handleChangeAge(event) }} />
                    <button type="button" className="next action-button" onClick={(event) => { this.handleSubmit(event) }}>Próximo</button>
                </fieldset>
        }
        if (nextWhat) {
            whatYouDo = <FormMiddle name={name} age={age} />
        }

        return (
            <div>
                <form id="msform">
                    {principalField}
                    {whatYouDo}
                </form>
            </div>
        );
    }
}

export default Form;