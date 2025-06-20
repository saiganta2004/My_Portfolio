import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink, CheckCircle, Star, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Certifications() {
  const certifications = [
    {
      title: "Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft",
      credentialId: "BFB956677ECA597E",
      description: "Fundamental concepts of machine learning and artificial intelligence services on Microsoft Azure",
      type: "Professional Certification",
      verified: true,
      icon: Award,
      link: "https://drive.google.com/file/d/1T7-jgFO15CJWmk6w7VWY3vYJh40C1b-E/view?usp=sharing",
    },
    {
      title: "NVIDIA Certified: Building LLM Applications With Prompt Engineering",
      issuer: "NVIDIA",
      credentialId: "VWJlvKMdT5GhClnFl3qViw",
      description: "Certification for building LLM applications and prompt engineering techniques.",
      type: "Professional Certification",
      verified: true,
      icon: Star,
      link: "https://drive.google.com/file/d/1TMgjKlLWB3Nuc5JZyAGEqCPWYV5JpUvH/view?usp=sharing",
    },
    {
      title: "Certificate of Completion – AI-ML-DS Internship",
      issuer: "AI-ML-DS Program",
      description: "Hands-on internship experience in Artificial Intelligence, Machine Learning, and Data Science",
      type: "Internship Certificate",
      verified: true,
      icon: Briefcase,
      link: "https://drive.google.com/file/d/1csPCPV5qd4ukAiaB_2iZHH5ewBrgWK6R/view?usp=sharing",
    },
  ]

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-slate-900">Certifications & Achievements</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional certifications and achievements that validate my expertise in AI, Machine Learning, and cloud
            technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="bg-slate-50 border border-slate-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group overflow-hidden"
            >
              <div className="h-2 bg-gradient-to-r from-blue-700 to-slate-800"></div>

              <CardHeader className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-700 to-slate-800 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <cert.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge className="bg-gradient-to-r from-blue-700 to-slate-800 text-white border-0 shadow-md">
                      {cert.type}
                    </Badge>
                    {cert.verified && (
                      <Badge className="bg-green-600 text-white border-0 shadow-md">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                </div>

                <CardTitle className="text-lg leading-tight font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {cert.title}
                </CardTitle>
                <CardDescription className="font-semibold text-slate-700">{cert.issuer}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-slate-600 leading-relaxed">{cert.description}</p>

                {cert.credentialId && (
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-xs font-medium text-blue-700 mb-1">Credential ID:</p>
                    <p className="text-xs font-mono text-blue-600 break-all">{cert.credentialId}</p>
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:underline flex items-center gap-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Certificate
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
            <div className="text-3xl font-bold text-blue-700 mb-2">3+</div>
            <div className="text-slate-600 font-medium">Certifications Earned</div>
          </div>
          <div className="text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
            <div className="text-3xl font-bold text-slate-700 mb-2">AI/ML</div>
            <div className="text-slate-600 font-medium">Specialization</div>
          </div>
          <div className="text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
            <div className="text-3xl font-bold text-blue-700 mb-2">100%</div>
            <div className="text-slate-600 font-medium">Completion Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}
