import React, {Component} from 'react'

class Greetings extends Component {
    render() {
        return (
            <div style={{color:'blue', backgroundColor:'pink'}}>Greetings, {this.props.name}</div>
        )
    }
}

export default Greetings 

