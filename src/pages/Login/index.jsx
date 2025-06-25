import React from 'react';
import img from '../../assets/images/LoginLogo.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen  flex items-center justify-center px-4 py-2">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full max-w-6xl">
        {/* Logo */}
        <div className="w-[200px] h-[200px] sm:w-[348px] sm:h-[348px] rounded-full overflow-hidden flex-shrink-0">
          <img src={img} alt="Logo" className="w-full h-full object-contain" />
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-[10px] p-6 sm:p-10 w-full max-w-xl shadow-md">
          <h6 className="font-urbanist font-semibold text-[20px] lg:text-[24px] text-primary mb-5">
            Welcome Back
          </h6>

          <form className="space-y-5">
            <div>
              <label className="block font-open-sans font-normal text-[14px] text-secondary mb-1">
                User Name
              </label>
              <input
                type="text"
                placeholder="hannah.green@test.com"
                className="w-full border border-[#EAEAEA] bg-[#FAFAFA] px-3 py-4 rounded-[5px] placeholder:text-[#828282] font-open-sans text-[16px]  focus:outline-none focus:border-[#153060] focus:ring-1 focus:ring-[#153060]"
              />
            </div>

            <div>
              <label className="block font-open-sans font-normal text-[14px] text-secondary mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Password123@"
                className="w-full border border-[#EAEAEA] bg-[#FAFAFA] px-3 py-4 rounded-[5px] placeholder:text-[#828282] font-open-sans text-[16px] focus:outline-none focus:border-[#153060] focus:ring-1 focus:ring-[#153060]"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
              <label className="flex items-center gap-2 font-open-sans text-[14px] text-secondary">
                <input type="checkbox" />
                Remember me on this computer
              </label>
              <p className="font-open-sans text-[14px] text-secondary cursor-pointer">
                Forgot Password?
              </p>
            </div>

            <div>
              <button onClick={handleLogin} className="bg-secondary w-full rounded-[5px] py-3 font-open-sans font-semibold text-[16px] text-white leading-[24px] tracking-[0.15px] uppercase text-center">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
