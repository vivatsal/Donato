import Navbar from "../../Navbar/navbar";
import Banner from "../../Banner/banner";
import Genre from "../../Genre/genre";
import List from "../../List/list";
import NewFooter from "../../New Footer/newFooter";

function Toys(props) {
  const gen = ["Collectibles", "Boards", "Cars", "Puzzles", "Soft Toys"];
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

export default Toys;
