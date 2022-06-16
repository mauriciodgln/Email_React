import { useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import SentMessages from './components/SentMessages';

function App() {

  const mailsLS = JSON.parse(localStorage.getItem('mails')) ?? [];
  const [mails, setMails] = useState(mailsLS);
  const [mail, setMail] = useState({});

  useEffect( ()=> {
    localStorage.setItem('mails', JSON.stringify( mails ) );
  }, [mails]);

  const deleteMail = (id) => {
    const updateState = mails.filter( mailState => mailState.id !== id );
    setMails(updateState);
  }

  return (
    <div className="container mx-auto px-4 md:px-10 pt-10">

      <Header />

      <div className='flex flex-col gap-5 md:flex-row mt-5 '>
        <Formulario
          mails = {mails}
          setMails = {setMails}
          mail = {mail}
          setMail = {setMail}
        />
        <SentMessages
          mails = {mails}
          setMails = {setMails}
          deleteMail = {deleteMail}
          setMail = {setMail}
        />
      </div>
    </div>
  )
}

export default App;
