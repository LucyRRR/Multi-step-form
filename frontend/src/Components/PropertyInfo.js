import React, { useState } from 'react'


import { Container, Typography, Button, FormGroup, FormControlLabel, Checkbox, FormControl, FormLabel, RadioGroup, Radio } from '@material-ui/core'

const PropertyInfo = ({ nextStep, handleChange }) => {
  const kraje = ["Hlavní město Praha", "Jihočeský kraj", "Jihomoravský kraj", "Karlovarský kraj", "Kraj Vysočina", "Královéhradecký kraj", "Liberecký kraj", "Moravskoslezský kraj", "Olomoucký kraj", "Pardubický kraj", "Plzeňský kraj", "Středočeský kraj", "Ústecký kraj", "Zlínský kraj"];
  const PrahaOkresy = ["Praha"];
  const JihomoravskeOkresy = ["Blansko", "Brno-město", "Brno-venkov", "Břeclav", "Hodonín", "Vyškov", "Znojmo"];
  const JihoCeskeOkresy = ["Jindřichův Hradec", "Prachatice", "Písek", "Strakonice", "Tábor", "České Budějovice", "Český Krumlov"];
  const KarlovarskeOkresy = ["Cheb", "Karlovy Vary", "Sokolov"];
  const VysocinaOkresy = ["Jihlava", "Pelhřimov", "Třebíč", "Žďár nad Sázavou"];
  const KralovehradeckeOkresy = ["Hradec Králové", "Jičín", "Náchod", "Rychnov nad Kněžnou", "Trutnov"];
  const LibereckeOkresy = ["Jablonec nad Nisou", "Liberec", "Semily", "Česká Lípa"];
  const MoravskoslezskeOkresy = ["Bruntál", "Frýdek-Místek", "Karviná", "Nový Jičín", "Opava", "Ostrava-město"];
  const OlomouckeOkresy = ["Jeseník", "Olomouc", "Prostějov", "Přerov", "Šumperk"];
  const PardubickeOkresy = ["Chrudim", "Pardubice", "Svitavy", "Ústí nad Orlicí"];
  const PlzenskeOkresy = ["Domažlice", "Klatovy", "Plzeň-jih", "Plzeň-město", "Plzeň-sever", "Rokycany", "Tachov"];
  const StredoceskeOkresy = ["Benešov", "Beroun", "Kladno", "Kolín", "Kutná Hora", "Mladá Boleslav", "Mělník", "Nymburk", "Praha-východ", "Praha-západ", "Příbram", "Rakovník"];
  const ZlinskeOkresy = ["Kroměříž", "Uherské Hradiště", "Vsetín", "Zlín"];
  const UsteckeOkresy = ["Chomutov", "Děčín", "Litoměřice", "Louny", "Most", "Teplice", "Ústí nad Labem"];
  const Okresy = {};
  Okresy["Hlavní město Praha"] = PrahaOkresy;
  Okresy["Jihočeský kraj"] = JihoCeskeOkresy;
  Okresy["Jihomoravský kraj"] = JihomoravskeOkresy;
  Okresy["Karlovarský kraj"] = KarlovarskeOkresy;
  Okresy["Kraj Vysočina"] = VysocinaOkresy;
  Okresy["Královéhradecký kraj"] = KralovehradeckeOkresy;
  Okresy["Liberecký kraj"] = LibereckeOkresy;
  Okresy["Moravskoslezský kraj"] = MoravskoslezskeOkresy;
  Okresy["Olomoucký kraj"] = OlomouckeOkresy;
  Okresy["Pardubický kraj"] = PardubickeOkresy;
  Okresy["Plzeňský kraj"] = PlzenskeOkresy;
  Okresy["Středočeský kraj"] = StredoceskeOkresy;
  Okresy["Ústecký kraj"] = UsteckeOkresy;
  Okresy["Zlínský kraj"] = ZlinskeOkresy;
  const [kraj, setKraj] = useState("");
  // for continue event listener
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Vyplnte udaje o nemovitosti
        </Typography>
        <FormGroup>
          <FormControlLabel control={<Checkbox onChange={handleChange("byt")} />} label="byt" />
          <FormControlLabel control={<Checkbox onChange={handleChange("dum")} />} label="dum" />
          <FormControlLabel control={<Checkbox onChange={handleChange("pozemek")} />} label="pozemek" />
        </FormGroup>

        <h2>Kde se nachazi vase nemovitost? </h2>
        <FormControl component="fieldset">
          <FormLabel component="legend">Kraj</FormLabel>
          <RadioGroup
            aria-label="kraj"
            defaultValue="hlavni mesto Praha"
            name="kraj"
            onChange={(value) => {
              handleChange("kraj");
              setKraj(value.target.value);
            }}
          >
            {kraje.map(function (name, index) {
              return <FormControlLabel key={name} value={name} control={<Radio />} label={name} />;
            })}
          </RadioGroup>
        </FormControl>

        <h2>Kde se nachazi vase nemovitost? </h2>
        <FormControl component="fieldset">
          <FormLabel component="legend">Okres</FormLabel>

          <RadioGroup
            aria-label="okres"
            defaultValue="hlavni mesto Praha"
            name="okres"
            onChange={handleChange("okres")}
          >
            {kraj ? Okresy[kraj].map(function (name, index) {
              return <FormControlLabel key={name} value={name} control={<Radio />} label={name} />;
            }) : ""}

          </RadioGroup>
        </FormControl>




        <form>

          <br />
          <Button
            onClick={Continue}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Next
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default PropertyInfo