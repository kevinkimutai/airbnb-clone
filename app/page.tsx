import { Categories } from "@/components/Category";
import Listing from "@/components/Listing/Listing";
import { IListingsParams } from "@/utils/actions/getListing";
import { Toaster } from "react-hot-toast";
import { BiError } from "react-icons/bi";

// app/posts/page.ts
type Props = {
  params: {};
  searchParams: IListingsParams;
};

export default function Home(props: Props) {
  const searchParams = props.searchParams;

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            //@ts-ignore
            style: {
              background: "",
              color: "#22c55e",
            },
          },

          error: {
            duration: 3000,
            icon: <BiError className={"text-red-600 text-lg"} />,
            //@ts-ignore
            style: {
              background: "#fff",
              color: "#ef4444",
            },
          },
        }}
      />
      <Categories />
      <Listing params={searchParams} />
    </>
  );
}
