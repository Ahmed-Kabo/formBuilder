import "./App.css";

import { FormBuilder } from "cb-react-forms";
import "react-form-builder2/dist/app.css";

const items = [
  {
    key: "Header",
    name: "Header Text",
    icon: "fa fa-header",
  },
  {
    key: "Label",
    name: "Label",
    icon: "fa fa-font",
  },
  {
    key: "Paragraph",
    name: "Paragraph",
    icon: "fa fa-paragraph",
  },
  {
    key: "LineBreak",
    name: "Line Break",
    icon: "fa fa-arrows-h",
  },
  {
    key: "Dropdown",
    name: "Dropdown",
    icon: "fa fa-caret-square-o-down",
  },
  {
    key: "Tags",
    name: "Tags",
    icon: "fa fa-tags",
  },
  {
    key: "Checkboxes",
    name: "Checkboxes",
    icon: "fa fa-check-square-o",
  },
  {
    key: "RadioButtons",
    name: "Multiple Choice",
    icon: "fa fa-dot-circle-o",
  },
  {
    key: "TextInput",
    name: "Text Input",
    icon: "fa fa-font",
  },
  {
    key: "NumberInput",
    name: "Number Input",
    icon: "fa fa-plus",
  },
  {
    key: "TextArea",
    name: "Multi-line Input",
    icon: "fa fa-text-height",
  },
  {
    key: "Rating",
    name: "Rating",
    icon: "fa fa-star",
  },
  {
    key: "HyperLink",
    name: "Web site",
    icon: "fa fa-link",
  },
  {
    key: "Range",
    name: "Range",
    icon: "fa fa-sliders",
  },
];

const onSubmitFunc = (data) => {
  console.log(JSON.parse(data));
  // Submit Function
};

function App() {
  return <FormBuilder items={items} onSubmit={onSubmitFunc} />;
}

export default App;
