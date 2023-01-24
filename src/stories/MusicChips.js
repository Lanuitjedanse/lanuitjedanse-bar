import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function MusicChips(props) {
  const [items, setItems] = React.useState([
    { id: 0, genre: "techno" },
    { id: 1, genre: "house" },
  ]);

  const getGenreColor = (genre) => {
    if (genre === "house") {
      return "secondary";
    } else if (genre === "hiphop") {
      return "success";
    }

    return "default";
  };

  const submitDelete = (item) => {
    console.log(item);
    const newItems = items.filter((currentItem) => currentItem.id !== item.id);
    setItems(newItems);
  };

  return (
    <Stack spacing={1} alignItems="left" className="music-chips--primary">
      <Stack direction="row" spacing={1}>
        {items.map((item, index) => {
          return (
            <Chip
              key={index}
              label={item.genre.toUpperCase()}
              color={getGenreColor(item.genre)}
              variant="stroked"
              size="small"
              onDelete={props.hasRight ? submitDelete(item) : undefined}
            />
          );
        })}
      </Stack>
    </Stack>
  );
}
