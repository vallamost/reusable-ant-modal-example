import React, { useState, Fragment } from 'react'

import { DeleteTwoTone, } from '@ant-design/icons';
import Modal from '../components/Modal'
import useModal from '../utilities/useModal'
import produce from "immer"

export default function DeleteExpense(props) {

    const { isShowing, toggle } = useModal();
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

        toggle(true)

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


            <Modal
                isShowing={isShowing}
                okayFn={() => onConfirmDelete({
                    updateExpensesFn: props.updateExpensesFn,
                    expenses: props.expenses,
                    expenseToDelete
                })}
                cancelFn={toggle}
                title="Are you sure you want to delete the expense"
                modalBody={

                    <Fragment>
                        <b>{props.name}</b>
                        <p>{props.amount}</p>
                    </Fragment>
                }
            />


            {/* <DeleteModal
                showModal={modalVisibleBool}
                onOkay={() => onConfirmDelete({
                    updateExpensesFn: props.updateExpensesFn,
                    expenses: props.expenses,
                    expenseToDelete
                })}
                cancelFn={() => onCancelDeleteModal()}
                expenseToDelete={expenseToDelete}

            /> */}
        </Fragment>

    )

}