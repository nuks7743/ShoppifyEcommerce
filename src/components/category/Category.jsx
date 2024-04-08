import { useNavigate } from "react-router";

// category 
const category = [
    {
        image: 'https://r2.easyimg.io/uzr62xhmy/99.png',
        name: 'fashion'
    },
    {
        image: 'https://r2.easyimg.io/d88wgj85w/t_shirt.png',
        name: 'shirt'
    },
    {
        image: 'https://r2.easyimg.io/nba1tff8m/jacket.png',
        name: 'jacket'
    },
    {
        image: 'https://r2.easyimg.io/kya8zt6j6/mobile_category.png',
        name: 'mobile'
    },
    {
        image: 'https://r2.easyimg.io/87nhvd1j5/laptop_category.png',
        name: 'laptop'
    },
    {
        image: 'https://r2.easyimg.io/71s54csc3/footwear_category.png',
        name: 'shoes'
    },
    {
        image: 'https://r2.easyimg.io/bqxwjal3u/home.png',
        name: 'home'
    },
    {
        image: 'https://r2.easyimg.io/z5isnpi7n/books.png',
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