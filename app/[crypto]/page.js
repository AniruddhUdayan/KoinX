import About from "@/components/About";
import GraphCard from "@/components/GraphCard";
import Sentiment from "@/components/Sentiment";
import TabComponent from "@/components/TabComponent";
import Team from "@/components/Team";
import Tokenomics from "@/components/Tokenomics";
import TrendingCoins from "@/components/TrendingCoins";
import Image from "next/image";
import React from "react";

const page = ({ params }) => {
  return (
    <div className="flex justify-center">
      <div className="sm:ml-[56px] ml-[14px]  mr-[14px] sm:mr-[56px] sm:mt-[18px]  mt-[23.25px] flex flex-col max-w-[1328px] w-full">
        <div className="flex flex-row mb-[18px] gap-[10px]">
          <div className="text-[14px] text-[#3E5765] leading-[17px] font-[400] flex items-center">
            Cryptocurrencies
          </div>
          <div className="flex items-center">
            {" "}
            <Image src="/before.svg" alt="arrow" width={11} height={11} />
          </div>
          <div className="text-[14px] leading-[17px] font-[500] flex items-center text-[#0F1629]">
            {params.crypto.toUpperCase()}
          </div>
        </div>
        <div className="flex flex-wrap flex-row gap-[20px]">
          <div className="flex flex-col gap-[20px]">
            <GraphCard crypto={params.crypto} />
            <TabComponent crypto={params.crypto}/>
            <Sentiment/>
            <About crypto={params.crypto}/>
            <Tokenomics/>
            <Team/>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="max-sm:w-[374px] rounded-2 flex-col flex bg-[#0052FE] pt-[16px] pb-[16px] sm:pl-[31px] pl-[10px] pr-[10px] sm:pr-[31px] rounded-[8px] justify-center items-center gap-[19px]">
              <div className="flex flex-col items-center gap-[14px]">
                <div className="flex flex-col justify-center items-center text-[#FFFFFF] leading-[40px] text-[24px] max-w-[268px] font-[700]">
                  <span>Get Started with KoinX</span> <span>for FREE</span>
                </div>
                <div className="max-w-[327px] text-[14px] leading-[24px] text-[#FFFFFF] font-[500] flex flex-col justify-center items-center">
                  <span>With our range of features that you can equip for</span>{" "}
                  <span>free, KoinX allows you to be more educated and </span>
                  <span>aware of your tax reports.</span>
                </div>
              </div>
              <Image src="/Frame.svg" alt="arrow" width={178} height={166} />
              <div className="w-[237px] h-[48px] flex justify-center items-center gap-[6px] rounded-[8px] pt-[8px] pb-[8px] pl-[24px] pr-[24px] bg-[#FFFFFF]">
                <div className="font-[600] text-[16px] leading-[28px] ">Get Started for FREE
</div>
<Image src="/arrowRight.svg" alt="arrow" width={20} height={20} />
              </div>
            </div>
            <TrendingCoins/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
