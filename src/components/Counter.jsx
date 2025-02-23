import { useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../slice/counterSlice";
import { useTheam } from "../context/TheamContext";


function Counter() {

    const count = useSelector(state => state.counter.value)

    const dispatch = useDispatch()

    const { state: { isDark, fontSize } } = useTheam();

    const Increment = useCallback(() => {
        dispatch(increment())
    }, [dispatch])

    const Decrement = useCallback(() => {
        dispatch(decrement())
    }, [dispatch])

    const doubleCount = useMemo(() => {
        return count * 2
    }, [count])

    const style = {
        backgroundColor : isDark ? "black": "White" ,
        padding : "20px",
        borderRadius : "8px",
        fontSize : fontSize === "large" ? "40px":"20px",
        color : isDark ? "white" : "black"
    }

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center w-100" >
                <div className="card p-4 text-center shadow-lg w-300"  style={style}>
                    <h2 className="mb-3"  style={style}>Count: <span >{count}</span></h2>
                    <h2 className="mb-4 " style={style}>Double Count: <span>{doubleCount}</span></h2>
                    <button className="btn btn-primary me-2 pb-2" onClick={Increment}>
                        Increment
                    </button>
                    
                    <button className="btn btn-danger me-2 pb-2 mt-2" onClick={Decrement}>
                        Decrement
                    </button>
                </div>
            </div>
        </>
    )
}

export default Counter
