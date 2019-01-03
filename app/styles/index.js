import { StyleSheet } from "react-native";

const colors = {
  black: "#222",
  background: "#4B4B4B",
  backgroundLighter: "#5C5C5C",
  snow: "#F6F6F6"
};
export const {
  container,
  textInput,
  heading,
  small,
  listingItemContainer,
  detailsText,
  wrapper
} = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: 16,
    alignContent: "center",
    justifyContent: "center",
    flex: 1
  },
  listingItemContainer: {
    backgroundColor: colors.backgroundLighter,
    borderRadius: 5,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    height: "auto",
    justifyContent: "center",
    marginBottom: 16
  },
  wrapper: {
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center"
  },
  textInput: {
    backgroundColor: colors.backgroundLighter,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 3,
    color: colors.snow
  },
  heading: {
    color: colors.snow,
    fontSize: 24,
    fontWeight: "900",
    textAlign: "center",
    padding: 24
  },
  detailsText: {
    color: colors.snow,
    fontSize: 20,
    fontWeight: "900",
    paddingBottom: 8
  },
  small: {
    color: colors.snow,
    textAlign: "center",
    padding: 16
  }
});

export { colors };
