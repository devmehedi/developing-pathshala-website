import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import "./about.css"
const About = () => {
    return (
        <div className="d">
            <div className='about-header justify-content-between m-2'>
                <div className="p-3 ">
                    <h2 className="my-5">Dedicated To Your Online Success.</h2>
                    <p>
                        We, at The WEB Guy, are passionate about transparency, reliability, trust and outstanding customer care – we aren’t happy with our creation until you are. We take tremendous care of your needs. We understand your business goals and deliver them according to your business values. We do that by taking enormous care of our people – talented web design specialists who know how to create your online success.
                    </p>
                </div>
                <div>
                    <img className="about-img"
                        src="https://www.thewebguy.online/wp-content/uploads/2020/12/header-img.f2ee7bd0-1024x693-min.png"
                        alt=""
                    />
                </div>
            </div>
            <div className="container my-5">
                <h2>
                    Our Treasure Comprises Our People, Vision & Values</h2>
                <p>
                    The WEB Guy is not only a globally recognized IT company but also a family filled with talented experts that help global brands, enterprises, mid-size businesses or even startups with innovative solutions.
                </p>
            </div>

            <CardGroup className="container">
                <Card>
                    <Card.Body>
                        <Card.Title>Client-Centric Approach</Card.Title>
                        <Card.Text>
                            For any business, customers are always at the center. Being a leading website design company, our definition goes beyond our direct customers. We always start from where you are with your ideas and we think from YOUR end customers' perspectives, their pain areas and devise a solution that solves core problems to benefit your business.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="mx-3">
                    <Card.Body>
                        <Card.Title>Effective Collaboration</Card.Title>
                        <Card.Text>
                            Communication is the Key. We tend to over-communicate at times. Although sounds overwhelming, but eventually it works wonders for our client business. When our development team collaborates with our clients sitting a thousand miles away, it's apparent that we stay in touch with platforms and mediums that allow effectiveness, transparency, and accuracy.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Quality Delivered In Time</Card.Title>
                        <Card.Text>
                            With over two years of experience in the wordpress website design industry, we have a great set of internal frameworks with best-in-class infrastructure that enables us to deliver solutions with superior quality, at all times. All these years, we have learned how to prevent failures and replicate success. We don't just brag about quality. We define and deliver it in time.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default About;