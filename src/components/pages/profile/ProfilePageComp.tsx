import About from "./About";
import Interests from "./interests/Interests";
import ProfileHeader from "./ProfileHeader";

const ProfilePageComp = () => {
  return (
    <div className="max-w-7xl w-full mx-auto px-5 pt-10">
      <div className="flex flex-col gap-5">
        <ProfileHeader />
        <About />
        <Interests />
      </div>
    </div>
  );
};

export default ProfilePageComp;
