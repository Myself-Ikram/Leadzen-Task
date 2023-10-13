import React from "react";
import { Box, Autocomplete, TextField } from "@mui/material";
function Header() {
  const searchOptions = ["name", "company", "city"];
  return (
    <Box>
      {/* TITLE */}
      <Box sx={styles.container}>
        <h1>^ USERS ^</h1>
      </Box>
      {/* SEARCH BAR */}
      <Box sx={styles.searchContainer}>
        <Autocomplete
          disablePortal
          options={searchOptions}
          sx={{
            width: 150,
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              color="primary"
              size="small"
              label="Search By"
            />
          )}
        />
        <Box
          component={"input"}
          placeholder="Type here.."
          sx={styles.inputBox}
        />
      </Box>
    </Box>
  );
}

export default Header;

const styles = {
  container: {
    backgroundColor: "#1976d2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingY: 2,
    color: "white",
    borderRadius: 5,
  },
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginY: 3,
  },
  inputBox: {
    height: 50,
    width: 300,
    borderRadius: 100,
    marginLeft: 10,
    borderColor: "#474787",
    borderWidth: 0,
    paddingLeft: 2,
    outline: "none",
  },
};
