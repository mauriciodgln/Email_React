import { useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ({ mails, setMails, mail, setMail }) => {

  const [recipients, setRecipients] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {

    if( Object.keys(mail).length > 0 ){
      setRecipients(mail.recipients);
      setSubject(mail.subject);
      setMessage(mail.message);
    }
    
  }, [mail])
  

  const generateId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return fecha + random;
  }
  
  const handleSubmit = (e)=> {
    e.preventDefault();

    if([recipients, subject, message].includes('')) {
      setError(true);
      return;
    }
    setError(false);

    // Objeto de message

    const objMail = {
      recipients,
      subject,
      message
    }

    if(mail.id) {
      // Edit mail
      objMail.id = mail.id;
      const editMail = mails.map( mailState => mailState.id === mail.id ? objMail : mailState )
      setMails(editMail);
      setMail({});
    } else {
      // New mail
      objMail.id = generateId();
      setMails([objMail, ...mails]);
    }

    setRecipients('');
    setSubject('');
    setMessage('');

  }  

  return (
    <div className="md:w-2/5">
      <h2 className="text-center font-bold text-xl mb-5">New Message</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-5 rounded-md"
      >
        <div className="md:min-h-[28rem]">

          { error && <Error> <p>Todos los campos son obligatorios</p> </Error> }

          <input 
            type="text"
            placeholder="Recipients"
            className="p-2 border-b-2 w-full focus:outline-none mb-3"
            value={recipients}
            onChange={ (e) => { setRecipients(e.target.value) } }
          />
          <input 
            type="text"
            placeholder="Subject"
            className="p-2 border-b-2 w-full focus:outline-none"
            value={subject}
            onChange={ (e) => { setSubject(e.target.value) } }
          />
          <textarea
            placeholder="Message"
            className="p-2 w-full focus:outline-none resize-none h-[19.15rem]"
            value={message}
            onChange={ (e) => { setMessage(e.target.value) } }
          />

          <div id="attachedFil  es"></div>

          <div className="flex justify-between">
            <input
              type="submit"
              className="bg-orange-500 p-2 rounded-md w-28 text-white font-bold hover:bg-orange-600"
              value={ mail.id ? 'Edit' : 'Send' }
            />
            <div
              title="Attach Files"
              className="relative inline-block h-10 w-10 bg-[url('https://www.gstatic.com/images/icons/material/system/1x/attach_file_black_20dp.png')] bg-no-repeat bg-center cursor-pointer hover:bg-gray-100 rounded-md duration-200 ease-in-out"
            >
              <input
                id="files"
                type="file"
                className="opacity-0 h-10 w-10 inline-block"
              />
            </div>
          </div>
        </div>
      </form>

    </div>
  )
}

export default Formulario;