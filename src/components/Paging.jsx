import React, { useState } from "react";
import "./Paging.css";
import Pagination from "react-js-pagination";
const Paging = (props) => {
    // console.log(props.page);
    const [focusPage, setPage] = useState(1);
    const handlePageChange = (focusPage) => {
        setPage(focusPage);
        props.changePage(focusPage - 1);
        // console.log(focusPage);
    };
    return (
        <Pagination
            // 현재 페이지
            activePage={focusPage}
            // 한 페이지당 보여줄 리스트 아이템의 개수
            itemsCountPerPage={8}
            // 총 아이템의 개수
            totalItemsCount={100}
            //  Paginator 내에서 보여줄 페이지의 범위
            pageRangeDisplayed={5}
            // "이전"을 나타낼 텍스트 (prev, <, ...)
            prevPageText={"‹"}
            // "다음"을 나타낼 텍스트 (next, >, ...)
            nextPageText={"›"}
            // onChange: 페이지가 바뀔 때 핸들링해줄 함수
            onChange={handlePageChange}
        />
    );
};
export default Paging;
