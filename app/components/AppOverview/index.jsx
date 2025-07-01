import React from 'react';

import Typography from '@mui/material/Typography';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function AppOverview() {
  const headline = (
    <Typography style={{ fontWeight: 'bold', fontSize: 40, color: 'white' }}>
      App <span style={{ color: '#fc9a14' }}>Overview</span>
    </Typography>
  );

  return (
    <div
      padding="5px"
      className="flex w-full flex-col items-center gap-5 bg-[#270f0b] px-3 py-10 md:px-12 lg:px-40"
    >
      {headline}

      <div className="w-full">
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            enabled: true,
            clickable: true,
          }}
          modules={[Autoplay, Navigation, Pagination]}
          className="[&_div.swiper-button-next]:text-background [&_div.swiper-button-prev]:text-background relative rounded-lg"
        >
          {[
            'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8MHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1673603988651-99f79e4ae7d3?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8MHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1465189684280-6a8fa9b19a7a?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8MHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D',
          ].map((img, index) => (
            <SwiperSlide key={index} className="select-none">
              <img
                src={img}
                alt={`image-${index}`}
                className="h-[28rem] w-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
