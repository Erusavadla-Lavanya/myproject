export default function Header() {
  return (
    <header className="w-full bg-white border-b">
      <div className="h-16 px-4 sm:px-6 flex items-center justify-between">
        <div className="hidden md:block md:flex-1" />
        <div className="flex-1 text-left md:text-center">
          <h1 className="text-lg sm:text-xl font-semibold text-gray-800">
            Interview Questions
          </h1>
        </div>

        <div className="flex flex-1 justify-end items-center gap-2 sm:gap-3">
          <div className="hidden sm:block text-right">
            <p className="text-sm font-medium text-gray-700">Lavanya</p>
          </div>

          <img
            src="/Woman.png"
            alt="profile"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border"
          />
        </div>
      </div>
    </header>
  );
}
