import "./Sidebar.css"
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import SidebarOption from "./SidebarOption";
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import WatchLater from "@mui/icons-material/WatchLater";
import LabelImportant from "@mui/icons-material/LabelImportant";
import SendIcon from '@mui/icons-material/Send';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Sidebar() {
  return (
    <div className="sidebar">
      <Button className="sidebar__compose" startIcon={<img src='https://www.gstatic.com/images/icons/material/colored_icons/2x/create_32dp.png' alt="gmail plus sign" className="sidebar__composeSign"/>} >Schreiben</Button>
      
      <SidebarOption Icon={InboxIcon} title="Posteingang" number={54} selected={true}/>

      <SidebarOption Icon={StarIcon} title="Markiert" number={54}/>

      <SidebarOption Icon={WatchLater} title="Zurückgestellt" number={54}/>

      <SidebarOption Icon={LabelImportant} title="Wichtig" number={54}/>

      <SidebarOption Icon={SendIcon} title="Gesendet" number={54}/>

      <SidebarOption Icon={InsertDriveFileIcon} title="Entwürfe" number={54}/>

      <SidebarOption Icon={ExpandMoreIcon} title="Mehr" number={54}/>
      

    </div>
  )
}

export default Sidebar