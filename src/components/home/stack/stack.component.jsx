
import designer from '../../../assets/images/designer.svg';
import frontend from '../../../assets/images/frontend.svg';
import learning from '../../../assets/images/learning.svg';

import './stack.component.scss'

const Stack = () => {
    return (
        <section className="skills-stack">
            <div className="container" data-aos="fade-up" data-aos-offset="20" data-aos-delay="30" data-aos-duration="1000"
                data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                <h2 className="text-lg mb-7 uppercase text-violet-600 md:text-left text-center">Skills Stack</h2>
                <article className="latest-work">
                    <h3 className="none">Design</h3>
                    <div className="horizontal-bars mb-10">
                        <div className="skills-sections bg-white drop-shadow-sm border border-gray-200 text-center" data-aos="fade-up" data-aos-offset="10" data-aos-delay="30"
                            data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true"
                            data-aos-once="false">
                            <div className='mt-6'><img className='mx-auto' src={designer} alt="Designer" /></div>
                            <h3 className='my-6'>Data Engineer & Analyst</h3>
                            <p className='text-lg leading-6'>I love turning raw data into clear, actionable insights and building automation that makes life easier.</p>
                            <div className="design-tools text-xl">Things I enjoy building:</div>
                            <p className='leading-5'>ETL pipelines, Dashboards, APIs, Automation scripts, Data models</p>
                            <div className="design-tools text-xl">Tech & Tools I use:</div>
                            <ul className="service-stack mb-6">
                                <li>Power BI</li>
                                <li>Python</li>
                                <li>Playwright</li>
                                <li>Airflow</li>
                                <li>SQL</li>
                                <li>Snowflake</li>
                                <li>Azure Databricks</li>
                                <li>GCP (BigQuery)</li>
                            </ul>
                        </div>
                        <div className="skills-sections bg-white drop-shadow-sm border border-gray-200 text-center" data-aos="fade-up" data-aos-offset="20" data-aos-delay="40"
                            data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-mirror="true"
                            data-aos-once="false">
                            <div className='mt-6'><img className='mx-auto' src={frontend} alt="Designer" /></div>
                            <h3 className='my-6'>Developer</h3>
                            <p className='text-lg leading-6'>I enjoy coding full-stack solutions from scratch — blending backend logic with clean, functional UI.</p>
                            <div className="design-tools text-xl">Languages I speak:</div>
                            <p className='leading-5'>Python, Java, HTML, CSS, JavaScript, TypeScript, Angular, Flask, HTML, React.js...</p>
                            <div className="design-tools text-xl">Dev Tools:</div>
                            <ul className="service-stack mb-6">
                                <li>PostgreSQL</li>
                                <li>Bootstrap</li>
                                <li>REST APIs</li>
                                <li>Jira</li>
                                <li>Django</li>
                                <li>GitHub</li>
                                <li>Confluence</li>
                                <li>Jenkins...</li>
                            </ul>
                        </div>
                        <div className="skills-sections bg-white drop-shadow-sm border border-gray-200 text-center" data-aos="fade-up" data-aos-offset="30" data-aos-delay="50"
                            data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-mirror="true"
                            data-aos-once="false">
                            <div className='mt-6'><img className='mx-auto' src={learning} alt="Designer" /></div>
                            <h3 className='my-6'>Learning & Growing</h3>
                            <p className='text-lg leading-6'>I’m always exploring the latest in data, cloud, and web technology to keep evolving as a developer.</p>
                            <div className="design-tools text-xl">Dev & Tech Interests:</div>
                            <p className='leading-5'>LLMs, TensorFlow, PyTorch, Data Validation, GCP, Data Visualization... </p>
                            <div className="design-tools text-xl">Spoken Languages:</div>
                            <ul className="service-stack mb-6">
                                <li>English</li>
                                <li>Hindi</li>
                                <li>Urdu</li>
                                <li>Kannada</li>
                                <li>Arabic (Intermediate)</li>
                            </ul>
                        </div>
                    </div>
                    <p className="bottom-note text-lg md:text-xl" data-aos="fade-up" data-aos-offset="20" data-aos-delay="40" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                    Highly motivated Software Engineer and Data Analyst with a strong foundation in data engineering and automation, and advanced skills in full-stack web development. I bring hands-on experience in building scalable ETL pipelines, responsive web apps, and interactive dashboards using Python, Java, Angular, Flask, SQL, and Power BI. 
                    I’m passionate about solving real-world problems with clean code, smart data workflows, and thoughtful user interfaces. With a proven track record of delivering high-impact solutions for telecom clients and academic research projects, I aim to bridge the gap between data and development in meaningful ways.
                    </p>
                </article>
            </div>
        </section>
    )
}

export default Stack;