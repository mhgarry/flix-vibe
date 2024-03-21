import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomError from '../errors/CustomError';
import { Typography, Input, Button } from '@material-tailwind/react';
import { useAuth } from '../AuthContext';
import { useRegisterMutation } from '../../hooks/useRegisterMutation';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const { register } = useAuth();
  const { registerUser, loading, error } = useRegisterMutation();
  const navigate = useNavigate();
  const handleRegistrationAttempt = async (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      alert('Passwords do not match.')
      return;
    }
     const response = await register(username, email, password, registerUser);
    if (response && response.data) {
      navigate('/your-spaces');
  }
  }

  // const handleRegisterAttempt = async (e) => {
  //   e.preventDefault();
  //   const response = await register(username, email, password, registerUser);
  //   if (response && response.data) {
  //     navigate('/your-spaces');
  //   }
  // };

  return (
    <section className="flex flex-col md:flex-row justify-between md:justify-between w-full min-h-screen">
      <div className="flex flex-1 justify-between items-top p-2 sm:p-4 md:p-8 xl:px-globalPadding xl:py-24">
        <div className="w-full max-w-[800px]">
          <Typography variant="h3" color="white" className="mb-2">
            Register
          </Typography>
          <Typography className="mb-16 font-normal text-dark-gray">
            Create your account
          </Typography>
          <form onSubmit={handleRegistrationAttempt} className="text-left">
            <div className="mb-6">
                <div className="mb-6">
              <label htmlFor="username">
                <Typography variant="small" className="mb-2 block font-medium text-white">
                  Username
                </Typography>
              </label>
              </div>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username*"
                required
                className="text-white"
              />
            </div>
               <div className="mb-6">
              <label htmlFor="username">
                <Typography variant="small" className="mb-2 block font-medium text-white">
                  Email
                </Typography>
              </label>
              </div>
            <div className="mb-6">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email*"
                required
                className="text-white"
              />
            </div>
               <div className="mb-6">
              <label htmlFor="username">
                <Typography variant="small" className="mb-2 block font-medium text-white">
                  Password
                </Typography>
              </label>
              </div>
            <div className="mb-6">
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password*"
                required
                className="text-white"
              />
            </div>
             <div className="mb-6">
        <label htmlFor="repeatPassword">
          <Typography variant="small" className="mb-2 block font-medium text-white">
            Repeat Password
          </Typography>
        </label>
        <Input
          id="repeatPassword"
          type="password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          placeholder="Repeat Password*"
          required
          className="focus:!border-t-gray-900 text-white"
        />
      </div>
            <Button type="submit" disabled={loading} color="gray" size="lg" className="mb-6" fullWidth>
              Register
            </Button>
            {error && <CustomError errorMessage={error.message} />}
          </form>
          <Typography color="gray" className="mt-4 font-normal text-dark-gray">
            Already have an account?{' '}
            <a href="/login" className="font-medium text-white">
              Sign in
            </a>
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;