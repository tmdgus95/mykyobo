import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../api/axios";
import requests from "../api/request";
import BookCard from "../components/BookCard";
import Loading from "../components/Loading";
import Paging from "../components/Paging";

const Books = () => {
    const { keyword } = useParams();
    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);

    const fetchDate = async () => {
        try {
            setLoading(true);
            const params = keyword ? { keyword, page } : { page };
            const resultBest = keyword
                ? await instance.get(requests.fetchSearch, { params })
                : await instance.get(requests.fetchBest, { params });
            setBooks(resultBest.data.list);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    const pageNext = () => {
        setPage(page + 1);
    };
    const pagePrev = () => {
        setPage(page - 1);
    };

    const changePage = (_page) => {
        if (page !== _page) {
            setPage(_page);
        }
    };

    useEffect(() => {
        fetchDate();
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [keyword, page]);

    return (
        <>
            {loading && <Loading />}
            <ul className="dark:bg-black">
                {books.map((book) => (
                    <BookCard key={book.seq} book={book} />
                ))}
            </ul>
            <Paging
                pageNext={pageNext}
                pagePrev={pagePrev}
                changePage={changePage}
                page={page}
                book={books.length}
            />
        </>
    );
};

export default Books;
