import design from '../../../assets/images/design-main.svg';
import websites from '../../../assets/images/websites.svg';
import mobileweb from '../../../assets/images/mobile-web.svg';
import branding from '../../../assets/images/branding.svg';
import designConcept from '../../../assets/images/design-concept.svg';
import etl from '../../../assets/images/etlpic.jpg';
import dashboard from '../../../assets/images/analyticspic.jpeg';
import eng from '../../../assets/images/eng.avif';
import agileDevelopment from '../../../assets/images/agile.png';

import './whatido.component.scss'

const WhatIDo = () => {
    return (
        <div className='whatido-bg'>
            <section className="container whatido">
                <h2 className="text-lg pt-12 md:mb-6 uppercase text-black-600 md:text-left text-center">What I Do</h2>
                <article className="latest-work">
                    <h3 className='my-6'>Data & Automation</h3>
                    <div className="what-i-do">
                        <p className='text-base md:text-2xl pb-10'>I specialize in creating intelligent data workflows and dashboards to turn raw data into actionable insights — automating where it matters most.</p>
                        <div className="what-i-do-info dev">
                            <div className="info-cards-wrapper">
                                <div className="info-cards border border-gray" data-aos="fade-up" data-aos-offset="10" data-aos-delay="30" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                                    <div className='info-cards-img border-b border-gray'>
                                        <img src={etl} alt="ETL and Data Pipeline" className='icon-in-bg' />
                                    </div>
                                    <div className='info-cards-content'>
                                        <div className="info-cards-title text-2xl py-4 text-blue-700">ETL & Data Pipelines</div>
                                        <p className='text-lg leading-6 pb-6 px-12'>I automate data extraction, transformation, and loading using tools like Apache Airflow, Playwright, and Databricks, increasing data efficiency and reliability.</p>
                                    </div>
                                </div>
                                <div className="info-cards border border-gray" data-aos="fade-up" data-aos-offset="10" data-aos-delay="30" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                                    <div className='info-cards-img border-b border-gray'>
                                        <img src={dashboard} alt="Dashboard and BI" className='icon-in-bg' />
                                    </div>
                                    <div className='info-cards-content'>
                                        <div className="info-cards-title text-2xl py-4 text-blue-700">Dashboarding & BI</div>
                                        <p className='text-lg leading-6 pb-6 px-12'>I build insightful dashboards using Power BI and Python to help stakeholders understand KPIs and make data-driven decisions.</p>
                                    </div>
                                </div>
                                <div className="info-cards border border-gray" data-aos="fade-up" data-aos-offset="10" data-aos-delay="30" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                                    <div className='info-cards-img border-b border-gray'>
                                        <img src={eng} alt="Data Engineering and Validation" className='icon-in-bg' />
                                    </div>
                                    <div className='info-cards-content'>
                                        <div className="info-cards-title text-2xl py-4 text-blue-700">Data Engineering & Validation</div>
                                        <p className='text-lg leading-6 pb-6 px-12'>I design scalable data architectures and implement validation frameworks to ensure data quality, integrity, and performance.</p>
                                    </div>
                                </div>
                                {/* <div className="info-cards border border-gray" data-aos="fade-up" data-aos-offset="10" data-aos-delay="30" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                                    <div className='info-cards-img border-b border-gray'>
                                        <img src={agileDevelopment} alt="Agile Software Development" className='icon-in-bg' />
                                    </div>
                                    <div className='info-cards-content'>
                                        <div className="info-cards-title text-2xl py-4 text-blue-700">Agile Software Development</div>
                                        <p className='text-lg leading-6 pb-6 px-12'>Developing solutions using agile methodologies, ensuring continuous improvement, quick iterations, and flexibility throughout the project lifecycle.</p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </article>
                <article className="latest-work border-t border-gray-300 develop">
                    <h3 className='my-6'>Development</h3>
                    <div className="what-i-do">
                        <div className="what-i-do-info">
                            <div className='flex flex-col' data-aos="fade-up" data-aos-offset="10" data-aos-delay="20" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                                <p className='text-xl md:text-2xl pr-3'>I build robust, scalable digital products using modern technologies like Python, Java, Angular, and cloud platforms. From web apps to data systems, I focus on speed, security, and performance.</p>
                                <div className="what-i-do-info-art mb-8 md:mb-none mt-8 mx-auto">
                                    <img src={design} alt="Design" className='' />
                                </div>
                            </div>
                            <div className="info-cards-wrapper" data-aos="fade-up" data-aos-offset="10" data-aos-delay="30"
                                data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-mirror="true"
                                data-aos-once="false">
                                <div className="info-cards shadow-md">
                                    <div className="info-icon-img pb-1 md:py-3">
                                        <img src={websites} alt="Websites and Platforms" />
                                    </div>
                                    <div className="info-cards-title text-2xl pb-3 text-blue-700">Full-Stack Web Development</div>
                                    <p className='text-lg leading-6'>I develop responsive web platforms using HTML, CSS, Flask, Angular, and JavaScript — delivering clean, user-friendly interfaces with solid backend logic.</p>
                                </div>
                                {/* <div className="info-cards shadow-md">
                                    <div className="info-icon-img pb-1 md:py-3">
                                        <img src={mobileweb} alt="Mobile Web Apps" />
                                    </div>
                                    <div className="info-cards-title text-2xl pb-3 text-blue-700">Mobile Web Apps</div>
                                    <p className='text-lg leading-6'>Bringing your ideas to life through mobile & web apps that deliver a smooth, user-friendly experience.</p>
                                </div> */}
                                <div className="info-cards shadow-md">
                                    <div className="info-icon-img pb-1 md:py-3">
                                        <img src={branding} alt="Strategy and Branding" />
                                    </div>
                                    <div className="info-cards-title text-2xl pb-3 text-blue-700">API Integration & Backend Development</div>
                                    <p className='text-lg leading-6'>I design and develop RESTful APIs and backend systems using Flask, Python, and Java — enabling seamless data flow and integration.</p>
                                </div>
                                <div className="info-cards shadow-md" >
                                    <div className="info-icon-img pb-1 md:py-3">
                                        <img src={designConcept} alt="Design Concept" />
                                    </div>
                                    <div className="info-cards-title text-2xl pb-3 text-blue-700">Agile Software Development</div>
                                    <p className='text-lg leading-6'>I follow agile practices and CI/CD pipelines using GitHub, Jenkins, Jira, and TDD to deliver and iterate quickly on high-quality solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                
            </section>
        </div>
    )
}

export default WhatIDo;