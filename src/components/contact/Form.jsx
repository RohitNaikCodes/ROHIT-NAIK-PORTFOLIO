"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const sendEmail = (params) => {
    // Check if EmailJS credentials are configured
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey || 
        serviceId === 'your_service_id_here' || 
        templateId === 'your_template_id_here' || 
        publicKey === 'your_public_key_here') {
      toast.error("EmailJS is not configured. Please set up your credentials in .env.local file.", {
        duration: 5000,
      });
      console.error("EmailJS Configuration Missing. Please add your credentials to .env.local");
      return;
    }

    const toastId = toast.loading("Sending your message...");

    emailjs
      .send(
        serviceId,
        templateId,
        params,
        {
          publicKey: publicKey,
          limitRate: { throttle: 5000 },
        }
      )
      .then(() => {
        toast.success("Message sent successfully!", { id: toastId });
        setIsPopupVisible(true);
        reset(); // clear form
      })
      .catch((error) => {
        console.error("FAILED...", error.text);
        toast.error("There was an error sending your message!", { id: toastId });
      });
  };

  const onSubmit = (data) => {
    const templateParams = {
      to_name: "Rohit Naik",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };
    sendEmail(templateParams);
  };

  return (
    <>
      <Toaster richColors={true} />

      {/* ✅ Popup Modal */}
   {isPopupVisible && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="relative p-8 rounded-2xl shadow-2xl text-center max-w-sm w-[90%] border border-accent/40 overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-black-600 via-gray-500 to-black-500"
        style={{ filter: 'blur(60px)' }}
        animate={{ x: [-50, 50, -50], y: [-30, 30, -30] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Popup Content */}
      <div className="relative z-10">
        <h2 className="text-2xl font-semibold text-accent mb-2">
          Message Sent Successfully 💫
        </h2>
        <p className="text-gray-200 mb-6">
          I’ve received your message and will get back to you soon.  
          Thank you for reaching out!
        </p>
        <button
          onClick={() => setIsPopupVisible(false)}
          className="px-6 py-2 bg-accent text-white font-medium rounded-md hover:bg-accent/90 transition"
        >
          Close
        </button>
      </div>
    </motion.div>
  </div>
)}



      {/* ✅ Form */}
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        <motion.input
          variants={item}
          type="text"
          placeholder="name"
          {...register("name", {
            required: "This field is required!",
            minLength: { value: 3, message: "Name should be at least 3 characters." },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.name && (
          <span className="inline-block self-start text-accent">
            {errors.name.message}
          </span>
        )}

        <motion.input
          variants={item}
          type="email"
          placeholder="email"
          {...register("email", { required: "This field is required!" })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.email && (
          <span className="inline-block self-start text-accent">
            {errors.email.message}
          </span>
        )}

        <motion.textarea
          variants={item}
          placeholder="message"
          {...register("message", {
            required: "This field is required!",
            maxLength: {
              value: 500,
              message: "Message should be less than 500 characters.",
            },
            minLength: {
              value: 20,
              message: "Message should be more than 20 characters.",
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.message && (
          <span className="inline-block self-start text-accent">
            {errors.message.message}
          </span>
        )}

        <motion.input
          variants={item}
          value="Cast your message!"
          className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30
          hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none
          focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize"
          type="submit"
        />
      </motion.form>
    </>
  );
}
