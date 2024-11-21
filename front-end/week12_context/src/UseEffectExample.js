import React from "react"
import { useEffect, useState } from "react"

export default function UseEffectExample()   {
        let [state, setState] = useState({name: 'Camila', college: 'GBC'})

        useEffect(() => {
            console.log("first")

            return () => {
                console.log("second")
            }
        }, [state.name])

    return (
        <div>
            <h2>UseEffect() Example</h2>
            <p>Name:{ state.name }</p>
            <p>College:{ state.college }</p>
            <button onClick={(e) => setState({...state, name: 'Camila Lee'})}>Update Name</button>
            <button onClick={(e) => setState({...state, college: 'GBC - Toronto'})}>Update Name</button>
        </div>
    )
}
