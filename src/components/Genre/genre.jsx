function Genre(props) {
  return (
    <div className="genre_div font-bold text-xl h-[11vh] w-full flex justify-center items-center mt-8">
      <div className="genre flex w-full justify-around">
        {props.data.map((element) => {
          return <p>{element}</p>;
        })}
      </div>
      <div className=""></div>
    </div>
  );
}

export default Genre;
