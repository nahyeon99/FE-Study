import React, { useState } from "react";

function About() {
    return <h1>About</h1>;
  }
  function Product() {
    return <h1>Product</h1>;
  }
  function Contact() {
    return <h1>Contact</h1>;
  }
  
  function ContentsContainer({listName}) {
    if (listName === "about") {
      return <About />;
    } else if (listName === "product") {
      return <Product />;
    } else if (listName === "contact") {
      return <Contact />;
    }
  }
  
  function NavBar() {
    const [listName, setListName] = useState("about");
    const checkId = (e) => {
      setListName(e.target.id);
    };
  
    return (
      <>
        <nav>
          <ul>
            <li
              id="about"
              style={
                listName === "about" ? { color: "blue" } : { color: "black" }
              }
              onClick={checkId}
            >
              about
            </li>
            <li
              id="product"
              style={
                listName === "product" ? { color: "blue" } : { color: "black" }
              }
              onClick={checkId}
            >
              product
            </li>
            <li
              id="contact"
              style={
                listName === "contact" ? { color: "blue" } : { color: "black" }
              }
              onClick={checkId}
            >
              contact
            </li>
          </ul>
        </nav>
        <ContentsContainer listName={listName} />
      </>
    );
}

export default NavBar;