import React from "react";

const Post = () => {
  return (
    <div className="border rounded p-1">
      <div className="flex flex-col p-2">
        <div className="flex gap-2 border-b border-zinc-600">
          <img
            className="w-10 h-10 object-cover rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpwj8gnZoYyKaqZ_6E-4JvNzWWSrbxlJ07g&usqp=CAU"
            alt=""
          />
          <div className="">
            <h3>Ell On Mask</h3>
            <small>May4 2023</small>
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
      <div>
        <p>comment</p>
      </div>
    </div>
  );
};

export default Post;
