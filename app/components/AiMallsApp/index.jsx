import { Typography } from '@mui/material';

const AiMallsApp = () => {
  return (
    <div
      className="bg-gradient-to-t from-[#3b2110] to-[#270f0b] px-4 pb-[100px] pt-[50px] text-white sm:px-[50px] lg:px-20"
      style={{ minHeight: '600px' }}
    >
      <div className="rounded-[20px] bg-[rgba(0,0,0,.3)] p-[5px]">
        <Typography fontSize={40} fontWeight="bold" className="p-5">
          EngLish ClassApp
        </Typography>
        <Typography className="px-5">Feature</Typography>
        <ul className="my-5 ml-6 list-outside list-disc">
          <li className="mb-2 text-[#fc9a14]">
            <span className="ml-2 text-white">
              Intelligent algorithms to provide personalized shopping
              experiences
            </span>
          </li>
          <li className="mb-2 text-[#fc9a14]">
            <span className="ml-2 text-white">User friendly</span>
          </li>
          <li className="mb-2 text-[#fc9a14]">
            <span className="ml-2 text-white">
              Shopping made easier and efficient
            </span>
          </li>
          <li className="mb-2 text-[#fc9a14]">
            <span className="ml-2 text-white">
              Suggest what the customer wants
            </span>
          </li>
          <li className="mb-2 text-[#fc9a14]">
            <span className="ml-2 text-white">
              Give insights what products are best to buy/sell
            </span>
          </li>
          <li className="mb-2 text-[#fc9a14]">
            <span className="ml-2 text-white">Safe and secure platform</span>
          </li>
          <li className="mb-2 text-[#fc9a14]">
            <span className="ml-2 text-white">
              Transparency and clarity in transactions
            </span>
          </li>
          <li className="mb-2 text-[#fc9a14]">
            <span className="ml-2 text-white">Good customer service</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AiMallsApp;
