import React from 'react';
import classes from "./MyModal.module.css";
import {ModalProps} from "./Modal.props";
const Modal = ({children, visible, setVisible} : ModalProps) => {

    const rootClasses = [classes.myModal]
    if (visible) {
        rootClasses.push(classes.active)
    }
    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;