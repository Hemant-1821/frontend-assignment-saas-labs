import React from "react";
import "./index.css";

export default function Navigation({ currPage, changePage, totalPages }) {
  return (
    <div className="nav-container">
      <div className="page-number">{`Page ${currPage} of ${totalPages}`}</div>
      <div className="btn-container">
        <button
          className=""
          disabled={currPage < 2}
          onClick={() => changePage(currPage - 1)}
        >
          {"<"}
        </button>
        <button
          disabled={currPage >= totalPages}
          className=""
          onClick={() => changePage(currPage + 1)}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
