import React from "react";
import "./index.css";
import Navigation from "../Navigation";

export default function Table({
  entriesForDisplay,
  currPage,
  changePage,
  totalPages,
}) {
  return (
    <div className="wrapper">
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Percentage Funded</th>
              <th>Amount Pledged</th>
            </tr>
          </thead>
          <tbody>
            {entriesForDisplay.map((entry) => (
              <tr key={entry.sno}>
                <td>{entry.sno}</td>
                <td>{entry.percentageFunded}</td>
                <td>{entry.amtPledged}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Navigation
          currPage={currPage}
          changePage={changePage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}
