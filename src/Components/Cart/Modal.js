import classes from './Modal.module.css'
import React, { Fragment } from 'react'
import ReactDom from 'react-dom'

function Backdrop(props){
    return(
        <div className={classes.backdrop} onClick={props.onClick}></div>
    )
}
function ModalOverLay(props){
    return(
    <div className={classes.modal}>
        <div>{props.children}</div>
    </div>
    )
}
const portalele =document.getElementById('overlays')
function Modal(props){
    return(
        <Fragment>
            {ReactDom.createPortal(<Backdrop onClick={props.onClick}/>,portalele)}
            {ReactDom.createPortal(<ModalOverLay>{props.children}</ModalOverLay>,portalele)}
        </Fragment>
    )
}
export default Modal