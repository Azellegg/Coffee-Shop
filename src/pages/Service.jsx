import React from 'react'
import Navigation from '../component/Navigation'
import Footer from '../component/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons'
import { faGaugeSimple } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpAZ } from '@fortawesome/free-solid-svg-icons'


function Service() {
  return (
    <div className="w-full h-full bg-black bg-cover">
      <div className="w-full h-full bg-cover bg-no-repeat" style={{ backgroundImage:`url("asset/Circlebg.svg")` }}>
        <Navigation />
        <section className="lg:pt-[120px] pb-12 lg:pb-[90px] flex justify-center mt-[-50px] mb-[-50px]">
          <div className="container">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full px-4">
                    <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
                      <span className="font-semibold text-lg text-white mb-2 block">
                      Our Services
                      </span>
                      <h2
                          className="
                          font-bold
                          text-3xl
                          sm:text-4xl
                          md:text-[40px]
                          text-dark
                          mb-4
                          text-white"
                          >
                          What We Offer
                      </h2>
                      <p className="text-base text-body-color text-white">
                          There are many variations of passages of Lorem Ipsum available
                          but the majority have suffered alteration in some form.
                      </p>
                    </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                    <div
                      className="
                      p-10
                      md:px-7
                      xl:px-10
                      rounded-[20px]
                      bg-white
                      shadow-md
                      hover:shadow-lg
                      mb-8
                      "
                      >
                      <div
                          className="
                          w-[70px]
                          h-[70px]
                          flex
                          items-center
                          justify-center
                          bg-primary
                          rounded-2xl
                          mb-8
                          "
                          >
                            <div>
                            <FontAwesomeIcon icon={faTruckFast} className='w-[80px] h-[80px]'/>
                            </div>
                      </div>
                      <h4 className="font-semibold text-xl text-dark mb-3">
                          Fast Delivery
                      </h4>
                      <p className="text-body-color">
                      Fast delivery memungkinkan pelanggan Cafe Coffee Brain untuk menikmati hidangan favorit mereka tanpa harus pergi ke kafe.
                      </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                    <div
                      className="
                      p-10
                      md:px-7
                      xl:px-10
                      rounded-[20px]
                      bg-white
                      shadow-md
                      hover:shadow-lg
                      mb-8
                      "
                      >
                      <div
                          className="
                          w-[70px]
                          h-[70px]
                          flex
                          items-center
                          justify-center
                          bg-primary
                          rounded-2xl
                          mb-8
                          "
                          >
                          <div>
                          <FontAwesomeIcon icon={faCalendarDays} className='w-[80px] h-[80px]'/> 
                          </div>
                        </div>
                      <h4 className="font-semibold text-xl text-dark mb-3">
                          24/7 Order
                      </h4>
                      <p className="text-body-color">
                      Kami memiliki sistem pemesanan online yang canggih yang memungkinkan Anda untuk memesan makanan dan minuman favorit Anda dengan beberapa klik saja.
                      </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                    <div
                      className="
                      p-10
                      md:px-7
                      xl:px-10
                      rounded-[20px]
                      bg-white
                      shadow-md
                      hover:shadow-lg
                      mb-8
                      "
                      >
                      <div
                          className="
                          w-[70px]
                          h-[70px]
                          flex
                          items-center
                          justify-center
                          bg-primary
                          rounded-2xl
                          mb-8
                          "
                          >
                          <div>
                          <FontAwesomeIcon icon={faMugSaucer} className='w-[80px] h-[80px]'/> 
                          </div>
                      </div>
                      <h4 className="font-semibold text-xl text-dark mb-3">
                          20+ Menu
                      </h4>
                      <p className="text-body-color">
                      Lebih dari 20 menu memungkinkan Coffee Brain lebih fleksibel dan dapat menyesuaikan dengan perubahan tren dan preferensi pelanggan.
                      </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                    <div
                      className="
                      p-10
                      md:px-7
                      xl:px-10
                      rounded-[20px]
                      bg-white
                      shadow-md
                      hover:shadow-lg
                      mb-8
                      "
                      >
                      <div
                          className="
                          w-[70px]
                          h-[70px]
                          flex
                          items-center
                          justify-center
                          bg-primary
                          rounded-2xl
                          mb-8
                          "
                          >
                          <div>
                          <FontAwesomeIcon icon={faGaugeSimple} className='w-[80px] h-[80px]'/> 
                          </div>
                      </div>
                      <h4 className="font-semibold text-xl text-dark mb-3">
                          Speed Of Service
                      </h4>
                      <p className="text-body-color">
                      Cafe Coffee Brain menggunakan sistem pemesanan yang efisien. Pelanggan dapat memesan melalui web pemesanan yang tersedia.
                      </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                    <div
                      className="
                      p-10
                      md:px-7
                      xl:px-10
                      rounded-[20px]
                      bg-white
                      shadow-md
                      hover:shadow-lg
                      mb-8
                      "
                      >
                      <div
                          className="
                          w-[70px]
                          h-[70px]
                          flex
                          items-center
                          justify-center
                          bg-primary
                          rounded-2xl
                          mb-8
                          "
                          >
                          <div>
                          <FontAwesomeIcon icon={faGlobe} className='w-[80px] h-[80px]'/> 
                          </div>
                      </div>
                      <h4 className="font-semibold text-xl text-dark mb-3">
                      Creative Combination 
                      </h4>
                      <p className="text-body-color">
                      Cafe Coffee Brain dapat menggunakan Creative Combination untuk menciptakan pengalaman sensorik yang memukau bagi para pengunjungnya.
                      </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                    <div
                      className="
                      p-10
                      md:px-7
                      xl:px-10
                      rounded-[20px]
                      bg-white
                      shadow-md
                      hover:shadow-lg
                      mb-8
                      "
                      >
                      <div
                          className="
                          w-[70px]
                          h-[70px]
                          flex
                          items-center
                          justify-center
                          bg-primary
                          rounded-2xl
                          mb-8
                          "
                          >
                          <div>
                          <FontAwesomeIcon icon={faArrowUpAZ} className='w-[80px] h-[80px]'/> 
                          </div>
                      </div>
                      <h4 className="font-semibold text-xl text-dark mb-3">
                        Anytime Menu Updates
                      </h4>
                      <p className="text-body-color">
                      Dengan Anytime menu updates, Cafe Coffee Brain dapat terus menawarkan variasi hidangan kepada pelanggan mereka.
                      </p>
                    </div>
                </div>
              </div>
          </div>
        </section>

        {/* Content Closed */}
        <div className="flex justify-between mt-[30px] pl-[70px] pr-[70px]">
                         <div className="text-white">
                              {/* Logo Icon Coffee Brain */}
                              <div className="flex items-center">
                                   <img src="asset/logo.svg" alt="Coffee Brain" className="w-[45px]"/>
                                        <div className="text-white text-[20px] pl-[15px] font-bold">Coffee Brain</div>
                              </div>
                              <p className="font-light text-[10px] w-[330px] mt-[30px]">Scelerisque felis imperdiet proin fermentum. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Diam donec adipiscing tristique risus nec feugiat in fermentum. Scelerisque felis imperdiet proin fermentum. Pulvinar etiam non quam lacus suspendisse</p>
                              <div className="flex ustify-between items-center text-center mt-[30px] ml-[-20px]">
                                   <img src="asset/Instagram.svg" alt="Instagram" className="cursor-pointer"/>
                                   <img src="asset/Twitter.svg" alt="Twitter" className="cursor-pointer"/>
                                   <img src="asset/Facebook.svg" alt="Facebook" className="cursor-pointer"/>
                              </div>
                         </div>

                         <div className="flex justify-start gap-[35px]">
                              <div className="font-light text-white">
                                   <h1 className="font-bold text-[20px]">About</h1>
                                   <p className="mt-[10px] cursor-pointer hover:text-amber-700 active:text-amber-700 focus:outline-none focus:ring">About Us</p>
                                   <p className="mt-[10px] cursor-pointer hover:text-amber-700 active:text-amber-700 focus:outline-none focus:ring">Feature</p>
                                   <p className="mt-[10px] cursor-pointer hover:text-amber-700 active:text-amber-700 focus:outline-none focus:ring">News</p>
                                   <p className="mt-[10px] cursor-pointer hover:text-amber-700 active:text-amber-700 focus:outline-none focus:ring">Menu</p>
                              </div>

                              <div className="font-light text-white">
                                   <h1 className="font-bold text-[20px]">Company</h1>
                                   <p className="mt-[10px] cursor-pointer hover:text-amber-700 active:text-amber-700 focus:outline-none focus:ring">Why Coffee ?</p>
                                   <p className="mt-[10px] cursor-pointer hover:text-amber-700 active:text-amber-700 focus:outline-none focus:ring">Partner With Us</p>
                                   <p className="mt-[10px] cursor-pointer hover:text-amber-700 active:text-amber-700 focus:outline-none focus:ring">FAQ</p>
                                   <p className="mt-[10px] cursor-pointer hover:text-amber-700 active:text-amber-700 focus:outline-none focus:ring">Blog</p>
                              </div>

                              <div className="font-light text-white">
                                   <h1 className="font-bold text-[20px]">Support</h1>
                                   <p className="mt-[10px] cursor-pointer hover:text-amber-700 active:text-amber-700 focus:outline-none focus:ring">Account</p>
                                   <p className="mt-[10px] cursor-pointer hover:text-amber-700 active:text-amber-700 focus:outline-none focus:ring">Support Center</p>
                                   <p className="mt-[10px] cursor-pointer hover:text-amber-700 active:text-amber-700 focus:outline-none focus:ring">Feedback</p>
                                   <p className="mt-[10px] cursor-pointer hover:text-amber-700 active:text-amber-700 focus:outline-none focus:ring">Contact Us</p>
                                   <p className="mt-[10px] cursor-pointer hover:text-amber-700 active:text-amber-700 focus:outline-none focus:ring">Accebility</p>
                              </div>

                              <div className="font-light text-white">
                                   <h1 className="font-bold text-[20px]">Get in Touch</h1>
                                   <p className="mt-[10px] cursor-pointer hover:text-amber-700 active:text-amber-700 focus:outline-none focus:ring">Question or Feedback ?</p>
                                   <p className="mt-[10px] cursor-pointer hover:text-amber-700 active:text-amber-700 focus:outline-none focus:ring">We’d love to hear from you</p>
                                   <div className="rounded-full w-[200px] h-[35px] flex mt-[12px]">
                                        <input type="text" className="w-[300px] h-[35px]pl-[10px] rounded-full text-[11px] font-light text-white bg-transparent border-[1px] border-white pl-[10px]" placeholder="What Problem..."/>
                                        <img src="./asset/Search.svg" alt="Search" className="w-[26px] ml-[-31px]"/>
                                   </div>
                              </div>
                         </div>
                    </div>
                    {/* Content Closed */}
        <Footer />
      </div>
    </div>
  )
}

export default Service