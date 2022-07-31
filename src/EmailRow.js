import React from "react";
import "./EmailRow.css";
import Checkbox from "@mui/material/Checkbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import IconButton from "@mui/material/IconButton";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import { useNavigate } from "react-router-dom";

function EmailRow({ title, subject, description, time }) {

   const navigate = useNavigate();

   return (
      <div onClick={()=>navigate("/mail")} className="emailRow">
         <div className="emailRow__options">
            <Checkbox />
            <IconButton>
               <StarBorderIcon />
            </IconButton>
            <IconButton>
               <LabelImportantOutlinedIcon />
            </IconButton>
         </div>

         <h3 className="emailRow__title">{title}</h3>

         <div className="emailRow__message">
            <h4>
               {subject}{" "}
               <span className="emailRow__description">{"- "}{description}</span>
            </h4>
         </div>

         <div className="emailRow__time">{time}</div>
      </div>
   );
}

export default EmailRow;
