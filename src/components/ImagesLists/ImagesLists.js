import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { imageData } from "./imageData";

const ImagesLists = () => {
  return (
    <Box>
      <ImageList variant="standard" cols={3}>
        {imageData.map((item, i) => (
          <ImageListItem key={i}>
            <img src={item.img} alt={item.title} loading="lazy" />
            <ImageListItemBar
              title={item.title}
              position="below"
              subtitle={<span>{item.title} is prepared by Max</span>}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default ImagesLists;
