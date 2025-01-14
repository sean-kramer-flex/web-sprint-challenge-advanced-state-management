import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';
import { getSmurf } from '../actions';

class SmurfDisplay extends React.Component {

componentDidMount () {
console.log('cdm props: ', this.props);
this.props.getSmurf();
}

    render() {
        return(<div>
            <h2>Meet Our Smurfs:</h2>
            <p>{this.props.error}</p>
            {this.props.loading ? <h2>Loading smurfs...</h2> :  (this.props.smurfArray.map(smurf => <Smurf smurf={smurf} />))}
           
        </div>)
    }
}

const mapStateToProps = (state) => {
    console.log('SmurfDisplay state: ', state);
    return {
        smurfArray: state.smurfs,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = { getSmurf }

export default connect(mapStateToProps, mapDispatchToProps)(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.