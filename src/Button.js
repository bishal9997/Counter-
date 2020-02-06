import React, {Component} from 'react';

class Button extends Component {
    render(){
        let { title, task } = this.props
        return(
            <div>
                <button onClick={task}>{title} </button>
            </div>
        )
        
    }
    
}

export default Button;