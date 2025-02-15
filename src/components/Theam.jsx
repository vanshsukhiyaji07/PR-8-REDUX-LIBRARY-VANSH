import { useCallback } from "react";
import { useTheam } from "../context/TheamContext";


function Theam() {

    const { state : { isDark, fontSize }, dispatch } = useTheam();

    const toggleTheam = useCallback(() => {
        dispatch({ type: "theam" });
    }, [dispatch]);

    const changeFontSize = useCallback(() => {
        dispatch({ type: "fontSize", payload: fontSize === 'medium' ? 'large' : 'medium' });
    }, [dispatch, fontSize]);
  return (
    <>
        <div>
            <button onClick={toggleTheam}>Toggle Theam{isDark ? "Dark" : "Light" }</button> 
            <button onClick={changeFontSize}>Change Font Size{fontSize}</button>   
        </div> 
    </>
  )
}

export default Theam
