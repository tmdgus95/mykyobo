import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
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
    navigate(`/books/${text}`);
  };
  useEffect(() => setText(keyword || ""), [keyword]);

  return (
    <header className="relative flex flex-col items-center py-6 border-b bg-white dark:bg-black border-header dark:border-gray">
      <button onClick={toggleDarkMode} className="absolute right-10">
        {darkMode && <FaSun className="text-white" />}
        {!darkMode && <FaMoon />}
      </button>
      <Link to="/">
        <img src="/image/kyoboLogo.png" alt="교보문고 로고" />
      </Link>
      <div className="relative w-full text-center mt-6">
        <form className="flex justify-center" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            value={text}
            className="w-11/12 border border-input rounded-full outline-input pl-5 h-10"
            onChange={handleChange}
          />
          <button className="absolute top-3 right-12   text-input">
            <FaSearch />
          </button>
        </form>
      </div>
    </header>
  );
};

export default SearchHeaer;
