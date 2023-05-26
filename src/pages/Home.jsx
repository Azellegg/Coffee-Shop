import React from "react";
import Swal from 'sweetalert2'

const Home = () => {
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
                    {/* Trust Logo */}
                    <div className="flex items-center justify-start gap-[10px]">
                         <div className="bg-[#A57939] w-[230px] h-[30px] rounded-[5px] flex items-center justify-center gap-[10px] ml-[70px] mt-[52px]">
                              <img src="asset/Trust.svg" alt="People Trust" className="w-[16px]"/>
                              <p className="text-white font-medium text-[14px]">People Trust Us</p>
                         </div>
                    {/* Arrow Icon */}
                         <img src="asset/arrowtr.svg" alt="arrow" className="mt-[55px] w-[110px]"/>
                    </div>
                    {/* Content Attention */}
                    <div className="flex justify-between">
                         <div>
                              <div className="ml-[70px] w-[450px] h-[160px] text-white font-bold">
                                   <h1 className="text-5xl mb-[10px]">We’re <span className="text-[#A57939]">Serious</span> For <span className="text-[#A57939]">Coffee</span> & <span className="text-green-700">Delivery</span></h1>
                                   <p className="font-extralight w-[448px] text-[15px]">Rasakan aroma yang menggoda dan cita rasa yang memikat dalam setiap sajian kopi kami. Dari espresso yang kaya dan menggugah selera hingga cappuccino lembut yang memanjakan lidah, kami menawarkan berbagai pilihan yang memenuhi preferensi penikmat kopi.</p>

                                   {/* Search Menu */}
                                   <div className="rounded-full w-[350px] h-[35px] flex mt-[12px]">
                                        <input type="text" className="w-[300px] h-[35px]pl-[10px] rounded-full text-[11px] font-light text-white bg-transparent border-[1px] border-white pl-[10px]" placeholder="Search Menu..."/>
                                        <img src="./asset/Search.svg" alt="Search" className="w-[26px] ml-[-31px]"/>
                                   </div>
                                   {/* Search Menu */}
                                   <div className="mt-[15px] flex justify-between items-center w-[300px]">
                                        {/* Order Now */}
                                        <div className="w-[120px] h-[35px] bg-black border-green-800 border-[1px] rounded-[5px] drop-shadow-[0_0_35px_rgba(13,88,16.25)] flex text-center text-green-700 justify-center items-center font-normal text-[10px] cursor-pointer">
                                             <p>Order Now</p>
                                        </div>
                                        {/* Order Now */}

                                        {/* Order Proses */}
                                        <div className="flex justify-center items-center cursor-pointer">
                                             <img src="./asset/Pause.svg" alt="Pause" className="w-[50px]" />
                                             <p className="font-bold text-[12px] ml-[-px]">Order Proses</p>
                                        </div>
                                        {/* Order Proses */}
                                   </div>
                              </div>
                         </div>
                         <div className="mr-[70px] mt-[-70px]">
                              {/* Content Cup */}
                              <div className="flex mt-[-50px] justify-center items-center">
                                   <img src="./asset/cupcoffee.svg" alt="Cup Coffee" className="w-[520px] mr-[-200px]"/> 
                                   <img src="./asset/Partikel.svg" alt="Partikel" className="w-[600px] ml-[-350px]" />
                              </div>
                              {/* Content Cup */}
                         </div>
                    {/* Content Attention */}
                    </div>

                    {/* Mounth Menu Spesial Offer */}
                    <div className="ml-[70px] mr-[70px] mt-[20px] text-white text-center justify-items-center">
                         <div>
                              <h1 className="text-5xl mb-[10px] text-center font-bold">Month <span className="text-[#A57939]">Spesial</span> Offers</h1>
                              <p className="font-light text-[10px] text-center max-w-[65%] mx-auto">Secangkir kopi hangat yang menggoda dan cita rasa yang memukau. Inilah kesempatan Anda untuk memberikan diri Anda hadiah terbaik dengan menikmati pengalaman kafe yang tak terlupakan. Biarkan diri Anda terhanyut dalam keindahan penawaran terbaik yang kami hadirkan. Nikmati aroma kopi yang menggugah selera dan rasakan sensasi luar biasa yang tercipta di setiap tegukan.</p>
                         </div>
                    </div>
                    {/* Mounth Menu Spesial Offer */}

                    {/* Card Menu */}
                    <div className="pl-[70px] pr-[70px] flex justify-center items-center justify-items-center gap-[50px] mt-[30px]">
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
                    </div>
                    {/* Card Menu */}

                    {/* About */}
                    <div className="pl-[70px] pr-[70px] flex justify-between">
                         <div>
                              <img src="asset/imgabout.svg" alt="Coffee" className="w-[450px] mt-[80px]"/>
                         </div>
                         <div className="w-[680px] pt-[100px]">
                              <h1 className="text-[#A57939] text-[18px] font-bold mb-[15px]">ABOUT</h1>
                              <h3 className="text-white font-bold text-[50px] mb-[15px]"><span className="text-green-700">Coffee</span> is <span className="text-[#A57939]">Important</span> to Help <span className="text-green-700">Relax</span> the <span className="text-[#A57939]">Brain</span></h3>
                              <p className="text-white font-light mb-[15px]">Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Varius quam quisque id diam vel quam. In cursus turpis massa tincidunt. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Metus vulputate eu scelerisque felis imperdiet. Sit amet massa vitae tortor condimentum lacinia quis vel eros.</p>
                              <di className="w-[150px] h-[45px] bg-black border-green-800 border-[1px] rounded-[5px] drop-shadow-[0_0_35px_rgba(13,88,16.25)] flex text-center text-green-700 justify-between items-center font-normal text-[10px] pl-[13px] pr-[15px] cursor-pointer">
                                   <p className="text-[12px]">Discovery Menu</p>
                                   <img src="asset/arrowmenu.svg" alt="" className="w-[17px]"/>
                              </di>
                         </div>
                    </div>
                    {/* About */}

                    {/* Customer Services */}
                    <div className="pl-[70px] pr-[70px] text-white mt-[100px] flex justify-between">
                         <div className="w-[500px] h-[300px]">
                              <h1 className="text-[#A57939] text-[18px] font-bold mb-[15px]">WHAT THAT SAY</h1>
                              <h3 className="text-[45px] font-bold"><span className="text-[#A57939]">What</span> our Customer say <span className="text-green-700">About Us</span></h3>
                              <img src="asset/arrowriview.svg" alt="Arrow" className="ml-[90px] mt-[-40px]" />
                              <p className="font-light text-[16px] mt-[20px]">Scelerisque felis imperdiet proin fermentum. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Diam donec adipiscing tristique risus nec feugiat in fermentum. Cursus in hac habitasse platea dictumst quisque sagittis. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.  </p>

                              <div className="flex justify-start items-center w-[400px] mt-[20px]">
                                   <img src="asset/Smile.svg" alt="" className="w-[80px]"/>
                                   <div className="text-white ml-[20px]">
                                        <h1 className="mt-[-5px]">Firgi Maung Dom Coffee</h1>
                                        <h3 className="mt-[7px] text-[12px] font-light">Coffee Shop Owner & Food Vloger</h3>
                                        <div className="flex justify-start items-center mt-[7px]">
                                             <img src="asset/starrev.svg" alt="Rating" className="w-[100px]"/>
                                             <p className="pl-[5px] text-[10px]">( 4.3 )</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="flex justify-center items-center">
                              <img src="asset/Humansally.svg" alt="Sally" className="w-[600px] mt-[-70px]"/>
                              <div className="w-[140px] h-[85px] bg-white rounded-[5px] pl-[10px] pt-[10px] ml-[-200px]">
                                   <p className="font-bold black text-black text-[15px]">Our Riview</p>
                                   <div className="flex justify-start items-center pt-[5px]">
                                        <img src="asset/phoriv.svg" alt="People" className="w-[90px]"/>
                                        <div className="flex rounded-[100px] bg-green-700 w-[35px] h-[35px] items-center justify-center text-[11px] ml-[-15px]">
                                             <p>6.2B</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    {/* Customer Services */}

                    {/* Card Benefit */}
                    <div className="pl-[70px] pr-[70px] text-white flex justify-center items-center text-center mt-[80px]">
                         <div className="w-[400px]">
                              <h1 className="text-[20px] font-semibold text-[#A57939]">WHAT WE SERVE</h1>
                              <h3 className="text-[30px] font-bold pt-[10px]">Your Favorite Coffee Delivery Partner</h3>     
                         </div>
                    </div>

                    <div className="pl-[70px] pr-[70px] flex justify-center items-center justify-items-center mt-[30px] gap-[100px]">
                    <div className="w-[300px]">
                         <div className="bg-gradient-to-tl from-[#A57939] to-black rounded-[10px] w-[300px] h-[310px] flex items-center flex-col pt-[20px] pr-[20px] pl-[20px]">
                         <img src="asset/fastdev.svg" alt="Fast Delivery" className="w-[180px] item-center"/>
                              <div className="text-center text-white">
                                   <h1 className="font-bold text-[20px] mb-[5px]">Fast Delivery</h1>
                                   <h3 className="text-[17px] font-light pt-[10px] w-[200px]">ou only a few steps in <span className="text-green-800 font-semibold">Ordering Drink</span></h3>
                              </div>
                         </div>
                    </div>

                    <div className="w-[300px]">
                         <div className="bg-gradient-to-tl from-[#A57939] to-black rounded-[10px] w-[300px] h-[310px] flex items-center flex-col pt-[20px] pr-[20px] pl-[20px]">
                         <img src="asset/bestqua.svg" alt="Best Quality" className="w-[180px] item-center"/>
                              <div className="text-center text-white">
                                   <h1 className="font-bold text-[20px] mb-[5px]">Best Quality</h1>
                                   <h3 className="text-[16px] font-light pt-[10px]">Not only fast for us quality is also <span className="text-green-800 font-semibold">Number One</span></h3>
                              </div>
                         </div>
                    </div>

                    <div className="w-[300px]">
                         <div className="bg-gradient-to-tl from-[#A57939] to-black rounded-[10px] w-[300px] h-[310px] flex items-center flex-col pt-[20px] pr-[20px] pl-[20px]">
                         <img src="asset/ezorder.svg" alt="Easy Order" className="w-[180px] item-center"/>
                              <div className="text-center text-white">
                                   <h1 className="font-bold text-[20px] mb-[5px]">Easy Order</h1>
                                   <h3 className="text-[16px] font-light pt-[10px]">Delivery that is always <span className="text-green-800 font-semibold">Antime</span> even <span className="text-green-800 font-semibold">Faster</span></h3>
                              </div>
                         </div>
                    </div>
                    </div>
                    {/* Card Benefit */}

                    {/* Subscribe */}
                    <div className="pl-[70px] pr-[70px] pt-[100px] flex justify-start item-center text-white">
                         <img src="asset/pumkin.svg" alt="Pumkin" className="w-[500px]"/>
                         <div className="pt-[90px] pl-[40px]">
                              <h1 className="text-[50px] font-bold"><span className="text-green-800">Subscribe</span> For Get Update Every <span className="text-[#A57939]">New Offers</span></h1>
                              <h3 className="pt-[10px] font-light">Scelerisque felis imperdiet proin fermentum. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Diam donec adipiscing tristique risus nec feugiat in fermentum. Cursus in hac habitasse platea dictumst quisque sagittis. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Cursus in hac habitasse platea dictumst quisque sagittis. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Cursus in hac habitasse platea dictumst quisque sagittis. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. </h3>
                              {/* Search Menu */}
                              <div className="rounded-full w-[405px] h-[42px] flex mt-[12px]">
                                   <input type="text" className="w-[300px] h-[35px] pl-[15px] rounded-full text-[11px] font-light text-black bg-white border-[1px] border-white" placeholder="Your Email..."/>
                                   <button className="text-[11px] bg-green-800 w-[100px] h-[30px] rounded-[100px] mt-[2px] ml-[-102px]">SUBSCRIBE</button>
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
                                        <img src="./asset/Search.svg" alt="Search" className="w-[26px] ml-[-31px]"/>
                                   </div>
                              </div>
                         </div>
                    </div>
                    {/* Content Closed */}
          </>       
     );
};

export default Home;

