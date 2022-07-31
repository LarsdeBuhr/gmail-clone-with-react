import React from "react";
import "./EmailList.css";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EmailRow from "./EmailRow";


function EmailList() {

   return (
      <div className="emailList">
         <div className="emailList__settings">
            <div className="emailList__settingsLeft">
               <Checkbox />
               <IconButton>
                  <ArrowDropDownIcon />
               </IconButton>
               <IconButton>
                  <RefreshIcon />
               </IconButton>
               <IconButton>
                  <MoreVertIcon />
               </IconButton>
            </div>
            <div className="emailList__settingsRight">
               <IconButton>
                  <ChevronLeftIcon />
               </IconButton>
               <IconButton>
                  <ChevronRightIcon />
               </IconButton>
            </div>
         </div>

         <div className="emailList__list">
            <EmailRow 
              title="Twitch"
              subject="Hey fellow!!"
              description="This is a test"
              time="13:34"
            />
            <EmailRow 
              title="Twitch"
              subject="Hey fellow!!"
              description="This is a test This is a test This is a test This is a test This is a test"
              time="10:23"
            />
         </div>
      </div>
   );
}

export default EmailList;
