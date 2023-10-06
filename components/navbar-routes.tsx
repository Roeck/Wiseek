"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export const NavbarRoutes = () => {
  const { userId } = useAuth();
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/search";

  return (
    <>
      {isSearchPage && <div className="hidden md:block">SearchInput</div>}
      <div className="flex gap-x-2 ml-auto">
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
};
