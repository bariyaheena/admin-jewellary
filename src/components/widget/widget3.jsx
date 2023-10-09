import Card from "components/card";

const Widget = ({ icon, title, subtitle }) => {
  return (
    <Card extra="!flex-row flex-grow items-center rounded-[20px] widget3">
      <div className="ml-[20px] flex h-[90px] w-auto flex-row items-center ">
        <div className="rounded-full  p-3 bg-navy-700">
          <span className="flex items-center text-white">
            {icon}
          </span>
        </div>
      </div>

      <div className="h-50 ml-4 flex w-auto flex-col justify-center">
        <h1 className="font-dm  font-medium text-dark-600">{title}</h1>
        <h4 className="text-xl font-bold text-navy-700 hover:text-white">
          {subtitle}
        </h4>
      </div>
    </Card>
  );
};

export default Widget;
