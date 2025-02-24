export default function Dashboard() {
  return (
    <div className="flex flex-col items-center gap-4 bg-slate-100">
      <div className="pt-4">
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

      <div className="w-72 h-64 bg-white rounded-md flex flex-col items-center">
        <h1 className="pt-6">SESSIONS</h1>
      </div>

      <div className="w-72 h-64 bg-white rounded-md flex flex-col items-center">
        <h1 className="pt-6 pb-6">SESSION DURATION</h1>
        <div className="pt-6">
          <p>1.54</p>
          <p>mins</p>
        </div>
      </div>

      <div className="w-72 h-64 bg-white rounded-md flex flex-col items-center">
        <h1 className="pt-6 pb-2">LEADING APPS</h1>
        <div className="flex flex-col gap-4 pt-4">
          <div className="flex gap-4">
            <div>#</div>
            <p>Announcements</p>
          </div>
          <div className="flex gap-4">
            <div>#</div>
            <p>Wayfin</p>
          </div>
          <div className="flex gap-4">
            <div>#</div>
            <p>Nearby Attractions</p>
          </div>
          <div className="flex gap-4">
            <div>#</div>
            <p>Transit</p>
          </div>
        </div>
      </div>

      <div className="w-72 h-64 bg-white rounded-md flex flex-col items-center">
        <h1 className="pt-6 pb-6">BOARD VITALS</h1>
        <div className="flex gap-8 pt-4">
          <div className="flex flex-col items-center">
            <h1>#</h1>
            <p className="pt-2 pb-4">Collections</p>
            <p>12</p>
          </div>
          <div className="flex flex-col items-center">
            <h1>#</h1>
            <p className="pt-2 pb-4">Hoots</p>
            <p>73</p>
          </div>
          <div className="flex flex-col items-center">
            <h1>#</h1>
            <p className="pt-2 pb-4">Apps</p>
            <p>7</p>
          </div>
        </div>
      </div>

      <div className="w-72 h-64 bg-white rounded-md flex flex-col items-center">
        <h1 className="pt-6 pb-6">ENG. RATE</h1>
        <div className="pt-6 flex flex-col items-center">
          <p>45%</p>
          <p>up 5% from last time</p>
        </div>
      </div>

      <div className="w-72 h-80 bg-white rounded-md flex flex-col items-center">
        <h1 className="pt-6">5 MOST RECENT HOOTS</h1>
      </div>

      <div>
        <p>@2025 | Mi7anda</p>
      </div>
    </div>
  );
}
