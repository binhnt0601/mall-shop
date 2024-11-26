import { Typography } from "@mui/material";

const AiMallsApp = () => {
  return (
    <div
      className="text-white bg-[#270f0b] sm:px-[50px] px-4 pt-[50px] pb-[100px]"
      style={{ minHeight: "calc(100vh - 64px)" }}
    >
      <div className="bg-[rgba(0,0,0,.3)] rounded-[20px] p-[5px]">
        <Typography fontSize={40} fontWeight="bold" className="p-5">
          AiMalls App
        </Typography>
        <Typography className="px-5">Feature</Typography>
        <ul className="list-outside list-disc ml-6 my-5">
          <li className="text-[#fc9a14] mb-2">
            <span className="text-white ml-2">
              Intelligent algorithms to provide personalized shopping
              experiences
            </span>
          </li>
          <li className="text-[#fc9a14] mb-2">
            <span className="text-white ml-2">User friendly</span>
          </li>
          <li className="text-[#fc9a14] mb-2">
            <span className="text-white ml-2">
              hopping made easier and efficient
            </span>
          </li>
          <li className="text-[#fc9a14] mb-2">
            <span className="text-white ml-2">
              Suggest what the customer wants
            </span>
          </li>
          <li className="text-[#fc9a14] mb-2">
            <span className="text-white ml-2">
              Give insights what products are best to buy/sell
            </span>
          </li>
          <li className="text-[#fc9a14] mb-2">
            <span className="text-white ml-2">Safe and secure platform</span>
          </li>
          <li className="text-[#fc9a14] mb-2">
            <span className="text-white ml-2">
              Transparency and clarity in transactions
            </span>
          </li>
          <li className="text-[#fc9a14] mb-2">
            <span className="text-white ml-2">Good customer service</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AiMallsApp;
