import React, { Component } from "react";

export default class app extends Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      title: "Chart Title",
      xValues: [],
      yValues: [],
      type: "line",
      url: "http://www.letsracethailand.com/extensions/themes/gae_letracethailand101/staticfiles/images/placeholder-image.png",
    };
  }

  componentDidMount() {
    console.log("componentDid mount");
    this.setState({ title: "lapalap" });
    throw new Error("err");
  }

  shouldComponentUpdate() {
    console.log("update");
    return true;
  }

  componentDidCatch(err, info) {
    console.log("catch err", err, info);
  }

  render() {
    console.log("render");
    return <div>app</div>;
  }
}
