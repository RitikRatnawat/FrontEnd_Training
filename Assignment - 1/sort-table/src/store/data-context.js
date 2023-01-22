import React, { useCallback, useEffect, useState } from "react"

const DataContext = React.createContext({
    data: [],
    sort: (by) => { }
});

export const DataContextProvider = (props) => {

    const [actorsData, setActorsData] = useState([]);

    const fetchData = useCallback(async () => {
        try {
            let response = await fetch("./json/data.json");
            let data = await response.json();

            setActorsData(data);
        }
        catch (err) {
            console.log(err);
        }
    }, []);


    useEffect(() => {
        fetchData();
    }, [fetchData]);


    const sortData = (by) => {
        let data = [...actorsData];

        if (by === "Name") {
            data.sort((a, b) => { return a.name.localeCompare(b.name) })
            // console.log(data);
            setActorsData(data);
        }
        else if (by === "Age") {
            data.sort((a, b) => { return b.age - a.age })
            // console.log(data);
            setActorsData(data);
        }
    }

    return (
        <DataContext.Provider value={{
            data: actorsData,
            sort: sortData
        }}>
            {props.children}
        </DataContext.Provider>
    );
}

export default DataContext;