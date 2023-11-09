"use client";
import React from "react";
import { User } from "@/entities/user";
import { useUsersStore } from "@/features/users";
import Loading from "@/shared/ui/loading";

export const UsersList = () => {
  const { filteredUsers } = useUsersStore();
  if (filteredUsers.length === 0) {
    return <Loading />;
  }
  return (
    <section className="flex flex-col items-center">
      <div className="grid max-w-[1300px] grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
        {filteredUsers &&
          filteredUsers.map((user) => (
            <User key={`${user.email}_${user.name.first}`} user={user} />
          ))}
      </div>
    </section>
  );
};
