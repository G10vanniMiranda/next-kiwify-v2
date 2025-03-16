import { MenuOpen } from "@mui/icons-material";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center gap-4 bg-slate-100">
      <div className="w-full h-10 flex items-center justify-end p-4">
        <div className="bg-yellow-300 hidden">
          <MenuOpen />
        </div>
      </div>

      <div className="pt-2">
        <h1>DASHBOARD</h1>
      </div>

      <div className="flex gap-4">
        <div className="bg-transparent hover:text-yellow-400 hover:border-yellow-400 cursor-pointer transition border w-20 flex justify-center">
          DAY
        </div>
        <div className="bg-transparent hover:text-blue-500 hover:border-blue-500 cursor-pointer transition border w-20 flex justify-center">
          WEEK
        </div>
        <div className="bg-transparent hover:text-red-600 hover:border-red-600 cursor-pointer transition border w-20 flex justify-center">
          MONTH
        </div>
      </div>
    </div>
  );
}
