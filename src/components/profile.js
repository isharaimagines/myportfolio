import "react-multi-carousel/lib/styles.css";
import profileme from "../assets/img/1.jpg";
import React from "react"; // Replace with the actual path to your Batch component
// Assuming you're using Bootstrap components

export const Profile = () => {
  const Batch = [
    {
      b_icon: "ri-medal-line",
      b_batch: "Reword",
      b_number: "8+",
    },
    {
      b_icon: "ri-git-repository-fill",
      b_batch: "Repository",
      b_number: "9+",
    },
    {
      b_icon: "ri-timer-flash-line",
      b_batch: "Flash Time",
      b_number: "-0.2s",
    },
    {
      b_icon: "ri-infinity-line",
      b_batch: "DevOps",
      b_number: "20+",
    },
    {
      b_icon: "ri-flask-fill",
      b_batch: "Testing",
      b_number: "ꝏ",
    },
  ];

  return (
    <section className="profile" id="profile">
      <div className="container">
        <div className="profile-bx wow zoomIn">
          <h2>ABOUT ME</h2>
          <div className="newColom">
            <div className="profile_me">
              <div className="image">
                <img src={profileme} alt="profile_me"></img>
              </div>
              <h3 className="myname">
                Ravindu I. Siriwardhana &nbsp;
                <i class="ri-shield-flash-line"></i>
              </h3>

              <p>
                <i class="ri-edit-2-fill">
                  <span> 1000+</span>
                </i>

                <i class="ri-verified-badge-fill">
                  <span> 9+</span>
                </i>

                <i class="ri-thumb-up-fill">
                  <span> 20+</span>
                </i>
              </p>
            </div>
            <div className="discript">
              <div className="icons">
                {Batch.map((Batch) => {
                  return (
                    <div className="icon_logo">
                      <i class={Batch.b_icon}></i>
                      <sub>{Batch.b_batch}</sub>
                      <sup> &nbsp; {Batch.b_number}</sup>
                      <div className="count"></div>
                    </div>
                  );
                })}
              </div>

              <p>
                A passionate tech enthusiast with a multifaceted career spanning
                several pivotal roles in the technology landscape. With a
                relentless curiosity and a penchant for innovation, I've
                embarked on a journey to explore, create, and optimize in the
                world of software and data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
