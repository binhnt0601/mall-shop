import React from 'react';

export default function Partnerships() {
    return (
        <div className="w-full px-[72px] py-[50px] bg-[#fff3e3]">
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
                Partnerships
            </h4>
            <div className="flex flex-wrap justify-around gap-5">
                {Array(15)
                    .fill(0)
                    .map((_, index) => (
                        <img
                            key={index}
                            src="https://fastly.picsum.photos/id/375/200/300.jpg?grayscale&hmac=EJ_gHztU6GOpq16CqZu5Zx0eWGoLEgISySgge7oSuzg"
                            alt="logo"
                        />
                    ))}
            </div>
        </div>
    );
}
