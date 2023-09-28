import React from "react";
import mems from "./Members";
import Members from "./TeamMembers";

const Team = () => {
  return (
    <div className="py-20 flex justify-center px-8">
      <div className="w-[1200px] max-lg:w-full grid lg:grid-cols-3 gap-10">
        {mems.map((member) => {
          return (
            <Members
              key={member.id}
              name={member.name}
              img={member.Img}
              job={member.job}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Team;
