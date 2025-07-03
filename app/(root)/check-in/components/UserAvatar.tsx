"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Define a simplified user type with only the properties we need
type SimpleUser = {
  firstName?: string | null;
  lastName?: string | null;
  imageUrl?: string;
  email?: string;
  id?: string; // Added id property for future needs
};

export const UserAvatar = ({ user }: { user: SimpleUser }) => {
  const initials = `${user.firstName?.[0] || ""}${user.lastName?.[0] || ""}`;

  return (
    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl border border-indigo-100 mb-4">
      <Avatar className="h-16 w-16 border-2 border-white shadow-sm">
        <AvatarImage src={user.imageUrl} alt={user.firstName || "User"} />
        <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white text-lg">
          {initials || "U"}
        </AvatarFallback>
      </Avatar>
      <div>
        <div className="font-semibold text-slate-800">
          {user.firstName
            ? `${user.firstName} ${user.lastName || ""}`
            : "Welcome!"}
        </div>
        <div className="text-xs text-slate-500">{user.email || ""}</div>
      </div>
    </div>
  );
};

export default UserAvatar;
