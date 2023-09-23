export default function Hero(){
    return(
        <div className="max-w-[1640px] mx-auto p-4">
            <div className="mx-h-[500px] relative">
                <div className="absolute w-full h-full text-gray-200 mx-h-[500px] bg-black/40 flex flex-col justify-center">
                    {/*Overlay*/}
                    <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold">Enjoy 
                     <span className="text-yellow-600"> your</span>
                    </h1>
                    <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold">
                        <span className="text-yellow-600">Daily </span>
                         Foods
                    </h1>
                </div>
                <img src="https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                     alt="/"
                     className="w-full max-h-[700px] object-fit"
                />
            </div>
        </div>

    );
}