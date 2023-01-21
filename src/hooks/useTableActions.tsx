import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getEditLink } from "@features/Router/utils/routerUtils";
import { tableActions } from "@stores/slices/tableSlice";
import { useRouterHook } from "./useRouterHook";

export const useTableActions = ({
  rowId,
  titles,
  tableData,
  colSpan,
  emptyRowHeight,
  routes,
}: any) => {
  const { params, navigate } = useRouterHook();
  const dispatch = useDispatch();

  const [data, setData] = useState<any[]>(tableData as any);

  useEffect(() => {
    dispatch(tableActions.setColSpan({ colSpan }));
    dispatch(tableActions.setEmptyRowHeight({ emptyRowHeight }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSelectAllClick = () => {
    dispatch(tableActions.setRowsPerPageData({ data: tableData }));
    dispatch(tableActions.setSelectAllRows({ id: rowId }));
  };

  const onSelectClick = (id: string | number) => {
    dispatch(tableActions.addSelectedRow({ id }));
  };

  const handleCollapse = (id: string | number) => {
    dispatch(tableActions.handleCollapse({ id }));
  };

  const handleDelete = (id: number | string) => {
    const filteredData = tableData.filter((item: any) => {
      return item[rowId] !== id;
    });
    dispatch(tableActions.setTableData({ tableData: filteredData }));
  };

  const handleEdit = (id: number | string) => {
    const url = getEditLink({
      path: routes.base,
      id: id,
    });
    navigate(url);
  };

  const handleClose = () => {
    navigate(routes.list);
  };

  const getDataById = () => {
    const item = tableData.filter((item: any) => {
      return item[rowId] === params.id;
    });
    return item[0];
  };

  return {
    onSelectAllClick,
    onSelectClick,
    handleCollapse,
    handleDelete,
    handleEdit,
    handleClose,
    getDataById,
    data,
    setData,
  };
};
