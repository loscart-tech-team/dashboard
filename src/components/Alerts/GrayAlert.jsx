import React, {useState } from 'react'

function GrayAlert() {
  const [showAlert, setShowAlert] = useState(true);

  const handleCloseClick = () => {
    setShowAlert(false);
  };

  if (!showAlert) {
    return null;
  }

  return (
    <div className="font-sans font-semibold absolute top-7 right-7 mb-3 inline-flex w-[600px] items-center rounded-lg bg-gray-300 opacity-80 py-5 px-6 text-base text-gray-800" role="alert">
      <span className="mr-2 bg-white rounded-md p-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-at" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
        <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
        </svg>
      </span>
      <span className="flex-grow">This is a primary alert — check it out!</span>
      <button className="ml-4 text-gray-800" onClick={handleCloseClick}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <circle cx="12" cy="12" r="9"></circle>
          <path d="M10 10l4 4m0 -4l-4 4"></path>
        </svg>
      </button>
    </div>
  )
}

export default GrayAlert
