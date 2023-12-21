import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import toast from "react-hot-toast";


const Register = () => {

    const navigate = useNavigate()

    const { createUser, signInWithGoogle } = useContext(AuthContext)

    const [input, setInput] = useState('')

    const handleInputChange = (e) => setInput(e.target.value)

    const isError = input === ''

    const [inputPass, setInputPass] = useState('')

    const handleInputChangePass = (e) => setInputPass(e.target.value)

    const isErrorP = inputPass === ''

    const handleSubmit = e => {
        e.preventDefault()
        console.log(input, inputPass);
        createUser(input, inputPass)
            .then(res => {
                const newUser = res.user;
                console.log(newUser);
                toast.success('Successfully Sign Up!')
                navigate('/dashboard')
            })
    }

    const handleGoogleLogin = e => {
        e.preventDefault();
        signInWithGoogle()
            .then(res => {
                const newUser = res.user;
                console.log(newUser);
                toast.success('Successfully Sign In!')
                navigate('/dashboard')
            });
    };




    return (
        <div className="flex justify-center items-center min-w-full my-20">
            <div className="flex flex-col max-w-full p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
                    <p className="text-sm dark:text-gray-400">Sign up to access your account</p>
                </div>
                <form onSubmit={handleSubmit} action="" className="space-y-12">
                    <div className="space-y-4 min-w-96">
                        <div>
                            <FormControl isInvalid={isError}>
                                <FormLabel>Your Email</FormLabel>
                                <Input type='email' name="email" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" value={input} onChange={handleInputChange} />
                                {!isError ? (
                                    <FormHelperText>
                                        Type your email properly
                                    </FormHelperText>
                                ) : (
                                    <FormErrorMessage className="text-red-700">Email is required.</FormErrorMessage>
                                )}
                            </FormControl>
                        </div>
                        <div>
                            <FormControl isInvalid={isErrorP}>
                                <FormLabel>Your Password</FormLabel>
                                <Input type='password' name='password' className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" value={inputPass} onChange={handleInputChangePass} />
                                {!isErrorP ? (
                                    <FormHelperText>
                                        Type your email properly
                                    </FormHelperText>
                                ) : (
                                    <FormErrorMessage className="text-red-700">Password is required.</FormErrorMessage>
                                )}
                            </FormControl>
                        </div>
                        <button onClick={handleGoogleLogin} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri dark:border-gray-400 focus:ri">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                            <p>Login with Google</p>
                        </button>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Sign in</button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-400">Already have an account?
                            <Link to='/login' className="hover:underline dark:text-violet-400">Sign In</Link>.
                        </p>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Register;