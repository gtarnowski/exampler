import t from "tcomb-form-native";
import { textInput } from "../styles";

const Form = t.form.Form;
t.form.Form.stylesheet.textbox.normal = textInput;
t.form.Form.stylesheet.textbox.error = textInput;
t.form.Form.stylesheet.controlLabel.normal = {
  display: "none"
};
t.form.Form.stylesheet.controlLabel.error = {
  display: "none"
};

export default Form;
