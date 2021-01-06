import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../styles/fentity.css'


class Fentity extends Component {
    render() {
        console.log(this.props.match);
        const {fentities, name} = this.props.match.params
        const fentity= this.props.state[fentities].filter(f => {
            return f.name.toLowerCase() === name.toLowerCase()
        })[0]
        console.log(fentity)
        
        return (
            <React.Fragment>
                {!fentity ? (
                    <Redirect to="./"/>
                ): (
                <Link to={`/directory/${fentities}`}>
                
                    <div id="creature-container">
                        <h1>{fentity.name}</h1>
                        <img src={fentity.imgUrl} alt=""/>
                        <div className="title">Power:</div>
                        <div className="power text"> {fentity.power}</div>
                        <div className="other text">{fentity.other}</div>
                    </div>
                </Link>)}
            </React.Fragment>
        )
    }
}

export default Fentity;
