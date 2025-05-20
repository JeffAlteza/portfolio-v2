"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Project {
  id: number
  title: string
  description: string
  tools: string[]
  longDescription?: string
  image: string
}

export default function ProjectListing() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Sample project data - replace with your actual projects
  const projects: Project[] = [
    {
      id: 1,
      title: "Insurance Management System",
      description:
      "The Insurance Management System simplifies home and building quote creation with automated calculations based on user input. Its integration with the Unmand API ensures smooth data processing and reliable results.",
      longDescription:
      "The Insurance Management System streamlines the process of creating insurance quotations for home and building coverage. It features automated calculations based on user input, ensuring quick and accurate quote generation. Integrated with the Unmand API, the system enables seamless data handling and improves the reliability of the quoting process. As part of the development team, I contributed to building the API endpoints that connect the frontend to backend services, ensuring smooth and responsive interactions for users. This system boosts efficiency, reduces manual workload, and enhances the overall experience for both insurers and clients.",
      tools: ["Laravel", "REST API", "Unmand API", "MySql", "Microservice", "Domain Driven Design", "Event Sourcing"],
      image: "/insurance.jpg",
    },
    {
      id: 2,
      title: "E-wallet System",
      description:
        "The E-Wallet System is a mobile financial platform that supports withdrawals, deposits, and fund transfers, with a robust admin dashboard for managing users and approving transactions. Built with real-time notifications via FCM and Telegram, it ensures fast, secure, and efficient wallet operations.", 
      longDescription:
        "The E-Wallet System is a mobile-based financial platform that allows users to perform key transactions such as withdrawals, deposits, and fund transfers directly from their devices. I contributed as a backend developer, focusing on building and maintaining the core APIs that support these operations. On the administrative side, the system includes a comprehensive dashboard for managing user accounts, approving withdrawal and deposit requests, and handling fund transfers between user wallets or internal cash storage. To ensure real-time communication, the platform integrates notification services using Firebase Cloud Messaging (FCM) and Telegram, keeping both users and admins promptly informed. This system offers several benefits, including faster and more secure financial transactions, centralized control for admin staff, efficient management of funds, and streamlined user oversight. The integration of real-time notifications enhances transparency and responsiveness, while the scalable backend ensures reliable performance even under heavy usage.",
      tools: ["Laravel", "REST API", "Firebase Cloud Messaging", "Telegram API", "MySQL", "Spatie Media Library", "Multitenancy"],
      image: "/e-wallet.jpg",
    },
    {
      id: 3,
      title: "ERP System",
      description:
      "The ERP System centralizes business operations across multiple sites, featuring biometric-based attendance tracking, employee management, and automated payroll. It ensures real-time data syncing for accurate, efficient, and streamlined HR and payroll processes.",
      longDescription:
      "The ERP System is a centralized platform designed to streamline core business operations across multiple sites. It features an attendance log integrated with physical biometric devices, allowing real-time time tracking from various deployment locations. All data is synced and managed centrally for consistency and easier access. The system also includes employee management tools for handling staff records, roles, and information, along with a payroll module that automates salary calculations based on attendance and other factors.",
      tools: ["Laravel", "Filament", "ZKteco Biometric", "ZKteco API", "MySql"],
      image: "/erp-system.png",
    },
    {
      id: 4,
      title: "Telegram Bot System",
      description:
        "A multi-tenant Telegram Bot platform using the Telegram API to streamline and speed up communication across teams—ideal for support, inquiries, and automation.", 
      longDescription:
        "This project is a scalable, multi-tenant Telegram bot system built using the Telegram API. It enables faster and automated conversations for any organization or use case—whether for customer service, internal support, or general inquiries. With features like smart auto-responses, customizable workflows, and centralized message handling, the system boosts communication efficiency while being easy to deploy and manage.",
      tools: ["Laravel", "Livewire", "Filament", "Tailwind CSS", "MySQL", "Telegram API", "Spatie Media Library", "Multitenancy"],
      image: "/telegram.png",
    },
    {
      id: 5,
      title: "Resort Content Management System",
      description:
        "This resort content management system lets users easily update website content, images, and labels, while also managing bookings, clients, and calendars. It streamlines operations, reduces manual work, and improves the experience for both staff and guests.",
      longDescription:
        "This project is a feature-rich Resort Content Management System designed to make it easy for resort owners and staff to manage their website and operations. The system allows users to edit all content, images, and labels on the site without needing technical skills. It also includes powerful tools for handling bookings, managing client information, and organizing schedules through a built-in calendar. With everything in one place, the system helps streamline daily tasks, reduce manual work, and improve the overall experience for both the staff and guests. It's an all-in-one solution for keeping resort websites updated and operations running smoothly.", 
      tools: ["Laravel", "Livewire", "Filament", "Tailwind CSS", "MySQL", "Blade"],
      image: "/resort-cms.png",
    },
    {
      id: 6,
      title: "E-Health System",
      description:
        "E-Health System is a user-friendly web platform that enables appointment booking, calendar scheduling, and patient management for healthcare providers. It improves efficiency and patient care by streamlining administrative tasks through a simple and intuitive interface.",
      longDescription:
        "E-Health System is a comprehensive web-based platform designed to streamline healthcare operations through digital innovation. The system features an intuitive appointment scheduling module that allows patients to book consultations with doctors seamlessly. It includes a calendar view that enables healthcare providers to manage and visualize their schedules efficiently, reducing the likelihood of conflicts or missed appointments. Additionally, the system supports robust patient management capabilities, enabling easy access to patient records, histories in a centralized and secure environment. With its user-friendly design, E-Health System ensures an accessible and efficient experience for both medical professionals and patients. The platform significantly enhances productivity, improves communication, and contributes to better overall healthcare outcomes by digitizing and automating routine administrative tasks.",
      tools: ["Laravel", "Livewire", "Filament", "Tailwind CSS", "MySQL", "Blade"],
      image: "/e_health.png",
    },

  ]

  return (
    <div className=" mx-auto space-y-4 ">
      {projects.map((project) => (
        <div
          key={project.id}
          className="flex flex-col md:flex-row border rounded-xl overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => setSelectedProject(project)}
        >
          {/* Image container with relative positioning for the fill property */}
          <div className="md:w-1/3 relative flex-shrink-0 overflow-hidden rounded-2xl aspect-video m-3">
            <Image
                src={project.image}
                alt="Jeffrey 3d avatar"
                fill
                className="object-cover"
                priority
            />
            </div>


          {/* Project details */}
          <div className="p-6 flex flex-col md:w-2/3">
            <h2 className="text-xl font-medium mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

            <div>
              <h3 className="font-medium mb-2">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => (
                  <span key={index} className="px-3 py-1 bg-black text-white text-xs rounded-md">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Project Detail Modal */}
      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="min-w-4xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
              </DialogHeader>

              {/* Project image */}
              <div className="w-full min-h-[450px] relative overflow-hidden rounded-2xl">
                <Image
                  src={selectedProject.image}
                  alt={`${selectedProject.title} image`}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Project description */}
              <div className="space-y-4">
                <p className="text-gray-700 text-justify">{selectedProject.longDescription || selectedProject.description}</p>

                {/* Tools */}
                <div>
                  <h3 className="font-medium mb-2">Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool, index) => (
                      <span key={index} className="px-3 py-1 bg-black text-white text-xs rounded-md">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
