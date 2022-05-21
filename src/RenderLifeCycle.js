import { Component } from "react";

class RenderLifeCycle extends Component{

    constructor(){
        super();
        this.state = {
            name: "Tushar"
        }
    }
    render(){
        console.log("Render method " + this.state.name)
        return(
            <div>
                <h1>render method life cycle</h1>
                <button onClick={()=>this.setState({name : "Bansal"})}>Render method trigger</button>
            </div>
        )
    }
}

export default RenderLifeCycle

// render updates 3 times: when component created, props update, state update, 