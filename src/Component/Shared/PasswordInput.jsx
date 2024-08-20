import React, { useState } from "react";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";

const PasswordInput = ({ label, value, onChange, placeholder }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="">
      <label className="block text-gray-700">{label}</label>
      <div className="relative">
        <input
          type={visible ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="mt-1 block w-full px-3 py-2 text-black bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          required
        />
        <div
          className="absolute inset-y-0 right-2 flex items-center cursor-pointer"
          onClick={() => setVisible(!visible)}
        >
          {visible ? (
            <BsFillEyeSlashFill size={20} color="gray" />
          ) : (
            <BsFillEyeFill size={20} color="gray" />
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordInput;
