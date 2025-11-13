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
        case "LOADING":
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
        let isMounted = true;

        const fetchData = async () => {
            dispatch({ type: "LOADING" })

            try {
                const res = await axios.get(url)

                const data = res.data.products ? res.data.products : res.data

                if (isMounted) {
                    dispatch({ type: "DATA", payload: data })
                }
            } catch (error) {
                if (isMounted) {
                    dispatch({ type: "ERROR", payload: error.message || "Xatilik yuz berdi" })
                }
            } finally {
                if (isMounted) {
                    dispatch({ type: "LOADING", payload: false })
                }
            }
        }

        fetchData()

        return () => {
            isMounted = false
        }

        // axios.get(url)
        //     .then(res => dispatch({ type: "DATA", payload: res.data.products ? res.data.products : res.data }))
        //     .catch(err => dispatch({ type: "ERROR", payload: err.message || "xatolik" }))
        //     .finally(() => {
        //         dispatch({
        //             type: "LOADING"
        //         })
        //     })
    }, [url])

    return { ...state }
}

export default useFetch