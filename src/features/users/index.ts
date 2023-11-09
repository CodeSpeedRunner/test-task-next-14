import { create } from "zustand";
import { IUser } from "@/entities/user";

interface Store {
  users: IUser[];
  filteredUsers: IUser[];
  fetchUsers: ({ country, gender }: { country?: string; gender?: string }) => void;
  handleSortUser: (type?: string) => void;
  handleSearchUser: (name: string) => void;
}

export const useUsersStore = create<Store>((set) => ({
  users: [],
  filteredUsers: [],
  fetchUsers: async ({ country = "", gender = "" }) => {
    let url = `https://randomuser.me/api/?results=200&nat=${country}&gender=${gender}`;
    const res = await fetch(url);
    const users = await res.json();
    set({ users: users.results, filteredUsers: users.results });
  },
  handleSortUser: (type) => {
    set((state) => {
      let users;
      // TODO: lodash for sort oder by, switch case, use enum for older
      if (type === "older") {
        users = state.users.sort((a, b) => (a.dob.age < b.dob.age ? 1 : -1));
      } else {
        users = state.users.sort((a, b) => (a.dob.age > b.dob.age ? 1 : -1));
      }

      return { filteredUsers: type ? users : state.users };
    });
  },
  handleSearchUser: (name) => {
    set((state) => {
      const users = state.users.filter((item) => {
        return item.name.first.toLowerCase().includes(name) || item.name.last.toLowerCase().includes(name);
      });
      return { filteredUsers: name !== "" ? users : state.users };
    });
  },
}));
