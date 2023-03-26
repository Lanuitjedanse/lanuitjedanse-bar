import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function MusicChips(props) {
  const [items, setItems] = React.useState(props.items);

  const getGenreColor = (genre) => {
    if (genre === "house") {
      return "secondary";
    } else if (genre === "hiphop") {
      return "success";
    }

    return "default";
  };

  const handleDelete = (item) => {
    items.filter((currentItem) => currentItem.id !== item.id);
  };

  return (
    <Stack spacing={1} alignItems="left" className="music-chips--primary">
      <Stack direction="row" spacing={1}>
        {items.map((item, index) => {
          return (
            <Chip
              key={index}
              label={item.name}
              variant="stroked"
              size="small"
              onDelete={
                item.deletable ? (item) => handleDelete(item) : undefined
              }
            />
          );
        })}
      </Stack>
    </Stack>
  );
}
