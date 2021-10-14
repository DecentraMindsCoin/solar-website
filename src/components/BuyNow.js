function BuyNow() {
    return (
            <div className='relative'>    <img className='my-auto w-full h-96 lg:h-screen object-cover overflow-hidden' src="/panels-13.png" alt="solar sunset"/>
                      <div className="lg:h-full bg-transparent text-black  mx-auto flex flex-row  justify-center items-center ">
                      
        <div className='absolute my-auto bottom-1/3 lg:bottom-1/2 mx-4'>
        <h1 id='header__title' className="tracking-widest font-semibold text-white text-2xl md:text-4xl lg:text-6xl py-3 w-full text-center middle-0">Simplify The Process.</h1>
            <p className='md:text-xl lg:text-2xl text-white font-semibold mx-5'>We’ll guide you through the process, every step of the way.</p>
            <a href='/contact'>
                <button  className='bg-gray-100 uppercase mt-10 w-full ring-4 ring-gray-800 rounded-2xl py-2 font-light text-sm hover:bg-gray-900 hover:text-white transition ease-in duration-200'>Lets Go Solar</button>
            </a>
           
        </div>
           
        </div>  
            </div>

    )
}

export default BuyNow
