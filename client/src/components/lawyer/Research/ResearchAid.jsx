import React from 'react'
import { Divider } from '@mui/material';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import styles from "./ResearchAid.module.css";

const ResearchAid = () => {
    const [newData, setNewData] = React.useState({});
    const handleDataChange = (e) => {
      setNewData({ ...newData, [e.target.name]: e.target.value });
    };
    const handleDataSubmit = async (e) => {
      e.preventDefault();
    };
    const container = styles.container + " flex flex-col gap-8 p-8";
    return (
      <div className={container}>
        <h1 className="text-2xl sm:text-4xl font-semibold">Research</h1>
        <div className={styles.searchbar}>
          <input className={styles.search} type="text" placeholder="Search" />
          <button className={styles.searchbtn}>Search</button>
        </div>
        <div className={styles.filters}>
          <Box
            className="mt-2 flex flex-row justify-between gap-5 items-center flex-wrap"
            component="form"
            noValidate
            onSubmit={handleDataSubmit}
          >
            <p className="text-xl font-semibold">Available Filters</p>
            <div className="flex flex-row gap-6 items-center flex-wrap flex-1">
              <TextField
                required
                name="type"
                id="outlined-required"
                select
                size="small"
                sx={{
                  width: "15rem",
                  color: "var(--text-color)",
                  background: "var(--bg-color-2)",
                }}
                label="Select Type"
                onChange={handleDataChange}
              >
                <MenuItem value="opt1">Option 1</MenuItem>
                <MenuItem value="opt2">Option 2</MenuItem>
                <MenuItem value="opt3">Option 3</MenuItem>
              </TextField>
              <TextField
                required
                name="type"
                id="outlined-required"
                select
                size="small"
                sx={{
                  width: "15rem",
                  color: "var(--text-color)",
                  background: "var(--bg-color-2)",
                }}
                label="Select Type"
                onChange={handleDataChange}
              >
                <MenuItem value="opt1">Option 1</MenuItem>
                <MenuItem value="opt2">Option 2</MenuItem>
                <MenuItem value="opt3">Option 3</MenuItem>
              </TextField>
              <TextField
                required
                name="type"
                id="outlined-required"
                select
                size="small"
                sx={{
                  width: "15rem",
                  color: "var(--text-color)",
                  background: "var(--bg-color-2)",
                }}
                label="Select Type"
                onChange={handleDataChange}
              >
                <MenuItem value="opt1">Option 1</MenuItem>
                <MenuItem value="opt2">Option 2</MenuItem>
                <MenuItem value="opt3">Option 3</MenuItem>
              </TextField>
            </div>
          </Box>
        </div>
        <div className={styles.results}>
          <div className={styles.result}>
            <div className={styles.header}>
              <h1>Title</h1>
              <h1>January, 1995</h1>
            </div>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Adipisci, explicabo fuga eum quasi ex reprehenderit obcaecati, a
              maiores, vitae enim fugiat? Recusandae vitae sint consequuntur,
              cum deleniti, quibusdam culpa ut quae, dignissimos odit beatae
              fugiat. Quam optio sint ex beatae quod facere itaque id
              consectetur modi iusto expedita suscipit sequi eligendi mollitia
              distinctio libero consequuntur rem cupiditate nesciunt maxime, et
              deserunt dolore. Corrupti sapiente culpa amet quae eos dolorum ex.
            </p>
            <div className={styles.footer}>
              <h3>Client Name</h3>
              <button className={styles.viewbtn}>View</button>
            </div>
          </div>
          <Divider
            sx={{
              height: "0.05rem",
              background: "var(--text-color)",
              margin: "1.5rem 0",
            }}
          />
          <div className={styles.result}>
            <div className={styles.header}>
              <h1>Title</h1>
              <h1>January, 1995</h1>
            </div>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Adipisci, explicabo fuga eum quasi ex reprehenderit obcaecati, a
              maiores, vitae enim fugiat? Recusandae vitae sint consequuntur,
              cum deleniti, quibusdam culpa ut quae, dignissimos odit beatae
              fugiat. Quam optio sint ex beatae quod facere itaque id
              consectetur modi iusto expedita suscipit sequi eligendi mollitia
              distinctio libero consequuntur rem cupiditate nesciunt maxime, et
              deserunt dolore. Corrupti sapiente culpa amet quae eos dolorum ex.
            </p>
            <div className={styles.footer}>
              <h3>Client Name</h3>
              <button className={styles.viewbtn}>View</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ResearchAid