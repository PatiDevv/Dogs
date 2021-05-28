import React from "react";
import List from "../../components/List/List";
import AppContext from "../../context";
import { initialStateArray } from "../Root/Root";

const ArticleView = () => (
    <AppContext.Consumer>
        {(context) => (
            <List items={context.article} />
        )}
    </AppContext.Consumer>
);

export default ArticleView;