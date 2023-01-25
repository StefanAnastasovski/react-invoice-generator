import { menuDrawerActions } from "@stores/slices/menuDrawerSlice";
import { useDispatch } from "react-redux";

type Props = {
  data: any;
  subtitleId?: number | string | null;
  // id?: number | string;
  // isExpandable: boolean;
  // link: string;
};

export const useHandleMenuClick = ({ data, subtitleId }: Props) => {
  const dispatch = useDispatch();
  const { id, subtitles, link } = data;
  const isExpendable = subtitles.length > 0;

  const setIsExpended = () => {
    dispatch(
      menuDrawerActions.setIsExpanded({
        id: id,
        isExpandable: isExpendable,
      })
    );
  };

  const setIsSelectedItem = (subId: string | number | null | undefined) => {
    dispatch(
      menuDrawerActions.setSelectedMenuItem({
        id: id,
        subId: subId || null,
      })
    );
  };

  const setMenuUrl = () => {
    dispatch(menuDrawerActions.setMenuDrawerUrl({ url: link }));
  };

  return {
    setIsExpended,
    setIsSelectedItem,
    setMenuUrl,
  };
};
