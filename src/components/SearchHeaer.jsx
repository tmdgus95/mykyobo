import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const SearchHeaer = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const navigate = useNavigate();
    let { keyword } = useParams();
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.length === 0) {
            alert("너무 적은데?");
        } else if (/[a-zA-Z]/.test(text)) {
            alert("영어는 빼세요~");
        } else if (/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/.test(text)) {
            alert("특수문자는 안돼요~");
        } else {
            navigate(`/books/${text}`);
        }
    };
    useEffect(() => setText(keyword || ""), [keyword]);

    return (
        <header className="relative flex flex-col items-center py-6 mt-5 border-b bg-white dark:bg-black border-header dark:border-gray">
            <button onClick={toggleDarkMode} className="absolute right-16 text-3xl">
                {darkMode && <FaSun className="text-red-600" />}
                {!darkMode && <FaMoon className="text-yellow-400" />}
            </button>
            <Link to="/books/member" className="absolute right-4  text-gray text-3xl">
                <GiHamburgerMenu></GiHamburgerMenu>
            </Link>
            <Link to="/">
                <img src="/image/kyoboLogo.png" alt="교보문고 로고" />
            </Link>
            <div className="relative w-full text-center mt-6">
                <form className="flex justify-center mb-6" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="검색어를 입력하세요"
                        value={text}
                        className="w-9/12 border border-input rounded-full  outline-input pl-5 h-10"
                        onChange={handleChange}
                    />
                    <button className="absolute top-3 right-28   text-input">
                        <FaSearch />
                    </button>
                </form>
            </div>
        </header>
    );
};

export default SearchHeaer;
