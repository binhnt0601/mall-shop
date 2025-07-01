import { Typography } from '@mui/material';
import Image from 'next/image';

const data = [
  {
    img: '/icons/target.svg',
    description:
      'EngLish Classincorporating AI technologies like personalized recommendations, chatbots, and image recognition. It offers a better user experience, lower fees for sellers, and unique AI-powered features.',
  },
  {
    img: '/icons/target.svg',
    description:
      'Our target audience is broad, but we plan to focus on millennial and Gen Z shoppers who are tech-savvy and value convenience and personalization in their shopping experience.',
  },
  {
    img: '/icons/target.svg',
    description:
      'EngLish Classis to implement an AI powered verification process in place for sellers to ensure that only legitimate businesses or individuals are selling products on the platform. It also have a system for managing product listings to prevent duplicates or inaccurate listings.',
  },
  {
    img: '/icons/target.svg',
    description:
      'EngLish Classwill use secure payment processing systems to handle transactions and implement SSL encryption to protect user data. We will also add options to shop and pay using cryptocurrency.',
  },
  {
    img: '/icons/target.svg',
    description:
      'EngLish Classwill be using social media, influencer marketing, and search engine optimization to attract and retain customers. It also offers incentives like loyalty programs and discounts to encourage repeat business.',
  },
];

const TechnologyAndTargetMarket = () => {
  const headline = (
    <Typography style={{ fontWeight: 'bold', fontSize: 40 }}>
      <span style={{ color: '#fc9a14' }}>EngLish ClassTechnology</span> & Target
      Market
    </Typography>
  );

  return (
    <div className="relative  min-h-[850px] bg-gradient-to-b from-[#3b2110] to-[#270f0b] md:min-h-[1000px] xl:min-h-[650px]">
      <div className="absolute -bottom-32 right-1/2 w-full translate-x-1/2 px-5 md:px-14 lg:px-40">
        <div
          className="w-full rounded-2xl border-2 border-[#fc9a14] bg-gradient-to-r from-[#22405f]
        to-[#270f0b] px-6 py-5 text-white"
        >
          <div className="mx:20 mb-5 text-center md:mx-40">{headline}</div>
          <div className="ml-0 md:ml-[40%]">
            {data.map((item, index) => (
              <div key={index} className="mb-5 flex items-center gap-5">
                <Image width={50} height={50} src={item.img} alt="target" />
                <Typography>{item.description}</Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyAndTargetMarket;
