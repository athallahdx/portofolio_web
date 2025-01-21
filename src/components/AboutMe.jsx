import dev1 from "../assets/dev1.jpg";
import data1 from "../assets/data1.png";

export default function AboutMe() {
    return(
        <>
            <div className="About-Me mt-12 pb-6">
                <div className="flex flex-row justify-start space-x-20 ms-20 text-white">
                    <div className="Description text-left">
                        <div className="flex flex-col">
                            <div className="aboutme place-items-center pb-7">
                                <p className="text-4xl font-bold pb-3 ">About Me</p>
                                <p className="text-xl max-w-34xl text-center">As a Junior Data Analyst specializing in Tableau, Excel, SQL, and Python, and a Full-Stack Web Developer proficient in React.js and Laravel, I bridge the gap between data-driven insights and robust web solutions. My expertise enables me to analyze complex datasets and develop dynamic web applications, ensuring seamless integration and optimal performance.</p>
                            </div>
                            <div className="dataanalyst flex justify-center max-w-7xl shadow-2xl">
                                <div className="picture1 max-w-lg">
                                    <img src={data1} alt="" />
                                </div>
                                <div className="desc1 ms-5">
                                    <p className="text-xl font-semibold mt-3 mb-2">Data Analysis Expertise:</p>
                                    <ul className="list-disc list-outside text-lg space-y-1 pl-5">
                                        <li> 
                                            <span className="font-medium">Tableau: </span> 
                                            <span>Proficient in creating interactive visualizations, dashboard, and infographics to present data insights effectively.</span> 
                                        </li>
                                        <li> 
                                            <span className="font-medium">Excel: </span> 
                                            <span>Proficient in creating interactive dashboards and visualizations to present data insights effectively.</span> 
                                        </li>
                                        <li> 
                                            <span className="font-medium">SQL: </span> 
                                            <span>Experienced in writing complex queries to extract, manipulate, and analyze data from relational databases.
                                            </span> 
                                        </li>
                                        <li> 
                                            <span className="font-medium">Python: </span> 
                                            <span>Utilize Python for data cleaning, statistical analysis, and implementing machine learning algorithms.</span> 
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="webdev mt-5 flex justify-center max-w-7xl shadow-2xl">
                                <div className="desc1 ms-5">
                                    <p className="text-xl font-semibold mt-3 mb-2">Data Analysis Expertise:</p>
                                    <ul className="list-disc list-outside text-rig text-lg space-y-1 pl-5">
                                        <li> 
                                            <span className="font-medium">React.js: </span> 
                                            <span>Develop dynamic and responsive user interfaces with React.js, ensuring a seamless user experience.</span> 
                                        </li>
                                        <li> 
                                            <span className="font-medium">Laravel: </span> 
                                            <span>Build robust back-end systems using Laravel, focusing on scalability and security.</span> 
                                        </li>
                                        <li>
                                            <span className="font-medium">Version Control (Git): </span> 
                                            <span>Build robust back-end systems using Laravel, focusing on scalability and security.</span> 
                                        </li>
                                        <li>
                                            <span className="font-medium">Database Management: </span> 
                                            <span>Knowledgeable in managing databases, including designing schemas and optimizing queries for performance.</span> 
                                        </li>
                                        <li>
                                            <span className="font-medium">RESTful APIs: </span> 
                                            <span>Skilled in designing and consuming RESTful APIs to enable communication between front-end and back-end systems.</span> 
                                        </li>
                                    </ul>
                                </div>
                                <div className="picture1 max-w-lg ">
                                    <img src={dev1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}