import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./style.scss";
import useMediaQuery from "@mui/material/useMediaQuery";
import experience from "../../data/experience.json";
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
        {experience.map((x, y) => {
          return (
            <Tab
              className="tab"
              sx={{
                borderRight: 2,
                borderColor: "#495670",
              }}
              label={x.nav}
              {...a11yProps(y)}
            />
          );
        })}
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
        {experience.map((x, y) => {
          return (
            <TabPanel value={value} index={y}>
              <p>
                {x.position} <a href="#">@ {x.company}</a>
              </p>
              <p>
                {x.start} - {x.end}
              </p>
              <ul className="px-0">
                {x.points.map((data, key) => (
                  <li className="my-3" key={key * 58}>
                    {data}
                  </li>
                ))}
              </ul>
            </TabPanel>
          );
        })}
      </Box>
    </>
  );
}
