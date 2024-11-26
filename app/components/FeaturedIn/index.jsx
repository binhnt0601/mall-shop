import React from 'react';

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
                Featured In
            </h4>
            <div className="flex flex-wrap justify-around gap-5">
                {Array(32)
                    .fill(0)
                    .map((_, index) => (
                        <img
                            key={index}
                            src="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
                            alt="logo"
                        />
                    ))}
            </div>
        </div>
    );
}
