/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading  */}
                    <h1 className=' text-center text-3xl font-bold text-black' >Founder</h1>
                    {/* para  */}
                    <h2 className=' text-center text-2xl font-semibold mb-10' >What our <span className=' text-red-600'>Founder's</span> Profile</h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://r2.easyimg.io/zm9hvni1f/photo1.png" />
                                <p className="leading-relaxed">Hello, I am Nakul Patil, A Passionate Software Developer. Armed With A MCA In Computer Applications, I Specialize In Java, ReactJS, AngularJS, Python, JavaScript, C.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-bold title-font tracking-wider text-sm uppercase">Nakul Prakash Patil</h2>
                                <p className="text-gray-500">Full Stack Developer</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://r2.easyimg.io/mmx6z8zke/1.png" />
                                <p className="leading-relaxed">Hello, I am Sneha Patil, A Passionate Software Developer. Armed With A MCA In Computer Applications, I Specialize In HTML, CSS, Java, Python, JavaScript.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-bold title-font tracking-wider text-sm uppercase">SNEHA SUDHAKAR PATIL</h2>
                                <p className="text-gray-500">Front-End Develeoper</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="" />
                                <p className="leading-relaxed">Hello, I am Sanket Gopal Patil, A Passionate Software Developer. Armed With A MCA In Computer Applications, I Specialize In HTML, CSS, Python, DBMS.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-bold title-font tracking-wider text-sm uppercase">Sanket Gopal Patil</h2>
                                <p className="text-gray-500">Front-End Develeoper</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial