import { Loader } from "lucide-react";

const GlobalLoading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#111B3C] z-50">
      <Loader className="animate-spin text-white" size={50} />
    </div>
  );
};

export default GlobalLoading;
