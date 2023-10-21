import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const AnalyticsPage = async () => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">DataCard</div>
      Chart
    </div>
  );
};

export default AnalyticsPage;
