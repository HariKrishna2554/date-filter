// import FilterWithSearch from "./Components/FilterDate";
// import CreateTable from "./Components/CreateTable";
import Table from "./Components/new";

function App() {
  const expense = [
    {title:'apple', price:64, date:new Date(2015, 5, 22)},
    {title:'orange', price:52, date:new Date(2023, 4, 11)},
    {title:'mango', price:40, date:new Date(2017, 5, 22)}
  ];
  console.log(expense)
  return (
    <div>
      {/* <FilterWithSearch items={expense}/>
      <CreateTable items={expense} /> */}
      <Table />
    </div>
  );
}

export default App;