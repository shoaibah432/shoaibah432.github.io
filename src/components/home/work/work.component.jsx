import { useEffect } from 'react';

import { Link } from 'react-router-dom';

import rc from '../../../assets/images/rc.png';
import rcLogo from '../../../assets/images/SwanseaProject.png';
import bri from '../../../assets/images/hypersense.jpg';
import byp from '../../../assets/images/rocfm.webp';
// import bypLogo from '../../../assets/images/branding/byp.svg';
// import briBooks from '../../../assets/images/branding/b.svg'
import urbanvie from '../../../assets/images/branding/urbanvie.svg';
import urbanvieImage from '../../../assets/images/urbanvie.png';
import primeux from '../../../assets/images/bachelors.png';

// import Logos from './logos';

import './work.component.scss';

const LatestWork = () => {

    useEffect(() => {
        // Select all buttons with the class 'visit-website'
        const buttons = document.querySelectorAll('.visit-website');

        const handleMouseEnter = (e) => {
            const button = e.target; // The button being hovered
            const { top, left } = button.getBoundingClientRect();
            const mouseX = e.clientX - left; // X position relative to the button
            const mouseY = e.clientY - top;  // Y position relative to the button

            // Set the position of the circular effect
            button.style.setProperty('--mouse-x', `${mouseX}px`);
            button.style.setProperty('--mouse-y', `${mouseY}px`);

            // Add the class that triggers the circular hover effect
            button.classList.add('hover-effect');
        };

        const handleMouseLeave = (e) => {
            // Remove the class after the mouse leaves
            e.target.classList.remove('hover-effect');
        };

        // Add event listeners to all 'visit-website' buttons
        buttons.forEach(button => {
            button.addEventListener('mouseenter', handleMouseEnter);
            button.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            // Cleanup event listeners
            buttons.forEach(button => {
                button.removeEventListener('mouseenter', handleMouseEnter);
                button.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <section className='work-head pt-12'>
            <div className="container">
                <h2 className="latest-head mt-0">Work</h2>
                {/* <Logos /> */}
                <article className="latest-work">
                    {/* <h3 className="left-head-title mb-7 md:mb-7">Website Design and Development</h3> */}
                    <div className="work-grid flex flex-wrap w-full justify-center">
                        <div className="work-left bg-white md:p-8 p-4 flex mb-8 w-full" data-aos="fade-up" data-aos-offset="10" data-aos-delay="20" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                            <aside className="work-screens flex items-center justify-center h-[300px]"><img src={rcLogo} alt="Rare Carat" className="img-resp" /></aside>
                            <article className="work-type md:ml-8 flex items-center">
                                <div className='flex flex-wrap justify-start border-b border-gray md:mb-4 mb-7'>
                                    <h4 className="number mr-6">01 <span className="info-cards-title text-4xl py-4 text-blue-700">Petroleum Research Dashboard</span></h4>
                                </div>
                                <div className="left-head-title">
                                    <div className="about-project-title">
                                        <p className='text-base leading-5'>Built a custom data dashboard for a visually impaired PhD researcher, enabling efficient petroleum research analysis.</p>
                                        <span className="my-role text-xl">My Role:</span>
                                        <ul className='text-base leading-6 text-gray-500'>
                                            <li className='leading-5'>- Built Python-based dashboards using Angular, RDF, and JavaScript</li>
                                            <li className='leading-5'>- Created APIs using Flask for real-time data integration</li>
                                            <li className='leading-5'>- Automated ETL pipelines using Playwright</li>
                                            <li className='leading-5'>- Used Java for backend socket connections</li>
                                            <li className='leading-5'>- Created Power BI dashboards to visualize predictive insights</li>
                                            <li className='leading-5'>
                                                <span className='mr-2 text-xl text-gray-800'>Skill Set:</span>
                                                <span>Python, Java, Flask, Angular, RDF, Playwright, Power BI, ETL, JavaScript</span>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <Link className='visit-website mt-6' to="https://www.rarecarat.com" target="_blank">Visit Website</Link> */}
                                </div>
                            </article>
                        </div>
                        <div className="work-left bg-white md:p-8 p-4 flex mb-8 w-full" data-aos="fade-up" data-aos-offset="10" data-aos-delay="20" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                            <aside className="work-screens flex items-center justify-center h-[300px]"><img src={bri} alt="Rare Carat" className="img-resp" /></aside>
                            <article className="work-type md:ml-8 flex items-center">
                                <div className='flex flex-wrap justify-start border-b border-gray md:mb-4 mb-7'>
                                    <h4 className="number mr-6">02 <span className='info-cards-title text-4xl py-4 text-blue-700'>HyperSense – Augmented Analytics Platform</span></h4>
                                </div>
                                <div className="left-head-title">
                                    <div className="about-project-title w-full">
                                        <p className='text-base leading-5'>HyperSense is an AI-powered analytics platform that empowers users to build and deploy machine learning models without code. It provides modular studios for data processing, AI modeling, business intelligence, and automation.</p>
                                        <span className="my-role text-xl">My Role:</span>
                                        <ul className='text-base leading-6 text-gray-500'>
                                            <li className='leading-5'>- Built and optimized data pipelines using Apache Airflow and Azure Databricks for large-scale telecom data</li>
                                            <li className='leading-5'>- Built a custom automation framework using Playwright to validate pipeline stages and UI components</li>
                                            <li className='leading-5'>- Automated real-time data ingestion and validation to support no-code AI workflows across HyperSense studios</li>
                                            <li className='leading-5'>- Created dashboards using Power BI to visualize telecom KPIs, fraud trends, and operational insights</li>
                                            <li className='leading-5'>- Collaborated with product teams to enhance Process Automation Studio and integrate Business Intelligence Studio features</li>
                                            <li className='leading-5'>- Supported client deployments across hybrid cloud environments</li>
                                            <li className='leading-5'>
                                                <span className='mr-2 text-xl text-gray-800'>Skill Set:</span>
                                                <span>Python, Airflow, Databricks, Playwright, Power BI, Azure, Jira, Automation, CI/CD, Data Pipelines, SQL, PostgreSQL, Oracle</span>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <Link className='visit-website mt-6' to="https://www.bribooks.com/" target="_blank">Visit Website</Link> */}
                                </div>
                            </article>
                        </div>
                        <div className="work-left bg-white md:p-8 p-4 flex mb-8 w-full" data-aos="fade-up" data-aos-offset="10" data-aos-delay="20" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                            <aside className="work-screens flex items-center justify-center h-[300px]"><img src={byp} alt="Rare Carat" className="img-resp" /></aside>
                            <article className="work-type md:ml-8 flex items-center">
                                <div className='flex flex-wrap justify-start border-b border-gray md:mb-4 mb-7'>
                                    <h4 className="number mr-6">03 <span className='info-cards-title text-4xl py-4 text-blue-700'>ROCFM – Revenue & Fraud Management System</span></h4>
                                </div>
                                <div className="left-head-title">
                                    <div className="about-project-title">
                                        <p className='text-base leading-5'>ROCFM is Subex’s comprehensive fraud detection platform for telecom providers. It detects over 350 fraud types using real-time analytics and intelligent automation..</p>
                                        <span className="my-role text-xl">My Role:</span>
                                        <ul className='text-base leading-6 text-gray-500'>
                                            <li className='leading-5'>- Developed backend components using Java and SQL for revenue data processing and fraud event tracking</li>
                                            <li className='leading-5'>- Built ETL pipelines to aggregate millions of records daily from telecom operators</li>
                                            <li className='leading-5'>- Contributed to rule-based and ML-based fraud detection logic for events like SIM box fraud and IRSF</li>
                                            <li className='leading-5'>- Enhanced system scalability to support real-time fraud alerting and faster investigation workflows</li>
                                            <li className='leading-5'>- Participated in Agile sprint planning, regression testing with automated CI/CD pipelines via Jenkins,Jira and GitHub</li>
                                            <li className='leading-5'>
                                                <span className='mr-2 text-xl text-gray-800'>Skill Set:</span>
                                                <span>Java, SQL, Playwright, Power BI, ETL, Automation Frameworks, Fraud Analytics, Jenkins, Jira, Agile, SQL, PostgreSQL, Oracle</span>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <Link className='visit-website visit-website mt-6' to="https://www.bookyourpet.com" target="_blank">Visit Website</Link> */}
                                </div>
                            </article>
                        </div>
                        <div className="work-left bg-white md:p-8 p-4 flex mb-8 w-full" data-aos="fade-up" data-aos-offset="10" data-aos-delay="20" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                            <aside className="work-screens flex items-center justify-center h-[300px]"><img src={urbanvieImage} alt="Rare Carat" className="img-resp" /></aside>
                            <article className="work-type md:ml-8 flex items-center">
                                <div className='flex flex-wrap justify-start border-b border-gray md:mb-4 mb-7'>
                                    <h4 className="number mr-6">04  <span className='info-cards-title text-4xl py-4 text-blue-700'> Masters Project – AI and Machine Learning Framework for Cardiac muscle Cell network deterioration - Insights into Cardiomyocyte Interaction</span></h4>
                                </div>
                                <div className="left-head-title">
                                    <div className="about-project-title">
                                        <p className='text-base leading-5'>A deep learning-based research project aimed at analyzing cardiomyocyte (cardiac muscle cell) interactions to improve understanding of heart disease progression through network modeling and predictive analysis.</p>
                                        <span className="my-role text-xl">Objective:</span>
                                        <p className='text-base leading-5'>To develop a novel machine learning methodology that uncovers patterns in cardiac cell communication and predicts deterioration in the cardiomyocyte network.</p>
                                        <span className="my-role text-xl">My Role:</span>
                                        <ul className='text-base leading-6 text-gray-500'>
                                            <li className='leading-5'>- Led the project end-to-end — from data collection to deep learning model deployment</li>
                                            <li className='leading-5'>- Designed and trained models using TensorFlow, Keras, and Scikit-learn</li>
                                            <li className='leading-5'>- Performed data wrangling and analysis using Pandas and NumPy</li>
                                            <li className='leading-5'>- Constructed biomedical network graphs for interaction analysis</li>
                                            <li className='leading-5'>- Interpreted model results to extract diagnostic insights</li>
                                            <li className='leading-5'>
                                                <span className='mr-2 text-xl text-gray-800'>Skill Set:</span>
                                                <span>Python, TensorFlow, Keras, Pandas, NumPy, Scikit-learn</span>
                                            </li>
                                        </ul>
                                        <span className="my-role text-xl">Impact:</span>
                                        <p className='text-base leading-5'>The methodology aimed to support early-stage diagnostics and treatment planning, potentially improving treatment accuracy by 15% through better prediction of cell behavior and degeneration.</p>
                                    </div>
                                    {/* <Link className='visit-website mt-6' to="https://urbanvie.com/" target="_blank">Visit Website</Link> */}
                                </div>
                            </article>
                        </div>
                        <div className="work-left bg-white md:p-8 p-4 flex mb-8 w-full" data-aos="fade-up" data-aos-offset="10" data-aos-delay="20" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                            <aside className="work-screens flex items-center justify-center h-[300px]"><img src={primeux} alt="Rare Carat" className="img-resp" /></aside>
                            <article className="work-type md:ml-8 flex items-center">
                                <div className='flex flex-wrap justify-start border-b border-gray md:mb-4 mb-7'>
                                    <h4 className="number mr-6">05  <span className='info-cards-title text-4xl py-4 text-blue-700'> Student Performance Predictor – Final Year Research Project (Published)</span></h4>
                                </div>
                                <div className="left-head-title">
                                    <div className="about-project-title">
                                        <p className='text-base leading-5'>A predictive analytics platform that estimates student academic outcomes using machine learning. The model achieved up to 94.2% accuracy and was supported by a custom-built web interface.</p>
                                        <span className="my-role text-xl">My Role:</span>
                                        <ul className='text-base leading-6 text-gray-500'>
                                            <li className='leading-5'>- Co-authored and published a research paper on student performance prediction using Decision Tree Regression</li>
                                            <li className='leading-5'>- Processed a dataset of thousands students with 20+ academic and behavioral features</li>
                                            <li className='leading-5'>- Applied Pearson Correlation for feature selection and model optimization</li>
                                            <li className='leading-5'>- Built a regression model and Flask-based web app for real-time predictions</li>
                                            <li className='leading-5'>- Achieved 94.2% accuracy (R²) in 4th semester score predictions</li>
                                            <li className='leading-5'>- Published in International Journal for Scientific Research and Development (IJSRD), Vol. 9, Issue 07 (2021)</li>
                                            <li className='leading-5'>
                                                <span className='mr-2 text-xl text-gray-800'>Skill Set:</span>
                                                <span>Python, Flask, Machine Learning (Decision Tree), MongoDB, HTML, CSS, Data Preprocessing, Feature Engineering, Research Writing</span>
                                            </li>
                                        </ul>
                                        
                                    </div>
                                    <Link className='visit-website mt-6' to="https://ijsrd.com/Article.php?manuscript=IJSRDV9I70012" target="_blank">Visit Publication Website</Link>
                                </div>
                            </article>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default LatestWork;
