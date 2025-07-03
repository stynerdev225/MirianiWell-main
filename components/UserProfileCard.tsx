"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// Define a simplified user type with only the properties we need
type SimpleUser = {
  firstName?: string | null;
  lastName?: string | null;
  imageUrl?: string;
  email?: string;
  id?: string;
};

interface UserProfileCardProps {
  user: SimpleUser;
  showBadge?: boolean;
  variant?: "default" | "compact" | "minimal";
}

export const UserProfileCard = ({
  user,
  showBadge = false,
  variant = "default",
}: UserProfileCardProps) => {
  const initials = `${user.firstName?.[0] || ""}${user.lastName?.[0] || ""}`;
  const fullName = user.firstName
    ? `${user.firstName} ${user.lastName || ""}`.trim()
    : "Welcome!";

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
          <AvatarImage src={user.imageUrl} alt={user.firstName || "User"} />
          <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white text-sm">
            {initials || "U"}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-slate-800 truncate">
            {fullName}
          </div>
          {user.email && (
            <div className="text-xs text-slate-500 truncate">{user.email}</div>
          )}
        </div>
        {showBadge && (
          <Badge variant="secondary" className="text-xs">
            Active
          </Badge>
        )}
      </div>
    );
  }

  if (variant === "minimal") {
    return (
      <div className="flex items-center gap-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src={user.imageUrl} alt={user.firstName || "User"} />
          <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white text-xs">
            {initials || "U"}
          </AvatarFallback>
        </Avatar>
        <span className="font-medium text-sm text-slate-700">{fullName}</span>
      </div>
    );
  }

  // Default variant
  return (
    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 border-2 border-white shadow-lg">
            <AvatarImage src={user.imageUrl} alt={user.firstName || "User"} />
            <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white text-lg">
              {initials || "U"}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-slate-800 text-lg">
                {fullName}
              </h3>
              {showBadge && (
                <Badge variant="secondary" className="text-xs">
                  Active User
                </Badge>
              )}
            </div>
            {user.email && (
              <p className="text-sm text-slate-500">{user.email}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfileCard;
