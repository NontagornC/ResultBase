"use client";

import Layout from "@/components/layout/Layout";
import React from "react";
import Image from "next/image";
import ExhibitionsImg from "@/asset/image/img_exhibitions.png";
import EventImg from "@/asset/image/img_event.png";
import ConstructionImg from "@/asset/image/img_construction.png";
import styled from "styled-components";

const page = () => {
  return (
    <Layout>
      <div className="w-full flex flex-col gap-[80px]">
        <div className="flex flex-col items-center gap-[80px]">
          <HeaderSpan>Exhibitions</HeaderSpan>
          <Image
            src={ExhibitionsImg}
            alt="ExhibitionsImg"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-center gap-[80px]">
          <HeaderSpan>Event Activation</HeaderSpan>
          <Image src={EventImg} alt="EventImg" className="object-cover" />
        </div>
        <div className="flex flex-col items-center gap-[80px]">
          <HeaderSpan>Design & Construction</HeaderSpan>
          <Image
            src={ConstructionImg}
            alt="ConstructionImg"
            className="object-cover"
          />
        </div>
      </div>
    </Layout>
  );
};

export default page;

const HeaderSpan = styled.span`
  font-weight: 500;
  font-size: 100px;
`;
