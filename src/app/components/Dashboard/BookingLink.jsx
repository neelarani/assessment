"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function BookingLink() {
  const [copied, setCopied] = useState(false);
  const bookingUrl = "https://techstore.com/book?id=store123";

  const handleCopy = () => {
    navigator.clipboard.writeText(bookingUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-b from-[#1A1A2E] to-[#16213E] rounded-lg p-6 border-2 border-blue-950 mb-8">
      <h3 className="text-lg font-semibold mb-4">Booking Link</h3>
      <div className="flex items-center gap-4">
        <input
          type="text"
          value={bookingUrl}
          readOnly
          className="flex-1 bg-[#0A0A0F80] border border-green-900 rounded-lg px-4 py-2 text-foreground text-sm focus:outline-none"
        />
        <button
          onClick={handleCopy}
          className={`flex items-center gap-2 px-6 py-2 rounded-lg cursor-pointer font-medium transition-all ${
            copied
              ? "bg-green-500/20 text-green-400"
              : "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30"
          }`}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              Copied
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy Link
            </>
          )}
        </button>
      </div>
    </div>
  );
}
