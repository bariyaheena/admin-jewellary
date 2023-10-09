import CardMenu from "components/card/CardMenu";
import { Table} from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Card from "components/card";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";
import { useMemo } from "react";



const RecentlyTable = (props) => {
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 5;

  return (
    <Card extra={"w-full h-full px-6 pb-6"}>
      <div class="relative flex items-center justify-between pt-4">
        <div class="text-xl font-bold text-white">
          recently order
        </div>
        <CardMenu />
      </div>

      <div class="mt-8 ">
        <Table {...getTableProps()} className="w-auto">
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={index}
                    className="border-b border-red-200 pr-10 pb-[10px] text-start "
                  >
                    <p className="text-xss tracking-wide">
                      {column.render("Header")}
                    </p>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    let data = "";
        
                    if (cell.column.Header === "PRODUCT_ID") {
                      data = (
                        <p className="text-sm font-bold text-white">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "PRODUCT_NAME") {
                      data = (
                        <p className="text-sm font-bold text-white">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "USERNAME") {
                      
                      data = (
                        <p className="text-sm font-bold text-white">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "PRICE") {
                 
                        data = (
                            <p className="text-sm font-bold text-white">
                           {cell.value}
                            </p>)
                    }else if (cell.column.Header === "STATUS") {
                      
                      data = (
                        <div className="flex items-center gap-2">
                          <div className={`rounded-full text-xl`}>
                            {cell.value === "delivered" ? (
                              <MdCheckCircle className="text-green-500" />
                            ) : cell.value === "shipped" ? (
                              <MdCancel className="text-red-500" />
                            ) : cell.value === "cancel" ? (
                              <MdOutlineError className="text-orange-500" />
                            ) : null}
                          </div>
                          <p className="text-sm font-bold text-white">
                            {cell.value}
                          </p>
                        </div>)
                  }
                    return (
                      <td
                        className="pt-[14px] pb-[18px] sm:text-[14px]"
                        {...cell.getCellProps()}
                        key={index}
                      >
                        {data}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </Card>
  );
};

export default RecentlyTable;
