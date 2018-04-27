import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";
import { Button } from "@storybook/react/demo";

storiesOf("demo", module).add("Button", () => (
  <Button onClick={action("clicked")}>Click me!</Button>
));
