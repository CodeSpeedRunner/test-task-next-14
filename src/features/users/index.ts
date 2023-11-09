import { create } from "zustand";
import { IUser } from "@/entities/user";
import { FilterTypeEnum } from "@/widgets/header/libs/mocks";

interface Store {
  users: IUser[];
  filteredUsers: IUser[];
  fetchUsers: ({
    country,
    gender,
  }: {
    country?: string | number;
    gender?: string | number;
  }) => void;
  handleSortUser: (type?: string | number) => void;
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
      let filteredUsers;
      switch (type) {
        case FilterTypeEnum.older:
          filteredUsers = state.users.sort((a, b) => (a.dob.age < b.dob.age ? 1 : -1));
          break;
        case FilterTypeEnum.younger:
          filteredUsers = state.users.sort((a, b) => (a.dob.age > b.dob.age ? 1 : -1));
          break;
        default:
          filteredUsers = state.users;
      }

      return { filteredUsers };
    });
  },
  handleSearchUser: (name) => {
    set((state) => {
      const users = state.users.filter((item) => {
        return (
          item.name.first.toLowerCase().includes(name) ||
          item.name.last.toLowerCase().includes(name)
        );
      });
      return { filteredUsers: name !== "" ? users : state.users };
    });
  },
}));
