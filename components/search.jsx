import React, { useState, useEffect, useRef } from "react";
import * as image from '../app/imageimport.jsx'; 
import { searchAllPosts } from "@/services/searchservice";

export default function SearchBar() {
  const [keyword, setKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const containerRef = useRef(null);

  // Fungsi pencarian (misalnya pakai API atau service)
  async function handleSearch() {
    if (!keyword.trim()) {
      setSearchResults([]);
      setShowDropdown(false);
      return;
    }
    // Simulasi fetch data, ganti dengan panggilan service yang kamu punya
    const results = await searchAllPosts(keyword);
    setSearchResults(results);
    setShowDropdown(true);
  }

  // Jalankan pencarian saat mengetik dengan debounce (optional)
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (keyword.trim()) {
        handleSearch();
      } else {
        setSearchResults([]);
        setShowDropdown(false);
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [keyword]);

  // Tutup dropdown kalau klik di luar search bar
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-xl">
      {/* Search Bar */}
      <div className="bg-white p-2 rounded-lg flex items-center w-full box-border border border-gray-300">
        <input
          type="text"
          placeholder="Try search something"
          className="flex-grow border-none p-2 text-black text-base outline-none"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSearch();
            }
          }}
          onFocus={() => {
            if (searchResults.length > 0) setShowDropdown(true);
          }}
        />
        <img
          className="h-5 ml-2 cursor-pointer"
          alt="Search"
          src={image.search_icon} // ganti dengan image.search_icon mu
          onClick={handleSearch}
        />
      </div>

      {/* Dropdown hasil pencarian */}
      {showDropdown && searchResults.length > 0 && (
        <ul className="absolute z-10 bg-white border border-gray-300 rounded shadow-lg w-full max-h-60 overflow-auto mt-1">
          {searchResults.map((post) => (
            <li
              key={post.id}
              className="p-3 cursor-pointer hover:bg-gray-100"
              onClick={() => {
                // Misal navigasi ke detail post
                goToForum(post.id);
                setShowDropdown(false);
              }}
            >
              <div className="font-semibold text-gray-800">{post.Title || post.title}</div>
              <div className="text-xs text-gray-600">{post.Lokasi || post.location || post.City}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
