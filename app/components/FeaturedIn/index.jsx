import React from 'react';

import Image from 'next/image';

import logo from '@/assets/company-logo.png';

export default function FeaturedIn() {
    return (
        <div className="w-full px-[72px] py-[50px]">
            <h4
                style={{
                    textAlign: 'center',
                    fontSize: '40px',
                    color: '#fc9a14',
                    paddingBottom: '20px',
                    fontFamily: 'Work Sans',
                    fontWeight: 'bold',
                }}
            >
                Feature In
            </h4>
            <div className="flex flex-wrap justify-around gap-5">
                {Array(32)
                    .fill(0)
                    .map((_, index) => (
                        <Image
                            key={index}
                            width={200}
                            height={200}
                            src={logo}
                            alt="logo"
                            onClick={() =>
                                window.open('https://www.google.com', '_blank')
                            }
                        />
                    ))}
            </div>
        </div>
    );
}
