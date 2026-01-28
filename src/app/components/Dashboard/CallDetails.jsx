import { Play, FileText, Edit2 } from "lucide-react";

export default function CallDetails({ call }) {
  if (!call) {
    return (
      <div className="rounded-lg bg-card p-8 border border-border flex items-center justify-center h-full">
        <p className="text-gray-400">Select a call to view details</p>
      </div>
    );
  }

  const getCallTypeColor = (type) => {
    switch (type) {
      case "AI Resolved":
        return "bg-green-500/20 text-green-400 border border-green-500/50";
      case "Warm Transfer":
        return "bg-orange-500/20 text-orange-400 border border-orange-500/50";
      default:
        return "bg-blue-500/20 text-blue-400 border border-blue-500/50";
    }
  };

  return (
    <div className="rounded-lg bg-card p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold text-white mb-4 ">Call Details</h3>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="text-sm text-gray-400 block mb-2">
            Phone Number
          </label>
          <p className="text-white font-medium">{call.phone}</p>
        </div>
        <div>
          <label className="text-sm text-gray-400 block mb-2">Duration</label>
          <p className="text-white font-medium">{call.duration}</p>
        </div>
        <div>
          <label className="text-sm text-gray-400 block mb-2">
            Date & Time
          </label>
          <p className="text-white font-medium">
            {call.date} {call.time}
          </p>
        </div>
        <div>
          <label className="text-sm text-gray-400 block mb-2">Issue Type</label>
          <p className="text-white font-medium">{call.issueType}</p>
        </div>
        <div>
          <label className="text-sm text-gray-400 block mb-2">Call Type</label>
          <span
            className={`px-2 py-1 rounded text-xs font-medium inline-block ${getCallTypeColor(call.status)}`}
          >
            {call.status}
          </span>
          <div className="mt-5">
            <label className="text-sm text-gray-400 block mb-2">Outcome</label>
            <p className="text-white font-medium ">{call.outcome}</p>
          </div>
        </div>
      </div>

      {/* Audio Recording */}
      <button
        className="
  w-full flex items-center justify-center gap-2 
  px-6 py-4 rounded-lg
  bg-gradient-to-r from-[#AD46FF] to-[#F6349A]
  border border-[#AD46FF]
  text-white cursor-pointer
  hover:from-[#aa4cf7] hover:to-[#f148a2]
  transition-all font-medium
"
      >
        <Play className="w-5 h-5 fill-current" />
        Play Audio Recording
      </button>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-gray-400" />
          <h4 className="text-white font-semibold">Conversation Transcript</h4>
        </div>

        <div className="space-y-4 max-h-96 overflow-y-auto rounded-lg p-4 bg-[#1D293D80]">
          {call.transcript.map((message, idx) => (
            <div key={idx} className="space-y-1">
              <p
                className={`text-sm font-medium ${message.speaker === "Customer" ? "text-cyan-400" : "text-green-400"}`}
              >
                {message.speaker}:
              </p>
              <p className="text-sm text-gray-300 ">{message.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
