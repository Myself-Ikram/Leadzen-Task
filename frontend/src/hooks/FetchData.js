import { useEffect, useState } from "react";
import axios from "axios";
import { Users } from "../store/UserSlice";
import { useDispatch } from "react-redux";

function FetchData() {
  const [data, setData] = useState();
  const dispatch = useDispatch();
  // Fetch data from backend
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/data");
        const d = await response?.data;
        if (d.length > 0) {
          setData(d);
          // Store in Redux state
          dispatch(Users(d));
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);
}

export default FetchData;
