import { Component, PureComponent } from "react";

class PureComponentChild extends PureComponent{
    render(){
        console.warn("check re-rendering")
        return(
            <div>
                <h1>Pure Component {this.props.count}</h1>
            </div>
        )
    }
}

export default PureComponentChild