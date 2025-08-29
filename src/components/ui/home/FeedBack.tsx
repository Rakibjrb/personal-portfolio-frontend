"use client";

import { useState, useEffect, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import FeedbackCard from "@/components/common/FeedbackCard";
import Motion from "@/components/common/Motion";

export default function FeedBack() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth || 425);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slidesToShow = useMemo(() => {
    if (width < 450) return 1;
    if (width < 1280) return 2;
    return 3;
  }, [width]);

  return (
    <div>
      <Motion initial={{ opacity: 0, y: 50 }} inView={{ opacity: 1, y: 0 }}>
        <div className="text-center mb-10">
          <h2 className="text-5xl mb-2 text-color-primary">
            What Clients Say?
          </h2>
          <div className="mb-3 flex justify-center">
            <div className="w-[100px] h-[6px] rounded-xl bg-[#52dde2] text-color-primary"></div>
          </div>
          <p className="text-color-primary mt-4 px-2 md:px-10 lg:px-0 lg:w-2/4 mx-auto">
            Trusted by teams and professionals worldwide. {"Here's"} what my
            clients think
          </p>
        </div>
      </Motion>

      <div className="px-4 lg:px-0">
        {width > 0 && (
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={false}
            slidesPerView={slidesToShow}
            coverflowEffect={{
              rotate: 60,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow]}
            className="mySwiper py-8">
            <SwiperSlide>
              <FeedbackCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeedbackCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeedbackCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeedbackCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeedbackCard />
            </SwiperSlide>
          </Swiper>
        )}
      </div>
    </div>
  );
}
