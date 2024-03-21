import { useState } from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import CustomError from '../errors/CustomError';

import { Typography, Input, Button } from '@material-tailwind/react';

import backgroundImage from '../../assets/flix-illustration.png';

export function SignIn() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { login, error } = useAuth();
  const navigate = useNavigate();

  const handleLoginAttempt = async (e) => {
    e.preventDefault();
    const response = await login(userName, password);
    if (response && response.data) {
      navigate('/your-spaces');
    }
  };

  return (
    <section className="flex flex-col md:flex-row justify-between md:justify-between  w-full min-h-screen">
      <div className="flex flex-1 justify-between items-top p-2 sm:p-4 md:p-8 xl:px-globalPadding xl:py-24">
        <div className="w-full max-w-[800px]">
          <Typography variant="h3" color="white" className="mb-2">
            Sign In
          </Typography>
          <Typography color="gray" className="mb-16 font-normal">
            Enter your email and password to sign in
          </Typography>
          <form onSubmit={handleLoginAttempt} className="text-left">
            <div className="mb-6">
              <label htmlFor="username">
                <Typography variant="small" className="mb-2 block font-medium text-white">
                  Username
                </Typography>
              </label>
              <Input
                id="username"
                color="white"
                size="lg"
                type="text"
                name="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Username*"
                className="focus:!border-t-gray-900"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password">
                <Typography variant="small" className="mb-2 block font-medium text-white">
                  Password
                </Typography>
              </label>
              <Input
                id="password"
                color="white"
                size="lg"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password*"
                className="focus:!border-t-gray-900"
                required
              />
            </div>
            <Button color="gray" size="lg" className="mb-6" type="submit" fullWidth>
              Sign In
            </Button>
            {error && <CustomError errorMessage={error} />}
            <Typography as="a" href="#" color="gray" className="font-medium">
              Forgot password
            </Typography>
          </form>
          <Typography color="gray" className="mt-4 font-normal">
            Not registered?{' '}
            <a href="/register" className="font-medium text-gray-900">
              Create account
            </a>
          </Typography>
        </div>
      </div>
      <div className="flex-2 hidden md:block">
        <img
          src={backgroundImage}
          alt="background image"
          className=" object-cover"
        />
      </div>
    </section>
  );
}

export default SignIn;