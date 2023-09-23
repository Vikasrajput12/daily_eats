/*eslint-disable*/
import {data} from "../../Data/data.js"
import {useState} from "react"
export default function Food(){
    const [foods,Setfoods] = useState(data);
    {/*Filter type function*/}
    const filterType = (category) =>{
        Setfoods(
        data.filter((item) => {
            return(item.category === category);
        }))
    };
    {/*Filter Function to filter by Price*/}
    const filterPrice = (price) => {
        Setfoods(
            data.filter((item) => {
               if( item.price<=price)
                   return (item);

            })
        )
    }

    return(
        <div className="max-w-[1640px] m-auto px-4 py-12 ">
            <h1 className="text-orange-400 font-bold text-4xl text-center">Top Rated Menu Items</h1>
            {/*Filter Row*/}
            <div className="flex flex-col lg:flex-row justify-between">
                {/*Filter Type*/}
                <div>
                    <p className="font-bold text-gray-700">Filter Type</p>
                    <div className="flex justify-between flex-wrap">
                        <button className="m-1 border-gray-800 border-2 text-black hover:bg-blue-500 hover:text-white
                        hover:font-bold" onClick={()=> Setfoods(data)}>
                            All
                        </button>
                        <button className="m-1 border-gray-800 border-2 text-black hover:bg-blue-500 hover:text-white
                        hover:font-bold" onClick={()=> filterType('burger')}>
                            Burgers
                        </button>
                        <button className="m-1 border-gray-800 border-2 text-black hover:bg-blue-500 hover:text-white
                        hover:font-bold" onClick={() => filterType('pizza')}>
                            Pizza
                        </button>
                        <button className="m-1 border-gray-800 border-2 text-black hover:bg-blue-500 hover:text-white
                        hover:font-bold"  onClick={() => filterType('sabzi')}>
                            Sabzi
                        </button>
                        <button className="m-1 border-gray-800 border-2 text-black hover:bg-blue-500 hover:text-white
                        hover:font-bold"  onClick={() => filterType('chicken')}>
                            Chicken
                        </button>
                    </div>
                </div>
                {/*Filter Price*/}
                <div>
                    <p className="font-bold text-gray-700">Filter Price</p>
                    <div className="flex justify-between max-w-[400px] w-full">
                        <button className="m-1 border-gray-800 border-2 text-black hover:bg-blue-400 hover:text-white
                         hover:font-bold" onClick={() => filterPrice(100)}>
                            ₹100
                        </button>
                        <button className="m-1 border-gray-800 border-2 text-black hover:bg-blue-400 hover:text-white
                        hover:font-bold" onClick={() => filterPrice(200)}>
                            ₹200
                        </button>
                        <button className="m-1 border-gray-800 border-2 text-black hover:bg-blue-400 hover:text-white
                        hover:font-bold" onClick={() => filterPrice(250)}>
                            ₹250
                        </button>
                        <button className="m-1 border-gray-800 border-2 text-black hover:bg-blue-400 hover:text-white
                        hover:font-bold" onClick={() => filterPrice(300)}>
                            ₹300
                        </button>
                    </div>
                </div>
            </div>
            {/*Display Food Menu*/}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                {foods.map((item,index) => (
                    <div key={index} className="border shadow-lg hover:scale-105 duration-300 rounded-lg">
                        <img src={item.image} alt={item.name}
                          className="w-full h-[200px] object-cover rounded-t-lg"
                        />
                        <div className="flex justify-between px-2 py-4">
                            <p className="font-bold">{item.name}</p>
                            <p>
                                <span className="bg-gray-800 text-orange-300 p-1 rounded-full font-semibold
                                      cursor-pointer">
                                      {`₹${item.price}`}
                               </span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}