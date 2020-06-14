import React, { useEffect, useState } from 'react'
import { Col, Card, Row, Button } from "antd";
import { EditTwoTone, DeleteTwoTone, } from '@ant-design/icons';

import DeleteModal from './DeleteModal';

import 'antd/dist/antd.css';
import addExpense from '../utilities/AddExpense';

export default function DisplayExpenses(props) {

    // console.log(props)

    const expenses = Object.values(props.expenses);

    const [modalVisibleBool, showModal] = useState(false)
    const [expenseToDelete, setExpenseToDelete] = useState({
        expenseIdToDelete: null, expenseNameToDelete: null, expenseAmountToDelete: null
    })

    // const [newExpenses, updateExpenses] = useState()

    // const addExpense = () => {

    //     const newExpenseList = props.expenses

    //     const newExpense = {
    //         "id": Math.floor(Math.random() * 20),
    //         "name": "New Expense",
    //         "amount": Math.floor(Math.random() * 1000),
    //     }

    //     newExpenseList.push(newExpense)
    //     // props.expenses.push(newExpense)
    //     // const updatedExpenses
    //     console.log(newExpenseList)


    //     props.updateExpensesFn(newExpenseList)

    // }

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

    const onConfirmDelete = (expenseToDelete) => {

        console.log("Deleting expense: " + Object.values(expenseToDelete).join(', '))

        const newExpensesState = expenses.filter(item => item.id !== expenseToDelete.expenseIdToDelete);

        console.log(newExpensesState)

        props.updateExpensesFn(newExpensesState)
        showModal(false)

    }

    const ListOfExpenses = () => {

        return expenses.map((index) => {

            return (

                <Col key={index.id}>
                    <Card
                        key={index.id}
                        title={index.name}
                        bordered={true}
                        style={{ width: "100%", border: "1px solid black" }}
                        actions={[
                            <EditTwoTone key={index.id}
                                onClick={null}
                            />,
                            <DeleteTwoTone key={index.id}
                                onClick={() => showDeleteModal({
                                    expenseIdToDelete: index.id,
                                    expenseNameToDelete: index.name,
                                    expenseAmountToDelete: index.amount
                                })} />
                        ]}
                    >
                        <p key={index.id}>Amount: {index.amount}</p>
                    </Card>
                </Col>

            )


        })
    }

    return (

        <div>
            <Row gutter={[16,8]}>

                <ListOfExpenses />
                <Button
                    type="primary"
                    style={{ margin: "5% 5%" }}
                    onClick={() => addExpense(props)}
                >
                    Add Expense
                </Button>
                <DeleteModal
                    showModal={modalVisibleBool}
                    onOkay={() => onConfirmDelete(expenseToDelete)}
                    cancelFn={() => onCancelDeleteModal()}
                    expenseToDelete={expenseToDelete}
                // expenseNameToDelete={index.name}
                // expenseAmountToDelete={index.amount}

                />

            </Row>
        </div >


    );

}