import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Js from "../assets/img/Js.png";
import Html from "../assets/img/Html.png";
import CSS from "../assets/img/Css.png";
import React from "../assets/img/React.png";
import Node from "../assets/img/Node.png";
import Angular from "../assets/img/Angular.png";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Technologies</h2>
                        <p>As a seasoned web developer, I possess expertise in a wide range of technologies essential for modern web development. My proficiency includes:</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={Js} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={Html} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={CSS} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={React} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={Node} alt="Image" />
                                <h5>NodeJs</h5>
                            </div>
                            <div className="item">
                                <img src={Angular} alt="Image" />
                                <h5>Angular</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
