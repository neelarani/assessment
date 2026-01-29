"use client";

import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import CallDetails from "./CallDetails";
import CallList from "./CallList";

export function CallLogs() {
  const [selectedCall, setSelectedCall] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Type");
  const [issueFilter, setIssueFilter] = useState("All Issues");
  const [dateFilter, setDateFilter] = useState("Today");

  const callsData = [
    {
      id: 1,
      phone: "+1 (555) 345-6789",
      date: "2025-12-16",
      time: "09:42 AM",
      duration: "5:23",
      notes: "Quote Provided",
      status: "AI Resolved",
      tag: "Screen",
      agent: "Israt Jahan",
      issueType: "Screen",
      outcome: "Quote provided",
      transcript: [
        {
          speaker: "AI Assistant",
          text: "Thank you for calling UBreakIFix! How can I help you today?",
        },
        {
          speaker: "Customer",
          text: "Hi, my iPhone 13 screen is cracked. How much would it cost to repair?",
        },
        {
          speaker: "AI Assistant",
          text: "I can help you with that! For an iPhone 13 screen repair, our price is $189. This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?",
        },
        {
          speaker: "Customer",
          text: "Yes, please! When are you available? ",
        },
        {
          speaker: "AI Assistant",
          text: "Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?",
        },
      ],
    },
    {
      id: 2,
      phone: "+1 (555) 345-6767",
      date: "2025-12-16",
      time: "09:42 AM",
      duration: "5:23",
      notes: "Escalated to technician",
      status: "Warm Transfer",
      tag: "Software",
      agent: "Israt Jahan",
      issueType: "Software",
      outcome: "Escalated to technician",
      transcript: [
        {
          speaker: "AI Assistant",
          text: "Hello! How can I assist you today?",
        },
        {
          speaker: "Customer",
          text: "My phone keeps restarting. I think it might be a software issue.",
        },
        {
          speaker: "AI Assistant",
          text: "Let me transfer you to one of our technicians who can help with that.",
        },
      ],
    },
    {
      id: 3,
      phone: "+1 (555) 345-6755",
      date: "2025-12-16",
      time: "09:42 AM",
      duration: "5:23",
      notes: "Appointment Booked",
      status: "Appointment",
      tag: "Battery",
      agent: "Israt Jahan",
      issueType: "Battery",
      outcome: "Appointment booked",
      transcript: [
        {
          speaker: "AI Assistant",
          text: "Welcome! What brings you in today?",
        },
        {
          speaker: "Customer",
          text: "My battery drains very quickly.",
        },
        {
          speaker: "AI Assistant",
          text: "I can schedule a battery replacement for you. When would work best?",
        },
      ],
    },
    {
      id: 4,
      phone: "+1 (555) 345-6789",
      date: "2025-12-16",
      time: "09:42 AM",
      duration: "0:20",
      notes: "Call Dropped",
      status: "Dropped",
      tag: "Unknown",
      agent: "Israt Jahan",
      issueType: "Unknown",
      outcome: "Call was dropped",
      transcript: [
        {
          speaker: "AI Assistant",
          text: "Hello, this is UBreakIFix support. How can I help?",
        },
        {
          speaker: "Customer",
          text: "Hi, I need help with...",
        },
      ],
    },
    {
      id: 5,
      phone: "+1 (555) 345-6789",
      date: "2025-12-16",
      time: "09:42 AM",
      duration: "5:23",
      notes: "Quote Provided",
      status: "AI Resolved",
      tag: "Screen",
      agent: "Israt Jahan",
      issueType: "Screen",
      outcome: "Quote provided",
      transcript: [
        {
          speaker: "AI Assistant",
          text: "Thank you for calling! How can I assist you?",
        },
        {
          speaker: "Customer",
          text: "I have a cracked screen on my Samsung phone.",
        },
        {
          speaker: "AI Assistant",
          text: "For a Samsung screen repair, we charge $149. Would you like to schedule?",
        },
      ],
    },
  ];

  const filteredCalls = callsData.filter((call) => {
    const matchesSearch =
      call.phone.includes(searchTerm) ||
      call.issueType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "All Type" || call.status === typeFilter;
    const matchesIssue =
      issueFilter === "All Issues" || call.issueType === issueFilter;
    return matchesSearch && matchesType && matchesIssue;
  });

  const handleSelectCall = (call) => {
    setSelectedCall(call);
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-4 items-center">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by phone number, issue type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="md:w-[555px] pl-12 pr-4 py-3 rounded-lg bg-[#111B3C] border-2 border-blue-950 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>

        {/* dropdown btn */}
        <div className="flex gap-3">
          <div className="relative group">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#111B3C] border-2 border-blue-950 text-white hover:bg-card/80 transition-colors">
              {typeFilter}
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute right-0 mt-2 w-40 bg-[#111B3C] border-2 border-blue-950 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
              {[
                "All Type",
                "AI Resolved",
                "Warm Transfer",
                "Appointment",
                "Dropped",
              ].map((type) => (
                <button
                  key={type}
                  onClick={() => setTypeFilter(type)}
                  className="block w-full text-left px-4 py-2 text-white hover:bg-blue-500/20 first:rounded-t-lg last:rounded-b-lg"
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg  bg-[#111B3C] border-2 border-blue-950 text-white hover:bg-card/80 transition-colors">
              {issueFilter}
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute right-0 mt-2 w-40 bg-[#111B3C] border-2 border-blue-950 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
              {["All Issues", "Screen", "Battery", "Software", "Unknown"].map(
                (issue) => (
                  <button
                    key={issue}
                    onClick={() => setIssueFilter(issue)}
                    className="block w-full bg-[#111B3C]  text-left px-4 py-2 text-white hover:bg-blue-500/20 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {issue}
                  </button>
                ),
              )}
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#111B3C]  border-2 border-blue-950 text-white hover:bg-card/80 transition-colors">
              {dateFilter}
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute right-0 mt-2 w-40 bg-card  rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
              {["Today", "Yesterday", "This Week", "This Month"].map((date) => (
                <button
                  key={date}
                  onClick={() => setDateFilter(date)}
                  className="block w-full bg-[#111B3C] border-2 border-blue-950  text-left px-4 py-2 text-white hover:bg-blue-500/20 first:rounded-t-lg last:rounded-b-lg"
                >
                  {date}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 ">
        <div className="md:w-[555px] bg-[#111B3C] border-2 rounded-2xl border-blue-950 ">
          <h3 className="text-base md:text-lg font-semibold text-white mb-4  p-4">
            Call List
          </h3>
          {/* class list */}
          <div className="space-y-3">
            {filteredCalls.map((call) => (
              <CallList
                key={call.id}
                call={call}
                isSelected={selectedCall?.id === call.id}
                onSelect={() => handleSelectCall(call)}
              />
            ))}
          </div>
        </div>

        {/* Call details */}
        <div className="md:w-[700px] bg-[#111B3C] border-2 rounded-2xl border-blue-950">
          <CallDetails call={selectedCall || filteredCalls[0]} />
        </div>
      </div>
    </div>
  );
}
