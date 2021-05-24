import React from "react";
import "./index.css";
import List from "./components/List/List";
import ImageAssets from "./constants/ImageAssets";
import { ListItemProps } from "./components/List/ListItem";
import Form from "./components/Form/Form";

const initialStateArray: ListItemProps[] = [
  {
    name: "Maltańczyk",
    facebookLink: "https://www.facebook.com/groups/1085666428242041",
    src: ImageAssets.maltanczyk,
    description:
      "Jest to typ psa pieszczocha. 100% miłości do świata. Zakochasz się w tej rasie od pierwszego wylizania Twojego buziaczka.",
  },
  {
    name: "Mops",
    facebookLink: "https://www.facebook.com/groups/mopsMiHR",
    src: ImageAssets.mops,
    description:
      "Towarzyski psiak, o wesołym i pogodnym uosobieniu. Taki właśnie jest mops. Psiaki tej rasy zaliczamy do sekcji psów małych, molosowatych",
  },
  {
    name: "Golden Retriver",
    facebookLink: "https://www.facebook.com/groups/mopsMiHR",
    src: ImageAssets.goldenRetriver,
    description:
      "Golden retrievier jest postrzegany przede wszystkim jako pies przyjazny i niezwykle rodzinny. Należy jednak pamiętać, że jest to również pies myśliwski.",
  },
  {
    name: "Chihuahua",
    facebookLink: "https://www.facebook.com/groups/1056690141123166",
    src: ImageAssets.chihuahua,
    description:
      "Niezaprzeczalnie są to psiaki wyjątkowo żywiołowe i energiczne. Rasa zaliczana jest do grona bardzo małych psów.",
  },
];

interface State {
  items: ListItemProps[];
}

// React.Component<Propsy, State> 
// trzeba zadeklarowac interfejsy


class App extends React.Component<{}, State> {
  state = {
    items: [...initialStateArray],
  }

  addItem = (e: any) => {
    e.preventDefault();
    const newItem = {
      name: e.target[0].value,
      facebookLink: e.target[1].value,
      src: e.target[2].value,
      description: e.target[3].value,
    }

    this.setState(prevState => ({
      items: [...prevState.items, newItem]
    }));

    e.target.reset();
  }

  render() {
    return (
      <div className="app__wrapper">
        <List items={this.state.items} />
        <Form submitFn={this.addItem} />
      </div>
    )
  }
}

export default App;
