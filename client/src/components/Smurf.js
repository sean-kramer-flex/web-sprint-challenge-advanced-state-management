import React from 'react';

class Smurf extends React.Component {
    render() {
        const { smurf } = this.props;

        return(<div data-testid="smurf" className="card">
            <div className="card-body">
                <div className="card-header">
            <h2 className="card-title">{smurf.name}</h2>
            </div>
            <p className="card-text">Position: {smurf.position}</p>
            <p className="card-text">Nickname: {smurf.nickname}</p>
            <p className="card-text">Description: {smurf.description}</p>
            </div>
        </div>);
    }
}

export default Smurf;

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.