'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [focused, setFocused] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = 'Valid email is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFocus = (field) => setFocused((prev) => ({ ...prev, [field]: true }));
  const handleBlur = (field) => setFocused((prev) => ({ ...prev, [field]: false }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      setTimeout(() => {
        setFormData({ fullName: '', email: '', subject: '', message: '' });
        setSubmitSuccess(false);
        setFocused({});
      }, 3000);
    } catch {
      setErrors({ submit: 'Failed to submit form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderField = (field, label, type = 'text', isTextarea = false) => {
    const hasError = errors[field];
    const isActive = focused[field] || formData[field];

    return (
      <div key={field} className="relative pt-4">
        <label
          htmlFor={field}
          className={`absolute left-0 transition-all duration-200 cursor-text font-manrope font-semibold text-white ${
            isActive ? 'text-sm -top-2' : 'text-[20px] top-0'
          }`}
        >
          {label}
        </label>

        {isTextarea ? (
          <textarea
            id={field}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            onFocus={() => handleFocus(field)}
            onBlur={() => handleBlur(field)}
            required
            aria-invalid={!!hasError}
            rows="3"
            className={`w-full bg-transparent border-b-2 resize-none outline-none transition-colors duration-300 text-white pt-2 text-[16px] ${
              hasError
                ? 'border-red-500 focus:border-red-600'
                : 'border-white/50 focus:border-white'
            }`}
          />
        ) : (
          <input
            id={field}
            name={field}
            type={type}
            value={formData[field]}
            onChange={handleChange}
            onFocus={() => handleFocus(field)}
            onBlur={() => handleBlur(field)}
            required
            aria-invalid={!!hasError}
            className={`w-full bg-transparent border-b-2 outline-none transition-colors duration-300 text-white pt-2 text-[16px] ${
              hasError
                ? 'border-red-500 focus:border-red-600'
                : 'border-white/50 focus:border-white'
            }`}
          />
        )}

        {hasError && (
          <span
            id={`${field}-error`}
            className="text-red-400 text-sm mt-1 block"
            role="alert"
          >
            {hasError}
          </span>
        )}
      </div>
    );
  };

  return (
    <div className="text-white flex-1 w-full lg:w-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[clamp(32px,6vw,49px)]"
        noValidate
        aria-label="Contact form"
      >
        {renderField('fullName', 'Full name')}
        {renderField('email', 'E-mail', 'email')}
        {renderField('subject', 'Subject')}
        {renderField('message', 'Message', 'text', true)}

        {errors.submit && (
          <div className="text-red-400 text-sm" role="alert">
            {errors.submit}
          </div>
        )}

        <div>
          <button
            type="submit"
            disabled={isSubmitting || submitSuccess}
            className="w-[141px] h-[50px] flex items-center justify-center gap-[10px] rounded-full border border-[#00BFFF] bg-white text-black font-manrope font-medium text-[16px] leading-[100%] tracking-[0%] px-[30px] py-[10px] transition-all duration-300 hover:bg-[#00BFFF] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            aria-busy={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : submitSuccess ? 'Sent!' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  );
}
