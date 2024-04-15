import GlobalApi from "@/app/_utils/GlobalApi";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const SideBanners = () => {
  const [sideBanners, setSideBanners] = useState([]);

  useEffect(() => {
    getAllSideBanners();
  }, []);

  const getAllSideBanners = () => {
    GlobalApi.getSideBanners().then((resp) => {
      setSideBanners(resp.sideBanners);
    });
  };

  return (
    <div>
      {sideBanners.map((item, index) => (
        <div key={index}>
          <div className="max-w-[31.25rem] max-h-[18.75rem] w-full h-auto">
            <Image
              src={item?.banner?.url}
              width={500}
              height={300}
              alt="side banner"
              onClick={() => window.open(item?.url)}
              className="w-auto h-auto rounded-xl cursor-pointer"
              priority
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideBanners;
