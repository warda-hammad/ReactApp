import React, { useEffect, useState } from "react";
import {
  Portfoliosection,
  Title,
  SpanTitle,
  List,
  ListItem,
  ActiveListItem,
  BoxImage,
  Img,
  Overlay,
  SeeImage,
} from "./style.js";
import axios from "axios";
function Portfolio() {
  const [images, setimages] = useState([]);

  useEffect(() => {
    axios.get("js/data.json").then((res) => setimages(res.data.portfolio));
  }, []);
  const imagesItem = images.map((img) => {
    return (
      <BoxImage key={img.id}>
        <Img src={img.image} alt="" />
        <Overlay>
          <SeeImage>Show Image</SeeImage>
        </Overlay>
      </BoxImage>
    );
  });
  return (
    <Portfoliosection>
      <Title>
        <SpanTitle>My</SpanTitle> Portfolio
      </Title>
      <List>
        <ActiveListItem>All</ActiveListItem>
        <ListItem>HTML</ListItem>
        <ListItem>Photoshop</ListItem>
        <ListItem>Wordpress</ListItem>
        <ListItem>Mobile</ListItem>
      </List>
      <div>{imagesItem}</div>
    </Portfoliosection>
  );
}

export default Portfolio;
