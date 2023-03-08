import React, {useState } from 'react'

function RedAlert() {
  const [showAlert, setShowAlert] = useState(true);

  const handleCloseClick = () => {
    setShowAlert(false);
  };

  if (!showAlert) {
    return null;
  }

  return (
    <div className="absolute font-sans font-semibold top-7 right-7 mb-3 inline-flex w-[600px] items-center rounded-lg bg-red-200 opacity-80 py-5 px-6 text-base text-red-500" role="alert">
      <span className="mr-2 bg-white rounded-md p-1">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ban" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
          <path d="M5.7 5.7l12.6 12.6"></path>
        </svg>
      </span>
      <span className="flex-grow">This is a primary alert — check it out!</span>
      <button className="ml-4 text-red-500" onClick={handleCloseClick}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <circle cx="12" cy="12" r="9"></circle>
          <path d="M10 10l4 4m0 -4l-4 4"></path>
        </svg>
      </button>
    </div>
  )
}

export default RedAlert
