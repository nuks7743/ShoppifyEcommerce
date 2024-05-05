import { useNavigate } from "react-router";

// category 
const category = [
    {
        image: 'https://i.ibb.co/kMqYJr3/Fasion.png',
        name: 'fashion'
    },
    {
        image: 'https://i.ibb.co/CVMR2c2/shirt.png',
        name: 'shirt'
    },
    {
        image: 'https://i.ibb.co/WDWy9pT/jacket.png',
        name: 'jacket'
    },
    {
        image: 'https://i.ibb.co/rmM5m33/mobile.png',
        name: 'mobile'
    },
    {
        image: 'https://i.ibb.co/WPL2f6D/lap.png',
        name: 'laptop'
    },
    {
        image: 'https://i.ibb.co/F4HPMLJ/shoes.png',
        name: 'shoes'
    },
    {
        image: 'https://i.ibb.co/DKb2yx4/home.png',
        name: 'home'
    },
    {
        image: 'https://i.ibb.co/yBzmxv0/books.png',
        name: 'books'
    }
]

const Category = () => {
    // naviaget 
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-col mt-5">
                {/* main 1 */}
                <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
                    {/* main 2  */}
                    <div className="flex ">
                        {/* category  */}
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-3 lg:px-10">
                                    {/* Image  */}
                                    <div onClick={() => navigate(`/category/${item.name}`)} className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-white-500 transition-all hover:bg-blue-400 cursor-pointer mb-1 " >
                                        <div className="flex justify-center mb-12">
                                            {/* Image tag  */}
                                            <img src={item.image} alt="img" />
                                        </div>
                                    </div>

                                    {/* Name Text  */}
                                    <h1 className=' text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase '>{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* style  */}
            <style dangerouslySetInnerHTML={{ __html: "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n" }} />
        </div>
    );
}

export default Category;
