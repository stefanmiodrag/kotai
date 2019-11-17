import React from 'react';

import { storiesOf } from "@storybook/react";
import StoryRouter from 'storybook-react-router';

import ButtonLink from "../ButtonLink";

storiesOf("ButtonLink", module)
    .addDecorator(StoryRouter())
    .add("ButtonLink", () => <ButtonLink />);
