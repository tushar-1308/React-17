import React, {useState} from 'react';

function IfElseIfElse(){
    // 1,2,3
    // const [loggedIn, setLoggedIn] = useState(2);
    var loggedIn = 2;
    return(
        <div>
            {loggedIn==1?
            <h1>User 1 logged in</h1>
            :loggedIn==2?
            <h1>User 2 logged in</h1>
            :<h1>User 3 logged in</h1>}
        </div>
    )
}

export default IfElseIfElse