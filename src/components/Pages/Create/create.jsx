import Navbar from "../../Navbar/navbar";
import NewFooter from "../../New Footer/newFooter";

function Create() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex justify-center items-center text-3xl font-bold mt-10">
        <p>Create An Order</p>
      </div>
      <form action="/" className="h-[87.5%] mb-7 mt-4">
        <div className="w-full h-full flex justify-center items-center mb-7 mt-4">
          <div className="h-full flex flex-col justify-between items-center px-[10%] py-[2%] text-xl font-bold w-[60%]">
            <div className="flex justify-between w-full items-center">
              <label className="w-2/5">Name : </label>
              <input type="text" className="outline w-3/5" required />
            </div>
            <div className="flex justify-between w-full">
              <label className="w-2/5">Product Name : </label>
              <input type="text" className="outline w-3/5" required />
            </div>
            <div className="flex justify-between w-full">
              <label className="w-2/5">Select Category : </label>
              <select className="outline w-3/5 text-center">
                <option value="Books">Books</option>
                <option value="Clothes">Clothes</option>
                <option value="toys">Toys</option>
              </select>
            </div>
            <div className="flex justify-between w-full">
              <label className="w-2/5">Select Image : </label>
              <input type="file" className="w-3/5 text" required />
            </div>
            <div className="flex justify-between w-full">
              <label className="w-2/5">PIN : </label>
              <input type="text" className="outline w-3/5" required />
            </div>
            <div className="flex justify-between w-full items-center">
              <label className="w-2/5">Address : </label>
              <textarea rows="3" className="outline w-3/5" required />
            </div>
            <div className="rounded-3xl h-[7%] w-1/4 flex justify-center items-center">
              <button className="h-full w-full rounded-3xl bg-black text-white">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      <NewFooter />
    </div>
  );
}

export default Create;
