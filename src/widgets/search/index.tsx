"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { BaseInput } from "@/shared/ui/input";
import searchIcon from "./search.png";
import Image from "next/image";
import { useUsersStore } from "@/features/users";

export const Search = () => {
  const [value, setValue] = useState("");
  const { handleSearchUser } = useUsersStore();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSearchUser(value);
  };

  return (
    <div className="flex max-w-[400px] items-center">
      <form onSubmit={handleSubmit} className="w-full">
        <BaseInput
          placeholder="Search user"
          onChange={(e) => setValue(e.currentTarget.value)}
          value={value}
          endDecorator={
            <Image
              className="cursor-pointer"
              src={searchIcon}
              alt={"search"}
              width={20}
              height={20}
            />
          }
        />
      </form>
    </div>
  );
};
