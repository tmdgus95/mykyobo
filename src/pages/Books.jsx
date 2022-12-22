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
        const params = {
            page: page,
        };
        const search = {
            keyword: keyword,
            page: page,
        };

        const resultBest =
            keyword === undefined
                ? await instance.get(requests.fetchBest, { params })
                : await instance.get(requests.fetchSearch, {
                      params: search,
                  });
        setBooks(resultBest.data.list);
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
    }, [keyword]);

    useEffect(() => {
        fetchDate();
    }, [page]);

    return (
        <>
            {loading && <Loading />}
            <ul className="dark:bg-black">
                {books.map((book) => (
                    <BookCard key={book.seq} book={book} />
                ))}
            </ul>
            <Paging
                className="dark:bg-black !important"
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
