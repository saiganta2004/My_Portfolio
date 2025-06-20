import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-slate-900">Education</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            My academic journey in Artificial Intelligence and Machine Learning
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border border-slate-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-slate-800"></div>

            <CardHeader className="relative">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="p-4 bg-slate-800 rounded-xl shadow-lg">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-slate-900">Bachelor of Technology</CardTitle>
                    <CardDescription className="text-lg font-semibold text-slate-700">
                      Artificial Intelligence and Machine Learning
                    </CardDescription>
                  </div>
                </div>
                <Badge className="bg-slate-800 text-white border-0 shadow-md">In Progress</Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3 p-4 bg-slate-100 rounded-lg">
                  <MapPin className="h-5 w-5 text-slate-700" />
                  <div>
                    <p className="font-semibold text-slate-900">Location</p>
                    <p className="text-sm text-slate-600">Sri Vasavi Engineering College, Tadepalligudem</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-slate-100 rounded-lg">
                  <Calendar className="h-5 w-5 text-slate-700" />
                  <div>
                    <p className="font-semibold text-slate-900">Duration</p>
                    <p className="text-sm text-slate-600">2022 - 2026</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-slate-100 rounded-lg">
                  <Award className="h-5 w-5 text-slate-700" />
                  <div>
                    <p className="font-semibold text-slate-900">GPA</p>
                    <p className="text-sm text-slate-600">8.0/10</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-100 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <BookOpen className="h-6 w-6 text-slate-700" />
                  <h4 className="text-lg font-semibold text-slate-900">Academic Focus</h4>
                </div>
                <p className="text-slate-700 leading-relaxed mb-4">
                  <strong className="text-slate-900">Expected Graduation:</strong> November 2026
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Specializing in cutting-edge AI and ML technologies with hands-on experience in deep learning, neural
                  networks, and practical AI applications. The curriculum covers advanced topics in machine learning
                  algorithms, data science, computer vision, and natural language processing.
                </p>
              </div>

              {/* Key Subjects */}
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-4">Key Subjects</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Machine Learning",
                    "Deep Learning",
                    "Neural Networks",
                    "Computer Vision",
                    "Natural Language Processing",
                    "Data Structures",
                    "Algorithms",
                    "Statistics",
                    "Linear Algebra",
                    "Python Programming",
                  ].map((subject, index) => (
                    <Badge
                      key={index}
                      className="bg-slate-800 text-white border-0 hover:scale-105 transition-transform"
                    >
                      {subject}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
