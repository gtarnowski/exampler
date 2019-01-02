import { StyleSheet } from 'react-native'

const colors = {
  background: '#4B4B4B',
  backgroundLighter: '#5C5C5C',
  snow: '#F6F6F6'
};
const { container, textInput, heading, small } = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: 16,
    alignContent: "center",
    justifyContent: "center",
    flex: 1
  },
  textInput: {
    backgroundColor: colors.backgroundLighter,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 3,
  },
  heading: {
    color: colors.snow,
    fontSize: 24,
    fontWeight: "900",
    textAlign: "center",
    padding: 24
  },
  small: {
    color: colors.snow,
    textAlign: "center",
    padding: 16
  }
});

export {
  container,
  textInput,
  heading,
  colors,
  small
}

