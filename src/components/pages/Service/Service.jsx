import React from "react";
import { FcFrame } from "react-icons/fc";
import { MdCompareArrows } from "react-icons/md";
import { DiCode } from "react-icons/di";

import ServiceItem from "./ServiceItem";

const serviceData = [
  {
    id: 1,
    icon: <FcFrame />,
    title: "Web Design",
    },
  {
    id: 3,
    icon: <DiCode />,
    title: "Web Development",
    },
  {
    id: 4,
    icon: <MdCompareArrows />,
    title: "API Design",
    },
  ];

const Service = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {serviceData.map((service, id) => (
          <ServiceItem service={service} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Service;
