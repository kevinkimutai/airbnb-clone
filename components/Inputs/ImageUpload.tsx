"use client";

import React, { useState } from "react";

//@ts-ignore
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase.config";
import { BiSolidCloudUpload } from "react-icons/bi";
import Image from "next/image";
import { ClipLoader } from "react-spinners";
import { RentStateType } from "@/types";

type PageProps = {
  setFormState: React.Dispatch<React.SetStateAction<RentStateType>>;
  main?: boolean;
};

const ImageUpload = ({ main, setFormState }: PageProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [uploadURL, setUploadURL] = useState<string | undefined>();

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Create the file metadata
    /** @type {any} */
    const metadata = {
      contentType: "image/jpeg",
    };

    setLoading(true);

    const file = e.target.files![0];

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(
      storage,
      "rent-images/" + file.name + Date.now().toString()
    );
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot: any) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error: any) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            setLoading(false);
            console.log("unauthorised error");
            break;
          case "storage/canceled":
            // User canceled the upload
            setLoading(false);
            console.log("cancelled error");
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            setLoading(false);
            console.log("unknown error");
            break;

          default:
            setLoading(false);
            console.log("error in uploading img");
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL: any) => {
          setUploadURL(downloadURL);
          setFormState((prev) => ({
            ...prev,
            images: [...prev.images, downloadURL],
          }));

          setLoading(false);
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  return (
    <div
      className={`w-full ${
        main ? "min-h-[10rem]" : "h-fit"
      } justify-center items-center p-4 border border-slate-600 rounded-md mb-2 overflow-hidden`}
    >
      {loading ? (
        <div className="flex justify-center items-center">
          <ClipLoader color="#f43f5e" size={20} />
        </div>
      ) : !uploadURL ? (
        <div className="flex flex-col justify-center items-center">
          <p>Upload Your House Image Here</p>
          <label htmlFor="file-upload" className="">
            <BiSolidCloudUpload className="3xl cursor-pointer" />
          </label>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={uploadImage}
          />
        </div>
      ) : (
        <Image
          src={uploadURL}
          width={250}
          height={250}
          alt="your house"
          className="w-full object-fill content-center"
        />
      )}
    </div>
  );
};

export default ImageUpload;
