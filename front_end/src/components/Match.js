import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function Tags() {
  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={interests}
        getOptionLabel={(option) => option.title}
        defaultValue={[interests[3]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Match Interest"
            placeholder="Favorites"
          />
        )}
      />
    </Stack>
  );
}

const interests = [
  { title: "defense" },
  { title: "aeronautics" },
  { title: "AI" },
  { title: "robotics" },
  { title: "space" }
];
