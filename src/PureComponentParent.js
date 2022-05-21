// Pure component - if prev and current state is same, does not render
// normal component - render every time

import { Component, PureComponent } from "react";
import PureComponentChild from "./PureComponentChild";

class PureComponentParent extends Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    // in case of state
    // render(){
    //     console.warn("check re-rendering")
    //     return(
    //         <div>
    //             <h1>Pure Component {this.state.count}</h1>
    //             <button onClick={()=>this.setState({count:0})}>Click me</button>
    //         </div>
            
    //     )
    // }

    // in case of props
    render(){
        return(
            <div>
                <PureComponentChild count={this.state.count}/>
                <button onClick={()=>this.setState({count:0})}>Click me</button>
            </div>
        )
    }
}

export default PureComponentParent