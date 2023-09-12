"use client";

import React, { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

import { CiCalendarDate } from "react-icons/ci";

import { Reservation } from "@prisma/client";
import { getNumberOfDays } from "@/utils/getNumberOfDays";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import { useRouter } from "next/navigation";

type PageProps = {
  listingId: string;
  price: number;
  reservations: Reservation[];
};

const CalenderDate = ({ listingId, price, reservations }: PageProps) => {
  const router = useRouter();

  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const [loading, setLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(price);
  const [range, setRange] = useState(1);
  const [reserv, setReserv] = useState<Reservation[] | null>();

  useEffect(() => {
    const filterReservations = () => {
      setReserv(reservations.filter((res) => res.listingId === listingId));
    };

    filterReservations();
  }, [listingId, reservations]);

  const handleValueChange = (newValue: any) => {
    console.log("newValue:", newValue);
    setValue(newValue);

    let daysBooked = getNumberOfDays(newValue.startDate, newValue.endDate);

    console.log(daysBooked);
    setRange(daysBooked);
    setTotalPrice(daysBooked * price);
  };

  const handleReserve = async () => {
    let data = {
      listingId,
      startDate: value.startDate,
      endDate: value.endDate,
      totalPrice,
    };

    try {
      setLoading(true);
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setLoading(false);
        toast.success("Added Reservation");

        let paymentData = { listingId, totalPrice };

        const paymentGateway = await fetch("/api/payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(paymentData),
        });

        if (paymentGateway.ok) {
          setLoading(false);

          const stripeURL = await paymentGateway.json();

          router.push(stripeURL);
        } else {
          setLoading(false);
          toast.error("something went wrong");
        }
      } else {
        setLoading(false);
        toast.error("something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="mb-2 text-xl">
        <span className="font-bold">$ {price}</span>
        <span className="font-semi-bold text-sm text-slate-600">/night</span>
      </h2>
      <div className="rounded-lg p-4 border border-slate-400 mb-4">
        <CiCalendarDate className="mb-4 text-xl" />

        <Datepicker
          value={value}
          onChange={handleValueChange}
          startFrom={new Date(Date.now())}
          primaryColor={"rose"}
          placeholder={"Reserve Date"}
          inputClassName="w-full rounded-md border border-black focus:border-rose-500 transition p-2"
          minDate={new Date(Date.now())}
          //@ts-ignore
          disabledDates={reserv?.map((r) => [
            { startDate: new Date(r.startDate), endDate: new Date(r.endDate) },
          ])}
        />
      </div>
      <p className="text-md mb-2">
        <span className="font-bold">$ {price}</span> *
        <span className="text-slate-600 font-semibold"> {range} /nights</span>
      </p>
      <p className="text-md mb-6">
        <span className="font-bold mr-5">Total</span>
        <span className="text-slate-600 font-bold">$ {totalPrice}</span>
      </p>
      <button
        className="w-full p-2 bg-rose-500 text-white rounded-lg"
        onClick={handleReserve}
      >
        {loading ? <ClipLoader color="#fff" size={20} /> : "Reserve"}
      </button>
    </div>
  );
};

export default CalenderDate;
