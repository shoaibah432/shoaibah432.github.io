import swanseauni from '../../../assets/images/Swansea_University_logo.png';
import subex from '../../../assets/images/subexlogo.png';

import { Link } from 'react-router-dom';
import './experience.component.scss';

const Experience = () => {
    return (
        <section className="section-five experience">
            <header className="container">
                <section>
                    <div className="educational-set">
                        <div className="educational-title-wrapper">
                            <span className="educational-title">Experience</span>
                            <span className="educational-subtitle">Work Experience</span>
                        </div>
                        <div className="educational-set-wrapper">
                            <div className="educational-right">
                                <div className="classes-edu ekk"
                                    data-aos="fade-up"
                                    data-aos-offset="10"
                                    data-aos-delay="20"
                                    data-aos-duration="2000"
                                    data-aos-easing="ease-in-out"
                                    data-aos-mirror="true"
                                    data-aos-once="false">
                                    <div className="left-edu rc"><img src={swanseauni} alt='logo'/></div>
                                    <div className="right-edu rc">
                                        <div className="tag"><span>Projects: Petrolium website</span></div>
                                        <div className="degree"> Swansea University</div>
                                        <div className="institution">March 2024 to August 2024, Swansea, UK</div>
                                        <div className="duration">
                                            <span>Role -</span> Developer and Analyst - Non-medical Helper Specialist Enabling Support (Visual Impairment)
                                        </div>
                                        <div className="duration">
                                            <div>Responsibility - </div>
                                            <ul>
                                            <li>● Built ETL pipelines using Playwright, boosting efficiency by 30%</li>
                                            <li>● Created Power BI dashboards for better stakeholder insights</li>
                                            <li>● Developed Python dashboards with JavaScript, Angular, and RDF</li>
                                            <li>● Built APIs with Flask and JavaScript for data integration</li>
                                            <li>● Used Java for backend socket integration</li>
                                            <li>● Supported PhD student with visual impairment on petroleum website project</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="classes-edu doo"
                                    data-aos="fade-up"
                                    data-aos-offset="10"
                                    data-aos-delay="20"
                                    data-aos-duration="2000"
                                    data-aos-easing="ease-in-out"
                                    data-aos-mirror="true"
                                    data-aos-once="false">
                                    <div className="left-edu ushyaku"><img src={subex} alt='logo' /></div>
                                    <div className="right-edu ushyaku">
                                        <div className="tag"><span>Projects: Hypersense, ROCFM</span></div>
                                        <div className="degree">SUBEX LTD.</div>
                                        <div className="institution">August 2017 to September 2021, Bangalore, INDIA</div>
                                        <div className="duration">
                                            <span>Role -</span> Software Engineer
                                        </div>
                                        <div className="duration">
                                            <div>Responsibility - </div>
                                            <ul>
                                                <li>● Worked on fraud detection tools (Hypersense & ROCFM)</li>
                                                <li>● Built data pipelines using Airflow and Databricks</li>
                                                <li>● Created ETL workflows to clean and move data</li>
                                                <li>● Used Java, SQL, Snowflake, and Python for data tasks</li>
                                                <li>● Made Power BI dashboards for reports</li>
                                                <li>● Built automation scripts using Playwright</li>
                                                <li>● Worked with Agile tools like Jira, GitHub, and Jenkins</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </section>
    )
}

export default Experience;