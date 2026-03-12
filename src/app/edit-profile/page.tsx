"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function EditProfilePage() {
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "Music",
    "Foodie",
    "Cinema",
  ]);

  const categories = [
    { id: "Music", icon: "music_note" },
    { id: "Art", icon: "palette" },
    { id: "Foodie", icon: "restaurant" },
    { id: "Outdoors", icon: "fitness_center" },
    { id: "Cinema", icon: "movie" },
    { id: "Tech", icon: "code" },
  ];

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleSave = () => {
    router.push("/profile");
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
        <div className="max-w-xl mx-auto flex items-center justify-between p-4">
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center p-2 rounded-full hover:bg-primary/10 transition-colors active:scale-90"
          >
            <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">
              arrow_back
            </span>
          </button>
          <h1 className="text-lg font-bold">Edit Profile</h1>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors active:scale-95"
          >
            Save
          </button>
        </div>
      </nav>

      <main className="max-w-xl mx-auto pb-12 w-full">
        {/* Profile Picture Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center py-8 gap-4"
        >
          <div className="relative group">
            <div
              className="size-32 rounded-full border-4 border-primary/20 bg-cover bg-center overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDTNhOig6WNM65mq3__3NJ6ZjF55nLW0PSfqv5k8cdVl8UEzWpKvT1YWax17EY4Z8DUk9j1FEXLfYVLBmwXFrzxV81RQpwp0s1YQB42twa_L8RpVnqLkiyQRXRlBuzoYUycxP1eTpXzD4BXox9O7GEFdLPhXdcvfTjZyVLAUjf7QUPNybgdvsN1Eo0zHsWGLjDUVtZdSB2xEtsNcRfWEyahH4VwbVklQFOP3CzU_y_HzZjg4XPl-DwoDrKGSOWopSCMIY-rTloJnHJn')",
              }}
            ></div>
            <button className="absolute bottom-0 right-0 size-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg border-4 border-background-dark active:scale-90 transition-transform">
              <span className="material-symbols-outlined text-xl">
                photo_camera
              </span>
            </button>
          </div>
          <p className="text-primary font-semibold text-sm cursor-pointer hover:underline">
            Change Profile Photo
          </p>
        </motion.div>

        {/* Form Fields */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="px-4 space-y-6"
        >
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-slate-500 dark:text-slate-400 ml-1">
              Full Name
            </label>
            <input
              className="w-full bg-primary/5 border border-primary/20 rounded-xl px-4 py-3.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:text-white"
              placeholder="Enter your name"
              type="text"
              defaultValue="Alex Henderson"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-slate-500 dark:text-slate-400 ml-1">
              Email Address
            </label>
            <input
              className="w-full bg-primary/5 border border-primary/20 rounded-xl px-4 py-3.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:text-white"
              placeholder="your@email.com"
              type="email"
              defaultValue="alex.h@socialspot.app"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-slate-500 dark:text-slate-400 ml-1">
              Phone Number
            </label>
            <input
              className="w-full bg-primary/5 border border-primary/20 rounded-xl px-4 py-3.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:text-white"
              placeholder="+1 000 000 0000"
              type="tel"
              defaultValue="+1 (555) 000-1234"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-slate-500 dark:text-slate-400 ml-1">
              Location
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                location_on
              </span>
              <input
                className="w-full bg-primary/5 border border-primary/20 rounded-xl pl-12 pr-4 py-3.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:text-white"
                placeholder="City, Country"
                type="text"
                defaultValue="San Francisco, CA"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-slate-500 dark:text-slate-400 ml-1">
              Bio
            </label>
            <textarea
              className="w-full bg-primary/5 border border-primary/20 rounded-xl px-4 py-3.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:text-white resize-none"
              placeholder="Tell us about yourself..."
              rows={4}
              defaultValue="Adventurer, coffee enthusiast, and tech minimalist. Exploring the hidden gems of the Bay Area one weekend at a time."
            />
          </div>
        </motion.div>

        {/* Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="px-4 mt-8"
        >
          <h3 className="text-lg font-bold mb-4">Favorite Categories</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => toggleCategory(category.id)}
                className={`px-4 py-2 rounded-full border font-medium text-sm flex items-center gap-2 transition-all active:scale-95 ${
                  selectedCategories.includes(category.id)
                    ? "border-primary bg-primary text-white"
                    : "border-primary/20 bg-primary/5 text-slate-600 dark:text-slate-300 hover:border-primary/50"
                }`}
              >
                <span className="material-symbols-outlined text-sm">
                  {category.icon}
                </span>
                {category.id}
              </button>
            ))}
            <button className="px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary border-dashed font-bold text-sm flex items-center gap-2 hover:bg-primary/20 transition-colors active:scale-95">
              <span className="material-symbols-outlined text-sm">add</span>
              Add More
            </button>
          </div>
        </motion.div>

        {/* Additional Settings Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="px-4 mt-10"
        >
          <div className="bg-primary/5 rounded-xl overflow-hidden border border-primary/10">
            <button className="w-full flex items-center justify-between p-4 hover:bg-primary/10 transition-colors border-b border-primary/5 active:scale-[0.99]">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  lock
                </span>
                <span className="font-medium">Privacy Settings</span>
              </div>
              <span className="material-symbols-outlined text-slate-400">
                chevron_right
              </span>
            </button>
            <button className="w-full flex items-center justify-between p-4 hover:bg-primary/10 transition-colors active:scale-[0.99]">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  notifications
                </span>
                <span className="font-medium">Notification Preferences</span>
              </div>
              <span className="material-symbols-outlined text-slate-400">
                chevron_right
              </span>
            </button>
          </div>
        </motion.div>

        <div className="px-4 mt-8 pb-10">
          <button className="w-full py-4 text-red-500 font-bold hover:bg-red-500/10 rounded-xl transition-colors active:scale-95">
            Deactivate Account
          </button>
        </div>
      </main>
    </div>
  );
}
