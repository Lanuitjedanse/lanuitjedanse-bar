import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import GenresAutocompleteField from "./MutilselectGenres";
import { getAllCategories } from "@/api/musicApi";
import MultiselectGenres from "src/stories/MutilselectGenres.js";
import SearchInput from "./SearchInput";

export default function CreateBarForm() {
  const color = "secondary";

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl className={"flex flex-col space-evenly space-y-3 w-full"}>
        <TextField required id="outlined-required" color={color} label="Name" />
        <SearchInput />
        <TextField id="outlined-password-input" color={color} label="Website" />
        <FormControlLabel
          control={<Switch defaultChecked color={color} />}
          label="Dancefloor"
        />
        <MultiselectGenres />
        <Button variant="contained" color={color}>
          submit
        </Button>
      </FormControl>
    </Box>
  );
}
