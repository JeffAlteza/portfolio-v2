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
      title: "Management System",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      tools: ["Laravel", "Filament", "Laravel", "Filament"],
      image: "/dashboard.png",
    },
    {
      id: 2,
      title: "Management System",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      tools: ["Laravel", "Filament", "Laravel", "Filament"],
      image: "/jeff_3D.png",
    },
    {
      id: 3,
      title: "Management System",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      tools: ["Laravel", "Filament", "Laravel", "Filament"],
      image: "/jeff_3D.png",
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
        <DialogContent className="max-w-3xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
              </DialogHeader>

              {/* Project image */}
              <div className="w-full h-80 relative overflow-hidden rounded-2xl aspect-video">
                <Image
                  src={selectedProject.image}
                  alt={`${selectedProject.title} image`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Project description */}
              <div className="space-y-4">
                <p className="text-gray-700">{selectedProject.longDescription || selectedProject.description}</p>

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
