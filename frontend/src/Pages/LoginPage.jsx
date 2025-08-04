/* eslint-disable no-unused-vars */
import { Mail, Lock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const fadeInFromRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
};

const LoginPage = () => {
  const [selectedInput, setSelectedInput] = useState("");
  return (
    <>
      <motion.div
        className="flex mx-auto px-50 gap-10 justify-between items-center h-screen w-screen"
        {...fadeIn}
      >
        <motion.div
          className="bg-[#f8f8f8] px-20 py-10 h-[700px] rounded-4xl w-[550px] flex flex-col"
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.1 }}
        >
          <motion.div
            className="flex flex-col gap-7"
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
          >
            <motion.h1
              className="text-2xl font-['Poppins'] font-thin"
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.3 }}
            >
              EmailProvider
            </motion.h1>
            <motion.div
              className="flex gap-2 flex-col"
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.4 }}
            >
              <span className="text-4xl font-['Manrope'] font-medium">
                Welcome to
              </span>
              <span className="text-4xl font-['Manrope'] font-bold">
                EmailProvider
              </span>
            </motion.div>
            <motion.div
              className="flex flex-col gap-4"
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.5 }}
            >
              <motion.p
                className="text-sm text-[#868686] font-thin"
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.6 }}
              >
                Gaze and attention modeling Powered by AI' is optimizing virtual
                reality experiences
              </motion.p>
              <motion.form
                className="flex flex-col gap-3"
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.7 }}
              >
                <motion.div
                  className="flex w-full bg-white px-7 py-4 rounded-4xl border border-gray-300 focus-within:border-blue-500 transition"
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: 0.8 }}
                >
                  <Mail
                    className={`mr-3 w-8 ${
                      selectedInput === "email" && "text-blue-500"
                    }`}
                  />
                  <div className="h-6 border-r border-gray-300 mr-3" />
                  <input
                    type="text"
                    className="focus:outline-none flex-1"
                    placeholder="Email"
                    onClick={() => setSelectedInput("email")}
                  />
                </motion.div>

                <motion.div
                  className="flex w-full bg-white px-7 py-4 rounded-4xl border border-gray-300 focus-within:border-blue-500 transition"
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: 0.9 }}
                >
                  <Lock
                    className={`mr-3 w-8 ${
                      selectedInput === "password" && "text-blue-500"
                    }`}
                  />
                  <div className="h-6 border-r border-gray-300 mr-3" />
                  <input
                    type="password"
                    className="focus:outline-none"
                    placeholder="Password"
                    onClick={() => setSelectedInput("password")}
                  />
                </motion.div>
                <motion.button
                  className="w-full my-4 py-3 rounded-4xl bg-[#11add1] text-white font-['Inter'] font-thin"
                  type="submit"
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: 1.0 }}
                >
                  Sign Up
                </motion.button>
                <motion.div
                  className="flex items-center my-0"
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: 1.1 }}
                >
                  <div className="flex-grow h-px bg-gray-300" />
                  <span className="mx-4 text-gray-500 text-sm">or</span>
                  <div className="flex-grow h-px bg-gray-300" />
                </motion.div>
                <motion.button
                  className="flex gap-1 border border-gray-300 items-center justify-center w-full my-4 py-3 rounded-4xl bg-white text-black font-['Inter'] font-medium"
                  type="submit"
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: 1.2 }}
                >
                  <svg
                    className="w-7"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#fbc02d"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#e53935"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4caf50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1565c0"
                      d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                  Sign Un With Google
                </motion.button>
              </motion.form>
              <motion.p
                className="mx-auto font-['Inter'] font-light"
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 1.3 }}
              >
                already have an Account? Sign in{" "}
                <span className="text-blue-500">here</span>
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative w-[550px] h-[700px]"
          {...fadeInFromRight}
          transition={{ ...fadeInFromRight.transition, delay: 0.2 }}
        >
          <motion.img
            className="w-full h-full rounded-4xl object-cover"
            src="/assets/images/rectangle.png"
            alt="Logo"
            {...fadeInFromRight}
            transition={{ ...fadeInFromRight.transition, delay: 0.3 }}
          />
          <motion.div
            className="absolute inset-0 z-10 flex justify-between py-2 px-2 flex-col"
            {...fadeInFromRight}
            transition={{ ...fadeInFromRight.transition, delay: 0.4 }}
          >
            <motion.p
              className="font-['Inter'] text-white text-4xl px-5 py-3 font-light"
              {...fadeInFromRight}
              transition={{ ...fadeInFromRight.transition, delay: 0.5 }}
            >
              AI Revolutionizing the way we create, render, and experience
            </motion.p>
            <motion.div
              className="flex flex-col justify-between bg-gray-400/50 h-[180px] backdrop-blur p-6 rounded-4xl text-center"
              {...fadeInFromRight}
              transition={{ ...fadeInFromRight.transition, delay: 0.6 }}
            >
              <motion.div
                className="flex relative justify-between"
                {...fadeInFromRight}
                transition={{ ...fadeInFromRight.transition, delay: 0.7 }}
              >
                <motion.div
                  className="w-12 h-12 border border-gray-100 rounded-full"
                  {...fadeInFromRight}
                  transition={{ ...fadeInFromRight.transition, delay: 0.8 }}
                />
                <motion.div
                  className=" flex items-center justify-center text-gray-100 w-40 h-12 left-6 absolute border border-gray-100 rounded-full"
                  {...fadeInFromRight}
                  transition={{ ...fadeInFromRight.transition, delay: 0.9 }}
                >
                  creating
                </motion.div>
                <motion.div
                  className="w-32 h-12 border border-gray-100 rounded-full"
                  {...fadeInFromRight}
                  transition={{ ...fadeInFromRight.transition, delay: 1.0 }}
                >
                  <ArrowRight className="w-12 h-12 text-gray-100" />
                </motion.div>
              </motion.div>
              <motion.div
                className="w-full flex"
                {...fadeInFromRight}
                transition={{ ...fadeInFromRight.transition, delay: 1.1 }}
              >
                <p className="font-['Inter'] text-left font-light text-gray-100">
                  Create design brief with AI voice Command to make awesome 3d
                  images that suits your needs
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default LoginPage;
