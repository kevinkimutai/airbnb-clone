import { Categories } from "@/components/Category";
import Client from "@/components/ClientComponent/Client";
import Listing from "@/components/Listing/Listing";
import ToastContainer from "@/components/ToastContainer/ToastContainer";
import { IListingsParams, getListing } from "@/utils/actions/getListing";

// app/posts/page.ts
type Props = {
  params: {};
  searchParams: IListingsParams;
};

export default async function Home(props: Props) {
  const searchParams = props.searchParams;

  if (!searchParams.page) {
    searchParams.page = 0;
  }
  const listings: any = await getListing(searchParams);

  console.log();
  return (
    <>
      <ToastContainer />

      <Categories />
      <Listing listings={listings} />
    </>
  );
}
