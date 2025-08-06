import React from 'react'
import { ArrowLeft } from "lucide-react";
import EachUtils from '../../../utils/EachUtils'
import { LIST_SIDEBAR } from './Dasboard.constant'

const Sidebar = ({ selectedItem }) => {

  return (
    <div className="z-50 h-screen w-full max-w-[300px] flex flex-col justify-between bg-[#f6f8fa] px-4 py-6 transition-all">
      <div>
        <div className="flex flex-col w-full items-start justify-center">
          <div className='w-full flex justify-between items-center mb-5 pr-3'>
            <img
              src="/assets/images/logoipsum-385.png"
              alt="logo"
              width={180}
              height={60}
              className="w-32 cursor-pointer"
              onClick={() => window.location.href = "/dashboard"}
            />
            <ArrowLeft
              className='cursor-pointer w-5 h-5'
              onClick={() => { console.log("mobile"); }}
            />
          </div>
          <EachUtils
            of={LIST_SIDEBAR}
            render={(item, index) => (
              <button
                key={index}
                className="w-1/2 flex flex-col text-base gap-5 py-2 px-3 cursor-pointer hover:bg-gray-100 rounded text-start"
              >
                <p>{item.title}</p>
              </button>

            )}
          />
        </div>
      </div>

      <div className="flex items-center p-1">
        <div className="flex justify-start gap-2 items-center px-2 py-1.5">
          <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            alt="user"
            className="h-10 w-10 rounded-full border-gray-300"
          />
          <strong className="text-lg ml-2">User Name</strong>
        </div>
      </div>
    </div >
  )
}

export default Sidebar