import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { ResumeDownload } from "./resume-download"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 via-slate-800/30 to-black/50"></div>
      </div>

      {/* Subtle Professional Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-800/20 rounded-full filter blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-700/20 rounded-full filter blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-10">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block text-white mb-4">Hi, I'm</span>
              <span className="block text-blue-200">Pavan Sai Ganta</span>
            </h1>

            <div className="relative">
              <p className="text-xl sm:text-2xl font-semibold text-blue-300">AI & Machine Learning Engineer</p>
            </div>

            <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
              AI & Machine Learning enthusiast with hands-on experience in{" "}
              <span className="text-blue-200 font-semibold">Deep Learning</span>,{" "}
              <span className="text-blue-200 font-semibold">NLP</span>, and{" "}
              <span className="text-blue-200 font-semibold">Computer Vision</span>. Passionate about building scalable
              AI solutions and optimizing ML models for real-world applications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-blue-700 hover:bg-blue-600 text-white border border-blue-600 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="#projects">View My Work</Link>
            </Button>
            <ResumeDownload />
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-2 border-blue-400 text-blue-200 hover:bg-blue-700 hover:text-white transition-all duration-300"
            >
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Link
              href="https://github.com/saiganta2004"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-800 rounded-full text-blue-200 hover:bg-blue-700 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/pavan-sai-ganta-5798b9298"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-800 rounded-full text-blue-200 hover:bg-blue-700 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="tel:7095837037"
              className="p-3 bg-blue-800 rounded-full text-blue-200 hover:bg-blue-700 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Phone className="h-6 w-6" />
              <span className="sr-only">Phone</span>
            </Link>
            <Link
              href="mailto:Saiganta3699@gmail.com"
              className="p-3 bg-blue-800 rounded-full text-blue-200 hover:bg-blue-700 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
