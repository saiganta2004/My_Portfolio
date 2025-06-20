import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experience = [
    {
      title: "AI/ML Intern",
      company: "Blackbucks",
      location: "Tadepalligudem, India",
      duration: "May 2024 – July 2024",
      type: "Internship",
      description:
        "Completed an 8-week internship on AI, Machine Learning, and Data Science. Performed data preprocessing, model building, and model evaluation using Python and ML libraries. Contributed to predictive model development with TensorFlow and Scikit-learn.",
      achievements: [
        "Completed an 8-week internship on AI, Machine Learning, and Data Science.",
        "Performed data preprocessing, model building, and model evaluation using Python and ML libraries.",
        "Contributed to predictive model development with TensorFlow and Scikit-learn.",
      ],
      skills: [
        "Python",
        "Machine Learning",
        "Data Science",
        "Data Preprocessing",
        "Model Evaluation",
        "TensorFlow",
        "Scikit-learn",
      ],
    },
    {
      title: "Full Stack Java Intern",
      company: "Learnsquare",
      location: "Chennai, India",
      duration: "June 2025 – July 2025",
      type: "Internship",
      description:
        "Designed and implemented a Smart Attendance & Leave Tracker using Java, Spring Boot, and MySQL. Developed a responsive frontend using React.js and integrated REST APIs. Deployed application successfully; achieved facial attendance marking accuracy of ~95%.",
      achievements: [
        "Designed and implemented a Smart Attendance & Leave Tracker using Java, Spring Boot, and MySQL.",
        "Developed a responsive frontend using React.js and integrated REST APIs.",
        "Deployed application successfully; achieved facial attendance marking accuracy of ~95%.",
      ],
      skills: ["Java", "Spring Boot", "MySQL", "React.js", "REST API", "Full Stack Development", "Facial Recognition"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-slate-900">Work Experience</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional experience and internships that have shaped my technical skills and industry knowledge
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experience.map((exp, idx) => (
            <Card
              key={idx}
              className="bg-slate-50 border border-slate-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden mb-8"
            >
              <div className="h-2 bg-slate-800"></div>
              <CardHeader className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-4 bg-slate-800 rounded-xl shadow-lg">
                      <Briefcase className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-slate-900">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-slate-700">
                        {exp.company}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-slate-800 text-white border-0 shadow-md">{exp.type}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center space-x-3 p-4 bg-slate-100 rounded-lg">
                    <MapPin className="h-5 w-5 text-slate-700" />
                    <div>
                      <p className="font-semibold text-slate-900">Location</p>
                      <p className="text-sm text-slate-600">{exp.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-4 bg-slate-100 rounded-lg">
                    <Calendar className="h-5 w-5 text-slate-700" />
                    <div>
                      <p className="font-semibold text-slate-900">Duration</p>
                      <p className="text-sm text-slate-600">{exp.duration}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-100 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Responsibilities & Achievements</h4>
                  <ul className="list-disc pl-5 text-slate-700 space-y-2">
                    {exp.achievements.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      className="bg-slate-800 text-white border-0 hover:scale-105 transition-transform"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
