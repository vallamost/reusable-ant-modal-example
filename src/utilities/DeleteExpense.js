import React, { useState, Fragment } from 'react'

import DeleteModal from '../components/DeleteModal';
import { DeleteTwoTone, } from '@ant-design/icons';


export default function DeleteExpense(props) {

    const [modalVisibleBool, showModal] = useState(false)
    const [expenseToDelete, setExpenseToDelete] = useState({
        expenseIdToDelete: null, expenseNameToDelete: null, expenseAmountToDelete: null
    })

    const showDeleteModal = (props) => {

        setExpenseToDelete({
            expenseIdToDelete: props.id,
            expenseNameToDelete: props.name,
            expenseAmountToDelete: props.amount,
        })

        showModal(true)

    }

    const onCancelDeleteModal = () => {
        showModal(false)
    }

    const onConfirmDelete = (props) => {

        console.log("Deleting expense: " + Object.values(expenseToDelete).join(', '))

        const newExpensesState = props.expenses.filter(item => item.id !== props.expenseToDelete.expenseIdToDelete);

        props.updateExpensesFn(newExpensesState)
        showModal(false)

    }

    return (

        <Fragment>
            <DeleteTwoTone key={props.id}
                onClick={() => (
                    showDeleteModal(props)
                )}

            />

            <DeleteModal
                showModal={modalVisibleBool}
                onOkay={() => onConfirmDelete({
                    updateExpensesFn: props.updateExpensesFn,
                    expenses: props.expenses,
                    expenseToDelete
                })}
                cancelFn={() => onCancelDeleteModal()}
                expenseToDelete={expenseToDelete}

            />
        </Fragment>

    )

}