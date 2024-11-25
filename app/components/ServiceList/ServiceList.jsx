'use client';
import Grid from '@mui/material/Grid';

import ServiceImage1 from '@/assets/service-1.svg';
import ServiceImage2 from '@/assets/service-2.svg';
import ServiceImage3 from '@/assets/service-3.svg';
import ServiceImage4 from '@/assets/service-4.svg';
import ServiceImage5 from '@/assets/service-5.svg';
import ServiceImage6 from '@/assets/service-6.svg';
import useViewPort from '@/hooks/useViewPort';
import Card from '@/components/Card';

const ServiceList = () => {
    const { isTablet } = useViewPort();

    const servicesData = [
        {
            title: 'Strategy Assessment',
            description:
                'We analyze your goals and assess how blockchain can impact your business, providing clear strategies to guide your transformation efforts effectively.',
            img: ServiceImage1,
        },
        {
            title: isTablet
                ? 'Rapid Prototyping'
                : 'Hands-On Training & Rapid Prototyping',
            description:
                "Our expert-led workshops and training sessions enhance your team's blockchain skills, fast-tracking your development and readiness for blockchain integration.",
            img: ServiceImage2,
        },
        {
            title: 'Solution Design',
            description:
                'We design comprehensive blockchain solutions that streamline your processes and systems, boosting your business efficiency and readiness for future growth.',
            img: ServiceImage3,
        },
        {
            title: 'Build & Implementation',
            description:
                'Our team expertly manages the integration of blockchain into your existing systems, ensuring a seamless implementation that scales with your needs.',
            img: ServiceImage4,
        },
        {
            title: 'Assets & Solutions',
            description:
                'We offer customized blockchain enhancements, like improved security features and management tools, to give you more control over your blockchain applications.',
            img: ServiceImage5,
        },
        {
            title: 'Ecosystem Management',
            description:
                'Let us manage your blockchain infrastructure so you can concentrate on your core business, assured that your blockchain operations are optimized and effective.',
            img: ServiceImage6,
        },
    ];

    return (
        <>
            {servicesData.map((i, idx) => (
                <Grid key={`item-service-${idx}`} item md={4} sm={6} xs={12}>
                    <Card
                        imgSrc={i.img}
                        title={i.title}
                        description={i.description}
                        size={84}
                    />
                </Grid>
            ))}
        </>
    );
};

export default ServiceList;
