"use client";
import React, { useState } from "react";
import Image from "next/image";
import expandDownIcon from "./expand-down.svg";
import classNames from "classnames";

export type DropdownItem = {
  title: string;
  value: string | number;
};

interface DropdownProps {
  items: DropdownItem[];
  placeholder?: string;
  selected: DropdownItem | null;
  setSelected: (item: DropdownItem) => void;
}

export const Dropdown = ({ items, placeholder, selected, setSelected }: DropdownProps) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  const handleSelect = (item: DropdownItem) => {
    setSelected(item);
    setIsDropdownVisible(false);
  };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        className="flex w-[200px] items-center justify-between rounded-xl border border-white px-5 py-2 text-white"
        type="button"
      >
        <span className="overflow-hidden">{selected?.title ?? placeholder}</span>
        <Image src={expandDownIcon} alt="expandDownIcon" width={15} height={15} />
      </button>
      {isDropdownVisible && (
        <ul className="absolute max-h-[400px] w-[300px] overflow-y-auto rounded-xl border border-white bg-black text-white">
          {items.map((item, index) => (
            <li
              key={item.value}
              onClick={() => handleSelect(item)}
              className={classNames("cursor-pointer hover:bg-white hover:text-black px-5 py-2", {
                "border-b": items.length - 1 !== index,
                "rounded-b-xl": items.length - 1 === index,
                "rounded-t-xl": 0 === index,
              })}
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
