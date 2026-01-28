import { Bell } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-[#111B3C] h-[96px] p-6 flex justify-between items-center w-full">
      <div>
        <h1>Dashboard Overview</h1>
      </div>

      <div className="flex gap-5">
        <p>
          <Bell />
        </p>

        <div>
          <Image
            src={
              "https://i.ibb.co/RT7sWvTr/me-removebg-preview-removebg-preview.png"
            }
            alt="profile"
            width={20}
            height={20}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
