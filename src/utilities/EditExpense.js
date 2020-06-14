import React, { useState, Fragment } from 'react'

import EditModal from '../components/EditModal';
import { EditTwoTone, } from '@ant-design/icons';


export default function EditExpense(props) {

    const expense_to_edit = [props.id, props.name, props.amount]


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

    const onCancelEditModal = () => {
        showModal(false)
    }

    const onConfirmEdit = (props) => {

        console.log("Deleting expense: " + Object.values(expenseToDelete).join(', '))

        const newExpensesState = props.expenses.filter(item => item.id !== props.expenseToDelete.expenseIdToDelete);

        props.updateExpensesFn(newExpensesState)
        showModal(false)

    }

    return (

        <Fragment>
            <EditTwoTone key={props.id}
                onClick={() => (
                    showDeleteModal(props)
                )}

            />

            <EditModal
                showModal={modalVisibleBool}
                onOkay={() => onConfirmEdit({
                    updateExpensesFn: props.updateExpensesFn,
                    expenses: props.expenses,
                    expenseToDelete
                })}
                cancelFn={() => onCancelEditModal()}
                expenseToEdit={expense_to_edit}

            />
        </Fragment>

    )

}