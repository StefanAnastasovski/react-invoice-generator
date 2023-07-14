import { Edit as EditIcon } from "@mui/icons-material";
import { ReusableIconButton } from "@components/ReusableButtons";
import { EmptyVoidFn } from "types/CommonProps";

export const EditButton = ({ onClick }: { onClick: EmptyVoidFn }) => {
  return <ReusableIconButton icon={EditIcon} onClick={onClick} />;
};
