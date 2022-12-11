export type StyleDefaultProps = {
  [key: string]: string | number;
};

export type StyleCustomProps = {
  [x: string]:
    | {
        [y: string]: string | number | { [z: string]: string | number };
      }
    | { [z: string]: string | number };
};
