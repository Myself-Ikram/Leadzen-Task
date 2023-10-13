import React, { useState } from "react";
import { Box, Button } from "@mui/material";

function User({ data }) {
  const [more, setMore] = useState(false);
  return (
    <Box sx={styles.container}>
      {/* USER INTRO */}
      {/* COMPANY NAME */}
      <Box sx={styles.subContainer}>
        {/* COMPANY NAME */}
        <Box style={styles.box}>
          <p style={styles.heading}>{data.company.name}</p>
        </Box>
        {/* CONTACT */}
        <Box style={styles.box}>
          <p style={styles.heading}>CONTACT</p>
          <p style={styles.para}>{data.username}</p>
        </Box>
        {/* CITY */}
        <Box style={styles.box}>
          <p style={styles.heading}>CITY</p>
          <p style={styles.para}>{data.address.city}</p>
        </Box>
        {/* ZIPCODE */}
        <Box style={styles.box}>
          <p style={styles.heading}>ZIPCODE</p>
          <p style={styles.para}>{data.address.zipcode}</p>
        </Box>
        {/* DETAILS BUTTON */}
        <Box>
          <Button
            variant={more === data.id ? "outlined" : "contained"}
            fontFamily="Open Sans"
            sx={{ borderRadius: 5 }}
            onClick={() => setMore(more === data.id ? false : data.id)}
          >
            {more === data.id ? "less" : "Details"}
          </Button>
        </Box>
      </Box>
      {more === data.id && <Details data={data} />}
    </Box>
  );
}

export default User;

// Details component
function Details({ data }) {
  return (
    <Box sx={styles.details}>
      {/* Tagline */}
      <Box>
        <p style={styles.heading}>Tagline</p>
        <p style={styles.para}>{data.company.catchPhrase}</p>
      </Box>
      <Box style={{ display: "flex" }}>
        {/* Row1 */}
        <Box>
          {/* CONTACT */}
          <Box>
            <p style={styles.heading}>Contact Person</p>
            <p style={styles.para}>{data.username}</p>
          </Box>
          {/* EMAIL */}
          <Box>
            <p style={styles.heading}>Email</p>
            <p style={styles.para}>{data.email}</p>
          </Box>
          {/* COMPANY NAME */}
          <Box>
            <p style={styles.heading}>Company Name</p>
            <p style={styles.para}>{data.company.name}</p>
          </Box>
          {/* WEBSITE */}
          <Box>
            <p style={styles.heading}>Website</p>
            <p style={styles.para}>
              <a href="#" style={{ color: "#1976d2" }}>
                {data.website}
              </a>
            </p>
          </Box>
        </Box>
        {/* Row2 */}
        <Box sx={{ marginLeft: 30 }}>
          {/* ADDRESS */}
          <Box>
            <p style={styles.heading}>Address</p>
            <p style={styles.para}>
              {data.address.suite + " " + data.address.street}
            </p>
          </Box>
          {/* ZIPCODE */}
          <Box>
            <p style={styles.heading}>Zipcode</p>
            <p style={styles.para}>{data.address.zipcode}</p>
          </Box>
          {/* CITY */}
          <Box>
            <p style={styles.heading}>City</p>
            <p style={styles.para}>{data.address.city}</p>
          </Box>
          {/* PHONE */}
          <Box>
            <p style={styles.heading}>Phone</p>
            <p style={styles.para}>{data.phone}</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const styles = {
  container: {
    backgroundColor: "white",
    borderRadius: 4,
    marginX: 1,
    paddingY: 2,
    marginY: 2,
  },
  subContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingX: 2,
    paddingY: 2,
  },
  details: {
    borderRadius: 4,
    marginX: 5,
    paddingX: 5,
    paddingY: 2,
    boxShadow: "0 2px 5px #1976d2",
  },
  box: { width: 150 },
  heading: {
    marginBottom: -12,
    fontWeight: "bold",
    letterSpacing: -0.5,
    fontSize: 12,
    color: "#1976d2",
  },
  para: { fontSize: 15 },
};
