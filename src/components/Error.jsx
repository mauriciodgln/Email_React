const Error = ({children}) => {
  return (
    <div className="bg-red-800 text-white text-center font-bold p-2 rounded-md mb-3">
      {children}
    </div>
  )
}

export default Error;