import { categoryIcons } from "@/constants/constants";
import React from "react";

const IconComponent = ({ Icon }: any) => (
  <Icon className="text-slate-400 text-3xl mb-2" />
);

const Categories = () => {
  return (
    <div className="py-4 overflow-x-scroll no-scrollbar flex justify-start gap-6 ">
      {/*@ts-ignore */}
      {categoryIcons.map(({ icon: Icon, label }) => (
        <div key={label} className="flex flex-col justify-center items-center">
          <IconComponent Icon={Icon} />
          <p className="text-md text-slate-400 whitespace-nowrap">{label}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
