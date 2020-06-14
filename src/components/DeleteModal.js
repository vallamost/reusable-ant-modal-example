import React, { useState, Fragment } from 'react'

import {  Modal } from "antd";

export default function DeleteModal(props) {


    // not sure how to use this from the parent..
    // const [modalVisible, showModal] = useState(false)

    return (

        <Fragment>
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
        </Fragment>

    )
}