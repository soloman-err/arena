import AsideBar from "../../Shared/AsideBar";
import Post from "../../components/Post";

const Home = () => {
  return (
    <div className="flex px-8 md:px-20 lg:px-40">
      <AsideBar></AsideBar>
      <div className="bg-zinc-700 rounded-tl px-5 pt-2 w-full">
        <div className="flex md:flex-col md:border-b border-zinc-700 shadow-lg rounded-md md:p-2 gap-1 md:gap-0 items-center">
          <div className="w-full mt-auto">
            <textarea
              type="textarea"
              placeholder="Type here"
              className="resize-none w-full text-xs md:text-sm px-1 pt-1 rounded outline-none bg-zinc-600"
            />
          </div>
          <div className="ms-auto">
            <input
              type="submit"
              value="Publish"
              className="py-1 border-b-4 border-[#083546] mt-auto text-xs bg-[#38768d] px-2 md:px-5 rounded font-bold"
            />
          </div>
        </div>

        <div className="mt-5 grid md:grid-cols-1 lg:grid-cols-2 gap-2">
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </div>
      </div>
    </div>
  );
};

export default Home;
