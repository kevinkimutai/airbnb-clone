"use client";

import { SafeUser } from "@/types";
import { useEffect, useState } from "react";

import React from "react";
import toast from "react-hot-toast";
import { AiFillHeart } from "react-icons/ai";

type PageProps = {
  currentUser: SafeUser | null;
  id: string;
};

const FavouriteIcon = ({ currentUser, id }: PageProps) => {
  const [liked, setLiked] = useState<boolean>(false);

  useEffect(() => {
    const checkLiked = (currentUser: SafeUser | null, id: string) => {
      if (!currentUser) {
        setLiked(false);
      } else {
        setLiked(currentUser.favoriteIds.includes(id));
      }
    };

    checkLiked(currentUser, id);
  }, [currentUser, id]);

  const updateFavIds = async (method: string) => {
    try {
      const res = await fetch(`/api/favourites/${id}`, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        setLiked((prev) => !prev);
        toast.success(
          `successfully ${
            method === "POST" ? "added to " : "removed from "
          }liked listings!`
        );
      }
    } catch (error) {
      toast.error("something went wrong when adding to liked listings!");
    }
  };

  const toggleLiked = () => {
    if (!currentUser) {
      //TODO REDIRECT TO LOGIN
      return alert("login first");
    }
    if (currentUser && !liked) {
      updateFavIds("POST");
    }
    if (currentUser && liked) {
      updateFavIds("DELETE");
    }
  };
  return (
    <div className="absolute top-2 right-2 " onClick={toggleLiked}>
      <AiFillHeart
        className={`${
          liked ? "fill-rose-500" : "fill-white"
        } text-2xl cursor-pointer transition`}
      />
    </div>
  );
};

export default FavouriteIcon;
