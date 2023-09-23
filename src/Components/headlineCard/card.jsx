export default function Card(){
    return(
        <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 ">
            {/*Card*/}
            <div className="rounded-xl relative w-[350px]">
                {/*Overlay*/}
                <div className="absolute w-full h-full  bg-black/50 rounded-xl text-white">
                  <p className="text-2xl font-bold px-2 pt-2">Sun's Out, BOGO Out</p>
                  <p className="px-2 ">Through 10/26</p>
                  <button className="border-white bg-white mx-2 absolute bottom-4 text-black">Order Now</button>
                </div>
                <img
                    className="max-h-[1640px] md:max-h-[200px] w-full  rounded-xl"
                    src="https://www.whiskaffair.com/wp-content/uploads/2021/02/Dry-Fruit-Raita-2-1.jpg"
                    alt="/">

                </img>
            </div>

            <div className="rounded-xl relative w-[350px]">
                {/*Overlay*/}
                <div className="absolute w-full h-full  bg-black/50 rounded-xl text-white">
                    <p className="text-2xl font-bold px-2 pt-2">New Restaurants</p>
                    <p className="px-2 ">Added Daily</p>
                    <button className="border-white bg-white mx-2 absolute bottom-4 text-black">Order Now</button>
                </div>
                <img
                    className="max-h-[1640px] md:max-h-[200px] w-full object-fit rounded-xl"
                    src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt="/">

                </img>
            </div>

            <div className="rounded-xl relative w-[350px]">
                {/*Overlay*/}
                <div className="absolute w-full h-full  bg-black/50 rounded-xl text-white">
                    <p className="text-2xl font-bold px-2 pt-2">Order for Special Occasion</p>
                    <p className="px-2 ">Also</p>
                    <button className="border-white bg-white mx-2 absolute bottom-4 text-black">Order Now</button>
                </div>
                <img
                    className="max-h-[1640px] md:max-h-[200px] w-full object-fit rounded-xl"
                    src="https://media.istockphoto.com/photos/shahi-paneer-or-paneer-kadai-picture-id1305516603?k=20&m=1305516603&s=612x612&w=0&h=9z7YhLKh9CflB1tervIRpx_u06Ybfttf_8zfCqV1C9w="
                    alt="/">
                </img>
            </div>
        </div>
    );
}