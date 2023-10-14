import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Business from "./Business";
import Sports from "./Sports";
import Science from "./Science";
import backendUrl from "../config";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const HeadlineNav = () => {
  const [value, setValue] = React.useState(0);
  const [businessInfo, setBusinessInfo] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const businessData = await axios.get(`${backendUrl}/headline/business`);
        setBusinessInfo(businessData.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const [sportsInfo, setSportsInfo] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Delay the API call by 5 seconds

        const sportsData = await axios.get(`${backendUrl}/headline/sports`);
        setSportsInfo(sportsData.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const [scienceInfo, setScienceInfo] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Delay the API call by 5 seconds

        const scienceData = await axios.get(`${backendUrl}/headline/science`);
        setScienceInfo(scienceData.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper", p: 5 }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="BUSINESS" />
        <Tab label="SPORTS" />
        <Tab label="SCIENCE" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Business businessInfo={businessInfo} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Sports sportsInfo={sportsInfo} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Science scienceInfo={scienceInfo} />
      </TabPanel>
    </Box>
  );
};

export default HeadlineNav;
