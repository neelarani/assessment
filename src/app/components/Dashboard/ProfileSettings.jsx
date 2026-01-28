"use client";

import { useState } from "react";

import Image from "next/image";
import { FilePenLine } from "lucide-react";

export function ProfileSettings() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: "Jane D.",
    email: "jane@gmail.com",
    storeName: "Ubreakfix Store",
    storeAddress: "123 Main Street, New York",
  });

  const [formData, setFormData] = useState(profileData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setProfileData(formData);
    setIsEditing(false);
  };

  return (
    <div className="space-y-8 max-w-2xl">
      <div className="space-y-6 relative">
        <h3 className="text-lg font-semibold text-foreground">Profile Image</h3>
        <div className=" w-32 h-32 z-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center overflow-hidden border-2 border-cyan-500/30 group cursor-pointer">
          <Image
            src="https://i.ibb.co/RT7sWvTr/me-removebg-preview-removebg-preview.png"
            alt="Profile"
            width={30}
            height={30}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex justify-center mt-2 absolute bottom-2 left-24 ">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="p-2 bg-[#7AA3CC] rounded-lg shadow-lg font-bold cursor-pointer"
          >
            <FilePenLine className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {isEditing ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="">
                <label className="text-sm text-muted-foreground mb-2 block font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block font-medium">
                  Store Name
                </label>
                <input
                  type="text"
                  name="storeName"
                  value={formData.storeName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block font-medium">
                  Store Address
                </label>
                <input
                  type="text"
                  name="storeAddress"
                  value={formData.storeAddress}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                />
              </div>
            </div>

            <div className="flex justify-center pt-6">
              <button
                onClick={handleSave}
                className="px-16 py-3 rounded-lg bg-[#00C950] text-white font-semibold hover:bg-green-600 transition-colors  cursor-pointer text-base"
              >
                Save
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="max-w-2xl space-y-2">
              <div className="flex items-center gap-4 border-b border-blue-950 pb-1">
                <span className="w-32 text-sm text-muted-foreground font-medium">
                  Full Name:
                </span>
                <span className="text-foreground text-base">
                  {profileData.fullName}
                </span>
              </div>

              <div className="flex items-center gap-4 border-b border-blue-950 pb-1">
                <span className="w-32 text-sm text-muted-foreground font-medium">
                  Email:
                </span>
                <span className="text-foreground text-base">
                  {profileData.email}
                </span>
              </div>

              <div className="flex items-center gap-4 border-b border-blue-950 pb-1">
                <span className="w-32 text-sm text-muted-foreground font-medium">
                  Store Name:
                </span>
                <span className="text-foreground text-base">
                  {profileData.storeName}
                </span>
              </div>

              <div className="flex items-center gap-4 border-b border-blue-950 pb-1">
                <span className="w-32 text-sm text-muted-foreground font-medium">
                  Store Address:
                </span>
                <span className="text-foreground text-base">
                  {profileData.storeAddress}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
