import { Fragment } from "react";
import classes from './ModalDummy.module.css'
import  ReactDOM  from "react-dom";

function Backdrop(props){
    return(
        <div className={classes.backdrop}>

        </div>
    )
}

function ModalOverlay(props){
    return(
        <div className={classes.modal}>
            <div>{props.children}</div>
        </div>
    )
}
const portalele=document.getElementById('overlays')
function ModalDummy(props){
    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />,portalele)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalele)}
            
        </Fragment>
    )
}
export default ModalDummy