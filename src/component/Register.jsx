import React from 'react'
import Navigationsec from './Navigationsec'
import Footersec from './Footersec'

function Register() {
  return (
    <>
    <div className="w-full h-full bg-black bg-cover">
      <div className="w-full h-full bg-cover bg-no-repeat" style={{ backgroundImage:`url("asset/bglog.svg")` }}>
        <Navigationsec />
        <p className='text-3xl font-bold text-center mt-[20px] mb-[10px] text-white'>Sign Up</p>
        <div className="container mx-auto">
          <div className="flex justify-center px-6 my-12">
          
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            
              <div
                className="w-full h-auto bg-gradient-to-tl from-[#A57939] to-green-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg">
                <img src="asset/Bar1.svg" alt="Barista" className='mt-[75px]'/>
              </div>
            
              <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label className="block mb-2 text-sm font-bold text-gray-700" for="firstName">
                        First Name
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="md:ml-2">
                      <label className="block mb-2 text-sm font-bold text-gray-700" for="lastName">
                        Last Name
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700" for="email">
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label className="block mb-2 text-sm font-bold text-gray-700" for="password">
                        Password
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="******************"
                      />
                      <p className="text-xs italic text-red-500">Please choose a password.</p>
                    </div>
                    <div className="md:ml-2">
                      <label className="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                        Confirm Password
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="c_password"
                        type="password"
                        placeholder="******************"
                      />
                    </div>
                  </div>
                  <a href="/">
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-[#A57939] rounded-full hover:bg-[#6b5b43] focus:outline-none focus:shadow-outline"
                      type="button">
                      Sign Up Account
                    </button>
                  </div>
                  </a>
                  <hr className="mb-6 border-t" />
                  <div className="text-center">
                    <a
                      className="inline-block text-sm text-green-500 align-baseline hover:text-green-800"
                      href="/Login"
                    >
                      Already have an account? Login!
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footersec />
      </div>
    </div>
    </>
  )
}

export default Register