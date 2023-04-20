import Navbar from "../../Navbar/navbar";
import Banner from "../../Banner/banner";
import Genre from "../../Genre/genre";
import List from "../../List/list";
import NewFooter from "../../New Footer/newFooter";

function Clothes(props) {
  const gen = ["T-shirts", "Jackets", "Jeans", "Sweaters", "Hoodies"];
  return (
    <div className="toys_div h-screen w-full">
      <Navbar />
      <Banner />
      <Genre data={gen} />
      <List data={props.arr} />
      <NewFooter />
    </div>
  );
}

export default Clothes;
