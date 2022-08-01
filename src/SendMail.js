import React from "react";
import "./SendMail.css";
import MinimizeTwoToneIcon from "@mui/icons-material/MinimizeTwoTone";
import OpenInFullTwoToneIcon from "@mui/icons-material/OpenInFullTwoTone";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import {useDispatch} from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import { serverTimestamp, collection, addDoc } from "firebase/firestore";


function SendMail() {
   
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm();
   
   const dispatch = useDispatch();
   
   const onSubmit = (formData) => {
      console.log(formData)
      try{
       addDoc(collection(db,"emails"),{
         to: formData.to,
         subject: formData.subject,
         message: formData.message,
         timestamp: serverTimestamp(),
      });
   }catch(e){
      console.log("error");
   }

      dispatch(closeSendMessage());
   };

   return (
      <div className="sendMail">
         <div className="sendMail__header">
            <h3>Neue Nachricht</h3>
            <div className="sendMail__icons">
               <MinimizeTwoToneIcon fontSize="small" />
               <OpenInFullTwoToneIcon fontSize="small" />
               <CloseTwoToneIcon className="sendMail__close" fontSize="small" onClick={()=>dispatch(closeSendMessage())}/>
            </div>
         </div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <input
               name="to"
               type="email"
               placeholder="Empfänger"
               {...register("to", { required: true })}
            />
            {errors.to && (
               <p className="sendMail__error">Empfänger eintragen</p>
            )}

            <input
               name="subject"
               type="text"
               placeholder="Betreff"
               {...register("subject", { required: true })}
            />
            {errors?.subject && (
               <p className="sendMail__error">Betreff eintragen</p>
            )}

            <input
               name="message"
               type="text"
               className="sendMail__Message"
               {...register("message", { required: true })}
            />
            {errors?.message && (
               <p className="sendMail__error">Nachricht eintragen</p>
            )}

            <div className="sendMail__options">
               <Button
                  className="sendMail__send"
                  variant="contained"
                  color="primary"
                  type="submit"
               >
                  Send
               </Button>
            </div>
         </form>
      </div>
   );
}

export default SendMail;
