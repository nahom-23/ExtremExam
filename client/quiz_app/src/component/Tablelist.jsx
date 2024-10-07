import React from "react";

const Testlist = ({ reports }) => {
  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-bold">Categories</h2>
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr>
              <th className="px-6 py-3 font-medium tracking-wider text-left text-white uppercase border border-gray-300 bg-green">
                NO
              </th>
              <th className="px-6 py-3 font-medium tracking-wider text-left text-white uppercase border border-gray-300 bg-green">
                Category
              </th>
              <th className="px-6 py-3 font-medium tracking-wider text-left text-white uppercase border border-gray-300 bg-green">
                Code
              </th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr key={index} className="bg-white">
                <td className="px-6 py-4 font-medium border border-gray-300 ">
                  {index + 1}
                </td>
                <td className="px-6 py-4 text-gray-500 border border-gray-300">
                  {report.name}
                </td>
                <td className="px-6 py-4 text-gray-500 border border-gray-300">
                  {report.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Testlist;
