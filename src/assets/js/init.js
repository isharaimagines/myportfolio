import React, { useEffect } from "react";
import Raphael from "raphael"; // Make sure to include the Raphael library

const Diagram = () => {
  useEffect(() => {
    const o = {
      random: function (l, u) {
        return Math.floor(Math.random() * (u - l + 1) + l);
      },
      diagram: function () {
        const r = Raphael("diagram", 600, 600),
          rad = 73,
          speed = 250;

        r.circle(300, 300, 85).attr({ stroke: "none", fill: "transparent" });

        r.customAttributes.arc = function (value, color, rad) {
          const v = 3.6 * value,
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

        document.querySelectorAll(".get .arc").forEach((element, i) => {
          const t = element,
            color = t.querySelector(".color").value,
            value = t.querySelector(".percent").value,
            order = t.querySelector(".order").value;

          rad += 30;
          const z = r
            .path()
            .attr({ arc: [value, color, rad], "stroke-width": 26 });

          z.mouseover(function () {
            this.animate({ "stroke-width": 60, opacity: 0.8 }, 1000, "elastic");
            if (Raphael.type !== "VML") this.toFront(); // solves IE problem

            document
              .querySelectorAll(".skills ul li:nth-child(" + order + ")")
              .forEach((el) => {
                el.classList.add("hovered");
              });
          }).mouseout(function () {
            this.stop().animate(
              { "stroke-width": 26, opacity: 1 },
              speed * 4,
              "elastic"
            );

            document
              .querySelectorAll(".skills ul li:nth-child(" + order + ")")
              .forEach((el) => {
                el.classList.remove("hovered");
              });
          });
        });
      },
      init: function () {
        this.diagram();
      },
    };

    o.init();

    // Cleanup function to remove the Raphael paper on component unmount
    return () => {
      Raphael("diagram").remove();
    };
  }, []); // Empty dependency array to ensure the useEffect runs only once on component mount

  return <div id="diagram" />;
};

export default Diagram;
