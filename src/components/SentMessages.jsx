import { useState, useEffect } from "react";
import Message from "./Message";

const SentMessages = ({mails, setMail, deleteMail, setMails}) => {

  const [editMail, setEditMail] = useState({});

  useEffect( ()=> {
    if(Object.keys(editMail).length > 0){
      const editMailState = mails.map( mailState => mailState.id === editMail.id ? editMail : mailState )
      setMails(editMailState);
      setEditMail({});
    }
  }, [editMail]);


  return (
    <div className="md:w-3/5 mb-10">
      <h2 className="text-center font-bold text-xl mb-5">Inbox</h2>

      {
        mails && mails.length ? (
          <div className="bg-white p-5 rounded-md">
            <div className="md:overflow-y-scroll md:max-h-[28rem] pr-1">

              { mails.map( mail => (
                <Message
                  setEditMail = {setEditMail}
                  key = {mail.id}
                  mail = {mail}
                  setMail = {setMail}
                  deleteMail = {deleteMail}
                />
              ))}

            </div>
          </div>
        )
        :
        (
          <div className="bg-white p-5 rounded-md">
            <p className="text-center text-orange-600">Welcome! Start sending emails!</p>
          </div>
        )
      }

    </div>
  )
}

export default SentMessages;