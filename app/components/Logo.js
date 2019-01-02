import React from 'react';
import Row from "../ui/Row";
import Icon from "react-native-vector-icons/AntDesign";
import {colors} from "../styles";

export default () => (
  <Row style={{ alignSelf: "center" }}>
    <Icon name="API" size={85} color={colors.snow} />
  </Row>
);
