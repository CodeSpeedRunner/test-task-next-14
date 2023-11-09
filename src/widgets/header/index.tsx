"use client";
import React, { useEffect, useState } from "react";
import { Search } from "@/widgets/search";
import { Dropdown, DropdownItem } from "@/shared/ui/dropdown";
import { countries, filters, genders } from "@/widgets/header/libs/mocks";
import { useUsersStore } from "@/features/users";

export const Header = () => {
  const [selectedCountry, setSelectedCountry] = useState<DropdownItem | null>(null);
  const [selectedGender, setSelectedGender] = useState<DropdownItem | null>(null);
  const [sortOrder, setSortOrder] = useState<DropdownItem | null>(null);
  const { fetchUsers, handleSortUser } = useUsersStore();

  useEffect(() => {
    fetchUsers({ country: selectedCountry?.value, gender: selectedGender?.value });
  }, [fetchUsers, selectedGender?.value, selectedCountry?.value]);

  useEffect(() => {
    handleSortUser(sortOrder?.value);
  }, [sortOrder, handleSortUser]);

  return (
    <header className="fixed z-10 flex w-full flex-col items-center justify-center gap-5 bg-black py-2 ">
      <Search />
      <div className="flex w-[80%] flex-col items-center justify-between lg:flex-row">
        <div className="flex flex-col items-center gap-5 lg:flex-row">
          <Dropdown
            items={countries}
            placeholder="Country"
            selected={selectedCountry}
            setSelected={setSelectedCountry}
          />
          <Dropdown
            items={genders}
            placeholder="Gender"
            selected={selectedGender}
            setSelected={setSelectedGender}
          />
        </div>
        <div className="flex flex-col items-center gap-5 py-5 text-white lg:flex-row">
          <div>Sort by:</div>
          <Dropdown
            items={filters}
            placeholder="filter"
            selected={sortOrder}
            setSelected={setSortOrder}
          />
        </div>
      </div>
    </header>
  );
};
