import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";


const Login = () => {
    const [input, setInput] = useState('')
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()


    const handleInputChange = (e) => setInput(e.target.value)

    const isError = input === ''

    const [inputPass, setInputPass] = useState('')

    const handleInputChangePass = (e) => setInputPass(e.target.value)

    const isErrorP = inputPass === ''

    const handleSubmit = e => {
        e.preventDefault()
        console.log(input, inputPass);
        signIn(input, inputPass)
        .then(res => {
            const user = res.user;
            console.log(user);
            toast.success('Successfully Sign In!')
            navigate('/dashboard')
        })
    }




    return (
        <div className="flex justify-center items-center min-w-full my-36">
            <div className="flex flex-col max-w-full p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign In</h1>
                    <p className="text-sm dark:text-gray-400">Sign in to access your account</p>
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
                                       Type your password properly
                                    </FormHelperText>
                                ) : (
                                    <FormErrorMessage className="text-red-700">Password is required.</FormErrorMessage>
                                )}
                            </FormControl>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Sign in</button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-400">Do not have an account?
                            <Link to='/register' className="hover:underline dark:text-violet-400">Sign Up</Link>.
                        </p>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Login;