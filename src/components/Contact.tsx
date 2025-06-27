import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";

export const Contact = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const name = (form.querySelector('#name') as HTMLInputElement).value;
    const email = (form.querySelector('#email') as HTMLInputElement).value;
    const message = (form.querySelector('#message') as HTMLTextAreaElement).value;

    const res = await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      alert('Message sent!');
      form.reset();
    } else {
      alert('Failed to send message.');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Get In <span className="text-blue-400">Touch</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Let's Work Together</h3>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I'm always interested in hearing about new opportunities and exciting projects. 
              Whether you're a company looking to hire, or you're just interested in chatting 
              about web development, feel free to reach out!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-blue-500 p-3 rounded-full mr-4">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <a
                    href="mailto:ryanzunipangestu@gmail.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                    ryanzunipangestu@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-500 p-3 rounded-full mr-4">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">WhatsApp</h4>
                  <a
                    href="https://wa.me/6289603793260?text=Haloo!Saya%20ingin%20konsultasi%20pembuatan%20website"
                    target="_blank"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                    +62 896-0379-3260
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-500 p-3 rounded-full mr-4">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-gray-300">Jakarta Barat, DKI Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/ryanzuni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-blue-500 p-3 rounded-full transition-colors duration-300"
                >
                  <Github className="text-white" size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ryan-zuni-pangestu-70933525a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-blue-500 p-3 rounded-full transition-colors duration-300">
                  <Linkedin className="text-white" size={24} />
                </a>
                <a
                  href="https://instagram.com/ryanzunii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-blue-500 p-3 rounded-full transition-colors duration-300">
                  <Instagram className="text-white" size={24} />
                </a>
              </div>
            </div>
          </div>
          
          {/* ✅ FORM YANG SUDAH DIPERBAIKI */}
          <div className="bg-slate-700/50 rounded-xl p-8 backdrop-blur-sm border border-gray-600">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-slate-600 border border-gray-500 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-slate-600 border border-gray-500 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-slate-600 border border-gray-500 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors duration-300 hover:shadow-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © 2025 Ryan Zuni Pangestu.
          </p>
        </div>
      </div>
    </section>
  );
};
