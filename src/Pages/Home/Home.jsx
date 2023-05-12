import AsideBar from "../../Shared/AsideBar";

const Home = () => {
  return (
    <div className="flex px-8 md:px-20 lg:px-40">
      <AsideBar></AsideBar>
      <div className=" bg-zinc-700 px-5 pt-2 w-full">
        <div className="flex flex-col border-b border-zinc-700 shadow-lg pb-2 rounded-md p-2">
          <div>
            <textarea
              type="textarea"
              placeholder="Type here"
              className="resize-none p-1 rounded outline-none bg-zinc-600 w-full mx-auto"
            />
          </div>
          <div className="ms-auto">
            <input
              type="submit"
              value="Publish"
              className="py-1 bg-[#38768d] px-5 rounded font-bold"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
