import Navigationsec from '../component/Navigationsec'
import Footersec from '../component/Footersec'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'
import { faCcPaypal } from '@fortawesome/free-brands-svg-icons'
import { faBitcoin } from '@fortawesome/free-brands-svg-icons'
import { faCcVisa } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'

function Cart() {
  const Alert = () => {
    Swal.fire({
      title: 'Pembayaran Telah Selesai ?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Success',
      denyButtonText: `Wait`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Pembayaran Berhasil', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Pembayaran Belum Selesai', '', 'info')
      }
    })
  }
  return (
    <>
    <div className="w-full h-full bg-black bg-cover">
      <div className="w-full h-full bg-cover bg-no-repeat" style={{ backgroundImage:`url("asset/Circlebg.svg")` }}>
        <Navigationsec />
          <h1 className='text-white text-3xl font-bold pl-[70px] mt-[60px]'>Keranjang Saya ( 2 )</h1>
          {/* Container Utama */}
          <div className='pl-[70px] pr-[70px] mt-[50px] flex justify-between gap-[20px]'>
            {/* Container 1 */}
            <div>
              {/* Menu Pilihan */}
              <div className='w-[720px] h-[560px] bg-transparent border-[1px] border-white rounded-[10px]'>
              <div>
                {/* Card 1 */}
                <div className='flex justify-start text-center items-center pl-[40px] pt-[40px]'>
                  <img src="asset/bgchout.svg" alt="Background" />
                  <img src="asset/Coffee.svg" alt="Coffee" className='ml-[-200px]'/>
                  <div className="bg-transparent flex justify-center text-white gap-1 ml-[-115px] mb-[-180px]">
                    <img src="asset/retingstar.svg" alt="Rating" />
                    <p>4.8</p>
                  </div>

                  <div>
                    <div className='flex justify-between items-center font-bold text-white gap-[200px] pl-[120px] text-[19px] mt-[-20x]'>
                      <h1>Coffe Cappucino</h1>
                      <h1>$65</h1>
                    </div>
                    <div className='flex justify-between items-center font-light text-white gap-[200px] pl-[120px] text-[15px] pt-[10px]'>
                      <h1>Size : Small</h1>
                      <h1>Jumlah : 1</h1>
                    </div>
                    <div className='flex items-start font-light text-white pl-[120px] text-[15px] pt-[10px]'>
                      <p>Variant : Hot</p>
                    </div>
                    <div className='flex items-start font-light text-white pl-[120px] text-[15px] pt-[10px]'>
                      <p>Sugar Level : Less Sugar</p>
                    </div>
                  </div>
                </div>
                {/* Card 1 */}

                {/* Card 2 */}
                <div className='flex justify-start text-center items-center pl-[40px] pt-[40px]'>
                  <img src="asset/bgchout.svg" alt="Background" />
                  <img src="asset/cofwhite.svg" alt="Coffee" className='ml-[-200px]'/>
                  <div className="bg-transparent flex justify-center text-white gap-1 ml-[-115px] mb-[-180px]">
                    <img src="asset/retingstar.svg" alt="Rating" />
                    <p>4.6</p>
                  </div>

                  <div>
                    <div className='flex justify-between items-center font-bold text-white gap-[250px] pl-[120px] text-[19px] mt-[-20x]'>
                      <h1>White Coffe</h1>
                      <h1>$75</h1>
                    </div>
                    <div className='flex justify-between items-center font-light text-white gap-[200px] pl-[120px] text-[15px] pt-[10px]'>
                      <h1>Size : Small</h1>
                      <h1>Jumlah : 1</h1>
                    </div>
                    <div className='flex items-start font-light text-white pl-[120px] text-[15px] pt-[10px]'>
                      <p>Variant : Cold</p>
                    </div>
                    <div className='flex items-start font-light text-white pl-[120px] text-[15px] pt-[10px]'>
                      <p>Sugar Level : Half Sugar</p>
                    </div>
                  </div>
                </div>
                {/* Card 2 */}
              </div>
              </div>
              {/* Menu Pilihan */}

              {/* Information */}
              <div className='w-[720px] h-[440px] bg-transparent border-[1px] border-white rounded-[10px] mt-[20px] pl-[40px] pt-[40px] pr-[40px]'>
                <div className='flex justify-between items-center text-center text-white'>
                    <h1 className='text-2xl'>Information</h1>
                    <button className='rounded-full bg-white w-[170px] h-[25px] text-[11px] font-light text-black  hover:bg-[#dbdbdb] focus:outline-none focus:shadow-outline'>Edit Information</button>
                </div>
                <div className='pt-[50px]'>
                  <p className='text-white font-extralight text-[18px] pt-[15px]'><span className='font-normal'>Name : </span>Example Name</p>
                  <p className='text-white font-extralight text-[18px] pt-[15px]'><span className='font-normal'>Address : </span>Example No.44 RT.11/22 Kota.Example Daerah.Example Ibukota Example 12345</p>
                  <p className='text-white font-extralight text-[18px] pt-[15px]'><span className='font-normal'>Kota : </span>Example Kota</p>
                  <p className='text-white font-extralight text-[18px] pt-[15px]'><span className='font-normal'>Kode Pos : </span>12345</p>
                  <p className='text-white font-extralight text-[18px] pt-[15px]'><span className='font-normal'>No Handphone : </span> (+62) 123-456-789</p>
                  <p className='text-white font-extralight text-[18px] pt-[15px]'><span className='font-normal'>Email : </span>ExampleEmail@gmail.com</p>
                </div>
              </div>
              {/* Information */}
            </div>
            {/* Container 1 */}

            {/* Container 2 */}
            {/* Pembayaran */}
            <div className='w-[523px] h-[1020px] bg-transparent border-[1px] border-white rounded-[10px] pl-[30px] pr-[30px] pt-[30px] text-white'>
              <h1 className='font-bold text-[22px]'>Payment</h1>
              <div className='bg-transparent border-[1px] border-white w-[400px] h-[440px] rounded-[10px] mt-[30px] pl-[30px] pt-[30px] pr-[30px]'>

                {/* Harga */}
                <h1 className='font-bold'>Harga</h1>
                <div className='flex justify-between items-center text-[14px] font-extralight mt-[5px]'>
                  <p>Coffee Cappucino</p>
                  <p>$65</p>
                </div>
                <div className='flex justify-between items-center text-[14px] font-extralight mt-[5px]'>
                  <p>White Coffee</p>
                  <p>$75</p>
                </div>
                {/* Harga */}

                {/* Ongkir */}
                <h1 className='font-bold mt-[20px]'>Ongkir</h1>
                <div className='flex justify-between items-center text-[14px] font-extralight mt-[5px]'>
                  <p>Biaya Ongkir</p>
                  <p>$23</p>
                </div>
                {/* Ongkir */}

                {/* Layanan */}
                <h1 className='font-bold mt-[20px]'>Layanan</h1>
                <div className='flex justify-between items-center text-[14px] font-extralight mt-[5px]'>
                  <p>Biaya Layanan</p>
                  <p>$99</p>
                </div>
                {/* Layanan */}

                {/* Code Promo */}
                <h1 className='font-bold mt-[20px]'>Code Promo</h1>
                <div className='flex justify-between items-center text-[14px] font-extralight mt-[5px]'>
                  <p>Potongan Harga</p>
                  <p>$29</p>
                </div>
                {/* Code Promo */}

                {/* Line */}
                <div className='border-white border-[1px] w-[400] mt-[20px]'> </div>
                {/* Line */}

                {/* Total */}
                <h1 className='font-bold mt-[20px]'>Total</h1>
                <div className='flex justify-between items-center text-[14px] font-extralight mt-[5px]'>
                  <p>Total Biaya Payment</p>
                  <p>$233</p>
                </div>
                {/* Total */}
              </div>

              {/* Button Code Promo */}
              <h1 className='font-bold text-[22px] mt-[20px]'>Code Promo</h1>
              <div className="rounded-full w-[405px] h-[42px] flex mt-[12px]">
                <input type="text" className="w-[400px] h-[35px] pl-[15px] rounded-full text-[11px] font-light text-black bg-white border-[1px] border-white focus:outline-none focus:shadow-outline" placeholder="Your Promo Code..."/>
                <button className="text-[11px] bg-green-800 w-[100px] h-[27px] rounded-[100px] mt-[4px] ml-[-104px] hover:bg-green-700 focus:outline-none focus:shadow-outline">CEK</button>
              </div>
              {/* Button Code Promo */}

              {/* Metode Pembayran */}
              <h1 className='font-bold text-[22px] mt-[20px]'>Metode Pembayran</h1>
              {/* Metode Pembayran */}

              {/* Opsi Pembayaran */}
              <div className='w-[400px] h-[50px] flex items-center text-center'>
                <input id="draft" className="w-[30px]" type="radio" name="status" checked />
                <label for="draft" className="ml-[10px] items-center flex justify-center"><FontAwesomeIcon icon={faCcPaypal} className='text-blue-800 w-[30px] h-[30px] mr-[10px]'/>PayPal</label>
              </div>
              <div className='w-[400px] h-[50px] flex items-center text-center'>
                <input id="draft" className="w-[30px]" type="radio" name="status" checked />
                <label for="draft" className="ml-[10px] items-center flex justify-center"><FontAwesomeIcon icon={faBitcoin} className='text-yellow-500 w-[30px] h-[30px] mr-[10px]'/>Bitcoin</label>
              </div>
              <div className='w-[400px] h-[50px] flex items-center text-center'>
                <input id="draft" className="w-[30px]" type="radio" name="status" checked />
                <label for="draft" className="ml-[10px] items-center flex justify-center"><FontAwesomeIcon icon={faCcVisa} className='text-blue-500 w-[30px] h-[30px] mr-[10px]'/>Visa</label>
              </div>
              <div className='w-[400px] h-[50px] flex items-center text-center'>
                <input id="draft" className="w-[30px]" type="radio" name="status" checked />
                <label for="draft" className="ml-[10px] items-center flex justify-center"><FontAwesomeIcon icon={faMoneyBillWave} className='text-green-800 w-[30px] h-[30px] mr-[10px]'/>Cash On Delivery ( COD )</label>
              </div>
              {/* Note Add */}
              <div className="rounded-full w-[400px] h-[35px] flex mt-[12px]">
                <input type="text" className="w-[400px] h-[35px]pl-[10px] rounded-full text-[11px] font-light text-white bg-transparent border-[1px] border-white pl-[10px]" placeholder="Catatan Tambahan..."/>
                <FontAwesomeIcon icon={faEnvelopeOpenText} className='text-white w-[20px] h-[20px] ml-[-35px] pt-[6px] cursor-pointer hover:text-[#c0c0c0] focus:outline-none focus:shadow-outline' />
              </div>
              {/* Note Add */}

              {/* Bayar */}
              <div className="mt-[20px] text-center flex justify-center items-center">
                <button className="w-[200px] px-4 py-2 text-white bg-green-800 rounded-full hover:bg-green-700 focus:outline-none focus:shadow-outline text-[14px] font-semibold" type="button" onClick={Alert}>BAYAR</button>
              </div>
              {/* Bayar */}
              {/* Opsi Pembayaran */}
            </div>
            {/* Pembayaran */}
            {/* Container 2 */}
          </div>
          {/* Container Utama */}
        <Footersec />
      </div>
    </div>
    </>
  )
}

export default Cart