import "./CreateTable.css"
import ExpensesDate from "./ExpensesDate";

function CreateTable(props) {
    const filteredData = props.items
    console.log(filteredData)
    return (
    <div className="create-table">
        <table>
            <tr>
            <th>Date</th>
            <th>Items</th>
            <th>Amount</th>
            </tr>
            {filteredData.map((value, key) => {
            return (
                <tr key={key}>
                <td>{value.price}</td>
                <td>{value.title}</td>
                <td><ExpensesDate date={value.date}/></td>
                </tr>
            )
            })}
        </table>
        </div>
    );
}

export default CreateTable;