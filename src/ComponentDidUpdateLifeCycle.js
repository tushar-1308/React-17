import { Component } from "react";

class ComponentDidUpdateLifeCycle extends Component{
    constructor(){
        super();
        console.warn("constructor")
        this.state = {
            count:0
        }
    }
    componentDidMount(){
        console.warn("component did mount")
    }
    // componentDidUpdate(){
    //     this.setState({count: this.state.count+1})
    //     console.warn("component did update")
    // }
    componentDidUpdate(preProp, preState, snapshot){
        console.warn("component did update", preState.count, this.state.count, snapshot)
        // if(this.state.count==preState.count){
        //     alert("Data is same")
        // }
        if(this.state.count<10){
            this.setState({count: this.state.count+1})
        }
    }
    render(){
        console.warn("render")
        return(
            <div>
                <h1>componentDidUpdate Life Cycle {this.state.count}</h1>
                <button onClick={()=>this.setState({count: this.state.count+1})}>Update button</button>
            </div>
        )
    }
}

export default ComponentDidUpdateLifeCycle