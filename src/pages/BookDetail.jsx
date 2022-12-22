import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";
import { FiPlus } from "react-icons/fi";
import { HiMinusSm } from "react-icons/hi";
import instance from "../api/axios";
import requests from "../api/request";
export const BookDetail = () => {
    const [detailList, setDetailList] = useState([]);
    const {
        state: { book },
    } = useLocation();

    const { bookId } = useParams();

    const navigate = useNavigate();

    const fetchDate = async () => {
        const params = {
            product: bookId,
        };
        const resultDetail = await instance.get(requests.fetchDetail, { params });

        setDetailList(resultDetail.data.list);
    };

    useEffect(() => {
        fetchDate();
        window.scrollTo(0, 0);
    }, []);

    //   연도
    const year = new Date(detailList.publishdate).getFullYear();
    const month = new Date(detailList.publishdate).getMonth() + 1;
    const day = new Date(detailList.publishdate).getDate() - 1;
    const fullDate = `${year}년 ${month}월 ${day}일`;
    // 콤마
    const price = detailList.price
        ? detailList.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
        : "";
    const salePrice = detailList.price
        ? (detailList.price * 0.9).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
        : "";

    const point = detailList.price * 0.05;
    const introduce = detailList.introduce
        ? detailList.introduce.replaceAll("\n", "<br/><br/>")
        : null;

    // 총 상품 금액
    let [count, setCount] = useState(1);
    let totalPrice = detailList.price
        ? (detailList.price * count).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
        : null;

    return (
        <div className="w-full max-w-3xl mx-auto px-6 py-6 font-medium tracking-tighter dark:bg-black dark:text-white ">
            <p className="text-xs flex text-gray dark:text-white ">
                {detailList.maincategory} <SlArrowRight className="mx-1 pt-1" />
                {detailList.middlecategory}
                <SlArrowRight className="mx-1 pt-1" />
                {detailList.subcategory}
            </p>
            <div className="flex flex-col items-center ">
                <div className="text-center mt-8">
                    <h2 className="text-3xl font-bold">{book.title}</h2>
                    <p className="text-subTitle text-base font-thin mt-4 dark:text-white">
                        {book.sub || ""}
                    </p>
                </div>
                <div className="w-6/12 my-10">
                    <img
                        src={`http://192.168.0.193:8989/images/${book.image}`}
                        alt={book.title}
                        className="w-full"
                        style={{ boxShadow: "0 20px 60px rgb(0 0 0 / 12%)" }}
                    ></img>
                </div>
                <div className="w-full">
                    <div className="flex justify-between">
                        <span>{book.writer} 저자(글)</span>
                        <span className="text-publisher line-through text-base dark:text-white">
                            {salePrice}원
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray text-xs dark:text-white">
                            {detailList.publisher} {fullDate}
                        </span>
                        <div className="text-3xl font-bold">
                            <span className="text-Salegreen mx-1 dark:text-white">10%</span>
                            <span className="text-price dark:text-white"> {price}원</span>
                        </div>
                    </div>
                    <div className="flex justify-end text-sm py-4 mt-4 mx-auto border-y border-summary ">
                        <span className="text-gray dark:text-white">
                            적립/혜택 :{" "}
                            <span className="text-Salegreen dark:text-white">{point}P</span>
                        </span>
                    </div>
                    <div className="pt-5">
                        <div className="text-right">
                            <span className="text-sm mr-2 font-medium text-gray dark:text-white">
                                총 상품 금액
                            </span>{" "}
                            <span className="text-3xl font-bold">{totalPrice}원</span>
                        </div>
                        <div className="flex justify-between pb-8 pt-12 items-center">
                            <div className="border w-28.88 rounded-xl flex justify-around items-center h-14 border-slate-300 text-gray dark:text-white">
                                <button
                                    className="hover:text-black hover:scale-110 dark:hover:text-white"
                                    onClick={() => {
                                        if (count > 1) {
                                            setCount(--count);
                                        }
                                    }}
                                >
                                    {" "}
                                    <HiMinusSm />{" "}
                                </button>
                                <span className="text-xl">{count}</span>
                                <button
                                    className="hover:text-black hover:scale-110 dark:hover:text-white"
                                    onClick={() => {
                                        setCount(++count);
                                    }}
                                >
                                    {" "}
                                    <FiPlus />{" "}
                                </button>
                            </div>
                            <button className="border w-2/3 rounded-xl bg-price text-white h-14 dark:border-none">
                                바로구매
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-summary rounded-2xl py-8 px-8 mt-8 mb-10 tracking-tighter mi dark:text-black">
                    <h1 className="text-2xl font-bold pb-5 border-b border-lightgray px-4">
                        책 소개
                    </h1>
                    <p
                        dangerouslySetInnerHTML={{ __html: introduce }}
                        className="text-base font-normal pt-6 text-justify px-4 "
                    ></p>
                    <p></p>
                </div>
                <button
                    className="w-full bg-price text-white rounded-2xl h-16 text-xl mb-10"
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    목록으로 돌아가기
                </button>
            </div>
        </div>
    );
};
export default BookDetail;
