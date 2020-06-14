import React, { useState, Fragment } from 'react'

import {  Modal } from "antd";

export default function DeleteModal(props) {

    // console.log(props)

    const [modalVisible, showModal] = useState(false)

    return (

        <div>
            <Modal
                title="Are you sure you want to delete the expense"
                visible={props.showModal}
                onOk={props.onOkay}
                // confirmLoading={null}
                onCancel={props.cancelFn}
            >
                <b>{props.expenseToDelete.expenseNameToDelete}</b>
                <p>{props.expenseToDelete.expenseAmountToDelete}</p>
            </Modal >
        </div>

    )
}