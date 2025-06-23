import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  })
  
  const [showDialog, setShowDialog] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would send the form data to a server here
    console.log('Form data submitted:', formData)
    
    // Simulate a successful form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you! Your message has been sent successfully.'
    })
    
    // Show dialog
    setShowDialog(true)
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading">Get In Touch</h2>
          <div className="w-20 h-1 bg-indigo-500 dark:bg-violet-500 mx-auto"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration?
            Feel free to reach out to me using the form below or through my contact information.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md mb-6">
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">Contact Information</h3>
              
              <div className="flex items-start mb-4">
                <div className="text-indigo-600 dark:text-violet-400 text-xl mt-1 mr-4">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">dtcoder308@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <div className="text-indigo-600 dark:text-violet-400 text-xl mt-1 mr-4">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400">0845333577</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-indigo-600 dark:text-violet-400 text-xl mt-1 mr-4">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Ho Chi Minh, Vietnam</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Working Hours</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Monday - Friday: 9AM - 5PM</p>
              <p className="text-gray-600 dark:text-gray-400">Weekend: Available for urgent requests</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm text-gray-800 dark:text-gray-200">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-violet-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-800 dark:text-gray-200">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-violet-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block mb-2 text-sm text-gray-800 dark:text-gray-200">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-violet-500 focus:border-transparent"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm text-gray-800 dark:text-gray-200">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-violet-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <Button
                  type="submit"
                  className="bg-indigo-600 dark:bg-violet-600 hover:bg-indigo-700 dark:hover:bg-violet-700 flex items-center justify-center text-white"
                >
                  <FaPaperPlane className="mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white">
          <DialogHeader>
            <DialogTitle>Message Sent!</DialogTitle>
            <DialogDescription className="text-gray-600 dark:text-gray-400">
              Thank you for your message. I'll get back to you as soon as possible.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button 
              onClick={() => setShowDialog(false)}
              className="bg-indigo-600 dark:bg-violet-600 hover:bg-indigo-700 dark:hover:bg-violet-700"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default Contact 