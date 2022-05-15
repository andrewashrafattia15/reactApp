import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      {" "}
      <Image></Image> <Title></Title> <Author></Author>
    </article>
  );
};

const Image = () => (
  <img src="https://www.closetag.com/images/photo4.jpg" alt="" />
);

const Title = () => <h1 className="title"> This is the Effiel Tower</h1>;

const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75rem", margin: "0.25rem" }}>
    Chris Hemsworth
  </h4>
);
ReactDom.render(<BookList />, document.getElementById("root"));

//26.0.4
