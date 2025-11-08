import axios from "axios";
import { useEffect, useReducer } from "react"

const initialState = {
    data: [],
    error: "",
    isLoading: false,
}

function reducer(state, action) {
    const { type, payload } = action

    switch (type) {
        case "DATA":
            return { ...state, data: payload };
        case "LODING":
            return { ...state, isLoading: !state.isLoading };
        case "ERROR":
            return { ...state, error: payload };
        default:
            return state;

    }
}

const useFetch = (url) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        dispatch({
            type: "LOADING"
        })

        axios.get(url)
            .then(res => dispatch({ type: "DATA", payload: res.data.products }))
            .catch(err => dispatch({ type: "ERROR", payload: err.message || "xatolik" }))
            .finally(() => {
                dispatch({
                    type: "LOADING"
                })
            })
    }, [url])

    return{...state}
}

export default useFetch