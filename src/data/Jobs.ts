/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
    image: ImageMetadata;
    url: string;
    tags: string[];
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 * @property {ImageMetadata} image - image for the current job.
 * @property {string} url - image for the current job.
 * @property {Array<string>} tags - A list of tags within the job.
 */

import arklexLogo from '../assets/images/WorkExp/arklexlogo.png';
import cbsLogo from '../assets/images/WorkExp/cbsLogo.png';
import cealLogo from '../assets/images/WorkExp/cealLogo.png';
import cguiLogo from '../assets/images/WorkExp/cguiLogo.png';
import shureLogo from '../assets/images/WorkExp/shureLogo.png';

const workExperience: WorkExperience[][] = [

    [
        {
            title: "Backend Engineer",
            startDate: "2025-02-21",
            company: "Arklex.ai",
            location: "New York, United States",
            description:
                "Built an enterprise version of the Arklex AI platform by extending frontend, backend, and chatbot repositories. Created a production-ready AMI for AWS EC2 using K3s Kubernetes and handled cross-region infrastructure migration.",
            goals: [
                "Extended core frontend, backend, and chatbot codebases (React, Next.js, Golang) for client-specific SaaS deployments.",
                "Provisioned production-ready AMI with K3s Kubernetes cluster including MySQL, Redis, InfluxDB and Milvus databases.",
                "Migrated infrastructure from ap-southeast-1 to us-east-1 (S3, ECR, RDS, ElastiCache), reducing latency by 50ms and operational costs by 15%."
            ],
            currentJob: true,
            image: arklexLogo,
            url: "https://www.arklex.ai/",
            tags: [
                "Go", "React", "Next.js", "Python", "Kubernetes", "AWS", 
                "MySQL", "Redis", "Milvus", "InfluxDB", "EC2", "K3s", "S3", "ECR", "RDS", "ElastiCache"
            ],
        },
        {
            title: "Software Development Engineer Intern",
            startDate: "2024-05-10",
            endDate: "2024-09-02",
            company: "NomadFi",
            location: "New York, United States",
            description:
                "Contributed to a fintech platform through frontend and backend development, OCR-based systems, and blockchain integration.",
            goals: [
                "Engineered modular React components including homepage and dashboards using advanced state management.",
                "Built an OCR system in Python to extract financial data, reducing manual effort by 60%.",
                "Integrated Java Spring Boot backend pipeline with PostgreSQL, reducing latency by 25%.",
                "Designed Ethereum-based architecture for RWA tokenization, integrating Plaid and Teller APIs."
            ],
            currentJob: false,
            image: cbsLogo,
            url: "https://business.columbia.edu/",
            tags: [
                "React", "Redux", "Context API", "Java", "Spring Boot", 
                "PostgreSQL", "Python", "OCR"
            ],
        },
        {
            title: "Software Engineer",
            startDate: "2021-08-21",
            endDate: "2023-08-21",
            company: "Shure Incorporated",
            location: "Hyderabad, India",
            description:
                "Developed backend APIs and automation frameworks for Shure Cloud, leveraging AWS and CI/CD tools to optimize performance and quality.",
            goals: [
                "Built RESTful APIs with Flask and AWS services (DynamoDB, S3, MSK), reducing processing time by 20%.",
                "Automated 100+ test cases with Python and Selenium, cutting manual efforts by 70%.",
                "Created CI/CD pipelines using Jenkins, improving delivery timelines by 35% and reducing deployment errors by 40%.",
                "Enhanced product workflows and reliability through automation in Agile teams."
            ],
            currentJob: false,
            image: shureLogo,
            url: "https://www.shure.com/en-US",
            tags: [
                "Python", "Flask", "Selenium", "Jenkins", "CI/CD", "AWS", 
                "DynamoDB", "S3", "AWS-MSK", "Agile"
            ],
        },
    ],
    [
        {
            title: "Research Assistant",
            startDate: "2024-09-01",
            endDate: "2024-12-31",
            company: "CGUI Lab, Columbia University",
            location: "New York, United States",
            description:
                "Contributed to the PolXR project, integrating multi-user XR collaboration and radargram visualization for glaciological research. Worked closely with scientists to align XR interfaces with geospatial analysis needs.",
            goals: [
                "Implemented real-time multi-user networking with Photon Fusion for XR collaboration.",
                "Developed 3D radargram visualizations with DEM overlays and interactive measurement tools.",
                "Created intuitive UI components, including login system, data selectors, and avatar customization.",
                "Optimized deployment on Oculus Quest and HoloLens with untethered 60fps performance.",
                "Reduced memory usage and load time by 40% using modular architecture and load-on-select rendering.",
                "Led interdisciplinary co-design sessions with scientists to align features with research needs."
            ],
            currentJob: false,
            image: cguiLogo,
            url: "https://graphics.cs.columbia.edu/home",
            tags: [
                "Unity", "C#", "XR", "Photon Fusion", "Oculus Quest", 
                "HoloLens", "Geospatial", "UI/UX", 
                "Real-time Networking"
            ],
        },
        {
            title: "Research Assistant",
            startDate: "2024-05-01",
            endDate: "2024-12-31",
            company: "Computer Enabled Abilities Lab, Columbia University",
            location: "New York, United States",
            description:
                "Developed an AR application to preserve Harlem's cultural history through immersive, interactive storytelling. Collaborated with community members to ensure cultural authenticity and usability.",
            goals: [
                "Conducted field studies and archival research to surface key Harlem cultural narratives.",
                "Designed layered wireframes in Figma for AR storytelling, heatmaps, and location-based features.",
                "Prototyped Unity-based AR features allowing users to leave comments, attach media, and share stories.",
                "Led co-design workshops with Harlem residents to gather feedback and refine app features.",
                "Created an educational and civic engagement platform through immersive AR experiences.",
                "Showcased how AR can amplify marginalized voices and histories in urban spaces."
            ],
            currentJob: false,
            image: cealLogo,
            url: "https://ceal.cs.columbia.edu/",
            tags: [
                "Unity", "C#", "AR", "Figma", "UI/UX"
            ],
        },
    ]
];
export default workExperience;