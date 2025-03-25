import { users } from "../../utils/user";
import Card from "./Card";

interface userProps {
  name: string;
  age: number | string;
  match: number | string;
  location: string;
  verified: boolean;
  description: string;
  banner: string;
  avatar: React.ElementType;
}

const DashboardCards = () => {
  return (
    <div className="py-10 flex flex-wrap justify-center gap-5 ">
      {users.map((user: userProps, i: number) => (
        <div key={i}>
          <Card user={user} />
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
