import { useContext } from "react";
import DataContext from "../../store/data-context";
import "../Table/table.css"

const Table = () => {

    const ctx = useContext(DataContext);

    const data = ctx.data.map((unit) => {
        return (<tr key={unit.id}>
            <td>{unit.id}</td>
            <td>{unit.name}</td>
            <td>{unit.age}</td>
            <td>{unit.dob}</td>
        </tr>)
    });

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Date of Birth</th>
                    </tr>
                </thead>
                <tbody>
                    {data}
                </tbody>
            </table>
        </div>
    );
}

export default Table;