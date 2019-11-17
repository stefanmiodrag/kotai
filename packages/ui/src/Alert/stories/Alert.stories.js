import React from 'react';

import { storiesOf } from "@storybook/react";
import StoryRouter from 'storybook-react-router';

import Alert from "../Alert";

storiesOf("Alert", module)
    .addDecorator(StoryRouter())
    .add("Alert", () =>
        <React.Fragment>
            <Alert />
            <Alert text="An action was successful!" type="success" />
            <Alert text="Something urgent needs to be communcated to the user." type="warning" />
        </React.Fragment>
    );
