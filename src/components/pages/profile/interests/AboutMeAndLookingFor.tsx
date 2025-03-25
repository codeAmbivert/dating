interface AboutMeAndLookingFor {
  icons: {
    icon: React.ElementType;
    question: string;
    answer: string;
  }[];
  headerText: string;
}

const AboutMeAndLookingFor = ({ icons, headerText }: AboutMeAndLookingFor) => {
  return (
    <div className="w-[323px] h-[408px] bg-white border border-[#D9D9D9] rounded-md py-2 px-5">
      <div className="flex justify-between items-center text-sm font-medium">
        <p>{headerText}</p>
      </div>
      <div className="flex flex-col gap-3 if mt-4 text-xs text-center">
        {icons.map((Icon, i) => (
          <div key={i} className={`flex items-center gap-5`}>
            <div className={`flex gap-3 items-center w-28`}>
              <Icon.icon className="h-[20px] w-[20px]" />
              <p>{Icon.question}</p>
            </div>
            <p>{Icon.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMeAndLookingFor;
