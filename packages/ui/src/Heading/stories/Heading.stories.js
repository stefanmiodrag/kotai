import React from 'react';

import { storiesOf } from "@storybook/react";
import StoryRouter from 'storybook-react-router';

import Heading from "../Heading";

storiesOf("Heading", module)
    .addDecorator(StoryRouter())
    .add("Heading", () => <Heading />);
