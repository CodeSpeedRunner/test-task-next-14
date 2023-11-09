import React from "react";
import Image from "next/image";

export interface IUser {
  email: string;
  id: { value: string; name: string };
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  dob: {
    age: number;
  };
  gender: string;
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string;
  };
}

export const User = ({ user }: { user: IUser }) => {

  return (
    <div className="w-full max-w-[300px] rounded-md border border-white py-5">
      <div className="flex items-center gap-5 border-b border-b-white px-2 pb-5">
        <div className="h-20 w-20 overflow-hidden rounded-full">
          <Image src={user.picture.large} alt="user picture" width={100} height={100} className="rounded-t-md" />
        </div>
        <h1 className="text-xl font-bold text-white">
          {user.name.first} {user.name.last}
        </h1>
      </div>
      <div className="flex flex-col px-2 pt-5 text-white [&>h6>span]:font-bold">
        <h6>
          <span>Age: </span> {user.dob.age}
        </h6>
        <h6>
          <span>Gender: </span>
          {user.gender}
        </h6>
        <h6>
          <span>Location: </span>
          {user.location.country}, {user.location.state}, {user.location.street.name}
        </h6>
        <h6>
          <span>Email: </span>
          {user.email}
        </h6>
      </div>
    </div>
  );
};
