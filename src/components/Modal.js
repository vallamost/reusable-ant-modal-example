import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Modal as AntModal } from "antd";

const Modal = ({ title, modalBody, okayFn, cancelFn, isShowing }) => ReactDOM.createPortal(

    <Fragment>
        <AntModal
            title={title}
            visible={isShowing}
            onOk={okayFn}
            onCancel={cancelFn}
        >
            {modalBody}
        </AntModal>
    </Fragment>, document.body
);

export default Modal;