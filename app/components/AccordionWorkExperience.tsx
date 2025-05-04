'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const experiences = [
  {
    title: "Backend Software Engineer",
    dateRange: "March 2024 - Present",
    bullets: [
      "Led end-to-end development of tailored systems to address business needs, ensuring clean architecture and maintainability.",
      "Engineered and refined database schemas to improve query performance and accommodate future growth.",
      "Implemented payroll and attendance functionalities with biometric integration, solving workforce tracking challenges across distributed teams.",
      "Created cross-platform chatbot solutions using Line and Telegram APIs to improve user communication channels.",
      "Established a secure, scalable multi-tenant architecture to support distinct user groups while preserving data isolation.",
      "Provided hands-on mentorship to junior developers, fostering growth and accelerating team output.",
      "Translated technical concepts into client-friendly language, facilitating alignment and informed decision-making.",
      "Used tools like DebugBar, Telescope, and Sentry to diagnose and resolve system-level issues, ensuring high availability and reliability.",
    ]    
  },
  {
    title: "Junior Software Developer",
    dateRange: "August 2022 - March 2024",
    bullets: [
      "Developed and maintained web applications using Laravel framework, ensuring high performance and responsiveness.",
      "Managed multiple maintenance projects, overseeing ongoing support and enhancements to ensure the sustained performance and functionality of web applications.",
      "Implemented and optimized database design and queries, leading to improved application efficiency.", 
      "Assisted in the identification and resolution of software-related issues through debugging and troubleshooting.", 
      "Contributed to the development of RESTful APIs for seamless integration with external services and communication between the front-end and back-end systems.",
      "Successfully contributed to the maintenance and enhancement of frontend project, ensuring optimal performance and user experience",
    ],
  },
  {
    title: "Associate Software Developer",
    dateRange: "March 2022 - May 2022",
    bullets: [
      "Completed a hands-on work immersion program focused on Laravel framework.",
      "Received comprehensive training in Laravel development practices.",
      "Actively participated in building websites, with a primary role in backend development.", 
      "Developed APIs to facilitate seamless communication between the backend and frontend.", 
      "Gained practical experience in coding, debugging, and troubleshooting within a collaborative team environment",
    ],
  },
];

export function AccordionWorkExperience() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {experiences.map((exp, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionTrigger>
            <div className="text-xl flex justify-between items-center w-full">
              <p className="text-gray-800 font-bold">{exp.title}</p>
              <p className="text-sm text-gray-500">({exp.dateRange})</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-2">
              {exp.bullets.map((bullet, idx) => (
                <li key={idx} className="text-gray-600">{bullet}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
