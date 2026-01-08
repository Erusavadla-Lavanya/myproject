import React from "react";

const Settings = () => {
  return (
    <>
      <h1 className="mt-6 mb-8 text-xl sm:text-2xl font-bold text-center">
        Settings Info
      </h1>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="first-name" className="text-sm font-medium">
                First Name
              </label>
              <input
                id="first-name"
                type="text"
                placeholder="First name"
                className="w-full border p-2.5 rounded-md focus:ring-2 focus:ring-blue-300 outline-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="last-name" className="text-sm font-medium">
                Last Name
              </label>
              <input
                id="last-name"
                type="text"
                placeholder="Last name"
                className="w-full border p-2.5 rounded-md focus:ring-2 focus:ring-blue-300 outline-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full border p-2.5 rounded-md focus:ring-2 focus:ring-blue-300 outline-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Phone number"
                className="w-full border p-2.5 rounded-md focus:ring-2 focus:ring-blue-300 outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
