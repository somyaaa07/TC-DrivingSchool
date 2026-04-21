'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, Calendar, ChevronDown, CheckCircle2 } from 'lucide-react';

const BG = '#3B3B3B';
const FG = '#FAFAEF';
const BORDER_DIM   = 'rgba(250,250,239,0.2)';
const BORDER_FOCUS = '#FAFAEF';
const TEXT_DIM     = 'rgba(250,250,239,0.42)';
const TEXT_MID     = 'rgba(250,250,239,0.68)';

const COURSES = [
  'Foundation Drive  (10 sessions)',
  'Confidence Course (20 sessions)',
  'Mastery Programme (30 sessions)',
];
const SLOTS = [
  '7:00 AM – 8:00 AM',
  '9:00 AM – 10:00 AM',
  '11:00 AM – 12:00 PM',
  '2:00 PM – 3:00 PM',
  '4:00 PM – 5:00 PM',
  '6:00 PM – 7:00 PM',
];

const CONTACT_INFO = [
  { label: 'Phone',    value: '+91 98765 43210' },
  { label: 'Email',   value: 'hello@apexdrive.in' },
  { label: 'Address', value: 'Sector 18, Noida — & 3 more centres' },
  { label: 'Hours',   value: 'Mon–Sat  ·  6 AM to 8 PM' },
];

/* Reusable field wrapper */
function Field({ label, icon: Icon, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="flex items-center gap-2 font-poppins text-[11px] tracking-[0.18em] uppercase"
        style={{ color: TEXT_DIM }}
      >
        {Icon && <Icon size={12} />}
        {label}
      </label>
      {children}
    </div>
  );
}

export default function Booking() {
  const INIT = { name: '', phone: '', course: '', slot: '', message: '' };
  const [form,      setForm]      = useState(INIT);
  const [focused,   setFocused]   = useState('');
  const [submitted, setSubmitted] = useState(false);

  const change = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  /* shared input style */
  const inputStyle = (name) => ({
    color:        FG,
    borderBottom: `1px solid ${focused === name ? BORDER_FOCUS : BORDER_DIM}`,
    transition:   'border-color 0.25s ease',
  });

  const inputClass = `
    w-full bg-transparent font-poppins text-sm py-3 px-0
    placeholder:text-[rgba(250,250,239,0.28)] outline-none
  `;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12"
      style={{ backgroundColor: BG }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* ════ Left — copy & contact ════ */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p
            className="font-poppins text-xs tracking-[0.22em] uppercase mb-3"
            style={{ color: TEXT_DIM }}
          >
            Reserve Your Spot
          </p>
          <h2
            className="font-oswald font-bold uppercase leading-[0.9] mb-8"
            style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.8rem)', color: FG }}
          >
            Book a<br />Session.
          </h2>
          <p
            className="font-poppins text-sm leading-relaxed mb-10"
            style={{ color: TEXT_MID }}
          >
            Fill in the form and we'll confirm your slot within 2 hours.
            No upfront payment required to reserve.
          </p>

          {/* Contact rows */}
          <div className="flex flex-col">
            {CONTACT_INFO.map(({ label, value }) => (
              <div
                key={label}
                className="flex gap-5 py-4 border-b"
                style={{ borderColor: 'rgba(250,250,239,0.1)' }}
              >
                <span
                  className="font-poppins text-[11px] tracking-[0.16em] uppercase w-20 shrink-0 pt-0.5"
                  style={{ color: TEXT_DIM }}
                >
                  {label}
                </span>
                <span className="font-poppins text-sm" style={{ color: TEXT_MID }}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ════ Right — form ════ */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center gap-6 py-20"
            >
              <CheckCircle2 size={52} strokeWidth={1} style={{ color: FG }} />
              <div>
                <h3
                  className="font-oswald font-bold text-3xl uppercase mb-3"
                  style={{ color: FG }}
                >
                  Booking Received!
                </h3>
                <p className="font-poppins text-sm" style={{ color: TEXT_MID }}>
                  We'll call you within 2 hours to confirm your slot.
                </p>
              </div>
              <button
                onClick={() => { setSubmitted(false); setForm(INIT); }}
                className="font-poppins text-sm underline underline-offset-4 mt-2"
                style={{ color: TEXT_DIM }}
              >
                Book another session
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-7">

              {/* Name */}
              <Field label="Full Name" icon={User}>
                <input
                  name="name" type="text" value={form.name}
                  onChange={change} required
                  onFocus={() => setFocused('name')}
                  onBlur={()  => setFocused('')}
                  placeholder="Your full name"
                  className={inputClass}
                  style={inputStyle('name')}
                />
              </Field>

              {/* Phone */}
              <Field label="Phone Number" icon={Phone}>
                <input
                  name="phone" type="tel" value={form.phone}
                  onChange={change} required
                  onFocus={() => setFocused('phone')}
                  onBlur={()  => setFocused('')}
                  placeholder="+91 00000 00000"
                  className={inputClass}
                  style={inputStyle('phone')}
                />
              </Field>

              {/* Course */}
              <Field label="Preferred Course" icon={Calendar}>
                <div className="relative">
                  <select
                    name="course" value={form.course}
                    onChange={change} required
                    onFocus={() => setFocused('course')}
                    onBlur={()  => setFocused('')}
                    className={`${inputClass} appearance-none pr-6 cursor-pointer`}
                    style={{
                      ...inputStyle('course'),
                      color: form.course ? FG : 'rgba(250,250,239,0.28)',
                    }}
                  >
                    <option value="" disabled hidden>Select a course</option>
                    {COURSES.map((c) => (
                      <option key={c} value={c}
                        style={{ backgroundColor: BG, color: FG }}
                      >{c}</option>
                    ))}
                  </select>
                  <ChevronDown size={13} className="absolute right-0 bottom-3.5 pointer-events-none"
                    style={{ color: TEXT_DIM }} />
                </div>
              </Field>

              {/* Slot */}
              <Field label="Preferred Slot" icon={Calendar}>
                <div className="relative">
                  <select
                    name="slot" value={form.slot}
                    onChange={change} required
                    onFocus={() => setFocused('slot')}
                    onBlur={()  => setFocused('')}
                    className={`${inputClass} appearance-none pr-6 cursor-pointer`}
                    style={{
                      ...inputStyle('slot'),
                      color: form.slot ? FG : 'rgba(250,250,239,0.28)',
                    }}
                  >
                    <option value="" disabled hidden>Choose a time slot</option>
                    {SLOTS.map((s) => (
                      <option key={s} value={s}
                        style={{ backgroundColor: BG, color: FG }}
                      >{s}</option>
                    ))}
                  </select>
                  <ChevronDown size={13} className="absolute right-0 bottom-3.5 pointer-events-none"
                    style={{ color: TEXT_DIM }} />
                </div>
              </Field>

              {/* Message */}
              <Field label="Message (Optional)">
                <textarea
                  name="message" value={form.message}
                  onChange={change} rows={3}
                  onFocus={() => setFocused('message')}
                  onBlur={()  => setFocused('')}
                  placeholder="Any questions or requirements…"
                  className={`${inputClass} resize-none`}
                  style={inputStyle('message')}
                />
              </Field>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-2 w-full py-4 font-poppins text-sm font-medium tracking-[0.18em] uppercase border cursor-pointer transition-colors duration-300"
                style={{
                  backgroundColor: 'transparent',
                  borderColor: FG,
                  color: FG,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = FG;
                  e.currentTarget.style.color = BG;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = FG;
                }}
              >
                Confirm Booking
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}