import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "SQL"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["TensorFlow", "Keras", "Scikit-Learn", "OpenCV", "NLTK"],
    },
    {
      title: "Machine Learning",
      skills: ["Supervised Learning", "Unsupervised Learning", "Neural Networks", "Ensemble Methods"],
    },
    {
      title: "Deep Learning",
      skills: ["CNN", "RNN", "LSTM", "Transformers"],
    },
    {
      title: "AI Model Deployment",
      skills: ["Flask", "Gradio", "Streamlit", "FastAPI"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Jupyter Notebook", "Google Colab", "Git", "Azure AI"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-slate-900">Skills & Technologies</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive expertise in AI, Machine Learning, and modern development technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-slate-50 border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader>
                <CardTitle className="text-xl text-slate-900 font-bold">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className="bg-gradient-to-r from-blue-700 to-slate-800 text-white border-0 hover:scale-105 transition-transform"
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
