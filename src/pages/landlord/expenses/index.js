import { useState, useEffect } from "react";
import BarChart from "../../../components/landlord/barchart";
import Header from "../../../components/landlord/header";
import Sidebar from "../../../components/landlord/sidebar";
import AddExpenseForm from "./add_expense_form";
import ExpenseTable from "./expenses_table";
import axios from 'axios';
import base_url from "../../../base_url";

const LandlordExpenses = ()=>{
    const [expenses, setExpenses] = useState([]);
    const [chartData,setChartData] = useState([])
    const [year,setYear] = useState(new Date().getFullYear())
    const [BarChartLoading,setBarChartLoading] = useState(false)
    useEffect(() => {
        // Fetch expenses from the backend
        const fetchExpenses = async () => {
            try {
              
                const landlord = localStorage.getItem('landlord')
                console.log(landlord)
                const response = await axios.get(`${base_url}/expenses?landlord_id=${landlord}`); // Replace with the actual landlord_id
                console.log("Expenses:",response.data)
                setExpenses(response.data);

                const chart_array = transformExpenses(response.data)
                setChartData(chart_array)
            } catch (error) {
                console.error("There was an error fetching the expenses!", error);
            }
        };

        fetchExpenses();
    }, []);

    const handleAddExpense = async (newExpense) => {
        try {
           
            console.log(newExpense)
            let formData = new FormData()
            formData.append('property_id',newExpense.property)
            formData.append('year',newExpense.year)
            formData.append('month_name',newExpense.month)
            formData.append('expense',newExpense.expense)
            formData.append('landlord_id',newExpense.landlord_id)
            const response = await axios.post(`${base_url}/expenses`, formData);
            setExpenses(prevExpenses => [...prevExpenses, response.data]);

            

            alert("Expense added successfully")
        } catch (error) {
            alert("Failed to add expense");
        }
    };

    const handleDeleteExpense = async (id) => {
        try {
            await axios.delete(`${base_url}/expenses/${id}`);
            setExpenses(prevExpenses => prevExpenses.filter(expense => expense.expense_id !== id));
            
        } catch (error) {
            alert("Failed to delete expense")
        }
    };


    const transformExpenses = (expensesData) => {
      // Initialize an array to hold monthly expenses
      const monthlyExpensesArray = new Array(12).fill(0); // Initialize with 0s for 12 months
  
      // Loop through the expenses data and sum the expenses by month
      expensesData.forEach((expense) => {
          const monthIndex = getMonthIndex(expense.month_name); // Get the index of the month
          if (monthIndex !== -1) {
              monthlyExpensesArray[monthIndex] += expense.expense; // Add the expense to the corresponding month
          }
      });
  
      return monthlyExpensesArray;
  };

  // Function to get the index of the month in the array
  const getMonthIndex = (monthName) => {
    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];
    return months.indexOf(monthName);
  };


  const fetchExpensesByYear = async (year) => {
    try {
        const landlord = localStorage.getItem('landlord')
        const response = await fetch(`${base_url}/expenses/filter_by_year?landlord_id=${landlord}&year=${year}`);
        const data = await response.json();
        setExpenses(data);
       
        const bar_data = transformExpenses(data)
        setChartData(bar_data)
       
    } catch (error) {
        console.error("Error fetching expenses:", error);
    }
};


    return (
        <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
            <Sidebar />
            <div className="body-wrapper">
                <Header />
                <div className="container-fluid">
                                      <div>
                                        <select
                                            value={year}
                                            onChange={(e) => {
                                              setYear(e.target.value);
                                              fetchExpensesByYear(e.target.value);
                                            }}
                                            className="form-select"
                                        >
                                          <option value="">Filter By Year</option>

                                          <option value="2021">2021</option>

                                            <option value="2021">2021</option>
                                            <option value="2022">2022</option>
                                            <option value="2023">2023</option>
                                            <option value="2024">2024</option>

                                        </select>
                                    </div>
                    <div className="col-lg-8 d-flex align-items-strech" style={{ width: '100%' }}>
                        <div className="card w-100">
                            <div className="card-body">
                                <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                                    <div className="mb-3 mb-sm-0">
                                        <h5 className="card-title fw-semibold">Expenses</h5>
                                    </div>
                                    <div>
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Expense</button>
                                    </div>
                                </div>
                               <BarChart text={"Monthly Expenses"} chart_data={chartData} label={'Expenses'} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="col-lg-8 d-flex align-items-strech" style={{ width: '100%' }}>
                        <div className="card w-100">
                            <div className="card-body">
                                <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                                    <div className="mb-3 mb-sm-0">
                                        <h5 className="card-title fw-semibold">Expenses</h5>
                                    </div>
                                </div>
                                <ExpenseTable expenses={expenses} onDeleteExpense={handleDeleteExpense} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Create Expense</h5>
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <AddExpenseForm onAddExpense={handleAddExpense} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandlordExpenses;
