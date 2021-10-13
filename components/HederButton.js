import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

const CommonHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      iconSize={23}
      color="white"
      IconComponent={Ionicons}
    />
  );
};

export default CommonHeaderButton;
