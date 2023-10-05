import React, { useState } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { Link } from "react-router-dom";
import BooksTable from "../components/home/BooksTable";

const Home = () => {
  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg">
          Table
        </button>
        <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg">
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8"> Books List </h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      <BooksTable />
    </div>
  );
};

export default Home;
