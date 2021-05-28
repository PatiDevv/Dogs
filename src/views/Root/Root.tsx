import React from "react";
import "./index.css";
import AppContext from "../../context";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ImageAssets from "../../constants/ImageAssets";
import { ListItemProps } from "../../components/List/ListItem";
import NotesView from "../NotesView/NotesView"
import ArticleView from "../ArticleView/ArticleView"
import FacebookView from "../FacebookView/FacebookView"
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal"

export const initialStateArray: ListItemProps[] = [
  {
    title: "Maltańczyk",
    link: "https://www.facebook.com/groups/1085666428242041",
    src: ImageAssets.maltanczyk,
    description:
      "Jest to typ psa pieszczocha. 100% miłości do świata. Zakochasz się w tej rasie od pierwszego wylizania Twojego buziaczka.",
  },
  {
    title: "Mops",
    link: "https://www.facebook.com/groups/mopsMiHR",
    src: ImageAssets.mops,
    description:
      "Towarzyski psiak, o wesołym i pogodnym uosobieniu. Taki właśnie jest mops. Psiaki tej rasy zaliczamy do sekcji psów małych, molosowatych",
  },
  {
    title: "Golden Retriver",
    link: "https://www.facebook.com/groups/mopsMiHR",
    src: ImageAssets.goldenRetriver,
    description:
      "Golden retrievier jest postrzegany przede wszystkim jako pies przyjazny i niezwykle rodzinny. Należy jednak pamiętać, że jest to również pies myśliwski.",
  },
  {
    title: "Chihuahua",
    link: "https://www.facebook.com/groups/1056690141123166",
    src: ImageAssets.chihuahua,
    description:
      "Niezaprzeczalnie są to psiaki wyjątkowo żywiołowe i energiczne. Rasa zaliczana jest do grona bardzo małych psów.",
  },
];

interface State {
  // items: ListItemProps[];
  isModalOpen: boolean

}

// React.Component<Propsy, State> 
// trzeba zadeklarowac interfejsy

class Root extends React.Component<{}, State> {
  state = {
    facebook: [],
    article: [],
    note: [],
    isModalOpen: false,
  };

  addItem = (e: any, newItem: any) => {
    console.log(newItem)
    e.preventDefault();

    this.setState<any>(prevState => ({
      // @ts-ignore
      [newItem.type]: [...prevState[newItem.type], newItem],
    }));

    this.closeModal();
  }

  openModal = () => this.setState({ isModalOpen: true })
  closeModal = () => this.setState({ isModalOpen: false })



  render() {
    const { isModalOpen } = this.state;
    const contextElements = { ...this.state, addItem: this.addItem }

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header openModalFn={this.openModal} />
          <Switch>
            <Route exact path="/" component={FacebookView} />
            <Route path="/articles" component={ArticleView} />
            <Route path="/notes" component={NotesView} />
          </Switch>
          {isModalOpen && <Modal closeModalFn={this.closeModal} />}
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
