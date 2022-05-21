import './StyleInReact.css'
import style from './StyleInReact.module.css'

function StyleInReact(){
    return(
        <div>
            <h1 className="style">Style 1 in React</h1>
            <h1 style={{color: 'green', backgroundColor: 'black'}}>Style 2 in React</h1>
            <h1 className={style.custom}>Style 3 in React</h1>
        </div>
    )
}

export default StyleInReact;