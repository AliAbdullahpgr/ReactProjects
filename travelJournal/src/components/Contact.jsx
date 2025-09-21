import React from 'react';

const Contact = () => {
    
    return (
        <div className='w-64 h-72 border-2 border-solid border-gray-400 rounded-lg overflow-hidden m-10 bg-white'>
            <img src="/assets/cat.jpg" alt="cat image" 
            className='w-full h-[60%] object-cover object-[0%_15%] '/>
            <div className='p-2'>
                <h3>Mr. Whiskerson</h3>
                <div className='pt-2 flex flex-col gap-1'>
                    <p>📞 03238003676</p>
                    <p>✉️ ailabdullah@gmail.com</p>
                </div>
            </div>
        </div>
    )
}
export default Contact;