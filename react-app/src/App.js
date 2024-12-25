import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import Table from "./Table";
import Navigation from "./Navigation";

const ENTRIES_PER_PAGE = 5;

function App() {
  const [projectsData, setProjectsData] = useState();
  const [currPage, setCurrPage] = useState(1);

  async function fetchData() {
    const response = await fetch(
      "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
    );
    const data = await response.json();

    const transformedData = data.map((obj) => ({
      sno: obj["s.no"],
      percentageFunded: obj["percentage.funded"],
      amtPledged: obj["amt.pledged"],
    }));

    setProjectsData(transformedData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const [entriesForDisplay, totalPages] = useMemo(() => {
    if (projectsData) {
      return [
        projectsData.slice(
          ENTRIES_PER_PAGE * (currPage - 1),
          ENTRIES_PER_PAGE * currPage
        ),
        Math.ceil(projectsData.length / ENTRIES_PER_PAGE),
      ];
    }
    return [undefined, () => {}];
  }, [currPage, projectsData]);

  const changePage = (page) => {
    setCurrPage(page);
  };

  return (
    <div className="App">
      {entriesForDisplay && (
        <>
          <Table
            entriesForDisplay={entriesForDisplay}
            currPage={currPage}
            changePage={changePage}
            totalPages={totalPages}
          />
        </>
      )}
    </div>
  );
}

export default App;
