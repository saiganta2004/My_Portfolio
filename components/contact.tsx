"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Github, Linkedin, Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react"
import Link from "next/link"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    // You would typically handle form submission here
  }

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "7095837037",
      href: "tel:7095837037",
    },
    {
      icon: Mail,
      label: "Email",
      value: "Saiganta3699@gmail.com",
      href: "mailto:Saiganta3699@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "saiganta2004",
      href: "https://github.com/saiganta2004",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "pavan-sai-ganta",
      href: "https://linkedin.com/in/pavan-sai-ganta-5798b9298",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tadepalligudem, India",
      href: null,
    },
  ]

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-slate-900">Get In Touch</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I'm always interested in discussing AI/ML opportunities, collaborations, or innovative projects. Let's
            connect and build intelligent solutions together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-slate-900">Let's Connect</h3>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                Feel free to reach out through any of these channels. I typically respond within 24 hours and I'm always
                excited to discuss AI/ML projects and opportunities.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-200"
                >
                  <div className="p-3 bg-gradient-to-br from-blue-700 to-slate-800 rounded-lg shadow-lg">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-900">{item.label}</p>
                    {item.href ? (
                      <Link
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-slate-600 hover:text-blue-700 transition-colors font-medium"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <p className="text-slate-600 font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-white rounded-xl border border-slate-200">
                <div className="text-2xl font-bold text-blue-700 mb-1">24h</div>
                <div className="text-sm text-slate-600">Response Time</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-slate-200">
                <div className="text-2xl font-bold text-slate-700 mb-1">AI/ML</div>
                <div className="text-sm text-slate-600">Expertise</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white border border-slate-200 shadow-2xl">
            <div className="h-2 bg-gradient-to-r from-blue-700 to-slate-800 rounded-t-lg"></div>

            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-blue-700 to-slate-800 rounded-lg">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900">Send a Message</CardTitle>
              </div>
              <CardDescription className="text-slate-600">
                Have an AI/ML project in mind or want to discuss opportunities? Drop me a message and let's start a
                conversation!
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-slate-700 font-medium">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      required
                      className="border-2 border-slate-200 focus:border-blue-600 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-slate-700 font-medium">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      required
                      className="border-2 border-slate-200 focus:border-blue-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700 font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="border-2 border-slate-200 focus:border-blue-600 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-slate-700 font-medium">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="AI/ML Project Collaboration"
                    required
                    className="border-2 border-slate-200 focus:border-blue-600 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-700 font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your AI/ML project or opportunity..."
                    rows={5}
                    required
                    className="border-2 border-slate-200 focus:border-blue-600 transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-700 to-slate-800 hover:from-blue-600 hover:to-slate-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
