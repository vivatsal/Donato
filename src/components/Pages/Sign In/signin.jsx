import Navbar from "../../Navbar/navbar";
import NewFooter from "../../New Footer/newFooter";

function SignIn() {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <div className="h-[87.5%] w-full flex justify-around items-center mb-5">
        <div className="h-[60%] w-[30%] py-[2%] flex flex-col rounded-xl justify-between items-center border-2 border-black">
          <p className="text-3xl font-bold">Sign In</p>
          <input
            type="text"
            placeholder="Enter Your User Name / Email Address"
            className="outline w-3/4 px-2"
          />
          <input
            type="Password"
            placeholder="Enter Your Password"
            className="outline w-3/4 px-2"
          />
          <select className="outline w-3/4 text-center">
            <option value="Books">Individual</option>
            <option value="Clothes">NGOs</option>
          </select>
          <div className="h-[25%] w-full flex flex-col items-center justify-center">
            <button className="w-3/4 h-3/4 text-lg mb-2 rounded-3xl bg-black text-white">
              Submit
            </button>
            <p className="font-bold text-xl">Don't Have an Account. Sign Up</p>
          </div>
        </div>
      </div>
      <NewFooter />
    </div>
  );
}

export default SignIn;
