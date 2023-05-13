import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./style.scss";
import useMediaQuery from "@mui/material/useMediaQuery";

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

export default function HorizontalTabs() {
  const [value, setValue] = React.useState(0);
  const matches = useMediaQuery("(min-width:428px)");
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        orientation="horizontal"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Horizontal tabs"
        // sx={{
        //   minWidth: "150px",
        //   maxWidth: "150px",
        // }}
      >
        <Tab
          className="tab"
          sx={{
            borderRight: 2,
            borderColor: "#495670",
          }}
          label="Gurung Tech"
          {...a11yProps(0)}
        />
        <Tab
          className="tab"
          sx={{
            borderRight: 2,
            borderColor: "#495670",
          }}
          label="Cloud Factory"
          {...a11yProps(1)}
        />
        <Tab
          className="tab"
          sx={{
            borderRight: 2,
            borderColor: "#495670",
          }}
          label="Terakoya"
          {...a11yProps(2)}
        />
        <Tab
          className="tab"
          sx={{
            borderRight: 2,
            borderColor: "#495670",
          }}
          label="Suprieve"
          {...a11yProps(3)}
        />
      </Tabs>
      <br />
      <Box
        sx={{
          flexGrow: 1,
          // bgcolor: "background.paper",
          display: "flex",
          // height: "fit-content",
          minHeight: "300px",
        }}
      >
        <TabPanel value={value} index={0}>
          <p>
            Frontend Developer <a href="#">@ Gurung Tech</a>
          </p>
          <p>Mar 2021 - Jan 2022</p>
          <ul className="px-0">
            <li className="my-3">
              Experienced Frontend Developer with knowledge of modern web
              development technologies including React, HTML, CSS, and
              JavaScript <i>(ES6 | React | Redux)</i>
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
          <p>
            Team Lead | Data Specialist <a href="#">@ Cloud Factory</a>
          </p>
          <p>Jan 2021 – Jan 2022</p>
          <ul className="px-0">
            <li className="my-3">
              Led a team as a Team Captain in preparing data on Levee Annotation
              for training AI to prevent natural disasters by finding
              disaster-prone areas in Japan
            </li>
            <li className="my-3">
              Developed team management skills, scheduling, and quality
              assurance expertise during the project
            </li>
            <li className="my-3">
              Prepared quality data for Levee annotation in areas of Japan to
              train AI as a Data Specialist.
            </li>
          </ul>
        </TabPanel>{" "}
        <TabPanel value={value} index={2}>
          <p>
            Web Developer <a href="#">@ Terakoya Academia</a>
          </p>
          <p>Jul 2020 - Dec 2020</p>
          <ul className="px-0">
            <li className="my-3">
              As an intern at Terakoya Academia Inc., contributed to web
              development projects, including the Report Manager application for
              Suprieve Inc
            </li>
            <li className="my-3">
              Developed landing pages for YouMe School and Terakoya Academia,
              working closely with clients to understand their requirements and
              improve user engagement and experience
            </li>
            <li className="my-3">
              Utilized various technologies such as Node.js, EJS, CSS, and
              Bootstrap to develop and maintain web app features, implement
              responsive design, and ensure easy navigation. Additionally,
              utilized version control tools such as GitHub and ClickUp for
              project management.
            </li>
          </ul>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <p>
            Research Intern <a href="#">@ Suprieve Inc.</a>
          </p>
          <p>Jul 2020 - Jul 2020</p>
          <ul className="px-0">
            <li className="my-3">
              Developed an automated report management system for the company's
              internal use using Node JS
            </li>
            <li className="my-3">
              Utilized Google APIs to fetch schedules and reports from Google
              Calendar and store them in Google Sheets
            </li>
            <li className="my-3">
              Implemented Cron job to automate the task of generating reports
              every night, while communicating with multi-disciplinary teams of
              engineers, designers, producers, and clients on a daily basis.
            </li>
          </ul>
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
    </>
  );
}
