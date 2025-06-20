"use client"

import { Button } from "@/components/ui/button"
import { Download, ExternalLink } from "lucide-react"

export function ResumeDownload() {
  const handleViewResume = () => {
    window.open("https://drive.google.com/file/d/1d8GVyaqmEZvipeBYRePI-fw-jww3oGXr/view?usp=sharing", "_blank")
  }

  const handleDownloadResume = () => {
    // Convert Google Drive view link to download link
    const downloadLink = "https://drive.google.com/uc?export=download&id=1d8GVyaqmEZvipeBYRePI-fw-jww3oGXr"
    window.open(downloadLink, "_blank")
  }

  return (
    <div className="flex gap-2">
      <Button
        onClick={handleViewResume}
        variant="outline"
        size="lg"
        className="border-2 border-blue-400 text-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300"
      >
        <ExternalLink className="w-4 h-4 mr-2" />
        View Resume
      </Button>
      <Button
        onClick={handleDownloadResume}
        variant="outline"
        size="lg"
        className="border-2 border-blue-400 text-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300"
      >
        <Download className="w-4 h-4 mr-2" />
        Download
      </Button>
    </div>
  )
}
