import React, { useState } from "react";
import {
  ArrowLeft,
  Inbox,
  Send,
  Clock,
  FileText,
  ShieldAlert,
  Archive,
  Trash2,
} from "lucide-react";
import EachUtils from "../../../utils/EachUtils";
import { LIST_SIDEBAR } from "./Dasboard.constant";

const ICONS = {
  inbox: Inbox,
  sent: Send,
  "send-later": Clock,
  draft: FileText,
  spam: ShieldAlert,
  archive: Archive,
  trash: Trash2,
};

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`${
        open ? "max-w-[300px] px-4" : "max-w-[60px]"
      } z-50 h-screen w-full flex flex-col justify-between bg-[#f6f8fa] py-6 duration-300 transition-all`}
    >
      <div className="flex flex-col mx-[5px]">
        <div
          className={`${
            open ? "pr-3 justify-end" : "justify-center"
          } w-full flex items-center duration-100 transition-all mb-5 h-6 relative`}
        >
          <img
            src="/assets/images/logoipsum-385.png"
            alt="logo"
            width={180}
            height={60}
            className={`${
              !open ? "opacity-0 -translate-x-48" : "opacity-100 translate-x-0"
            } absolute w-32 duration-200 cursor-pointer inset-0 transition-all shrink-0`}
            onClick={() => (window.location.href = "/dashboard")}
          />
          <ArrowLeft
            className={`${
              !open && "rotate-180"
            } transition-all duration-500 cursor-pointer w-5 h-5 hover:text-gray-600 active:scale-90`}
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className="flex flex-col gap-3 mt-20">
          <EachUtils
            of={LIST_SIDEBAR}
            render={(item, index) => {
              const Icon = ICONS[item.icon];
              return (
                <button
                  key={index}
                  className={`${
                    open ? "justify-start px-2" : "justify-center pl-[10px]"
                  } flex items-center gap-3 py-2 duration-500 w-full rounded transition-all
                  hover:bg-gray-100 cursor-pointer hover:shadow-sm active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-gray-300`}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  <div
                    className={`${
                      !open ? "w-0" : "w-full"
                    } transition-all duration-500`}
                  >
                    <p
                      className={`${
                        !open
                          ? "opacity-0 -translate-x-7"
                          : "opacity-100 translate-x-0"
                      } text-start overflow-hidden whitespace-nowrap transition-all duration-200`}
                    >
                      {item.title}
                    </p>
                  </div>
                </button>
              );
            }}
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
          <div className={`${!open ? "hidden" : "block"}`}>
            <strong className="text-lg ml-2">User Name</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
