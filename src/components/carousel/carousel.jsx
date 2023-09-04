import React from "react";
import sample from '../../assets/image/sample.png'
import sample2 from '../../assets/image/black.png'
import sample3 from '../../assets/image/trend.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../carousel/carousel.css";
import { Pagination, Autoplay } from "swiper/modules";
const Carousel = () => {
    return (
        <>
            <section>
                <div className="container" style={{maxWidth: 1632 }}>
                    <div
                        className="container p-0"
                        style={{ marginTop: 50, maxWidth: 1632 }}
                    >
                        <Swiper
                            slidesPerView={"auto"}
                            spaceBetween={35}
                            modules={[Pagination,Autoplay]}
                            className="mySwiper"
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                              }}
                        >
                            <SwiperSlide>
                                <img
                                    src={sample}
                                    alt="carousel"
                                />
                                <span className="fs-2 text-light font-weight-bold position-absolute metropolis h1 qj2s">
                                    Jacket
                                </span>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={sample3}
                                    alt="carousel"
                                />
                                <span className="fs-2 text-light font-weight-bold position-absolute metropolis h1">
                                    Trend in 2023
                                </span>
                            </SwiperSlide>

                            <SwiperSlide>
                                <img
                                    src={sample2}
                                    alt="carousel"
                                />
                                <span className="fs-2 text-light font-weight-bold position-absolute metropolis h1">
                                    Black edition
                                </span>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={sample}
                                    alt="carousel"
                                />
                                <span className="fs-2 text-light font-weight-bold position-absolute metropolis h1">
                                    Simple
                                </span>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Carousel;