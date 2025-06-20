import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Heart, MessageSquare, Eye } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Medical Reminder App",
      description:
        "A simple and user-friendly app to schedule and manage medication reminders. Built with React (Vite), custom HTML & CSS, and stores all data in browser localStorage. No backend required.",
      technologies: ["React (Vite)", "HTML", "CSS", "localStorage"],
      type: "Productivity",
      icon: Heart,
      accuracy: "Client-side only",
      code: "http://github.com/saiganta2004/Medical_Reminder_App?tab=readme-ov-file",
    },
    {
      title: "Comment Toxicity Detection",
      description:
        "Developed a Bidirectional LSTM model for toxicity classification, later upgraded to DistilBERT, reducing inference time by 30%. Utilized TensorFlow, Token Vectorization, and Gradio for model deployment.",
      technologies: ["TensorFlow", "LSTM", "DistilBERT", "Gradio", "NLP"],
      type: "NLP & Deep Learning",
      icon: MessageSquare,
      accuracy: "85% accuracy",
      code: "https://github.com/saiganta2004/Comment_Toxicity_Detection",
    },
    {
      title: "Sign Language Detection",
      description:
        "Built a CNN-based real-time sign language recognition system using OpenCV & TensorFlow. Improved accuracy by 12% with data augmentation techniques. Deployed using Flask API for real-time gesture translation.",
      technologies: ["CNN", "OpenCV", "TensorFlow", "Flask", "Computer Vision"],
      type: "Computer Vision",
      icon: Eye,
      accuracy: "12% improvement",
      code: "https://github.com/saiganta2004/Sign_Language_Detection",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-slate-900">Featured AI Projects</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Showcase of AI and Machine Learning projects demonstrating expertise in Deep Learning, NLP, and Computer
            Vision
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-white border border-slate-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group overflow-hidden"
            >
              <CardHeader className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-700 to-slate-800 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge className="bg-gradient-to-r from-blue-700 to-slate-800 text-white border-0 shadow-md">
                    {project.type}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-slate-200 text-slate-700 hover:bg-slate-300 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <span className="text-sm font-medium text-blue-700">Performance: </span>
                  <span className="font-bold text-blue-900 text-sm">{project.accuracy}</span>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-blue-700 to-slate-800 hover:from-blue-600 hover:to-slate-700 hover:shadow-lg transition-all duration-300 text-white border-0"
                    asChild
                  >
                    <a href={project.code || "#"} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
