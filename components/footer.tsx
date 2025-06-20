import Link from "next/link"
import { Github, Linkedin, Mail, Phone, Heart, Code } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-200">Pavan Sai Ganta</h3>
            <p className="text-slate-300 leading-relaxed">
              AI & Machine Learning Engineer passionate about building scalable AI solutions and optimizing ML models
              for real-world applications.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/saiganta2004"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-800 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/pavan-sai-ganta-5798b9298"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-800 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="tel:7095837037"
                className="p-2 bg-blue-800 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110"
              >
                <Phone className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:Saiganta3699@gmail.com"
                className="p-2 bg-blue-800 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-300">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="#about" className="text-slate-300 hover:text-blue-200 transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-slate-300 hover:text-blue-200 transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-slate-300 hover:text-blue-200 transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-slate-300 hover:text-blue-200 transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-300">Specializations</h4>
            <ul className="space-y-2 text-slate-300">
              <li>Deep Learning & Neural Networks</li>
              <li>Natural Language Processing</li>
              <li>Computer Vision</li>
              <li>AI Model Deployment</li>
              <li>Machine Learning Optimization</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-300">Technologies</h4>
            <ul className="space-y-2 text-slate-300">
              <li>Python & TensorFlow</li>
              <li>Keras & Scikit-Learn</li>
              <li>OpenCV & NLTK</li>
              <li>Flask & Streamlit</li>
              <li>Azure AI & Google Colab</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-300 text-center md:text-left">
              © {new Date().getFullYear()} Pavan Sai Ganta. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0 text-slate-300">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span>and</span>
              <Code className="h-4 w-4 text-blue-300" />
              <span>by Pavan</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
