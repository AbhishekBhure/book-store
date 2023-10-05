const BooksTable = () => {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-600 rounded-md">No</th>
          <th className="border border-slate-600 rounded-md">Title</th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Author
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Publish Year
          </th>
          <th className="border border-slate-600 rounded-md">Operations</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-slate-600 rounded-md text-center">1</td>
          <td className="border border-slate-600 rounded-md text-center">
            5am Club
          </td>
          <td className="border border-slate-600 rounded-md text-center max-md:hidden">
            Robin Sharma
          </td>
          <td className="border border-slate-600 rounded-md text-center max-md:hidden">
            2017
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default BooksTable;
