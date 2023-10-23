import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";

const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (
    <>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-medium">Course setup</h1>
            <span className="text-sm text-slate-700">Complete all fields</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div>
            <div className="flex items-center gap-x-2">
              <h2 className="text-xl">Customize your course</h2>
            </div>
            CategoryForm
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-x-2">
                <h2 className="text-xl">Course chapters</h2>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <h2 className="text-xl">Sell your course</h2>
              </div>
              PriceForm
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <h2 className="text-xl">Resources & Attachments</h2>
              </div>
              AttachmentForm
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseIdPage;
