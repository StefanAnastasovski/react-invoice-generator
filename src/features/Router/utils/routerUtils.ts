import { EditLinkProps } from "../types/RouterTypes";

export const getEditLink = ({ path, id }: EditLinkProps) => {
  return `${path}/${id}/edit`;
};

export const getForwardLink = ({ path, id }: EditLinkProps) => {
  return `${path}/${id}`;
};
