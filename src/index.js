import React from "react";
import ReactDOM from "react-dom";
function Card(props) {
  console.log(props);
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}
ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      tel="+123 456 789"
      email="b@beyonce.com"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    />
    <Card
      name="Jack Bauer"
      tel="+987 654 321"
      email="jack@nowhere.com"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
    />
    <Card
      name="Chuck Norris"
      tel="+918 372 574"
      email="gmail@chucknorris.com"
      img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
    />

    <input type="text" />
  </div>,
  document.getElementById("root")
);
