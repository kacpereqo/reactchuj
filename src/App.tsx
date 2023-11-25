import  {useState} from "react";

const Piwka:string[] = [
  "https://www.kp.pl/img/butelki/tyskie.png?v2",
    "https://www.kp.pl/img/butelki/lech.png?v2",
    "https://www.kp.pl/img/butelki/zubr.png?v2",
    "https://www.kp.pl/img/butelki/debowe.png?v2",
    "https://www.kp.pl/img/butelki/ksiazece.png?v2",
    "https://www.kp.pl/img/butelki/redds.png?v2",
    "https://www.kp.pl/img/butelki/hardmade.png?v2",
    "https://www.kp.pl/img/butelki/peroni.png?v2",
    "https://www.kp.pl/img/butelki/wojak.png?v2",
    "https://www.kp.pl/img/butelki/kozel.png?v2",
    "https://www.kp.pl/uploads/kp/beers2/Puszka_pilzner.png",
    "https://www.kp.pl/uploads/kp/beers2/Puszka_pilzner.png",
    "https://www.kp.pl/uploads/kp/beers2/Tyskie_klasyczne.png",
    "https://www.kp.pl/uploads/kp/beers2/TYS_ZERO_BT500_16_02_23.png",
    "https://www.kp.pl/uploads/kp/beers2/TYS_GRONIE_BT500_16_02_23.png",
    "https://www.kp.pl/uploads/kp/beers2/LECH_STRAWBERRY.png",
    "https://www.kp.pl/uploads/kp/beers2/Lech_icemojito.png",
    "https://www.kp.pl/uploads/kp/beers2/Lech_iceshandy.png",
    "https://www.kp.pl/uploads/kp/beers2/LECH_FREE_SMAKOWKI_RB500_packshot_DFS.png",
    "https://www.kp.pl/uploads/kp/beers2/LECH_FREE_SMAKOWKI_RB500_packshot_marakuja.png",
    "https://www.kp.pl/uploads/kp/beers2/LECH_FREE_SMAKOWKI_RB500_packshot_granat.png",
    "https://www.kp.pl/uploads/kp/beers2/LECH_FREE_SMAKOWKI_RB500_packshot_POMELO.png",
    "https://www.kp.pl/uploads/kp/beers2/LECH_FREE_SMAKOWKI_RB500_packshot_arbuz.png",
    "https://www.kp.pl/uploads/kp/beers2/LECH_FREE_SMAKOWKI_RB500_packshot_limonka.png",
    "https://www.kp.pl/uploads/kp/beers2/LECH_ACTIVE_RB500_MANGO_CYTRYNA_szron_PNG_prev.png",
    "https://www.kp.pl/uploads/kp/beers2/LECH_ACTIVE_RB500_LICZI_CYTRYNA_szron_PNG_prev.png",
    "https://www.kp.pl/uploads/kp/beers2/Lech_FREE_LAGER_RB500.png",
    "https://www.kp.pl/uploads/kp/beers2/Lech_pils.png",
    "https://www.kp.pl/uploads/kp/beers2/lech-easy.png",
    "https://www.kp.pl/uploads/kp/beers2/Lech_premium.png",
    "https://a.assecobs.com/_img/amigohurt/832552d1-7e7d-4cd0-92ea-75520c756777/piwo-but-zw-harnas-0-5l-20-.jpg",
    "https://res.cloudinary.com/dj484tw6k/image/upload/v1678146885/3362.png",
    "https://www.kp.pl/uploads/kp/beers2/Zubr.png",
    "https://www.kp.pl/uploads/kp/beers2/Ksiazece_lager.jpg",
    "https://www.kp.pl/uploads/kp/beers2/Ksiazece_ciemnelagodne.png",
    "https://www.kp.pl/uploads/kp/beers2/Ksiazece_czerwonylager.png",
    "https://www.kp.pl/uploads/kp/beers2/KSI_Pszenica_NAB_1.png ",
    "https://www.kp.pl/uploads/kp/beers2/Ksiazece_zlotepszeniczne.png",
    "https://www.kp.pl/uploads/kp/beers2/Ksiazece_porter.png",
    "https://www.kp.pl/uploads/kp/beers2/Ksiazece_irish_ale.png",
    "https://www.kp.pl/uploads/kp/beers2/KSI_IPA_NAB_00_1.png",
    "https://www.kp.pl/uploads/kp/beers2/Ksiazece_ipa.png",
    "https://www.kp.pl/uploads/kp/beers2/Debowe.png",
    "https://www.kp.pl/uploads/kp/beers2/Redds_mango.png",
    "https://www.kp.pl/uploads/kp/beers2/Redds_zurawina.png",
    "https://www.kp.pl/uploads/kp/beers2/Redds_jablko.png",
    "https://www.kp.pl/uploads/kp/beers2/redds_marakuja.png",
    "https://www.kp.pl/uploads/kp/beers2/HARDMADE_Peach_V6.png",
    "https://www.kp.pl/uploads/kp/beers2/HARDMADE_Raspberry_V7.png",
    "https://www.kp.pl/uploads/kp/beers2/HARDMADE_Pear_V6.png",
    "https://www.kp.pl/uploads/kp/beers2/HARDMADE_Rhubarb_V10.png",
    "https://www.kp.pl/uploads/kp/beers2/HARDMADE_Strawberry_V4.png",
    "https://www.kp.pl/uploads/kp/beers2/CJ_ORGINAL_2022.png",
    "https://www.kp.pl/uploads/kp/beers2/CJ_PIRATE_ORANGE_2022.png",
    "https://www.kp.pl/uploads/kp/beers2/CJ_CUBA.png",
    "https://www.kp.pl/uploads/kp/beers2/CJ_DAIQUIRI_BEZ.png",
    "https://www.kp.pl/uploads/kp/beers2/CJ_SOUR_3.png",
    "https://www.kp.pl/uploads/kp/beers2/CJ_LIME.png",
    "https://www.kp.pl/uploads/kp/beers2/CJ_MOJITO.png",
    "https://www.kp.pl/uploads/kp/beers2/peroni.jpg",
    "https://www.kp.pl/uploads/kp/beers2/PNA_0_0_330ML_BOTTLE_UNSPRITZ_CAPON_HR.png",
    "https://www.kp.pl/uploads/kp/beers2/Wojak.png",
    "https://www.kp.pl/uploads/kp/beers2/Grolsch.png",
    "https://www.kp.pl/uploads/kp/beers2/Pilsner_urquell.png",
    "https://www.kp.pl/uploads/kp/beers2/pilsner_kufel.jpg",
    "https://www.kp.pl/uploads/kp/beers2/Kozel_lezak.png",
    "https://www.kp.pl/uploads/kp/beers2/Kozel_cerny.png",
    "https://www.kp.pl/uploads/kp/beers2/KOZEL_00_PACKSHOT.png",
];

