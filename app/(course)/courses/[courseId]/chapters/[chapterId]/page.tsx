import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { File } from "lucide-react";

import { Preview } from "@/components/preview";

const ChapterIdPage = async ({
  params,
}: {
  params: { courseId: string; chapterId: string };
}) => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  return (
    <div>
      <div className="flex flex-col max-w-4xl mx-auto pb-20">
        <div className="p-4">VideoPlayer</div>
        <div>
          <div className="p-4 flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-2xl font-semibold mb-2">Chapter title</h2>
            CourseProgressButton CourseEnrollButton
          </div>
          Separator
          <div>Preview</div>
          <File />
        </div>
      </div>
    </div>
  );
};

export default ChapterIdPage;
