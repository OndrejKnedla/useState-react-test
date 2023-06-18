import "./Example.css"
import {useState} from "react"

const Example = () => {
    const [title, setTitle] = useState("Můj první title")   

    const [buttonText, setButtonText] = useState("Původní text tlačítka")

    const buttonHandler = () =>{
        setTitle("Nový text v titlu")
    }
    const buttonHandler2 = () => {
        setTitle("!!!!")
    }
    const deleteAll = () => {
        setTitle("")
    }
    
    const buttonChange = () => {
        setButtonText("Nový text tlačítka")
    }
    
        return(
            <div className="txt-btn-changer">
                <h2>{title}</h2>
                <button type="button" onClick={buttonHandler}>Změnit title</button>
                <button type="button" onClick={buttonHandler2}>Opět změnit title</button>
                <button type="button" onClick={deleteAll}>Vymazat title</button>
                <button type="button" onClick={buttonChange}>{buttonText}</button>
            </div>
        )
}

export default Example