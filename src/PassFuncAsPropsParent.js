import PassFuncAsPropsChild from "./PassFuncAsPropsChild"

function PassFuncAsPropsParent(){
    function User(){
        alert("Welcome User");
    }
    return (
        <div>
            <PassFuncAsPropsChild data={User}/>
        </div>
    )
}

export default PassFuncAsPropsParent