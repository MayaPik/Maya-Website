import React from "react";
import { skills } from "../../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-10">
         
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-3 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-purple-900 rounded flex p-3 h-full items-center">
                <span className="title-font font-large text-green-200">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
