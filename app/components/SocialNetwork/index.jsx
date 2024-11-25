import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const SocialNetwork = ({ href, src, size = 25 }) => {
    return (
        <Link href={href}>
            <Image src={src} width={size} height={size} />
        </Link>
    );
};

export default SocialNetwork;
