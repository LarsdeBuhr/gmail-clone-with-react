import React from "react";
import "./Mail.css";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArchiveIcon from "@mui/icons-material/Archive";
import ReportIcon from "@mui/icons-material/Report";
import DeleteIcon from "@mui/icons-material/Delete";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import LabelIcon from "@mui/icons-material/Label";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";
import PrintIcon from "@mui/icons-material/Print";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import LabelImportantTwoToneIcon from "@mui/icons-material/LabelImportantTwoTone";
import LabelImportant from "@mui/icons-material/LabelImportant";

function Mail() {
   const navigate = useNavigate();

   return (
      <div className="mail">
         <div className="mail__tools">
            <div className="mail__toolsLeft">
               <IconButton>
                  <ArrowBackIcon onClick={() => navigate("/")} />
               </IconButton>

               <IconButton>
                  <ArchiveIcon />
               </IconButton>

               <IconButton>
                  <ReportIcon />
               </IconButton>

               <IconButton>
                  <DeleteIcon />
               </IconButton>

               <IconButton>
                  <MarkAsUnreadIcon />
               </IconButton>

               <IconButton>
                  <AccessTimeFilledIcon />
               </IconButton>

               <IconButton>
                  <AddTaskIcon />
               </IconButton>

               <IconButton>
                  <DriveFileMoveIcon />
               </IconButton>

               <IconButton>
                  <LabelIcon />
               </IconButton>

               <IconButton>
                  <MoreVertIcon />
               </IconButton>
            </div>

            <div className="mail__toolsRight">
               <IconButton>
                  <ChevronLeftIcon />
               </IconButton>

               <IconButton>
                  <ChevronRightIcon />
               </IconButton>
            </div>
         </div>
         <div className="mail__body">
            <div className="mail__bodyHeader">
               <div className="mail__bodyHeaderLeft">
                  <h2>Subject</h2>
                  <LabelImportant className="mail__important" />
               </div>
               <div className="mail__bodyHeaderRight">
                  <IconButton>
                     <PrintIcon />
                  </IconButton>

                  <IconButton>
                     <OpenInNewIcon />
                  </IconButton>
               </div>
            </div>

            <div className="mail__titleTime">
               <p>title</p>
               <p>13:33</p>
            </div>

            <div className="mail__message">
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  in fugiat aliquam pariatur quis dolorem nisi non! Ducimus                        
               </p>
            </div>
         </div>
      </div>
   );
}

export default Mail;
