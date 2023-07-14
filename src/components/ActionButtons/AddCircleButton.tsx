import { AddCircle as AddIcon } from "@mui/icons-material";
import { ReusableIconButton } from "@components/ReusableButtons";
import { EmptyVoidFn } from "types/CommonProps";

export const AddCircleButton = ({ onClick }: { onClick: EmptyVoidFn }) => {
  return <ReusableIconButton icon={AddIcon} onClick={onClick} />;
};
