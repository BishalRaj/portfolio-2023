import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./style.scss";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className="tabpanel"
      {...other}
    >
      {value === index && (
        <Box sx={{ px: 3, py: 0 }}>
          <Typography className="tabpanel-content">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        // bgcolor: "background.paper",
        display: "flex",
        // height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderLeft: 2,
          borderColor: "#495670",
          minWidth: "150px",
          maxWidth: "150px",
          // textAlign: "left",
          // alignItems: "end",
          // color: "white",
        }}
      >
        <Tab className="tab" label="Gurung Tech" {...a11yProps(0)} />
        <Tab className="tab" label="Cloud Factory" {...a11yProps(1)} />
        <Tab className="tab" label="Terakoya" {...a11yProps(2)} />
        <Tab className="tab" label="Suprieve" {...a11yProps(3)} />
        {/* <Tab className="tab" label="Item Five" {...a11yProps(4)} />
        <Tab className="tab" label="Item Six" {...a11yProps(5)} />
        <Tab className="tab" label="Item Seven" {...a11yProps(6)} /> */}
      </Tabs>
      <TabPanel value={value} index={0}>
        <p>
          Frontend Developer <a href="#">@ Gurung Tech</a>
        </p>
        <p>Mar 2021 - Jan 2022</p>
        <ul>
          <li className="my-3">
            Experienced Frontend Developer with knowledge of modern web
            development technologies including React, HTML, CSS, and JavaScript
          </li>
          <li className="my-3">
            Proven ability to collaborate with multi-disciplinary teams and
            translate design into functional and visually appealing web
            applications
          </li>
          <li className="my-3">
            Knowledgeable in implementing best practices for web design,
            including accessibility and SEO optimization, and continuously
            monitors and optimizes website performance.
          </li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Cloud Factory
      </TabPanel>
      <TabPanel value={value} index={2}>
        Terakoya
      </TabPanel>
      <TabPanel value={value} index={3}>
        Suprieve
      </TabPanel>
      {/* <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
    </Box>
  );
}
