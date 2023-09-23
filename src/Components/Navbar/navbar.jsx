import {useState} from "react"
import {CgMenuHotdog} from "react-icons/cg"
import {AiOutlineSearch,AiOutlineClose} from "react-icons/ai"
import {HiShoppingCart} from "react-icons/hi"
import {GiFoodTruck,GiWallet} from "react-icons/gi"
import {BsEmojiHeartEyesFill,BsFillSave2Fill,BsFillTagsFill} from "react-icons/bs"
import {FaUserFriends} from "react-icons/fa"
import {MdOutlineLiveHelp} from "react-icons/md"

export default function NavBar(){
       const [Nav,SetNav]=useState(false);
    return(
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
            <div className="flex items-center">
                <div onClick={() => SetNav(!Nav)} className="cursor-pointer">
                    <CgMenuHotdog size="30px"/>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2  ">
                    Daily
                    <span className="font-bold">Eats</span>
                </h1>
                <div className="hidden lg:flex items-center bg-gray-300 rounded-full p-1  text-[14px]">
                    <p className="bg-black text-white rounded-full p-2">Delivery</p>
                    <p className="p-2">Pickup</p>
                </div>
            </div>

            {/*Search Input*/}

            <div className="bg-gray-300 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
               <AiOutlineSearch size="20px"/>
                <input type="text" placeholder="Satisfy your tummy here"  className="bg-transparent p-2 focus:outline-none"/>
            </div>
            {/*Cart Button*/}

            <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
                <HiShoppingCart size="20px" className="mr-2"/>
                Cart
            </button>
            {/*Mobile Menu*/}
            {/*Overlay*/}
            {Nav ? <div className="bg-gray-800/80 fixed w-full h-screen z-10 top-0 left-0">

            </div> : ""}

            {/*hamburger Menu*/}
            <div className={Nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
                : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-1000 delay-100" }
               >
                <AiOutlineClose size="30px" className="absolute right-0 top-4 cursor-pointer"
                onClick={()=>SetNav(!Nav)} />
                <h2 className="text-2xl p-4 ">
                    Daily
                    <span className="font-bold">Eats</span>
                    <nav>
                        <ul className="flex flex-col p-4 text-gray-800">
                            <li className="text-xl py-4 flex">
                                <GiFoodTruck size={25} className='mr-4'/>
                                Orders
                            </li>
                            <li className="text-xl py-4 flex">
                                <BsEmojiHeartEyesFill size={25} className='mr-4'/>
                                Favorites
                            </li>
                            <li className="text-xl py-4 flex">
                                <GiWallet size={25} className='mr-4'/>
                                Wallet
                            </li>
                            <li className="text-xl py-4 flex">
                                <BsFillSave2Fill size={25} className='mr-4'/>
                              Best Ones
                            </li>
                            <li className="text-xl py-4 flex">
                                <BsFillTagsFill size={25} className='mr-4'/>
                               Promotions
                            </li>
                            <li className="text-xl py-4 flex">
                                <FaUserFriends size={25} className='mr-4'/>
                                 Invite Friends
                            </li>
                            <li className="text-xl py-4 flex">
                                <MdOutlineLiveHelp size={25} className='mr-4'/>
                                Help
                            </li>
                        </ul>
                    </nav>
                </h2>
            </div>
        </div>
    );
}