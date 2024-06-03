import React, { useEffect } from 'react';

const ExpenseTable = ({ expenses, onDeleteExpense }) => {
  

    const handleDelete = (id) => {
        onDeleteExpense(id);
    };

    return (
        <div className="container mt-3">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Property</th>
                        <th>Year</th>
                        <th>Month</th>
                        <th>Expense</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.length > 0 ? expenses.map((expense, index) => {
                        return (
                            <tr key={index}>
                                <td>{expense.property_id}</td>
                                <td>{expense.year}</td>
                                <td>{expense.month_name}</td>
                                <td>{expense.expense}</td>
                                <td>
                                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(expense.expense_id)}>Delete</button>
                                </td>
                            </tr>
                        );
                    }) : null}
                </tbody>
            </table>
        </div>
    );
};

export default ExpenseTable;
