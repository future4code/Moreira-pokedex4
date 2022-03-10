import React, { useState } from "react";
import axios from "axios";


const useRequestData = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const requestData = async (url, method, body, headers) => {

    
        let response

        /* console.log(await axios[`get`](url)) */

        try{
            setLoading(true)
            response = await axios[method](url, body, headers)

        }
        catch(error){
            alert(error[`message`])
            setError(error)

        }
        finally{
            setLoading(false)
            return response.data
        }        

    }
    return [requestData, loading, error]
}

export default useRequestData




