import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import "../default.css";
import $ from "jquery";
import Raphael from "raphael";

export const Skills = () => {
  var o = {
    init: function () {
      this.diagram();
    },
    random: function (l, u) {
      return Math.floor(Math.random() * (u - l + 1) + l);
    },
    diagram: function () {
      var r = Raphael("diagram", 600, 600),
        rad = 73,
        speed = 250;

      r.circle(300, 300, 85).attr({ stroke: "none", fill: "transparent" });

      r.customAttributes.arc = function (value, color, rad) {
        var v = 3.6 * value,
          alpha = v === 360 ? 359.99 : v,
          random = o.random(91, 240),
          a = ((random - alpha) * Math.PI) / 180,
          b = (random * Math.PI) / 180,
          sx = 300 + rad * Math.cos(b),
          sy = 300 - rad * Math.sin(b),
          x = 300 + rad * Math.cos(a),
          y = 300 - rad * Math.sin(a),
          path = [
            ["M", sx, sy],
            ["A", rad, rad, 0, +(alpha > 180), 1, x, y],
          ];
        return { path: path, stroke: color };
      };

      $(".get")
        .find(".arc")
        .each(function (i) {
          var t = $(this),
            color = t.find(".color").val(),
            value = t.find(".percent").val(),
            order = t.find(".order").val();

          rad += 30;
          var z = r
            .path()
            .attr({ arc: [value, color, rad], "stroke-width": 26 });

          z.mouseover(function () {
            this.animate({ "stroke-width": 60, opacity: 0.8 }, 1000, "elastic");
            if (Raphael.type !== "VML")
              //solves IE problem
              this.toFront();

            $(".myskills")
              .find("ul li:nth-child(" + order + ")")
              .each(function () {
                $(this).addClass("hovered");
              });
          }).mouseout(function () {
            this.stop().animate(
              { "stroke-width": 26, opacity: 1 },
              speed * 4,
              "elastic"
            );

            $(".myskills")
              .find("ul li:nth-child(" + order + ")")
              .each(function () {
                $(this).removeClass("hovered");
              });
          });
        });
    },
  };
  $(function () {
    o.init();
  });

  return (
    <section className="skillsPage" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <div className="newColom">
                <div id="content">
                  <div className="legend">
                    <h1>Legend:</h1>
                    <div class="myskills">
                      <ul>
                        <li className="myList">Fullstack Developer</li>
                        <li className="myList">Computer Science</li>
                        <li className="myList">Generative AI</li>
                        <li className="myList">Artificial Intelligence (AI)</li>
                      </ul>
                    </div>
                  </div>
                  <div id="diagram"></div>
                </div>

                <div className="get">
                  <div className="arc">
                    {/* <!--  Fullstack Developer --> */}
                    <input type="hidden" className="percent" value="99" />
                    <input type="hidden" className="color" value="#BEDBE9" />
                    <input type="hidden" className="order" value="1" />
                  </div>
                  <div class="arc">
                    {/*  <!--  Computer Science --> */}
                    <input type="hidden" class="percent" value="90" />
                    <input type="hidden" class="color" value="#97BE0D" />
                    <input type="hidden" class="order" value="2" />
                  </div>
                  <div class="arc">
                    {/* <!-- Generative AI --> */}
                    <input type="hidden" class="percent" value="90" />
                    <input type="hidden" class="color" value="#D84F5F" />
                    <input type="hidden" class="order" value="3" />
                  </div>
                  <div class="arc">
                    {/*  <!--   Artificial Intelligence (AI) --> */}
                    <input type="hidden" class="percent" value="90" />
                    <input type="hidden" class="color" value="#88B8E6" />
                    <input type="hidden" class="order" value="4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
