import React, { Component } from "react";
import {
  WorkSecsion,
  WorkTitle,
  TilteSpan,
  Part,
  Icon,
  PartTile,
  HrLine,
  Paragraph,
} from "./style.js";
import axios from "axios";
class Work extends Component {
  state = {
    works: [],
  };
  componentDidMount() {
    axios
      .get("js/data.json")
      .then((res) => this.setState({ works: res.data.works }));
  }
  render() {
    const { works } = this.state;
    const WorkList = works.map((list) => {
      return (
        <Part first={list.id} key={list.id}>
          <Icon className={list.icon_name}></Icon>
          <PartTile>{list.title}</PartTile>
          <HrLine />
          <Paragraph>{list.body}</Paragraph>
        </Part>
      );
    });
    return (
      <WorkSecsion>
        <div className="container">
          <WorkTitle>
            <TilteSpan>My</TilteSpan> Work
          </WorkTitle>
          {WorkList}
        </div>
      </WorkSecsion>
    );
  }
}

export default Work;
