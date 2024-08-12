import React from "react";
import myimg from "./assets/portfolio.jpg";
import Button from "./Button";
const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center g-4 ">
      <img src="src/assets/360_F_622221708_Gg16ZdaNSixeaIORq9MuuT4w9VWTkYw4.jpg" alt="" className="flex flex-col rounded-full " />

      <h1>HI!I AM KRIPA !</h1>
      <h2> Fullstack Developer</h2>
      <p>
        {" "}
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus omnis impedit mollitia officia beatae, itaque iusto, quos debitis, id iste architecto voluptates aliquid aspernatur perspiciatis? Iusto odio ut consequuntur fugiat illum amet unde corrupti sapiente sint eveniet, consequatur error ab laboriosam eius numquam! Molestias mollitia inventore obcaecati possimus nostrum delectus harum. Debitis atque quibusdam harum qui!
      </p>
      <Button title ="Contact Me" type="orange" icon="contact" />
     <Button title="moreinfo" type="pink" icon="github"/>
    </div>
  );
};

export default Hero;
