import React from "react";

interface TableProps {
  headers: string[];
  data: any[];
  renderRow: (row: any, index: number) => React.ReactNode;
}

const CustomTable: React.FC<TableProps> = ({ headers, data, renderRow }) => {
  return (
    <div className="w-full overflow-x-auto border rounded-lg shadow-lg">
      <table className="w-full text-base border-collapse">

        <thead className="bg-gray-100 text-sm">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="p-3 poppins border border-gray-300 text-left font-semibold text-gray-700"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={headers.length} className="p-4 text-center text-gray-500 text-lg">
                No data available.
              </td>
            </tr>
          ) : (
            data.map((row, index) => renderRow(row, index))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
