import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getEditLink,
  getForwardLink,
} from "@features/Router/utils/routerUtils";
import { tableActions } from "@stores/slices/tableSlice";
import { useRouterHook } from "../index";

export const useTableActions = ({
  tableId,
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
    dispatch(tableActions.setSelectAllRows({ id: tableId }));
  };

  const onSelectClick = (id: string | number) => {
    dispatch(tableActions.addSelectedRow({ id }));
  };

  const handleCollapse = (id: string | number) => {
    dispatch(tableActions.handleCollapse({ id }));
  };

  const handleDelete = (id: number | string) => {
    const filteredData = tableData.filter((item: any) => {
      return item[tableId] !== id;
    });
    return setData(filteredData);
    // dispatch(tableActions.setTableData({ tableData: filteredData }));
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

  const handleForward = (id: number | string) => {
    const url = getForwardLink({
      path: routes.base,
      id: id,
    });
    navigate(url);
  };

  const getDataById = () => {
    const item = tableData.filter((item: any) => {
      return item[tableId] === params.id;
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
    handleForward,
    getDataById,
    data,
    setData,
  };
};
