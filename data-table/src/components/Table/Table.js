import { useContext } from "react";
import APIContext from "../../store/api-context";
import "./Table.css"

const Table = () => {

    const apiCtx = useContext(APIContext);

    const content = apiCtx.data.map((user) => {
        return (<tr key={user.id}>
            <td>{user.userId}</td>
            <td>{user.id}</td>
            <td>{user.title}</td>
            <td>{user.body}</td>
        </tr>);
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>USER ID</th>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>BODY</th>
                </tr>
            </thead>
            <tbody>
                {content}
            </tbody>
        </table>
    );
}

export default Table