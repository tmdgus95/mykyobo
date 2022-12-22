import React from "react";
import { useNavigate } from "react-router-dom";
const BookCard = ({ book }) => {
    const navigate = useNavigate();
    function priceToString(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
        <li
            onClick={() => {
                navigate(`/books/detail/${book.seq}`, { state: { book } });
            }}
            className="flex justify-start border-b py-11 px-11 "
            style={{ borderBottom: "1px solid #F4F4F4" }}
        >
            <div>
                <img
                    className=" w-36 h-44"
                    src={`http://192.168.0.193:8989/images/${book.image}`}
                    alt="책이미지"
                />
            </div>
            <div className="ml-7 w-full">
                <div>
                    <p className="font-bold text-2xl mb-1">{book.title}</p>
                    <p className="text-subTitle text-lg mb-3">{book.sub}</p>
                    <span>{book.writer}</span>
                    <span className="text-publisher ml-3">{book.publisher}</span>
                </div>
                <div className="text-end">
                    <span className="text-originalprice line-through text-2xl">
                        <em className="not-italic">{priceToString(book.price)}</em>원
                    </span>
                    <p>
                        <span className="text-Salegreen font-bold text-3xl ">
                            <em className="not-italic">10</em>%
                        </span>
                        <span className="text-input text-3xl pl-5 font-bold ">
                            <em className="not-italic text-4xl ">
                                {priceToString(book.price - book.price * 0.1)}
                            </em>
                            원
                        </span>
                    </p>
                </div>
            </div>
        </li>
    );
};
export default BookCard;
