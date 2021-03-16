import React, { Component } from "react";

export default class WhoMayApplyPage extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="section">
                <h4>
                  Hvem kan søke <span className="logo-font">ArtEx?</span>
                </h4>
                <div className="divider"></div>
                <p className="flow-text">
                  <span className="logo-font">ArtEx</span> søker etter aktuelle
                  kandidater som har vist et stort kunstnerisk talent innenfor
                  sitt fagfelt. Kandidatene skal normalt ha fullført høyeste
                  utdanning innen fagfeltet og være i gang med en profesjonell
                  utøvende karriere innen teater, dans, opera, film og musikk.
                </p>
                <p className="flow-text">
                  <b>Neste søknadsfrist november 2018</b>
                </p>
                <p className="flow-text">
                  Kandidater med bachelor, uten fullført høyeste utdanning, kan
                  også søke seg til <span className="logo-font">ArtEx</span>.
                </p>

                <p className="flow-text">
                  <b>
                    Kriterier for å søke seg til Programme of Excellence in
                    Performing Arts and Film 2017 – 2019:
                  </b>
                </p>
                <ul className="collection">
                  <li className="collection-item flow-text">
                    Kunstneren rekrutteres nasjonalt og internasjonalt,
                    uavhengig av hvilken institusjon vedkommende er utdannet
                    ved.{" "}
                  </li>
                  <li className="collection-item flow-text">
                    Kunstneren har sin utdannelse fra Norge, eller er norsk og
                    utdannet i utlandet.
                  </li>
                  <li className="collection-item flow-text">
                    Kunstneren skal normalt ha fullført høyeste utdanning innen
                    fagfeltet teater, dans, opera, film og musikk.
                  </li>
                  <li className="collection-item flow-text">
                    Kunstneren bør ha påbegynt en profesjonell utøvende
                    karriere.
                  </li>
                  <li className="collection-item flow-text">
                    Kunstneren forventes å delta aktivt i kunnskapsdeling med
                    øvrige talentutviklingsprogrammer knyttet til Talent Norge.
                  </li>
                  <li className="collection-item flow-text">
                    Kunstneren som velges til{" "}
                    <span className="logo-font">ArtEx</span> forventes å kunne
                    delta på hele i programmet som strekker seg over en periode
                    på to år. Programmet er deltid og ulønnet og ment til å
                    kombineres med arbeid.
                  </li>
                  <li className="collection-item flow-text">
                    Programmet er rettet mot de fremste talenter innenfor
                    fagfeltet teater, dans, opera, film og musikk.{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
