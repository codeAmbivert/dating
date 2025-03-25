import React from "react";
import MyHobbies from "./MyHobbies";
import MyInterests from "./MyInterests";
import AboutMeAndLookingFor from "./AboutMeAndLookingFor";
import {
  AgeIcon,
  GenderIcon,
  Height,
  Location,
  Nationality,
  RelationshipIcon,
  Religion,
  Weight,
  Work,
} from "../../../../../public/icons/iconsExport";

const Interests = () => {
  const AboutMe = [
    { icon: GenderIcon, question: "Gender:", answer: "Male" },
    { icon: AgeIcon, question: "Age:", answer: "27" },
    { icon: Work, question: "Occupation:", answer: "Engineer" },
    { icon: RelationshipIcon, question: "Relationship:", answer: "Single" },
    { icon: Location, question: "Location:", answer: "Lagos" },
    { icon: Height, question: "Height range:", answer: "5'5 - 6'0" },
    { icon: Weight, question: "Weight range:", answer: "60 - 70kg" },
    { icon: Religion, question: "Nationality:", answer: "Christianity" },
    { icon: Nationality, question: "Nationality:", answer: "Nigerian" },
  ];
  const lookingFor = [
    { icon: GenderIcon, question: "Gender:", answer: "Female" },
    { icon: AgeIcon, question: "Age:", answer: "18-25" },
    { icon: RelationshipIcon, question: "Relationship:", answer: "Single" },
    { icon: Location, question: "Location:", answer: "Lagos" },
    { icon: Height, question: "Height range:", answer: "5'5 - 6'0" },
    { icon: Weight, question: "Weight range:", answer: "60 - 70kg" },
    { icon: Religion, question: "Nationality:", answer: "Christianity" },
    { icon: Nationality, question: "Nationality:", answer: "Nigerian" },
  ];

  return (
    <div className=" max-w-[1059px] w-full mx-auto flex flex-wrap gap-5 pb-20">
      <MyHobbies />
      <MyInterests />
      <AboutMeAndLookingFor headerText="About Me" icons={AboutMe} />
      <AboutMeAndLookingFor headerText="I'm Looking for" icons={lookingFor} />
    </div>
  );
};

export default Interests;
