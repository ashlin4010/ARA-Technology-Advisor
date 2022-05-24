import React, {useState} from "react";
import {Box, Grid, Paper, TextField, useMediaQuery} from "@mui/material";
import TagSelector from "../Tags/tagSelector";
import TechTable from "../Table/techTable";

const TAG_SEARCH_LIMIT = undefined;
const TEXT_SEARCH_LIMIT = 3;

export default function SearchPage(props) {
    const technologies = props.technologies;
    const tags = props.tags;
    const fuse = props.fuse;

    const smallScreen = useMediaQuery('(max-width:815px)');
    let searchTimeOut;

    // search
    const [tagSearch, setTagSearch] = useState([]);
    const [textSearch, setTextSearch] = useState([]);
    const searchResults = [
        ...textSearch
            .slice(0, TEXT_SEARCH_LIMIT),
        ...tagSearch
            .filter(item => !textSearch.map((t) => t.name).includes(item.name))
            .slice(0, TAG_SEARCH_LIMIT)
    ];

    // filter and sort technologies by tag count
    const handleTagChange = (event, tags) => {
        let results = technologies.map(technology => {
            const count = tags.reduce((p,c) => (technology.tagsSet.has(c.name) ? 1 : 0) + p, 0);
            return {count, technology: technology};
        })
            .sort((a, b) => b.count - a.count)
            .filter((t) => t.count)
            .map(o => o.technology);
        setTagSearch(results);
    }

    const handleSearch = (event) => {
        clearTimeout(searchTimeOut);
        searchTimeOut = setTimeout(() => {
            setTextSearch(fuse.search(event.target.value).map((i) => i.item));
        }, 500);
    };

    return (
        <Box>
            <Grid container spacing={2} justifyContent="center" style={{marginTop: smallScreen ? 0 : "5%"}}>
                <Grid item>
                    <Paper>
                        <TextField
                            multiline
                            rows={4}
                            sx={{width: 400}}
                            label="Search"
                            placeholder="In a few words describe your problem"
                            variant="outlined"
                            onChange={handleSearch}
                        />
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper>
                        <TagSelector color tags={tags} onChange={handleTagChange}/>
                    </Paper>
                </Grid>
            </Grid>
            <Box sx={{
                height: "500px",
                width: smallScreen ? "100%" : "816px",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "20px"
            }}>
                <TechTable technology={searchResults}/>
            </Box>
        </Box>
    );
}
