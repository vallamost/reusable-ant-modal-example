import React, { useEffect, useState } from 'react'



export default function DeleteExpense (props) {

const [modalVisibleBool, showModal] = useState(false)
const [expenseToDelete, setExpenseToDelete] = useState({
    expenseIdToDelete: null, expenseNameToDelete: null, expenseAmountToDelete: null
})

const showDeleteModal = (props) => {

    // console.log(props)

    setExpenseToDelete({
        expenseIdToDelete: props.expenseIdToDelete,
        expenseNameToDelete: props.expenseNameToDelete,
        expenseAmountToDelete: props.expenseAmountToDelete,
    })

    // console.log(Object.values(expenseToDelete));
    showModal(true)

}

const onCancelDeleteModal = () => {

    showModal(false)

}

const onConfirmDelete = (props) => {

    console.log("Deleting expense: " + Object.values(expenseToDelete).join(', '))

    const newExpensesState = props.expenses.filter(item => item.id !== props.expenseToDelete.expenseIdToDelete);

    console.log(newExpensesState)

    props.updateExpensesFn(newExpensesState)
    showModal(false)

}

}