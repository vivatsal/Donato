import Navbar from "../../Navbar/navbar";
import NewFooter from "../../New Footer/newFooter";

function Signup() {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <div className="h-[87.5%] w-full flex justify-around items-center mb-5">
        <div className="h-[90%] w-[30%] py-[2%] flex flex-col justify-between  items-center border-2 border-black">
          <p className="text-3xl font-bold">Sign Up For Individuals</p>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="outline w-3/4 px-2"
          />
          <input
            type="text"
            placeholder="Enter Your User Name"
            className="outline w-3/4 px-2"
          />
          <input
            type="text"
            placeholder="Enter Your Phone Number"
            className="outline w-3/4 px-2"
          />
          <input
            type="text"
            placeholder="Enter Your Email Address"
            className="outline w-3/4 px-2"
          />
          <input
            type="Password"
            placeholder="Enter Your Password"
            className="outline w-3/4 px-2"
          />
          <input
            type="Password"
            placeholder="Confirm Your Password"
            className="outline w-3/4 px-2"
          />
          <div className="w-3/4 h-[15%] flex flex-col justify-center items-center">
            <button className="w-full h-full rounded-3xl bg-black text-white mb-1">
              Submit
            </button>
            <p className="font-bold text-xl">
              Already Have an Account. Sign In
            </p>
          </div>
        </div>
        <div className="h-[90%] w-[30%] flex flex-col rounded-xl justify-between py-[2%] items-center border-2 border-black">
          <p className="text-3xl font-bold">Sign Up For NGOs</p>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="outline w-3/4 px-2"
          />
          <input
            type="text"
            placeholder="Enter Your User Name"
            className="outline w-3/4 px-2"
          />
          <input
            type="text"
            placeholder="Enter Your Phone Number"
            className="outline w-3/4 px-2"
          />
          <input
            type="text"
            placeholder="Enter Your Email Address"
            className="outline w-3/4 px-2"
          />
          <input
            type="text"
            placeholder="Enter Your Registration Number"
            className="outline w-3/4 px-2"
          />
          <input
            type="Password"
            placeholder="Enter Your Password"
            className="outline w-3/4 px-2"
          />
          <input
            type="Password"
            placeholder="Confirm Your Password"
            className="outline w-3/4 px-2"
          />
          <div className="w-3/4 h-[15%] flex flex-col justify-center items-center">
            <button className="w-full h-full rounded-3xl bg-black text-white mb-1">
              Submit
            </button>
            <p className="font-bold text-xl">
              Already Have an Account. Sign In
            </p>
          </div>
        </div>
      </div>
      <NewFooter />
    </div>
  );
}

export default Signup;
