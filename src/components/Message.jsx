import { useState } from "react";

const Message = ({mail, setMail, deleteMail, setEditMail}) => {

  const [starred, setStarred] = useState(false);
  const { recipients, subject, message, id } = mail;

  mail.starred = starred;
  
  const now = new Date();
  const day = now.getDate();
  const monthNameLong = now.toLocaleString("en-US", { month: "long" });
  const year = now.getFullYear();

  const handleStarred = () => {
    starred ? setStarred(false) : setStarred(true);
    setEditMail(mail)
  }

  const handleDelete = () => {
    const answer = confirm('Are you sure you want to delete this mail?');
    if(answer) {
      deleteMail(id);
    }
  }

  return (
    <div className="border-b-2 p-2 hover:bg-gray-200 cursor-pointer hover:shadow-lg group">

      <div className="flex justify-between">
        <p className="font-bold mb-1">
          To: <span className="font-normal">{recipients}</span>
        </p>
        <p>
          { `${day} ${monthNameLong} ${year} ` }
        </p>
      </div>
      <p className="mb-1">
        {subject}
      </p>

      <div className="flex justify-between h-6">
        <p className="text-gray-600 whitespace-nowrap text-ellipsis overflow-hidden">
          {message}
        </p>

        <div className="flex">

          <button
            onClick={handleDelete}
            title="Delete"
            type="button"
            className="bg-[url('https://www.gstatic.com/images/icons/material/system/1x/delete_black_20dp.png')] bg-no-repeat bg-center h-5 w-5 p-5 hidden group-hover:block hover:bg-gray-300 rounded-md duration-200 ease-in-out relative bottom-3"
          />

          <button
            onClick={ ()=> setMail(mail) }
            title="Edit"
            type="button"
            className="bg-[url('https://www.gstatic.com/images/icons/material/system/1x/archive_black_20dp.png')] bg-no-repeat bg-center h-5 w-5 p-5 hidden group-hover:block hover:bg-gray-300 rounded-md duration-200 ease-in-out relative bottom-3"
          />

          {

            starred ?

            <button 
              onClick={handleStarred}
              title="Starred"
              type="button"
              className="bg-[url('https://www.gstatic.com/images/icons/material/system/1x/star_googyellow500_20dp.png')] bg-no-repeat bg-center h-5 w-5 p-5 hover:bg-gray-300 rounded-md duration-200 ease-in-out relative bottom-3"
            />

            :

            <button 
              onClick={handleStarred}
              title="Not Starred"
              type="button"
              className="bg-[url('https://www.gstatic.com/images/icons/material/system/1x/star_border_black_20dp.png')] bg-no-repeat bg-center h-5 w-5 p-5 md:hidden group-hover:block hover:bg-gray-300 rounded-md duration-200 ease-in-out relative bottom-3"
            />

          }

        </div>
        
      </div>

    </div>
  )
}

export default Message;