import React from "react";
import "./index.css";

export default function Navigation({ currPage, changePage, totalPages }) {
  return (
    <div className="nav-container">
      <div className="page-number">
        Page {currPage} of {totalPages}
      </div>
      <div className="btn-container">
        <button
          title={"Prev page"}
          className="major-button"
          disabled={currPage < 2}
          onClick={() => changePage(currPage - 1)}
        >
          {"<"}
        </button>
        {currPage > 3 && (
          <button
            className="minor-btns"
            title={"Prev 3 pages"}
            onClick={() => changePage(currPage - 3)}
          >
            {"<<"}
          </button>
        )}
        {currPage < totalPages - 2 && (
          <button
            className="minor-btns"
            title={"Next 3 pages"}
            onClick={() => changePage(+currPage + 3)}
          >
            {">>"}
          </button>
        )}
        <button
          title={"Next page"}
          className="major-button"
          disabled={currPage >= totalPages}
          onClick={() => changePage(+currPage + 1)}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
