import React, { useState } from 'react'
import { Label, TextInput } from 'flowbite-react';
import { AiFillMail } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';
import axios from 'axios';

const Subscribe = () => {
    const [email, setEmail] = useState("");
    const [data, setData] = useState(0);
    const subscribe = async () => {
        const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/subscribe`, { email });
        setData(data.data);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        subscribe();
    }
    return (
        <div className='text-white p-2 mt-20 py-12 w-full bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-blue-500 via-white to-blue-500'>
            <div className='w-full text-center pb-4'>
                <p className='font-bold text-2xl'>Subscribe to our Newsletter</p>
                <p className='text-md font-sm'>Stay connected with us to never miss out on our latest blogs, programs, services, and more!</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mx-auto flex items-center gap-x-2 justify-center pt-4">
                    <AiFillMail className='bg-white text-blue-500 rounded-xl w-9 h-9 p-2' />
                    <TextInput
                        onChange={(e) => { setEmail(e.target.value) }}
                        placeholder="user@gmail.com"
                        required
                        type="email"
                    />
                    <button type='submit'><TiTick className='bg-white text-blue-500 rounded-xl w-9 h-9 p-2 hover:bg-blue-500 hover:text-white' /></button>
                </div>
            </form>
            {
                    data
                    ?
                    <p className='text-white text-center pt-1 text-sm'>{data.msg}.</p>
                    :
                    <></>
                }
        </div>
    )
}

export default Subscribe
