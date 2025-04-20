import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  RiHeartPulseLine,
  RiUserLine,
  RiDatabaseLine,
  RiLineChartLine,
  RiShieldCheckLine,
  RiRobot2Line,
} from "@remixicon/react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container py-24 md:py-32 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-6 md:w-1/2">
          <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
            AI-powered healthcare platform
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Your intelligent medical assistant
          </h1>
          <p className="text-xl text-muted-foreground max-w-[600px]">
            Medical Guide helps healthcare professionals make better decisions with AI-powered consultations, patient management, and data analytics.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/app/(auth)/register">
              <Button size="lg" className="rounded-full">Get Started</Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" size="lg" className="rounded-full">View Demo</Button>
            </Link>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <RiShieldCheckLine size={16} />
            <span>HIPAA compliant & secure</span>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="relative w-full h-[400px] lg:h-[500px]">
            <Image 
              src="/hero-image.png" 
              alt="Medical Guide Dashboard"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="bg-muted/40 py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Our platform combines cutting-edge AI with intuitive tools to help medical professionals deliver better care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div id="ai-consultation" className="bg-background rounded-xl p-6 shadow-sm border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <RiRobot2Line size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">AI Consultation</h3>
              <p className="text-muted-foreground">
                Get medical insights and diagnosis suggestions based on patient symptoms and medical history.
              </p>
            </div>
            
            <div id="patient-management" className="bg-background rounded-xl p-6 shadow-sm border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <RiUserLine size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Patient Management</h3>
              <p className="text-muted-foreground">
                Store and manage patient records securely with easy access to medical history and consultations.
              </p>
            </div>
            
            <div id="resources" className="bg-background rounded-xl p-6 shadow-sm border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <RiDatabaseLine size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Medical Resources</h3>
              <p className="text-muted-foreground">
                Access comprehensive medical information, research papers, and treatment guidelines.
              </p>
            </div>
            
            <div id="analytics" className="bg-background rounded-xl p-6 shadow-sm border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <RiLineChartLine size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Health Analytics</h3>
              <p className="text-muted-foreground">
                Visualize patient trends and healthcare metrics with powerful analytics tools.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Trusted by Medical Professionals</h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            See what doctors and healthcare institutions say about Medical Guide
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "Medical Guide has transformed how I diagnose patients. The AI suggestions are incredibly accurate and have helped me save valuable time.",
              author: "Dr. Sarah Johnson",
              role: "Cardiologist",
              image: "/testimonial-1.jpg"
            },
            {
              quote: "As a hospital administrator, I've seen our efficiency improve by 40% since implementing Medical Guide across our departments.",
              author: "Michael Rodriguez",
              role: "Hospital Director",
              image: "/testimonial-2.jpg"
            },
            {
              quote: "The patient management system is intuitive and comprehensive. It's truly the best medical software I've used in my 15 years of practice.",
              author: "Dr. Emily Chen",
              role: "Family Physician",
              image: "/testimonial-3.jpg"
            }
          ].map((testimonial, i) => (
            <div key={i} className="bg-background p-6 rounded-xl border shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="text-muted-foreground">"{testimonial.quote}"</blockquote>
            </div>
          ))}
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-muted/40">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Find answers to common questions about Medical Guide
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How does the AI consultation work?",
                answer: "Our AI system analyzes patient symptoms and medical history, comparing them against a vast medical knowledge base to provide potential diagnoses and treatment suggestions."
              },
              {
                question: "Is Medical Guide compliant with healthcare regulations?",
                answer: "Yes, Medical Guide is fully HIPAA compliant and follows strict security protocols to protect patient data and privacy."
              },
              {
                question: "Can I integrate Medical Guide with existing systems?",
                answer: "Medical Guide offers comprehensive API access and can integrate with most electronic health record (EHR) systems and hospital management software."
              },
              {
                question: "What support options are available?",
                answer: "We provide 24/7 technical support, comprehensive documentation, and optional training sessions for your team."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-background p-6 rounded-xl border shadow-sm">
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 container">
        <div className="rounded-2xl bg-primary p-12 md:p-24 text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to revolutionize your practice?</h2>
          <p className="text-xl mb-8 max-w-[800px] mx-auto opacity-90">
            Join thousands of healthcare professionals who trust Medical Guide to improve their patient care.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/app/(auth)/register">
              <Button size="lg" variant="secondary" className="rounded-full">Get Started Free</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="rounded-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">Contact Sales</Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
