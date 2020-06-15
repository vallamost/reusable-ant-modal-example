import React, { useState, Fragment } from 'react'

import { Form, Input } from 'antd';
import { EditTwoTone, } from '@ant-design/icons';

import Modal from '../components/Modal'
import useModal from '../utilities/useModal'
import produce from "immer"

export default function EditExpense(props) {

    const { isShowing, toggle } = useModal();
    const [modalVisibleBool, showModal] = useState(false)
    const [expenseToDelete, setExpenseToDelete] = useState({
        expenseIdToDelete: null, expenseNameToDelete: null, expenseAmountToDelete: null
    })

    const showEditModal = (props) => {

        setExpenseToDelete({
            expenseIdToDelete: props.id,
            expenseNameToDelete: props.name,
            expenseAmountToDelete: props.amount,
        })

        toggle(true)

    }


    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const [form] = Form.useForm();

    const onSubmit = values => {
        console.log('Received values of form: ', values);
        console.log("item ID: " + props.id)

        const updatedExpensesArray = produce(props.expenses, draft => {
            const index = draft.findIndex(i => i.id === props.id)
            if (index !== -1) {
                draft[index].name = values.expenseName
                draft[index].amount = values.expenseAmount
            }
        })
        console.log(updatedExpensesArray)

        props.updateExpensesFn(updatedExpensesArray)

    };

    return (

        <Fragment>
            <EditTwoTone key={props.id}
                onClick={() => (showEditModal(props))}

            />

            <Modal
                isShowing={isShowing}
                okayFn={() => {
                    form
                        .validateFields()
                        .then(values => {
                            form.resetFields();
                            onSubmit(values);
                        })
                        .catch(info => {
                            console.log('Validate Failed:', info);
                        });
                }}
                cancelFn={toggle}
                title={"Editing Expense - " + props.name}
                modalBody={
                    <Fragment>
                        {/* <p>Name: {props.name}</p>
                        <p>Amount: {props.amount}</p> */}
                        <Form
                            {...layout}
                            name="basic"
                            form={form}
                            initialValues={{ expenseName: props.name, expenseAmount: props.amount }}
                        >
                            <Form.Item
                                label="Expense Name"
                                name="expenseName"
                                rules={[{ required: true, message: 'Please input the expense name' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Expense Amount"
                                name="expenseAmount"
                                rules={[{ required: true, message: 'Please input the amount' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Form>

                    </Fragment>
                }
            />

        </Fragment>

    )

}