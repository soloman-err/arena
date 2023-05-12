import React from "react";
import {
  FaComment,
  FaExclamation,
  FaHeart,
  FaLinkedin,
  FaRegHandPointer,
  FaShare,
  FaThumbsUp,
  FaWatchmanMonitoring,
} from "react-icons/fa";

const Post = () => {
  return (
    <div className="border border-zinc-500 shadow-md rounded p-2">
      <div className="flex flex-col">
        <div className="flex gap-2 border-b border-zinc-600">
          <img
            className="w-10 h-10 object-cover rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpwj8gnZoYyKaqZ_6E-4JvNzWWSrbxlJ07g&usqp=CAU"
            alt=""
          />
          <div className="">
            <h3>Ell On Mask</h3>
            <small>04 minutes ago</small>
          </div>
        </div>
        <div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            tempore ad vitae veritatis necessitatibus dignissimos soluta, quos
            ut, nisi quod incidunt fugit vel non voluptatibus facilis ullam
            inventore? Molestiae, natus.
          </p>
        </div>
      </div>
      <div className="my-2">
        <div className="text-xs space-x-2">
          <span className="bg-zinc-800 p-1 rounded-xl">JavaScript</span>
          <span className="bg-zinc-800 p-1 rounded-xl">NextJs</span>
          <span className="bg-zinc-800 p-1 rounded-xl">Laravel</span>
        </div>

        {/* Post footer */}
        <div className="flex items-center justify-between bg-zinc-800 py-1 rounded-xl px-5 mt-5 text-sm">
          <div className="flex gap-1">
            <FaThumbsUp className="text-[#6ab4cf]" />
            <span>5likes</span>
          </div>
          <div className="flex items-center gap-1">
            <FaComment className="text-[#6ab4cf]" />
            <span>comment</span>
          </div>
          <div className="flex items-center gap-1">
            <FaShare className="text-[#6ab4cf]" />
            <span>Share</span>
          </div>
          <div className="flex items-center gap-1">
            <FaExclamation className="bg-[#6ab4cf] text-black p-1 rounded-full" />
            <span>Report</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
