import React, {useState } from 'react'

function WhiteAlert() {
  const [showAlert, setShowAlert] = useState(true);

  const handleCloseClick = () => {
    setShowAlert(false);
  };

  if (!showAlert) {
    return null;
  }

  return (
    <div className="font-sans font-semibold absolute top-7 right-7 mb-3 inline-flex w-[600px] items-center rounded-lg bg-gray-100 opacity-80 py-5 px-6 text-base text-gray-500" role="alert">
      <span className="mr-2 bg-white rounded-md p-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"></path>
        </svg>
      </span>
      <span className="flex-grow">This is a primary alert — check it out!</span>
      <button className="ml-4 text-gray-500" onClick={handleCloseClick}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <circle cx="12" cy="12" r="9"></circle>
          <path d="M10 10l4 4m0 -4l-4 4"></path>
        </svg>
      </button>
    </div>
  )
}

export default WhiteAlert
