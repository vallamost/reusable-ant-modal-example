import React, { useState, Fragment } from 'react'

import {  Modal } from "antd";

export default function EditModal(props) {


    // not sure how to use this from the parent..
    const [modalVisible, showModal] = useState(false)

    return (

        <Fragment>
            <Modal
                title={"Edit the expense" + props.expenseToEdit.expenseNameToEdit }
                visible={modalVisible}
                onOk={props.onOkay}
                // confirmLoading={null}
                onCancel={props.cancelFn}
            >
                <b>{props.expenseToEdit.expenseNameToEdit}</b>
                <p>{props.expenseToEdit.expenseAmountToDelete}</p>
            </Modal >
        </Fragment>

    )
}