"use client"

import type React from "react"

import { MessageCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Contact() {
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
        <div className="max-w-xl mx-auto">
          <Card className="bg-white border border-slate-200 shadow-2xl">
            <div className="h-2 bg-gradient-to-r from-blue-700 to-slate-800 rounded-t-lg"></div>
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-blue-700 to-slate-800 rounded-lg">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900">Send a Message</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <form action="https://formsubmit.co/Saiganta3699@gmail.com" method="POST" className="space-y-6">
                <div>
                  <label className="block text-slate-700 font-medium mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full border-2 border-slate-200 rounded px-3 py-2 focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-medium mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full border-2 border-slate-200 rounded px-3 py-2 focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-medium mb-1">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full border-2 border-slate-200 rounded px-3 py-2 focus:border-blue-600 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-700 to-slate-800 hover:from-blue-600 hover:to-slate-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 py-3 rounded"
                >
                  Send Message
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
