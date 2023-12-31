import { BiBed } from "react-icons/bi";
import { TbBeach, TbBrandLinktree } from "react-icons/tb";
import {
  MdOutlineFreeBreakfast,
  MdOutlinePark,
  MdOutlinePool,
  MdOutlineCabin,
} from "react-icons/md";
import { GiCampfire, GiFarmTractor } from "react-icons/gi";
import { AiOutlinePicture } from "react-icons/ai";
import { BsSnow } from "react-icons/bs";

export const headerModalDetails = {
  register: {
    title: "Register Account",
    salutation: {
      header: "Welcome To Airbnb",
      paragraph: "Create An Account!",
    },
  },
  login: {
    title: "Login Account",
    salutation: {
      header: "Welcome Back",
      paragraph: "Login To Your Account!",
    },
  },
  airbnb_my_house: {
    title: "Airbnb Your Home",
    salutation: null,
  },
  search: {
    title: "Search Airbnb",
    salutation: null,
  },
};

export const categoryIcons: any = [
  {
    icon: BiBed,
    label: "rooms",
  },
  {
    icon: TbBeach,
    label: "beachfront",
  },
  {
    icon: MdOutlinePark,
    label: "national parks",
  },
  {
    icon: TbBrandLinktree,
    label: "tree houses",
  },
  {
    icon: MdOutlineFreeBreakfast,
    label: "bed & breakfast",
  },
  {
    icon: GiFarmTractor,
    label: "countryside",
  },
  {
    icon: AiOutlinePicture,
    label: "scenic views",
  },
  {
    icon: MdOutlinePool,
    label: "swimming pools",
  },
  {
    icon: MdOutlineCabin,
    label: "cabin",
  },
  {
    icon: BsSnow,
    label: "arctic",
  },
  {
    icon: GiCampfire,
    label: "camping",
  },
];
