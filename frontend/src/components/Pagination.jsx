import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import User from "./User";
import FetchData from "../hooks/FetchData";
import { useSelector } from "react-redux";

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  // Fetch data from backend
  FetchData();
  const data = useSelector((state) => state.userData.users);
  //Pagination variables
  const recordPerPage = 2;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const currentSet = data?.slice(firstIndex, lastIndex);
  const totalSet = Math.ceil(data?.length / recordPerPage);
  let allSet = [];
  for (let i = 0; i < totalSet; i++) {
    allSet.push(i + 1);
  }
  console.log(allSet.length);
  return (
    <>
      {/* USERS */}
      {currentSet?.map((item, index) => (
        <User data={item} key={index} />
      ))}
      {/* PAGINATION BUTTONS */}
      <Box sx={styles.pagBtn}>
        {/* PREV */}
        <Button
          sx={styles.scrollBtn}
          disabled={currentPage === 1 && true}
          onClick={() =>
            setCurrentPage(currentPage === 1 ? currentPage : currentPage - 1)
          }
        >
          {"<"}
        </Button>
        {allSet.map((item, index) => (
          <Button
            key={index}
            fontFamily="Open Sans"
            size="small"
            sx={{
              borderRadius: 1,
              marginX: 1,
              color: currentPage === item ? "white" : "",
              backgroundColor: currentPage === item ? "#1976d2" : "white",
            }}
            onClick={() => setCurrentPage(item)}
          >
            {item}
          </Button>
        ))}
        {/* NEXT */}
        <Button
          sx={styles.scrollBtn}
          disabled={currentPage === allSet.length && true}
          onClick={() =>
            setCurrentPage(
              currentPage === allSet.length ? currentPage : currentPage + 1
            )
          }
        >
          {">"}
        </Button>
      </Box>
    </>
  );
}

export default Pagination;

const styles = {
  pagBtn: { display: "flex", justifyContent: "center", paddingY: 2 },
  scrollBtn: {
    borderRadius: 1,
    marginX: 1,
    color: "#1976d2",
    backgroundColor: "white",
  },
};
