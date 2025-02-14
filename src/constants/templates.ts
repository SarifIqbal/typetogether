export const templates = [
    {
        id: "blank",
        label: "Blank Document",
        imageUrl: "/blank-document.svg",
        initialContent: ""
    },
    {
        id: "software-proposal",
        label: "Software Proposal",
        imageUrl: "/software-proposal.svg",
        initialContent: `
            <h1>Software Proposal for [Project Name]</h1>

            <h2>Prepared by:</h2>
            <p>John Doe</p>
            <p>Software Solutions Inc.</p>
            <p>Email: john.doe@email.com</p>
            <p>Phone: (123) 456-7890</p>

            <h2>Client:</h2>
            <p>[Client Name]</p>
            <p>[Client Company]</p>
            <p>[Client Address]</p>

            <h2>Date:</h2>
            <p>February 14, 2025</p>

            <h2>Project Overview</h2>
            <p>This proposal outlines the software development plan for [Project Name]. The goal of this project is to provide a comprehensive software solution for [specific need or problem], improving [efficiency/productivity/etc.] for [Client Name].</p>

            <h2>Scope of Work</h2>
            <p>The following tasks will be undertaken during the project:</p>
            <ul>
                <li>Requirement gathering and analysis</li>
                <li>System design and architecture</li>
                <li>Software development and coding</li>
                <li>Quality assurance and testing</li>
                <li>Deployment and post-deployment support</li>
            </ul>

            <h2>Timeline</h2>
            <p>The project is expected to take [X weeks/months] from the start date. Key milestones include:</p>
            <table border="1">
                <tr>
                    <th>Milestone</th>
                    <th>Completion Date</th>
                </tr>
                <tr>
                    <td>Requirement Gathering</td>
                    <td>[Date]</td>
                </tr>
                <tr>
                    <td>Design Phase</td>
                    <td>[Date]</td>
                </tr>
                <tr>
                    <td>Development Phase</td>
                    <td>[Date]</td>
                </tr>
                <tr>
                    <td>Testing & Deployment</td>
                    <td>[Date]</td>
                </tr>
            </table>

            <h2>Cost Estimate</h2>
            <p>The estimated cost for this project is $[Amount]. This includes all phases of the development process, from initial analysis to post-deployment support.</p>

            <h2>Conclusion</h2>
            <p>We believe that [Project Name] will provide significant value to [Client Name] and their operations. We are excited about the opportunity to work together and deliver a high-quality software solution tailored to meet the needs of your business.</p>

            <h2>Contact Information</h2>
            <p>If you have any questions or require further information, please do not hesitate to contact me at:</p>
            <p>Email: john.doe@email.com</p>
            <p>Phone: (123) 456-7890</p>

            <h2>Regards,</h2>
            <h1>John Doe</h1>
            <p>Software Solutions Inc.</p>
        `
    },
    {
        id: "project-proposal",
        label: "Project Proposal",
        imageUrl: "/project-proposal.svg",
        initialContent: `
            <h1>Project Proposal for [Project Title]</h1>

            <h2>Prepared by:</h2>
            <p>John Doe</p>
            <p>Company Name</p>
            <p>Email: john.doe@email.com</p>
            <p>Phone: (123) 456-7890</p>

            <h2>Client:</h2>
            <p>[Client Name]</p>
            <p>[Client Company]</p>
            <p>[Client Address]</p>

            <h2>Date:</h2>
            <p>February 14, 2025</p>

            <h2>Project Overview</h2>
            <p>This proposal outlines the objectives, scope, and timeline for the [Project Title]. The purpose of the project is to [brief description of what the project aims to achieve]. We are confident that this project will bring significant benefits to [Client Name].</p>

            <h2>Project Objectives</h2>
            <p>The objectives of this project include:</p>
            <ul>
                <li>Objective 1: [Details of the first objective]</li>
                <li>Objective 2: [Details of the second objective]</li>
                <li>Objective 3: [Details of the third objective]</li>
            </ul>

            <h2>Scope of Work</h2>
            <p>The following tasks will be covered as part of the project:</p>
            <ul>
                <li>Task 1: [Description of task]</li>
                <li>Task 2: [Description of task]</li>
                <li>Task 3: [Description of task]</li>
            </ul>

            <h2>Project Timeline</h2>
            <p>The project is expected to take [X weeks/months] to complete. Below is the projected timeline with key milestones:</p>
            <table border="1">
                <tr>
                    <th>Milestone</th>
                    <th>Completion Date</th>
                </tr>
                <tr>
                    <td>Phase 1: Planning</td>
                    <td>[Date]</td>
                </tr>
                <tr>
                    <td>Phase 2: Development</td>
                    <td>[Date]</td>
                </tr>
                <tr>
                    <td>Phase 3: Testing</td>
                    <td>[Date]</td>
                </tr>
                <tr>
                    <td>Phase 4: Final Review</td>
                    <td>[Date]</td>
                </tr>
            </table>

            <h2>Cost Estimate</h2>
            <p>The estimated cost for the project is $[Amount]. This covers all aspects of the project, including planning, development, testing, and project management.</p>

            <h2>Conclusion</h2>
            <p>We believe that the successful completion of [Project Title] will deliver significant value to [Client Name] and their operations. We are excited about the opportunity to collaborate and bring this project to life.</p>

            <h2>Contact Information</h2>
            <p>If you have any questions or need more information, please feel free to contact us at:</p>
            <p>Email: john.doe@email.com</p>
            <p>Phone: (123) 456-7890</p>

            <h2>Regards,</h2>
            <h1>John Doe</h1>
            <p>Company Name</p>
        `
    },
    {
        id: "business-letter",
        label: "Business Letter",
        imageUrl: "/business-letter.svg",
        initialContent: `
            <h1>John Doe</h1>
            <p>1234 Elm Street</p>
            <p>City, State 12345</p>
            <p>Email: john.doe@email.com</p>
            <p>Phone: (123) 456-7890</p>

            <h2>February 14, 2025</h2>

            <h2>[Recipient's Name]</h2>
            <p>[Recipient's Title]</p>
            <p>[Company Name]</p>
            <p>[Company Address]</p>

            <h2>Dear [Recipient's Name],</h2>

            <p>I hope this letter finds you well. I am writing to [brief purpose of the letter—e.g., discuss a recent inquiry, follow up on a meeting, request information, etc.]. We greatly appreciate your interest in [mention any relevant product, service, or proposal].</p>

            <p>As per our conversation/meeting on [date], I wanted to provide you with additional details regarding [specific topic]. I believe this information will be helpful for [specific outcome or decision].</p>

            <p>If you have any questions or require further clarification, please don’t hesitate to contact me. I look forward to hearing from you soon and continuing our productive conversation.</p>

            <h2>Sincerely,</h2>
            <h1>John Doe</h1>
            <p>[Your Title]</p>
            <p>[Company Name]</p>
        `
    },
    {
        id: "resume",
        label: "Resume",
        imageUrl: "/resume.svg",
        initialContent: `
            <h1>John Doe</h1>
            <p>Email: john.doe@email.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>LinkedIn: linkedin.com/in/johndoe</p>

            <h2>Objective</h2>
            <p>Results-driven software developer with over 5 years of experience in full-stack development. Seeking to leverage expertise in JavaScript, Python, and cloud technologies to contribute to a dynamic team at a forward-thinking company.</p>

            <h2>Experience</h2>

            <h3>Software Developer</h3>
            <p><strong>XYZ Technologies</strong> – City, State | January 2020 – Present</p>
            <ul>
                <li>Developed and maintained web applications using JavaScript, React, and Node.js.</li>
                <li>Collaborated with cross-functional teams to design and implement features, improving user experience and functionality.</li>
                <li>Integrated APIs and third-party services to enhance application capabilities.</li>
            </ul>

            <h3>Junior Software Developer</h3>
            <p><strong>ABC Corp</strong> – City, State | June 2017 – December 2019</p>
            <ul>
                <li>Assisted in the development of e-commerce platforms using Python and Django.</li>
                <li>Wrote unit and integration tests to ensure software quality and reliability.</li>
                <li>Participated in code reviews and provided mentorship to junior developers.</li>
            </ul>

            <h2>Education</h2>

            <h3>Bachelor of Science in Computer Science</h3>
            <p><strong>University of Tech</strong> – City, State | Graduated May 2017</p>

            <h2>Skills</h2>
            <ul>
                <li>Programming Languages: JavaScript, Python, Java, SQL</li>
                <li>Web Technologies: HTML, CSS, React, Node.js</li>
                <li>Database Management: MySQL, MongoDB</li>
                <li>Version Control: Git, GitHub</li>
                <li>Cloud Platforms: AWS, Azure</li>
            </ul>

            <h2>Certifications</h2>
            <ul>
                <li>Certified AWS Developer – 2023</li>
                <li>JavaScript Certification – 2021</li>
            </ul>

            <h2>Projects</h2>

            <h3>Personal Portfolio Website</h3>
            <p>Created a personal portfolio using HTML, CSS, and JavaScript to showcase various web development projects and skills.</p>

            <h3>Task Management App</h3>
            <p>Developed a task management app using React and Node.js, allowing users to create, update, and delete tasks with a user-friendly interface.</p>
        `
    },
    {
        id: "cover-letter",
        label: "Cover Letter",
        imageUrl: "/cover-letter.svg",
        initialContent: `
            <h1>John Doe</h1>
            <p>1234 Elm Street</p>
            <p>City, State 12345</p>
            <p>Email: john.doe@email.com</p>
            <p>Phone: (123) 456-7890</p>

            <h2>February 14, 2025</h2>

            <h2>Hiring Manager</h2>
            <p>Company Name</p>
            <p>5678 Business Avenue</p>
            <p>City, State 67890</p>

            <h2>Dear Hiring Manager,</h2>

            <p>I am writing to express my interest in the [Job Title] position at [Company Name]. With my skills and experience in [specific area or field], I believe I would be a valuable asset to your team. I am excited about the opportunity to contribute to [Company Name]'s continued success.</p>

            <p>In my previous role at [Previous Company Name], I developed strong [specific skills relevant to the job]. I am confident that my background in [mention relevant experience or education] equips me with the tools to excel in this position and bring innovative solutions to your company.</p>

            <p>I would welcome the opportunity to discuss my qualifications further. Thank you for considering my application. I look forward to the possibility of contributing to the success of your team at [Company Name].</p>

            <h2>Sincerely,</h2>
            <h1>John Doe</h1>
        `
    },
    {
        id: "letter",
        label: "Letter",
        imageUrl: "/letter.svg",
        initialContent: `
            <h1>John Doe</h1>
            <p>1234 Elm Street</p>
            <p>City, State 12345</p>
            <p>Email: john.doe@email.com</p>
            <p>Phone: (123) 456-7890</p>

            <h2>February 14, 2025</h2>

            <h2>[Recipient's Name]</h2>
            <p>[Recipient's Title]</p>
            <p>[Company Name]</p>
            <p>[Company Address]</p>

            <h2>Dear [Recipient's Name],</h2>

            <p>I am writing to [brief purpose of the letter—e.g., express my gratitude, request information, follow up on a previous conversation, etc.]. I wanted to reach out regarding [mention the subject of the letter] and provide some additional context or details.</p>

            <p>[Add any additional relevant information or background details in the following paragraphs. You can explain specific points, request something, or clarify any necessary items related to the subject of the letter.]</p>

            <p>Thank you for your time and consideration. If you need further information, please do not hesitate to contact me. I look forward to hearing from you soon.</p>

            <h2>Sincerely,</h2>
            <h1>John Doe</h1>
            <p>[Your Title or Position]</p>
            <p>[Your Company, if applicable]</p>
        `
    },
];