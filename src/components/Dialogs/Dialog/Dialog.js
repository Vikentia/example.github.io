import React from "react";
import { NavLink } from "react-router-dom";

function Dialog(props) {
    return <div className="dialog dialog_active">
        <NavLink to={'/dialogs/' + props.id}> {props.name} </NavLink>
    </div>
}


export default Dialog;

