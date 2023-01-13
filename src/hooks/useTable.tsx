import { CustomTableCell } from "@components/atoms/Table/CustomTableCell";
import { StyleSxCSSPropertiesProps } from "types/StyleProps";

interface TableStyleProp {
  style: StyleSxCSSPropertiesProps;
}

interface HeaderTitleProps extends TableStyleProp {
  titles: string[];
}

interface Props extends TableStyleProp {
  columnsData: any;
}

const renderTableHeaderColumns = ({ titles, style }: HeaderTitleProps) =>
  titles.map((column: any, index: number) => {
    const titleColumnStyle = {
      ...styles.title,
      ...(titles.length - 1 > index
        ? style.cellBorderRight
        : style.lastCellBorderRight),
    };
    return (
      <CustomTableCell key={column} style={titleColumnStyle}>
        {column}
      </CustomTableCell>
    );
  });

export const useTable = ({ columnsData, style }: Props) => {
  const renderHeaderColumns = renderTableHeaderColumns({
    titles: columnsData,
    style,
  });

  return {
    renderHeaderColumns,
  };
};

const styles = {
  title: {
    fontSize: "1.25rem",
    fontWeight: 800,
  },
};
