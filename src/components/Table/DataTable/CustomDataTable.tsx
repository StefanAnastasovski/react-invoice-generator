import React from "react";
import { BoxDiv } from "@components/atoms";
import { DataTableWrapper } from "./DataTableWrapper";
import { useMakeTableComponent } from "@hooks/index";

export const CustomDataTable = ({ style, config }: any) => {
  const { titles, tableData, tableComponent, shouldRenderEmptyRows } = config;
  const element = useMakeTableComponent({
    tableComponent,
    tableData,
  });

  return (
    <BoxDiv style={styles().container}>
      <DataTableWrapper
        titles={titles}
        tableData={tableData}
        shouldRenderEmptyRows={shouldRenderEmptyRows}
        style={style}
      >
        {element}
      </DataTableWrapper>
    </BoxDiv>
  );
};

const styles = () => {
  return {
    container: {
      marginBottom: 6,
    },
  };
};
