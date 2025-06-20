import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, Database, Zap } from "lucide-react"
import Image from "next/image"

export function About() {
  const highlights = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Deep Learning, Neural Networks, Supervised & Unsupervised Learning, Ensemble Methods",
    },
    {
      icon: Code,
      title: "Programming & Frameworks",
      description: "Python, Java, SQL, TensorFlow, Keras, Scikit-Learn, OpenCV, NLTK",
    },
    {
      icon: Database,
      title: "Model Deployment",
      description: "Flask, Gradio, Streamlit, FastAPI, Azure AI, Google Colab",
    },
    {
      icon: Zap,
      title: "Specialized Skills",
      description: "CNN, RNN, LSTM, Transformers, Computer Vision, NLP",
    },
  ]

  const stats = [
    { number: "3+", label: "AI Projects", color: "text-blue-700" },
    { number: "85%", label: "Model Accuracy", color: "text-slate-700" },
    { number: "2024", label: "AI/ML Intern", color: "text-blue-700" },
    { number: "7.2", label: "Current GPA", color: "text-slate-700" },
  ]

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-slate-900">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            AI & Machine Learning enthusiast passionate about building scalable AI solutions and optimizing ML models
            for real-world applications.
          </p>
        </div>

        {/* Main Content with Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-300 rounded-2xl blur-lg opacity-30"></div>
              <div className="relative w-80 h-80 rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="/images/profile-photo.jpg"
                  alt="Pavan Sai Ganta"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-3xl font-bold text-slate-900">My Journey</h3>
            <div className="space-y-4 text-slate-700">
              <p className="text-lg leading-relaxed">
                As a B.Tech student specializing in AI & ML, I have developed hands-on experience in{" "}
                <span className="font-semibold text-blue-700">Deep Learning</span>,{" "}
                <span className="font-semibold text-blue-700">NLP</span>, and{" "}
                <span className="font-semibold text-blue-700">Computer Vision</span>. My passion lies in building
                scalable AI solutions that solve real-world problems.
              </p>
              <p className="text-lg leading-relaxed">
                I have strong expertise in <span className="font-semibold text-blue-700">Python</span>,{" "}
                <span className="font-semibold text-blue-700">TensorFlow</span>, and cloud AI technologies. My projects
                include developing AI chatbots, toxicity detection systems, and real-time computer vision applications.
              </p>
              <p className="text-lg leading-relaxed">
                Currently pursuing my degree at{" "}
                <span className="font-semibold text-slate-900">Sri Vasavi Engineering College</span>, I'm focused on
                optimizing ML models and deploying them for practical applications using modern frameworks and cloud
                platforms.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200"
            >
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="bg-white border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-700 to-slate-800 rounded-xl mb-4 shadow-lg">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
