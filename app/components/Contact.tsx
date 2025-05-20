"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, Facebook, Instagram, ExternalLink } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function Contact() {
  // Replace with your actual contact information
  const contactInfo = {
    email: "jeffreyalteza03@gmail.com",
    phone: "+63 929 230 3476",
    socials: [
      { name: "GitHub", url: "https://github.com/JeffAlteza", icon: Github },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/jeffrey-alteza-593632209 ", icon: Linkedin },
      { name: "Facebook", url: "https://www.facebook.com/babjeffrey/", icon: Facebook },
      { name: "Instagram", url: "https://www.instagram.com/jeffreyalteza", icon: Instagram },
      { name: "TikTok", url: "https://www.tiktok.com/@jepoyalteza", icon: ExternalLink },
    ],
  }

  return (
<div className="container mx-auto">
  <Card className="overflow-hidden border-0 shadow-md py-0">
    <CardContent className="p-0">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {/* Left side - Contact info */}
        <div className="bg-gray-50 p-8 flex flex-col justify-center">
          <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-black rounded-full p-2">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-gray-700 hover:text-black transition-colors"
              >
                {contactInfo.email}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-black rounded-full p-2">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <a
                href={`tel:${contactInfo.phone.replace(/\D/g, "")}`}
                className="text-gray-700 hover:text-black transition-colors"
              >
                {contactInfo.phone}
              </a>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-6">Connect With Me</h3>

          <TooltipProvider>
            <div className="flex flex-wrap gap-3">
              {contactInfo.socials.map((social) => (
                <Tooltip key={social.name}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-2 hover:bg-gray-100"
                      asChild
                    >
                      <a href={social.url} target="_blank" rel="noopener noreferrer">
                        <social.icon className="h-5 w-5" />
                        <span className="sr-only">{social.name}</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{social.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </div>

        {/* Right side - Bio */}
        <div className="bg-black p-8 flex flex-col justify-center items-center text-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Jeffrey Alteza</h3>
            <p className="text-gray-300 mb-4">Backend Software Engineer</p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</div>

  )
}
