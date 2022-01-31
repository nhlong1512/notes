import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  let navigate = useNavigate();

  const validateForm = () => {


    if (email.length <= 0 || password.length <= 0) {
      setError("Cannot be empty");
      return false;
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters.")
      return false;
    } else if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
      setError("Email is not valid")
      return false;
    }
    else {
      setError('');
      return true;
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (!validateForm())
      return;
    navigate('/');
  }
  return (
    <div className="">
      <div className="after:fixed after:bg-[url('https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] after:bg-no-repeat after:bg-cover after:z-[-1] after:content-[''] after:left-0 after:top-0 after:h-full after:w-full after:opacity-70">
      </div>
      <form className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-[18px] font-bold md:text-right mb-1 md:mb-0 pr-4 text-[black]"
              htmlFor="email">
              EMAIL
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500 shadow-[5px_5px_5px_5px_rgba(0,0,0,0.5)]"
              id="email"
              type="email"
              name="email"
              placeholder="huulongn15@gmail.com"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-[18px] font-bold md:text-right mb-1 md:mb-0 pr-4 text-[black]" htmlFor="inline-password">
              PASSWORD
            </label>
          </div>
          <div className="md:w-2/3 ">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500 shadow-[5px_5px_5px_5px_rgba(0,0,0,0.5)]"
              id="inline-password"
              type="password"
              placeholder="******************"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
              onClick={handleSubmit}
            >
              LOGIN
            </button>
          </div>
        </div>
        {(error !== '') ? (
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3 my-3 text-[#dc2626] text-[18px] font-bold">
              {error}
            </div>
          </div>
        ) : ''}
      </form>
    </div>
  )
}

export default LoginForm;