interface PiwkoCardProps {
  piwko: string;
  state: any;
}

const PiwkoCard = ({piwko,state}:PiwkoCardProps) => {
  const [isFavorite, setIsFavorite] = state;
  return (
    <div className="card" style={{"cursor":"pointer"}}>
      <h1>{ isFavorite ? "Ulubione" : "Nie ulubione"}</h1>
      <img src={piwko} alt="piwko" width={300} height={300} onClick={()=> setIsFavorite(!isFavorite) }/>
    </div>
  )
}

const App = () => {
  const states = [...Array(Piwka.length)].map(_ => useState(false));
  const [showOnlyFavorites, UseshowOnlyFavorites] = useState(false);

  return (
    <div>
      <center>
      <button onClick={() => UseshowOnlyFavorites(!showOnlyFavorites)}>POKAŻ TYLKO ULUBIONE PIWKA!!!!!</button>
      <button onClick={() => states.forEach((state) => state[1](false))}>RESET!!!!!!</button>
      {!showOnlyFavorites ? Piwka.map((piwko, idx) => <PiwkoCard piwko={piwko} key={idx} state={states[idx]}/>) : Piwka.filter((_,idx) => showOnlyFavorites && states[idx][0]).map((piwko, idx) => <PiwkoCard piwko={piwko} key={idx} state={states[idx]}/>)}
      </center>
    </div>
  )
}


export default App;