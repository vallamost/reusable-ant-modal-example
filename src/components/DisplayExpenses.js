import React from 'react'
import { Col, Card, Row, Button } from "antd";

import 'antd/dist/antd.css';
import addExpense from '../utilities/AddExpense';

import DeleteExpense from '../utilities/DeleteExpense';
import EditExpense from '../utilities/EditExpense';

export default function DisplayExpenses(props) {

    const expenses = Object.values(props.expenses);

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

                            <DeleteExpense
                                key={index.id}
                                id={index.id}
                                name={index.name}
                                amount={index.amount}
                                updateExpensesFn={props.updateExpensesFn}
                                expenses={expenses}
                            />,
                            <EditExpense
                                key={index.id}
                                id={index.id}
                                name={index.name}
                                amount={index.amount}
                                updateExpensesFn={props.updateExpensesFn}
                                expenses={expenses}
                            />
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
            <Row gutter={[16, 16]}>

                <ListOfExpenses />
                <Button
                    type="primary"
                    style={{ margin: "5% 5%" }}
                    onClick={() => addExpense(props)}
                >
                    Add Expense
                </Button>


            </Row>
        </div >


    );

}