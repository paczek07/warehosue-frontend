import React from 'react'
import { useDispatch } from "react-redux";
import { loginActions } from '../store/login-slice';

const Login = () => {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginActions.logIn())
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className='text-xl font-bold tracking-widest text-main_purple'>WAREHOUSE</h1>
            <div className='flex flex-col justify-center h-60'>
                <form onSubmit={handleSubmit} >
                    <div className='grid grid-cols-1'>
                        <div className='grid grid-cols-1 gap-7 mb-2' >
                            <input type="text" name="username" id="username" placeholder="Username" className='rounded-sm text-center bg-grey_accent' />
                            <input type="password" name="psw" id="psw" placeholder="Password" className='rounded-sm text-center bg-grey_accent' />
                        </div>
                        <div className='mb-5'>
                            <input type="radio" id="remember-me" name="remember-me" />
                            <label for="remember-me" className='ml-1 font-extralight text-sm tracking-wide' >Remember me</label>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center ">
                        <button className="rounded-sm w-40 py-1 tracking-widest font-light bg-main_purple text-grey_accent" type="submit">
                            Login
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}
export default Login