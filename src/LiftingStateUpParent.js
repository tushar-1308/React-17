import LiftingStateUpChild from "./LiftingStateUpChild"

function LiftingStateUpParent(){
    function ParentAlert(data){
        alert(data);
    }
    return(
        <div>
            <h1>Lifting state up</h1>
            <LiftingStateUpChild param={ParentAlert}/>
        </div>
    )
}

export default LiftingStateUpParent