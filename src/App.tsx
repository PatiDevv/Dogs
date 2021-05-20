import React from "react";
import "./index.css";
import ListWrapper from "./components/ListWrapper/ListWrapper";
import ImageAssets from "./constants/ImageAssets";
import { ListItemProps } from "./components/ListWrapper/ListItem/ListItem";

const initialStateArray: ListItemProps[] = [
  {
    src: ImageAssets.maltanczyk,
    name: "Maltańczyk",
    description:
      "Jest to typ psa pieszczocha. 100% miłości do świata. Zakochasz się w tej rasie od pierwszego wylizania Twojego buziaczka.",
    facebookLink: "https://www.facebook.com/groups/1085666428242041",
  },
  {
    src: ImageAssets.mops,
    name: "Mops",
    description:
      "Towarzyski psiak, o wesołym i pogodnym uosobieniu. Taki właśnie jest mops. Psiaki tej rasy zaliczamy do sekcji psów małych, molosowatych",
    facebookLink: "https://www.facebook.com/groups/mopsMiHR",
  },
  {
    src: ImageAssets.goldenRetriver,
    name: "Golden Retriver",
    description:
      "Golden retrievier jest postrzegany przede wszystkim jako pies przyjazny i niezwykle rodzinny. Należy jednak pamiętać, że jest to również pies myśliwski.",
    facebookLink: "https://www.facebook.com/groups/mopsMiHR",
  },
  {
    src: ImageAssets.chihuahua,
    name: "Chihuahua",
    description:
      "Niezaprzeczalnie są to psiaki wyjątkowo żywiołowe i energiczne. Rasa zaliczana jest do grona bardzo małych psów.",
    facebookLink: "https://www.facebook.com/groups/1056690141123166",
  },
];

class App extends React.Component {
  state = {
    items: [...initialStateArray],
  }
  render() {
    return (
      <div>
        <ListWrapper items={this.state.items} />
      </div>
    )
  }
}

export default App;
