import React from 'react'
import Navigationsec from './Navigationsec'
import Footersec from './Footersec'

function Login() {
  return (
    <>
    <div className="w-full h-full bg-black bg-cover">
      <div className="w-full h-full bg-cover bg-no-repeat" style={{ backgroundImage:`url("asset/bglog.svg")` }}>
        <Navigationsec />
          <div className='text-white'>
            <h1 className='text-3xl font-bold text-center mt-[20px] mb-[20px]'>Sign In</h1>
            <div className="container mx-auto">
              <div className="flex justify-center px-6 my-12">
                <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                  <div className="w-full h-auto bg-gradient-to-tl from-[#A57939] to-green-800 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg">
                        <img src="asset/bar2.svg" alt="Barista" className='mt-[5px]'/>
                    </div>
                  <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                    <h3 className="pt-4 text-2xl text-center">Welcome Back!</h3>
                    <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                      <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700" for="username">
                          Username
                        </label>
                        <input
                          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="username"
                          type="text"
                          placeholder="Username"
                        />
                      </div>
                      <div className="mb-4">
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
                      <div className="mb-4">
                        <input className="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
                        <label className="text-sm text-black" for="checkbox_id">
                          Remember Me
                        </label>
                      </div>
                      <a href="/">
                      <div className="mb-6 text-center">
                        <button
                          className="w-full px-4 py-2 font-bold text-white bg-[#A57939] rounded-full hover:bg-[#6b5b43] focus:outline-none focus:shadow-outline"
                          type="button"
                        >
                          Sign In
                        </button>
                      </div>
                      </a>
                      <hr className="mb-6 border-t" />
                      <div className="text-center">
                        <a className="inline-block text-sm text-green-500 align-baseline hover:text-green-800" href='/Register'>
                          Create an Account!
                        </a>
                      </div>
                    </form>
                  </div>
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

export default Login