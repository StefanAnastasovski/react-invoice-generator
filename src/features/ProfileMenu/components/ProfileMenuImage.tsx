import * as React from "react";
import { Image } from "@components/atoms/Image/Image";
import { isFileAnImage } from "@utils/isFileAnImage";
import { returnFirstLettersFromName } from "@utils/returnFirstLettersFromName";
import Profile from "@images/profile.png";
import { PROFILE_INFO } from "../constants/ProfileMenuItems";

// TODO: get image's info from BE
const PROFILE_INFO_DATA = {
  id: "img-1",
  source: Profile,
  alt: "Your Profile Image",
};

export const ProfileMenuImage = () => {
  const SOURCE = PROFILE_INFO_DATA.source;
  const ALT = PROFILE_INFO_DATA.alt;
  const isImage = isFileAnImage(SOURCE);

  return (
    <Image
      source={isImage ? SOURCE : ""}
      alt={Boolean(ALT) ? ALT : "Your Profile Image"}
      firstLetters={
        Boolean(SOURCE) && isImage
          ? null
          : returnFirstLettersFromName(PROFILE_INFO.name)
      }
      containerStyle={styles.containerStyle}
      imageStyle={styles.imageStyle}
    />
  );
};

const styles = {
  containerStyle: {
    width: "40px",
    height: "40px",
  },
  imageStyle: {
    borderRadius: "50%",
  },
};
