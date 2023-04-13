
import React from "react";


const Members = ({ name, color}) => {

    return (

          <li className="members" style={{color: color, borderColor: color}}>{name}</li>

      );
    };

export default Members;