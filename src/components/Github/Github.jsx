import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  return (
    <div className="bg-gray-600 p-4 m-4 text-3xl text-white text-center">
      Github Followers: {data.followers}
      <div className="flex flex-col items-center">
        <img
          src={data.avatar_url}
          alt="Git picture"
          className="mx-auto mt-7"
          width={300}
        />
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/kevalmathiya11");
  return response.json();
};
