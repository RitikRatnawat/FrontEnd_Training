import React, { useState } from "react"

const APIContext = React.createContext({
    data: [],
    fetch: () => { },
    reset: () => { }
});

export const APIContextProvider = (props) => {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/posts");
            let responseData = await response.json();
            
            setData(responseData);
        }
        catch (err) {
            console.log(err);
        }
    }

    const resetData = () => {
        setData([]);
    }

    return (
        <APIContext.Provider value={{
            data: data,
            fetch: fetchData,
            reset: resetData
        }}>
            {props.children}
        </APIContext.Provider>
    );
}

export default APIContext