import React from "react";
import List from "../../components/List/List";
import AppContext from "../../context";
import { initialStateArray } from "../Root/Root";

const FacebookView = () => (
    <AppContext.Consumer>
        {(context) => (<>
            <List items={initialStateArray} />
            <List items={context.facebook} />
        </>)}
    </AppContext.Consumer>

);

export default FacebookView;