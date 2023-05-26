import React from 'react'
import Navigation from '../component/Navigation'
import Footer from '../component/Footer'
import Swal from 'sweetalert2'

function Shop() {
     const Alert = () => {
          Swal.fire({
               position: 'top-end',
               icon: 'success',
               title: 'Pesanan Telah Ditambahkan',
               showConfirmButton: false,
               timer: 1500
          })
     }
     return (
     <>
     <div className="w-full h-full bg-black bg-cover">
          <div className="w-full h-full bg-cover bg-no-repeat" style={{ backgroundImage:`url("asset/shopbgcircle.svg")` }}>
               <Navigation />
               <h1 className='pl-[70px] mt-[70px] mb-[70px] text-3xl text-white font-bold'>Coffe Menu</h1>
               <div className='pl-[70px] pr-[70px] flex justify-center items-center justify-items-center gap-[50px] mt-[30px] flex-wrap'>
               <div className="w-[250px]">
                         <img src="asset/Coffee.svg" alt="Coffee Menu" className="mb-[-60px] pl-[39px]"/>
                         <div className="pl-[170px] mb-[-40px]">
                         <button className="bg-green-800 text-[15px] text-white rounded-[100%] w-[35px] h-[35px] cursor-not-allowed">$65</button>
                         </div>
                         <div className="bg-gradient-to-tl from-[#A57939] to-black rounded-[10px] w-[250px] h-[200px] pt-[60px] pl-[10px] pr-[10px]">
                              <div className="bg-transparent flex justify-center text-white gap-1">
                                   <img src="asset/retingstar.svg" alt="Rating" />
                                   <p>4.8</p>
                              </div>
                              <div className="text-center text-white">
                                   <h1 className="font-bold text-[18px] mb-[5px]">Coffee Cappucino</h1>
                                   <h3 className="text-[9px] font-light ">Cappuccino adalah perpaduan yang tepat antara espresso, susu, dan busa susu. Kekuatan yang membuat lidah menari di busa susu yang Soft.</h3>
                                   <button className="bg-green-800 w-[100px] h-[30px] text-[11px] font-light rounded-[7px] mt-[30px] hover:bg-green-700 focus:outline-none focus:shadow-outline" onClick={Alert}>Order Now</button>
                              </div>
                         </div>
                    </div>

                    <div className="w-[250px]">
                         <img src="asset/amb.svg" alt="Coffee Menu" className="mb-[-60px] pl-[39px]"/>
                         <div className="pl-[170px] mb-[-40px]">
                         <button className="bg-green-800 text-[15px] text-white rounded-[100%] w-[35px] h-[35px] cursor-not-allowed">$45</button>
                         </div>
                         <div className="bg-gradient-to-tl from-[#A57939] to-black rounded-[10px] w-[250px] h-[200px] pt-[60px] pl-[10px] pr-[10px]">
                              <div className="bg-transparent flex justify-center text-white gap-1">
                                   <img src="asset/retingstar.svg" alt="Rating" />
                                   <p>4.7</p>
                              </div>
                              <div className="text-center text-white">
                                   <h1 className="font-bold text-[18px] mb-[5px]">Coffee Americano</h1>
                                   <h3 className="text-[9px] font-light ">Americano adalah minuman yang terbuat dari campuran espresso dan air panas, yang dapat membuat kita PowerFull dalam Bekerja!.</h3>
                                   <button className="bg-green-800 w-[100px] h-[30px] text-[11px] font-light rounded-[7px] mt-[30px] hover:bg-green-700 focus:outline-none focus:shadow-outline" onClick={Alert}>Order Now</button>
                              </div>
                         </div>
                    </div>

                    <div className="w-[250px]">
                         <img src="asset/amhigh.svg" alt="Coffee Menu" className="mb-[-60px] pl-[39px]"/>
                         <div className="pl-[170px] mb-[-40px]">
                         <button className="bg-green-800 text-[15px] text-white rounded-[100%] w-[35px] h-[35px] cursor-not-allowed">$55</button>
                         </div>
                         <div className="bg-gradient-to-tl from-[#A57939] to-black rounded-[10px] w-[250px] h-[200px] pt-[60px] pl-[10px] pr-[10px]">
                              <div className="bg-transparent flex justify-center text-white gap-1">
                                   <img src="asset/retingstar.svg" alt="Rating" />
                                   <p>4.5</p>
                              </div>
                              <div className="text-center text-white">
                                   <h1 className="font-bold text-[17px] mb-[5px]">Coffee Americano ( High )</h1>
                                   <h3 className="text-[9px] font-light ">Americano adalah minuman yang terbuat dari campuran espresso dan air panas, yang dapat membuat kita PowerFull dalam Bekerja!.</h3>
                                   <button className="bg-green-800 w-[100px] h-[30px] text-[11px] font-light rounded-[7px] mt-[30px] hover:bg-green-700 focus:outline-none focus:shadow-outline" onClick={Alert}>Order Now</button>
                              </div>
                         </div>
                    </div>

                    <div className="w-[250px]">
                         <img src="asset/cofwhite.svg" alt="Coffee Menu" className="mb-[-60px] pl-[39px]"/>
                         <div className="pl-[170px] mb-[-40px]">
                         <button className="bg-green-800 text-[15px] text-white rounded-[100%] w-[35px] h-[35px] cursor-not-allowed">$75</button>
                         </div>
                         <div className="bg-gradient-to-tl from-[#A57939] to-black rounded-[10px] w-[250px] h-[200px] pt-[60px] pl-[10px] pr-[10px]">
                              <div className="bg-transparent flex justify-center text-white gap-1">
                                   <img src="asset/retingstar.svg" alt="Rating" />
                                   <p>4.6</p>
                              </div>
                              <div className="text-center text-white">
                                   <h1 className="font-bold text-[18px] mb-[5px]">White Coffee</h1>
                                   <h3 className="text-[9px] font-light ">White Coffee adalah minuman kopi istimewa yang dihasilkan melalui proses roasting yang lebih ringan, memberikan rasa yang unik dan tak terlupakan.</h3>
                                   <button className="bg-green-800 w-[100px] h-[30px] text-[11px] font-light rounded-[7px] mt-[30px] hover:bg-green-700 focus:outline-none focus:shadow-outline" onClick={Alert}>Order Now</button>
                              </div>
                         </div>
                    </div>
                    
                    <div className="w-[250px]">
                         <img src="asset/cofteras.svg" alt="Coffee Menu" className="mb-[-60px] pl-[39px]"/>
                         <div className="pl-[170px] mb-[-40px]">
                         <button className="bg-green-800 text-[15px] text-white rounded-[100%] w-[35px] h-[35px] cursor-not-allowed">$35</button>
                         </div>
                         <div className="bg-gradient-to-tl from-[#A57939] to-black rounded-[10px] w-[250px] h-[200px] pt-[60px] pl-[10px] pr-[10px]">
                              <div className="bg-transparent flex justify-center text-white gap-1">
                                   <img src="asset/retingstar.svg" alt="Rating" />
                                   <p>4.3</p>
                              </div>
                              <div className="text-center text-white">
                                   <h1 className="font-bold text-[18px] mb-[5px]">Coffee Latte</h1>
                                   <h3 className="text-[9px] font-light ">Selain menyajikan Coffee Latte klasik, Cafe Coffee Brain juga memiliki berbagai variasi rasa dan topping yang mengagumkan.</h3>
                                   <button className="bg-green-800 w-[100px] h-[30px] text-[11px] font-light rounded-[7px] mt-[30px] hover:bg-green-700 focus:outline-none focus:shadow-outline" onClick={Alert}>Order Now</button>
                              </div>
                         </div>
                    </div>

                    <div className="w-[250px]">
                         <img src="asset/cofbapak.svg" alt="Coffee Menu" className="mb-[-60px] pl-[39px]"/>
                         <div className="pl-[170px] mb-[-40px]">
                         <button className="bg-green-800 text-[15px] text-white rounded-[100%] w-[35px] h-[35px] cursor-not-allowed">$25</button>
                         </div>
                         <div className="bg-gradient-to-tl from-[#A57939] to-black rounded-[10px] w-[250px] h-[200px] pt-[60px] pl-[10px] pr-[10px]">
                              <div className="bg-transparent flex justify-center text-white gap-1">
                                   <img src="asset/retingstar.svg" alt="Rating" />
                                   <p>4.9</p>
                              </div>
                              <div className="text-center text-white">
                                   <h1 className="font-bold text-[18px] mb-[5px]">Coffee Hitam Bapak</h1>
                                   <h3 className="text-[9px] font-light ">Kopi hitam Indonesia di Cafe Coffee Brain disajikan dengan menggunakan teknik penyeduhan yang terbaik dan berkualitas tinggi.</h3>
                                   <button className="bg-green-800 w-[100px] h-[30px] text-[11px] font-light rounded-[7px] mt-[30px] hover:bg-green-700 focus:outline-none focus:shadow-outline" onClick={Alert}>Order Now</button>
                              </div>
                         </div>
                    </div>

                    <div className="w-[250px]">
                         <img src="asset/cofeks.svg" alt="Coffee Menu" className="mb-[-60px] pl-[39px]"/>
                         <div className="pl-[170px] mb-[-40px]">
                         <button className="bg-green-800 text-[15px] text-white rounded-[100%] w-[35px] h-[35px] cursor-not-allowed">$43</button>
                         </div>
                         <div className="bg-gradient-to-tl from-[#A57939] to-black rounded-[10px] w-[250px] h-[200px] pt-[60px] pl-[10px] pr-[10px]">
                              <div className="bg-transparent flex justify-center text-white gap-1">
                                   <img src="asset/retingstar.svg" alt="Rating" />
                                   <p>4.1</p>
                              </div>
                              <div className="text-center text-white">
                                   <h1 className="font-bold text-[18px] mb-[5px]">Coffee Espresso</h1>
                                   <h3 className="text-[9px] font-light "> Biji kopi espresso yang berkualitas dipilih dan disimpan dengan baik. Sebelum digunakan, biji kopi akan digiling sesuai kebutuhan untuk menjaga kesegaran dan kualitasnya.</h3>
                                   <button className="bg-green-800 w-[100px] h-[30px] text-[11px] font-light rounded-[7px] mt-[15px] hover:bg-green-700 focus:outline-none focus:shadow-outline" onClick={Alert}>Order Now</button>
                              </div>
                         </div>
                    </div>

                    <div className="w-[250px]">
                         <img src="asset/cofgren.svg" alt="Coffee Menu" className="mb-[-60px] pl-[39px]"/>
                         <div className="pl-[170px] mb-[-40px]">
                         <button className="bg-green-800 text-[15px] text-white rounded-[100%] w-[35px] h-[35px] cursor-not-allowed">$85</button>
                         </div>
                         <div className="bg-gradient-to-tl from-[#A57939] to-black rounded-[10px] w-[250px] h-[200px] pt-[60px] pl-[10px] pr-[10px]">
                              <div className="bg-transparent flex justify-center text-white gap-1">
                                   <img src="asset/retingstar.svg" alt="Rating" />
                                   <p>4.6</p>
                              </div>
                              <div className="text-center text-white">
                                   <h1 className="font-bold text-[18px] mb-[5px]">Coffee Green Tea</h1>
                                   <h3 className="text-[9px] font-light ">Coffee Green Tea di Cafe Coffee Brain menyajikan perpaduan sempurna antara cita rasa kopi dan teh hijau dengan rasa yang Luar Biasa.</h3>
                                   <button className="bg-green-800 w-[100px] h-[30px] text-[11px] font-light rounded-[7px] mt-[30px] hover:bg-green-700 focus:outline-none focus:shadow-outline" onClick={Alert}>Order Now</button>
                              </div>
                         </div>
                    </div>
               </div>

               <h1 className='pl-[70px] mt-[70px] mb-[70px] text-3xl text-white font-bold'>Food Menu</h1>
               <div className='pl-[70px] pr-[70px] flex justify-center items-center justify-items-center gap-[50px] mt-[30px] flex-wrap'>
               <div className="w-[250px]">
                         <img src="asset/dora.svg" alt="Coffee Menu" className="mb-[-60px] pl-[39px]"/>
                         <div className="pl-[170px] mb-[-40px]">
                         <button className="bg-green-800 text-[15px] text-white rounded-[100%] w-[35px] h-[35px] cursor-not-allowed">$15</button>
                         </div>
                         <div className="bg-gradient-to-tl from-[#A57939] to-black rounded-[10px] w-[250px] h-[200px] pt-[60px] pl-[10px] pr-[10px]">
                              <div className="bg-transparent flex justify-center text-white gap-1">
                                   <img src="asset/retingstar.svg" alt="Rating" />
                                   <p>4.3</p>
                              </div>
                              <div className="text-center text-white">
                                   <h1 className="font-bold text-[18px] mb-[5px]">Dorayaki Doraemon</h1>
                                   <h3 className="text-[9px] font-light ">Dorayaki Doraemon di Cafe Coffee Brain tidak hanya menonjol dalam penampilannya, tetapi juga dalam rasa dan kualitasnya.</h3>
                                   <button className="bg-green-800 w-[100px] h-[30px] text-[11px] font-light rounded-[7px] mt-[30px] hover:bg-green-700 focus:outline-none focus:shadow-outline" onClick={Alert}>Order Now</button>
                              </div>
                         </div>
                    </div>

                    <div className="w-[250px]">
                         <img src="asset/ckck.svg" alt="Coffee Menu" className="mb-[-60px] pl-[39px]"/>
                         <div className="pl-[170px] mb-[-40px]">
                         <button className="bg-green-800 text-[15px] text-white rounded-[100%] w-[35px] h-[35px] cursor-not-allowed">$35</button>
                         </div>
                         <div className="bg-gradient-to-tl from-[#A57939] to-black rounded-[10px] w-[250px] h-[200px] pt-[60px] pl-[10px] pr-[10px]">
                              <div className="bg-transparent flex justify-center text-white gap-1">
                                   <img src="asset/retingstar.svg" alt="Rating" />
                                   <p>4.6</p>
                              </div>
                              <div className="text-center text-white">
                                   <h1 className="font-bold text-[18px] mb-[5px]">Fillet Ayam</h1>
                                   <h3 className="text-[9px] font-light ">Cafe Coffee Brain menyediakan berbagai macam pilihan rasa untuk menu fillet ayam mereka dan dengan kualitas terbaik. </h3>
                                   <button className="bg-green-800 w-[100px] h-[30px] text-[11px] font-light rounded-[7px] mt-[30px] hover:bg-green-700 focus:outline-none focus:shadow-outline" onClick={Alert}>Order Now</button>
                              </div>
                         </div>
                    </div>

                    <div className="w-[250px]">
                         <img src="asset/sopred.svg" alt="Coffee Menu" className="mb-[-60px] pl-[39px]"/>
                         <div className="pl-[170px] mb-[-40px]">
                         <button className="bg-green-800 text-[15px] text-white rounded-[100%] w-[35px] h-[35px] cursor-not-allowed">$45</button>
                         </div>
                         <div className="bg-gradient-to-tl from-[#A57939] to-black rounded-[10px] w-[250px] h-[200px] pt-[60px] pl-[10px] pr-[10px]">
                              <div className="bg-transparent flex justify-center text-white gap-1">
                                   <img src="asset/retingstar.svg" alt="Rating" />
                                   <p>4.8</p>
                              </div>
                              <div className="text-center text-white">
                                   <h1 className="font-bold text-[18px] mb-[5px]">Sop Ayam Merah</h1>
                                   <h3 className="text-[9px] font-light ">Cafe Coffee Brain menggunakan bahan-bahan berkualitas tinggi untuk menyajikan sop ayam merah mereka.</h3>
                                   <button className="bg-green-800 w-[100px] h-[30px] text-[11px] font-light rounded-[7px] mt-[30px] hover:bg-green-700 focus:outline-none focus:shadow-outline" onClick={Alert}>Order Now</button>
                              </div>
                         </div>
                    </div>

                    <div className="w-[250px]">
                         <img src="asset/kacang.svg" alt="Coffee Menu" className="mb-[-60px] pl-[39px]"/>
                         <div className="pl-[170px] mb-[-40px]">
                         <button className="bg-green-800 text-[15px] text-white rounded-[100%] w-[35px] h-[35px] cursor-not-allowed">$23</button>
                         </div>
                         <div className="bg-gradient-to-tl from-[#A57939] to-black rounded-[10px] w-[250px] h-[200px] pt-[60px] pl-[10px] pr-[10px]">
                              <div className="bg-transparent flex justify-center text-white gap-1">
                                   <img src="asset/retingstar.svg" alt="Rating" />
                                   <p>4.4</p>
                              </div>
                              <div className="text-center text-white">
                                   <h1 className="font-bold text-[18px] mb-[5px]">Kacang Almond</h1>
                                   <h3 className="text-[9px] font-light ">Kacang almond adalah sumber nutrisi yang kaya, mengandung vitamin E, serat, protein, lemak sehat, magnesium, dan zat besi.</h3>
                                   <button className="bg-green-800 w-[100px] h-[30px] text-[11px] font-light rounded-[7px] mt-[30px] hover:bg-green-700 focus:outline-none focus:shadow-outline" onClick={Alert}>Order Now</button>
                              </div>
                         </div>
                    </div>

                    <div className="w-[250px]">
                         <img src="asset/cookie.svg" alt="Coffee Menu" className="mb-[-60px] pl-[39px]"/>
                         <div className="pl-[170px] mb-[-40px]">
                         <button className="bg-green-800 text-[15px] text-white rounded-[100%] w-[35px] h-[35px] cursor-not-allowed">$25</button>
                         </div>
                         <div className="bg-gradient-to-tl from-[#A57939] to-black rounded-[10px] w-[250px] h-[200px] pt-[60px] pl-[10px] pr-[10px]">
                              <div className="bg-transparent flex justify-center text-white gap-1">
                                   <img src="asset/retingstar.svg" alt="Rating" />
                                   <p>4.9</p>
                              </div>
                              <div className="text-center text-white">
                                   <h1 className="font-bold text-[18px] mb-[5px]">Cokkies</h1>
                                   <h3 className="text-[9px] font-light ">Cookies di Cafe Coffee Brain disiapkan dengan hati-hati dan menggunakan bahan-bahan berkualitas tinggi dan terjamin.</h3>
                                   <button className="bg-green-800 w-[100px] h-[30px] text-[11px] font-light rounded-[7px] mt-[30px] hover:bg-green-700 focus:outline-none focus:shadow-outline" onClick={Alert}>Order Now</button>
                              </div>
                         </div>
                    </div>

                    <div className="w-[250px]">
                         <img src="asset/roti.svg" alt="Coffee Menu" className="mb-[-60px] pl-[39px]"/>
                         <div className="pl-[170px] mb-[-40px]">
                         <button className="bg-green-800 text-[15px] text-white rounded-[100%] w-[35px] h-[35px] cursor-not-allowed">$15</button>
                         </div>
                         <div className="bg-gradient-to-tl from-[#A57939] to-black rounded-[10px] w-[250px] h-[200px] pt-[60px] pl-[10px] pr-[10px]">
                              <div className="bg-transparent flex justify-center text-white gap-1">
                                   <img src="asset/retingstar.svg" alt="Rating" />
                                   <p>4.7</p>
                              </div>
                              <div className="text-center text-white">
                                   <h1 className="font-bold text-[18px] mb-[5px]">Roti Bakar</h1>
                                   <h3 className="text-[9px] font-light "> Roti bakar adalah hidangan yang sangat populer dan disukai oleh banyak orang, dengan rasa yang luar biasa.</h3>
                                   <button className="bg-green-800 w-[100px] h-[30px] text-[11px] font-light rounded-[7px] mt-[30px] hover:bg-green-700 focus:outline-none focus:shadow-outline" onClick={Alert}>Order Now</button>
                              </div>
                         </div>
                    </div>

                    <div className="w-[250px]">
                         <img src="asset/breat.svg" alt="Coffee Menu" className="mb-[-60px] pl-[39px]"/>
                         <div className="pl-[170px] mb-[-40px]">
                         <button className="bg-green-800 text-[15px] text-white rounded-[100%] w-[35px] h-[35px] cursor-not-allowed">$20</button>
                         </div>
                         <div className="bg-gradient-to-tl from-[#A57939] to-black rounded-[10px] w-[250px] h-[200px] pt-[60px] pl-[10px] pr-[10px]">
                              <div className="bg-transparent flex justify-center text-white gap-1">
                                   <img src="asset/retingstar.svg" alt="Rating" />
                                   <p>4.6</p>
                              </div>
                              <div className="text-center text-white">
                                   <h1 className="font-bold text-[18px] mb-[5px]">Breat Strom</h1>
                                   <h3 className="text-[9px] font-light "> Roti panggang pada Breat Strom mengandung serat yang baik untuk pencernaan dan membantu menjaga kesehatan usus.</h3>
                                   <button className="bg-green-800 w-[100px] h-[30px] text-[11px] font-light rounded-[7px] mt-[30px] hover:bg-green-700 focus:outline-none focus:shadow-outline" onClick={Alert}>Order Now</button>
                              </div>
                         </div>
                    </div>

                    <div className="w-[250px]">
                         <img src="asset/salad.svg" alt="Coffee Menu" className="mb-[-60px] pl-[39px]"/>
                         <div className="pl-[170px] mb-[-40px]">
                         <button className="bg-green-800 text-[15px] text-white rounded-[100%] w-[35px] h-[35px] cursor-not-allowed">$25</button>
                         </div>
                         <div className="bg-gradient-to-tl from-[#A57939] to-black rounded-[10px] w-[250px] h-[200px] pt-[60px] pl-[10px] pr-[10px]">
                              <div className="bg-transparent flex justify-center text-white gap-1">
                                   <img src="asset/retingstar.svg" alt="Rating" />
                                   <p>4.2</p>
                              </div>
                              <div className="text-center text-white">
                                   <h1 className="font-bold text-[18px] mb-[5px]">Salad Gunung</h1>
                                   <h3 className="text-[9px] font-light "> Salad Gunung di Cafe Coffee Brain biasanya disajikan dengan tambahan bahan-bahan seperti keju, biji-bijian, kacang-kacangan, atau dressing yang lezat.</h3>
                                   <button className="bg-green-800 w-[100px] h-[30px] text-[11px] font-light rounded-[7px] mt-[30px] hover:bg-green-700 focus:outline-none focus:shadow-outline" onClick={Alert}>Order Now</button>
                              </div>
                         </div>
                    </div>
               </div>

               {/* Subscribe */}
               <div className="pl-[70px] pr-[70px] pt-[100px] flex justify-start item-center text-white">
                         <img src="asset/pumkin.svg" alt="Pumkin" className="w-[500px]"/>
                         <div className="pt-[90px] pl-[40px]">
                              <h1 className="text-[50px] font-bold"><span className="text-green-800">Subscribe</span> For Get Update Every <span className="text-[#A57939]">New Offers</span></h1>
                              <h3 className="pt-[10px] font-light">Dengan berlangganan, pelanggan akan menerima pembaruan langsung setiap kali Cafe Coffee Brain meluncurkan penawaran baru atau promosi menarik. Mereka tidak akan melewatkan kesempatan untuk menikmati penawaran eksklusif atau acara khusus yang diselenggarakan di kafe ini. Informasi terbaru akan langsung sampai ke kotak masuk mereka, memungkinkan mereka untuk tetap terhubung dengan semua kegiatan yang sedang berlangsung di Cafe Coffee Brain.</h3>
                              {/* Search Menu */}
                              <div className="rounded-full w-[405px] h-[42px] flex mt-[20px]">
                                   <input type="text" className="w-[300px] h-[35px] pl-[15px] rounded-full text-[11px] font-light text-black bg-white border-[1px] border-white" placeholder="Your Email..."/>
                                   <button className="text-[11px] bg-green-800 w-[100px] h-[25px] rounded-full mt-[5px] ml-[-107px] hover:bg-green-700 focus:outline-none focus:shadow-outline">SUBSCRIBE</button>
                              </div>
                              {/* Search Menu */}
                         </div>
                    </div>
                    {/* Subscribe */}

                    {/* Content Closed */}
                    <div className="flex justify-between mt-[70px] pl-[70px] pr-[70px]">
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
                                        <img src="./asset/Search.svg" alt="Search" className="w-[26px] ml-[-31px] cursor-pointer"/>
                                   </div>
                              </div>
                         </div>
                    </div>
                    {/* Content Closed */}
               <Footer />
          </div>
     </div>
     </>
     )
}

export default Shop