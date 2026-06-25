import {
  Archive,
  Forward,
  MoreHorizontal,
  Paperclip,
  Reply,
  Search,
  Sparkles,
  Trash2,
} from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'

interface AuraInboxMockupProps {
  onApply: () => void
}

const SIDEBAR_ITEMS = [
  { label: 'Dashboard', count: 12, active: true },
  { label: 'Program Timeline', count: 5, active: false },
  { label: 'Resources', count: 24, active: false },
  { label: 'Mentorship', count: 2, active: false },
  { label: 'Projects', count: 8, active: false },
  { label: 'Community', count: 150, active: false },
]

const MESSAGES = [
  {
    name: 'Program Team',
    subject: 'Welcome to SCIP',
    preview: 'Your journey starts now...',
    time: '9:41 AM',
    unread: true,
    active: true,
  },
  {
    name: 'Mentor - Aditya',
    subject: 'Q3 Roadmap Discussion',
    preview: "Let's align on your goals...",
    time: '8:12 AM',
    unread: true,
  },
  {
    name: 'Project Manager',
    subject: 'Live Project Assignment',
    preview: "You're assigned to...",
    time: 'Yesterday',
  },
  {
    name: 'Alumni Network',
    subject: 'Job Opportunities',
    preview: 'Multiple openings available...',
    time: 'Yesterday',
  },
]

const TOOLBAR_ICONS = [Reply, Forward, Archive, Trash2, MoreHorizontal]

export function AuraInboxMockup({ onApply }: AuraInboxMockupProps) {
  const reduceMotion = useReducedMotion()

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="liquid-glass relative overflow-hidden rounded-2xl border border-white/10 bg-[#0e1014]/90 backdrop-blur-2xl"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <div className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="flex-1 text-center text-xs text-white/50">SCIP — Your Journey</span>
        </div>

        <div className="grid h-auto grid-cols-1 md:h-[520px] md:grid-cols-12">
          <div className="border-b border-white/10 bg-black/30 p-4 md:col-span-3 md:border-b-0 md:border-r">
            <button
              type="button"
              onClick={onApply}
              className="mb-6 flex w-full items-center justify-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-black transition-all hover:bg-white/90"
            >
              <Sparkles className="h-4 w-4" />
              Start Application
            </button>
            <div className="mb-6 space-y-1">
              {SIDEBAR_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className={`flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm transition-all ${
                    item.active ? 'bg-white/10 text-white' : 'text-white/60 hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-white/40">{item.count}</span>
                </div>
              ))}
            </div>
            <div className="hidden md:block">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-white/50">
                Tags
              </span>
              <div className="flex flex-wrap gap-2">
                {['#00d2ff', '#A4F4FD', '#f59e0b', '#10b981'].map((color) => (
                  <div
                    key={color}
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col border-b border-white/10 md:col-span-4 md:border-b-0 md:border-r">
            <div className="flex items-center gap-2 border-b border-white/10 bg-black/20 px-4 py-3">
              <Search className="h-4 w-4 text-white/50" />
              <span className="text-xs text-white/30">Search updates</span>
            </div>
            <div className="max-h-48 overflow-y-auto md:max-h-none md:flex-1">
              {MESSAGES.map((msg, i) => (
                <div
                  key={i}
                  className={`cursor-pointer border-b border-white/5 px-4 py-3 transition-all hover:bg-white/5 ${
                    msg.active ? 'bg-white/10' : ''
                  }`}
                >
                  <div className="mb-1 flex items-start justify-between">
                    <span
                      className={`text-sm ${msg.unread ? 'font-semibold text-white' : 'text-white/70'}`}
                    >
                      {msg.name}
                    </span>
                    <span className="text-xs text-white/50">{msg.time}</span>
                  </div>
                  <p className="text-xs text-white/50">{msg.subject}</p>
                  <p className="mt-1 truncate text-xs text-white/30">{msg.preview}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:col-span-5">
            <div className="flex items-center gap-2 border-b border-white/10 bg-black/20 px-4 py-3">
              {TOOLBAR_ICONS.map((Icon, i) => (
                <button
                  key={i}
                  type="button"
                  className="flex h-7 w-7 items-center justify-center rounded-md text-white/50 transition-all hover:bg-white/5 hover:text-white"
                  aria-label={`Action ${i + 1}`}
                >
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
            <div className="border-b border-white/10 px-6 py-4">
              <p className="mb-2 text-sm font-semibold text-white">Welcome to SCIP!</p>
              <div className="flex items-center gap-3">
                <div className="h-7 w-7 rounded-full bg-gradient-to-br from-[#00d2ff] to-[#0B2551]" />
                <div className="text-xs">
                  <p className="font-medium text-white">Program Team</p>
                  <p className="text-white/50">to you · 9:41 AM</p>
                </div>
                <span className="ml-auto rounded-full bg-white/10 px-2 py-1 text-xs text-white/70">
                  Programs
                </span>
              </div>
            </div>
            <div className="space-y-4 px-6 py-4 text-sm leading-[1.6] text-white/70">
              <div className="liquid-glass rounded-lg border border-white/10 p-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-[#A4F4FD]" />
                  <div>
                    <p className="text-xs font-medium text-white">Summary by SCIP AI</p>
                    <p className="mt-1 text-xs text-white/60">
                      SCIP is GravityTech&apos;s hiring pathway — one interview, a job offer, then
                      2–3 months of training before real-time client project work.
                    </p>
                  </div>
                </div>
              </div>
              <p>Hi there,</p>
              <p>
                Welcome to SCIP — how GravityTech hires and develops fresh talent. After one
                interview and a SCIP offer, you&apos;ll train for 2–3 months, then work on live
                client projects.
              </p>
              <p>
                Tracks include Java, Python & AI, QA Automation, and Data Analytics. Your training
                is hands-on and mentor-led — then you deploy on real deliverables.
              </p>
              <p className="text-white/50">— The SCIP Team</p>
              <div className="mt-4 flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs">
                <Paperclip className="h-3.5 w-3.5" />
                program-overview.pdf
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
