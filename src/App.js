import React, {useEffect, useState} from 'react';
import {Typography, Toolbar, AppBar} from "@mui/material";
import Fuse from 'fuse.js'
import SearchPage from "./Page/search";

function App() {

    const [technologies, setTechnologies] = useState([]);
    const tags = Array.from(new Set(technologies.reduce((a, t) => [...a, ...t.tags], [])));
    const fuse = new Fuse(technologies, {
        keys: ["name", "category", "description"]
    });

    useEffect(() => {
        fetch('data.json').then(response => {
            response.json().then(({technologies}) => {
                technologies.forEach(t => t.tagsSet = new Set(t.tags));
                setTechnologies(technologies);
            });
        });
    },[]);

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div">
                        Technology Advisor
                    </Typography>
                </Toolbar>
            </AppBar>
            <SearchPage technologies={technologies} tags={tags} fuse={fuse}/>
        </div>
    );
}

export default App;
