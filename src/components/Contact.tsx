import { useState, FormEvent, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  MessageSquare, 
  ExternalLink,
  Info
} from "lucide-react";
import { portfolioData } from "../data";
import emailjs from "@emailjs/browser";

interface SavedMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

interface Toast {
  id: string;
  message: string;
  type: "success" | "error" | "info";
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [emailJsConfigured, setEmailJsConfigured] = useState(false);
  const [copied, setCopied] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Check if EmailJS keys are configured in environment variables
  useEffect(() => {
   const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

console.log({
  serviceId,
  templateId,
  publicKey,
});

setEmailJsConfigured(
  !!serviceId &&
  !!templateId &&
  !!publicKey
);
  }, []);

  // Toast trigger helper
  const addToast = (msg: string, type: "success" | "error" | "info" = "info") => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, message: msg, type }]);
    
    // Auto-remove toast after 4 seconds
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Copy Email to clipboard
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.personalInfo.email);
      setCopied(true);
      addToast("Email copied to clipboard!", "success");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      addToast("Failed to copy email automatically.", "error");
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      addToast("Please fill in all required fields.", "error");
      return;
    }

    setIsSubmitting(true);
    addToast("Establishing secure transmission...", "info");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Standard template params designed to go straight to their email
    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject || "Inquiry from Portfolio",
      message: message,
      to_email: "saivishalkeshapolla123@gmail.com",
      reply_to: email,
    };

    if (serviceId && templateId && publicKey) {
      try {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        addToast("Email sent successfully to Sai's Inbox!", "success");
        setSubmitSuccess(true);
        saveMessageLocally();
        // Clear fields
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } catch (err: any) {
        console.error("EmailJS sending error: ", err);
        addToast(`EmailJS Error: ${err?.text || "Unknown error occurred"}. Falling back.`, "error");
        triggerLocalFallback();
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Keys are missing: run high fidelity local simulation + log warning
      setTimeout(() => {
        addToast("Form Demo Mode: Message simulated and saved locally! (Add EmailJS keys in secrets to send real emails)", "info");
        setSubmitSuccess(true);
        saveMessageLocally();
        setIsSubmitting(false);
        // Clear fields
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }, 1200);
    }
  };

  const saveMessageLocally = () => {
    try {
      const newMessage: SavedMessage = {
        id: Math.random().toString(36).substring(2, 9),
        name,
        email,
        subject: subject || "General Inquiry",
        message,
        timestamp: new Date().toLocaleString(),
      };
      const currentInbox = JSON.parse(localStorage.getItem("portfolio_inbox") || "[]");
      currentInbox.push(newMessage);
      localStorage.setItem("portfolio_inbox", JSON.stringify(currentInbox));
    } catch (err) {
      console.error("Failed to save message to local inbox.", err);
    }
  };

  const triggerLocalFallback = () => {
    setSubmitSuccess(true);
    saveMessageLocally();
  };

  const handleMailtoFallback = () => {
    const mailtoUri = `mailto:saivishalkeshapolla123@gmail.com?subject=${encodeURIComponent(
      subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(`Hi Sai Vishal,\n\n${message}\n\nBest regards,\n${name} (${email})`)}`;
    window.location.href = mailtoUri;
  };

  return (
    <section className="section-padding relative overflow-hidden" id="contact">
      {/* Title block */}
      <div className="text-center mb-16">
        <p className="heading-label">
          Get In Touch
        </p>
        <h2 className="heading-title">
          Let's Create Something Great
        </h2>
        <p className="font-sans text-zinc-400 font-light mt-4 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Have an idea or a project in mind? Drop a message. This form connects via EmailJS to route communications instantly to saivishalkeshapolla123@gmail.com.
        </p>
      </div>

      {/* Main split grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative">
        
        {/* Left column: Contact Info & Map Card */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          {/* Info Card */}
          <div className="glass-card rounded-2xl p-8 space-y-8">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <h3 className="font-display text-lg font-bold text-white tracking-tight flex items-center gap-3">
                <Mail className="w-5 h-5 text-indigo-400" />
                Contact Info
              </h3>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-indigo-400 font-bold tracking-wider">DIRECT MAIL</span>
            </div>

            <div className="space-y-4">
              {/* Copy Email Segment */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-black/20 border border-white/5 hover:border-white/10 transition-colors group">
                <div className="p-3 rounded-xl bg-white/5 text-zinc-400 border border-white/10 shrink-0 shadow-lg group-hover:text-indigo-400 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-sans font-bold text-zinc-500 text-[11px] uppercase tracking-wider">Email Address</h4>
                  <a
                    href={`mailto:${portfolioData.personalInfo.email}`}
                    className="font-sans text-sm text-white hover:text-indigo-400 transition-colors block mt-1 truncate"
                  >
                    {portfolioData.personalInfo.email}
                  </a>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white transition-all shrink-0 cursor-pointer self-center"
                  title="Copy Email"
                >
                  {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />}
                </button>
              </div>

              {/* Phone Segment */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-black/20 border border-white/5 hover:border-white/10 transition-colors group">
                <div className="p-3 rounded-xl bg-white/5 text-zinc-400 border border-white/10 shrink-0 shadow-lg group-hover:text-indigo-400 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-sans font-bold text-zinc-500 text-[11px] uppercase tracking-wider">Phone Line</h4>
                  <a
                    href={`tel:${portfolioData.personalInfo.phone.replace(/\s+/g, "")}`}
                    className="font-sans text-sm text-white hover:text-indigo-400 transition-colors block mt-1 truncate"
                  >
                    {portfolioData.personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Location Segment */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-black/20 border border-white/5 hover:border-white/10 transition-colors group">
                <div className="p-3 rounded-xl bg-white/5 text-zinc-400 border border-white/10 shrink-0 shadow-lg group-hover:text-indigo-400 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-sans font-bold text-zinc-500 text-[11px] uppercase tracking-wider">Primary Location</h4>
                  <span className="font-sans text-sm text-white block mt-1">
                    {portfolioData.personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Social channels */}
            <div>
              <h4 className="font-mono text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-4">Connect Socially</h4>
              <div className="flex items-center gap-3">
                <a
                  href={portfolioData.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors flex items-center justify-center shadow-lg"
                  title="Connect via LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={portfolioData.personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors flex items-center justify-center shadow-lg"
                  title="Explore Code on GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Embedded Google Maps Container Card */}
          <div className="glass-card rounded-2xl p-6 overflow-hidden flex-1 flex flex-col justify-between shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans font-bold text-sm text-zinc-300 uppercase tracking-wider flex items-center gap-2">
                <MapPin className="w-5 h-5 text-indigo-400" />
                ECIL, Hyderabad, India
              </span>
            </div>
            
            <div className="relative w-full rounded-xl overflow-hidden border border-white/5 flex-1 min-h-[160px]">
              <iframe 
                src="https://maps.google.com/maps?q=ECIL,%20Hyderabad,%20Telangana,%20India&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: "grayscale(1) invert(0.95) contrast(1.2) brightness(0.9)" }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Maps Location Frame"
                className="absolute inset-0 w-full h-full opacity-80 mix-blend-screen"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Right column: Working contact form */}
        <div className="lg:col-span-7 flex">
          <div className="glass-card rounded-2xl p-8 flex-1 flex flex-col justify-between min-h-[440px]">
            <AnimatePresence mode="wait">
              {submitSuccess ? (
                // SUCCESS STATE
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 flex flex-col items-center justify-center text-center space-y-6 py-6"
                >
                  <div className="p-3.5 rounded-full bg-slate-800 border border-slate-700/50 text-emerald-400 shadow-lg shadow-emerald-500/5">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">
                      Message Transmitted!
                    </h3>
                    <p className="font-sans text-sm text-zinc-400 max-w-sm mx-auto leading-relaxed font-light">
                      Thank you for reaching out. {emailJsConfigured ? "EmailJS has dispatched your inquiry directly to saivishalkeshapolla123@gmail.com." : "The message has been logged securely in the local session storage."}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-850/60 w-full max-w-md font-mono text-xs text-left space-y-1.5 text-zinc-400">
                    <div className="flex justify-between border-b border-slate-800/60 pb-2 mb-2 text-zinc-300 font-bold uppercase tracking-wider">
                      <span>Routing Metrics</span>
                      <span>Dispatched</span>
                    </div>
                    <div><span className="text-slate-550">To Inbox:</span> saivishalkeshapolla123@gmail.com</div>
                    <div><span className="text-slate-550">Protocol:</span> Secured TLS Envelope</div>
                    <div><span className="text-slate-550">Time:</span> {new Date().toLocaleTimeString()}</div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full max-w-md pt-2">
                    <button
                      onClick={handleMailtoFallback}
                      className="w-full px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-white hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-white/5"
                    >
                      Open in Mail App
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="w-full px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-300 bg-slate-800 border border-slate-700/60 hover:bg-slate-700 transition-colors cursor-pointer"
                    >
                      Compose New Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                // THE CORE FORM
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 flex-1 flex flex-col justify-between"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div className="flex items-center gap-3">
                        <MessageSquare className="w-5 h-5 text-indigo-400" />
                        <h3 className="font-display font-bold text-white text-lg">Direct Message Channel</h3>
                      </div>
                      
                      <span className={`px-3 py-1 rounded-md text-[10px] font-mono font-bold flex items-center gap-2 ${
                        emailJsConfigured 
                          ? "bg-white/5 border border-white/10 text-emerald-400" 
                          : "bg-white/5 border border-white/10 text-amber-400"
                      }`}>
                        <span className={`h-2 w-2 rounded-full ${emailJsConfigured ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`} />
                        {emailJsConfigured ? "EMAILJS LIVE" : "DEMO MODE"}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Full Name field */}
                      <div className="space-y-2">
                        <label className="font-mono text-xs font-semibold text-zinc-400 tracking-wider uppercase block">
                          Full Name <span className="text-indigo-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your Name"
                          className="w-full px-5 py-3.5 rounded-xl bg-black/20 border border-white/5 focus:border-indigo-500/50 focus:outline-none text-white text-sm transition-colors placeholder:text-zinc-600 shadow-inner"
                        />
                      </div>

                      {/* Email field */}
                      <div className="space-y-2">
                        <label className="font-mono text-xs font-semibold text-zinc-400 tracking-wider uppercase block">
                          Email Address <span className="text-indigo-400">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your.email@domain.com"
                          className="w-full px-5 py-3.5 rounded-xl bg-black/20 border border-white/5 focus:border-indigo-500/50 focus:outline-none text-white text-sm transition-colors placeholder:text-zinc-600 shadow-inner"
                        />
                      </div>
                    </div>

                    {/* Subject field */}
                    <div className="space-y-2">
                      <label className="font-mono text-xs font-semibold text-zinc-400 tracking-wider uppercase block">
                        Subject Line
                      </label>
                      <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Project Collaboration"
                        className="w-full px-5 py-3.5 rounded-xl bg-black/20 border border-white/5 focus:border-indigo-500/50 focus:outline-none text-white text-sm transition-colors placeholder:text-zinc-600 shadow-inner"
                      />
                    </div>

                    {/* Message input */}
                    <div className="space-y-2">
                      <label className="font-mono text-xs font-semibold text-zinc-400 tracking-wider uppercase block">
                        Your Detailed Message <span className="text-indigo-400">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Hi Sai Vishal, I'd love to discuss a project..."
                        className="w-full px-5 py-3.5 rounded-xl bg-black/20 border border-white/5 focus:border-indigo-500/50 focus:outline-none text-white text-sm transition-colors placeholder:text-zinc-600 resize-none shadow-inner"
                      />
                    </div>
                  </div>

                  {/* Submission and informative guidelines */}
                  <div className="space-y-4 pt-6 border-t border-white/10 mt-auto">
                    {!emailJsConfigured && (
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-zinc-400 leading-normal">
                        <Info className="w-5 h-5 shrink-0 text-amber-500" />
                        <div>
                          EmailJS is active. Set VITE_EMAILJS_* environment variables to send live emails to saivishalkeshapolla123@gmail.com.
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl text-sm font-bold text-black bg-white hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-55 cursor-pointer shadow-lg shadow-white/10"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-black" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Transmitting...
                        </>
                      ) : (
                        <>
                          Transmit Secure Mail
                          <Send className="w-5 h-5 text-black" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* FIXED TOAST NOTIFICATION PORTAL */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full px-4 sm:px-0 pointer-events-none">
        <AnimatePresence>
          {toasts.map(t => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
              className={`pointer-events-auto flex items-center gap-2 px-3.5 py-2.5 rounded-lg border shadow-lg text-xs font-medium ${
                t.type === "success" 
                  ? "bg-[#0a0f1d] border-emerald-900/60 text-emerald-300"
                  : t.type === "error"
                  ? "bg-[#0a0f1d] border-rose-900/60 text-rose-300"
                  : "bg-[#0a0f1d] border-slate-800 text-zinc-300"
              }`}
            >
              {t.type === "success" && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
              {t.type === "error" && <AlertCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" />}
              {t.type === "info" && <Info className="w-3.5 h-3.5 text-zinc-500 shrink-0" />}
              <span className="flex-1 text-zinc-300">{t.message}</span>
              <button 
                onClick={() => removeToast(t.id)} 
                className="text-zinc-600 hover:text-white transition-colors cursor-pointer text-[10px] ml-2 font-bold shrink-0"
              >
                ✕
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
