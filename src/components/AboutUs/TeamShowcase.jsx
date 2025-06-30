import React from "react";
import "./TeamShowcase.css";

const teamMembers = [
  {
    name: "Prashant Roy",
    role: "Head of Education Department Bihar.",
    img: "/team_members/prashant_roy.png",
    desc: "Visionary leader passionate about social change and community empowerment.",
  },
  {
    name: "Deepak Kumar",
    role: "State Head Bihar",
    img: "/team_members/deepak_kumar.png",
    desc: "Expert in project execution, ensuring every initiative makes a real impact.",
  },
  {
    name: "Kamlesh Kumar",
    role: "Ashs kiran Grd Secretary",
    img: "/team_members/kamlesh_kumar.png",
    desc: "Connecting with communities and building lasting relationships.",
  },
  {
    name: "Asha Sharma",
    role: "President",
    img: "/team_members/asha_sharma.png",
    desc: "Dedicated to spreading knowledge and opportunities to all.",
  }
];

const TeamShowcase = ({ id }) => {
  return (
    <section className="team-showcase" id={id}>
      <div className="team-showcase__container">
        <div className="team-showcase__header">
          <h2 className="team-showcase__title">Meet Our Team</h2>
          <p className="team-showcase__subtitle">
            Our passionate team is the heart of Asha Kiran GRD. Together, we work to create brighter futures and lasting change.
          </p>
        </div>
        <div className="team-showcase__grid">
          {teamMembers.map((member, idx) => (
            <div className="team-showcase__card" key={idx}>
              <div className="team-showcase__img-wrapper">
                <img
                  src={member.img}
                  alt={member.name}
                  className="team-showcase__img"
                  loading="lazy"
                />
              </div>
              <div className="team-showcase__info">
                <h3 className="team-showcase__name">{member.name}</h3>
                <span className="team-showcase__role">{member.role}</span>
                <p className="team-showcase__desc">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamShowcase; 
