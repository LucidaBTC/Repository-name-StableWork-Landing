import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { Mail, MessageCircle, Send, MapPin, Clock, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-secondary-50/30 to-primary-50/20">
      <Header />

      <main className="py-20 sm:py-32">
        <Container>
          {/* Hero Section */}
          <div className="mx-auto max-w-3xl text-center mb-16">
            <div className="w-16 h-16 bg-primary-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl lg:text-6xl">
              Get in Touch
            </h1>

            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-secondary-200/50">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                Send us a message
              </h2>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-secondary-900 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-secondary-900 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-secondary-900 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  />
                </div>

                <Button variant="primary" size="lg" className="w-full group">
                  <Send className="w-5 h-5 mr-2 group-hover:animate-bounce-gentle" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Email */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-secondary-200/50">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary-gradient rounded-xl flex items-center justify-center shadow-glow">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-2">
                      Email Us
                    </h3>
                    <p className="text-secondary-600 mb-2">
                      For general inquiries and support
                    </p>
                    <a
                      href="mailto:support@stablework.com"
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      support@stablework.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-secondary-200/50">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary-gradient rounded-xl flex items-center justify-center shadow-glow">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-2">
                      Response Time
                    </h3>
                    <p className="text-secondary-600">
                      We typically respond within 24 hours during business days.
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-secondary-200/50">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary-gradient rounded-xl flex items-center justify-center shadow-glow">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-2">
                      Global Team
                    </h3>
                    <p className="text-secondary-600">
                      Our distributed team spans multiple time zones to provide
                      support worldwide.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Link */}
              <div className="bg-primary-50/50 rounded-2xl p-6 border border-primary-100">
                <h3 className="font-semibold text-secondary-900 mb-2">
                  Quick Answers
                </h3>
                <p className="text-secondary-600 mb-4">
                  Looking for immediate help? Check out our FAQ section for
                  answers to common questions.
                </p>
                <Button variant="outline" size="sm">
                  View FAQ
                </Button>
              </div>
            </div>
          </div>

          {/* Additional Support */}
          <div className="mt-20 text-center">
            <div className="bg-secondary-900 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Need Immediate Help?</h2>
              <p className="text-secondary-300 mb-6 max-w-2xl mx-auto">
                For urgent issues or technical support, our team is here to help
                you get back to work quickly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Live Chat
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-secondary-900"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Call
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
