import React, {Component} from 'react';

const jury = [
	{
		name: 'Even Lynne',
		role: 'Faglig leder',
		image: 'even.jpg',
		about: 'er faglig leder for ArtEx-programmet. Han er tidligere dekan for Teaterhøgskolen ved Kunsthøgskolen i Oslo og var i en årrekke faglig leder for skuespillerutdannelsen ved samme institusjon. Med bakgrunn som internasjonalt sertifisert coach fra The Coaches Training Institute (CTI) har Lynne utviklet mental trening for utøvende kunstnere som et av sine spesielle kompetanseområder. Basert på dette arbeidet utarbeidet han i 2015 idé og konsept til ArtEx-programmet. Even Lynne er utdannet fra Statens teaterhøgskole og har sin profesjonelle bakgrunn som skuespiller ved blant annet Nationaltheatret, Den Nationale Scene i Bergen og Trøndelag Teater. Han er aktiv som foredragsholder og faglitterær forfatter og ble i 2016 ansatt som instituttleder ved Fakultetet for kunstfag på Universitetet i Agder.'
	},
	{
		name: 'Yanniv Cohen',
		role: 'Faglig råd',
		image: 'yanivcohen.jpg',
		about: 'er fra Israel og har jobbet og bodd i Norge de siste 11 årene. Han er danser, koreograf og fotograf og ansatt som førstemanuensis i samtidsdans ved Kunsthøyskolen i Oslo. Som danser har Cohen arbeidet med kunstnere som Ohad Naharin, Yasmin Godar, Sharon Eyal, Crystal Pite, Orian Andersen, Bruno Listofd, Sahar geiter, Hofesh Schechter og Alexander Ekman. Han har jobbet med Carte Blanche og danset i Nasjonalballetten. Som fotograf og har han stilt ut sine arbeider i en rekke gallerier og skapt kortfilmer og promoer for danseforestillinger. Hans film X8 fikk andreplass i den internasjonale konkurransen 60secondsdance og er blitt vist på en rekke festivaler rundt i verden. Han ble utpekt som Rising Star under Riff internasjonale filmfestival i 2016. Yaniv har siden 2009 koreografert egne verk, som har blitt fremført i Norge, Tyskland og Israel. Han vant tredje plass for sin duett I wish I was Johnny Cash i Hannover International Choreography Competition 2012.'
	},
	{
		name: 'Tine Thing Helseth',
		role: 'Faglig råd',
		image: 'tineholgerhage.jpg',
		about: 'er en av de ledende musikerne i sin generasjon, med hele verden som arbeidsplass. Hun har spilt med noen av verdens fremste orkestre og dirigenter, på verdens største scener og festivaler. I tillegg til sin solo-virksomhet leder hun to ensembler, tenThing brassensemble og Tine Thing Helseth Quintet. Hun er opptatt av å ikke tenke sjanger, god musikk er god musikk. Dette har resultert i mange spennende prosjekter og samarbeid. Tine er også fast programleder på NRK Klassisk og professor i trompet på Norges musikkhøyskole.'
	},
	{
		name: 'Runar Hodne',
		role: 'Faglig råd',
		image: 'runarhodne.jpg',
		about: 'er professor i regi ved Statens teaterhøgskole. Han er utdannet ved regilinjen, Statens teaterhøgskole og er cand. mag. med Kunsthistorie fra Universitetet i Oslo. Han har vært fast regissør ved Nationaltheatret 2005-2009, leder for Torshovteatret 2007-2009 og har hatt regioppdrag ved Det Norske Teatret, Aarhus Teater, Teatro Della Limonaia i Firenze, Stadsteatern og Dramaten Stockholm, Opera Hedeland og Det Kongelige Teater i København. I 2003 skrev og regisserte han spillefilmen Mot Moskva, i samarbeid med Jo Strømgren.'
	},
	{
		name: 'Inge-Lise Langfeldt',
		role: 'Faglig råd',
		image: 'ingerliselangfeldt.jpg',
		about: 'er filmklipper. Hun er professor og hovedlærer for klippelinjen ved Den norske filmskolen. Hun har blant annet klippet filmene Venezia-vinneren X, Oscarnominerte Elling, Amanda-vinneren Salige er de som tørster, den Emmy nominerte TV-serien Gutta Boys, grøssersuksessen Villmark, publikumsfavoritten Tatt av kvinnen, sjarm-magneten El Classico som vant Folkets Amanda i 2016 og ble valgt som Iraks Oscar kandidat. Hun er en allsidig filmarbeider med bred nasjonal og internasjonal erfaring, vært involvert i dokumentarfilmer som fotograf på Cuba, fotograf og regissør i Mexico og holdt workshop i filmklipping for filmarbeidere i Guatemala der hun også var involvert i to spillefilmer. I tillegg til undervisning på filmskolens klippelinje har hun undervist i klipping og dramaturgi for videostudentene på Kunstakademiet i Oslo og jobbet som konsulent og klippeveileder på utallige filmer for Statens filmopplæring/Statens Studiesenter for film.'
	},
	{
		name: 'Jarle Aambø',
		role: 'Faglig råd',
		image: 'jarle.jpg',
		about: 'er utdannet med mellomfag i helselære og idrettsbiologi ved Norges idrettshøgskole. I perioden 1985 til 1994 var han alpintrener og landslagssjef i Norges skiforbund. I en tiårsperiode fra 1993 til 2004 hadde han en rekke ulike roller på Olympiatoppen, og ble en naturlig arvtaker etter Bjørge Stensbøl som toppidrettssjef i Norges Idrettsforbund (NIF) i 2004. Etter sin avgang som toppidrettssjef i 2013 har han hovedsakelig brukt sin tid på Olympiatoppens prestasjonsklynge som startet som et samarbeid mellom Olympiatoppen og Den Norske Opera & Ballett.'
	},
	{
		name: 'Wolfgang Plagge',
		role: 'Faglig råd',
		image: 'wolfgang.jpg',
		about: 'Pianist og komponist Wolfgang Plagge gjorde en oppsiktsvekkende klaverdebut som tolvåring i Oslo i 1972 – med H.M. kong Olav V til stede i salen. Han har vunnet flere nasjonale og internasjonale priser og legater og er aktiv som utøver over store deler av verden. Han er ettertraktet som kammermusiker, har vært solist med et stort antall orkestre og samarbeidet med en rekke fremtredende utøvere. Plagge har en omfattende produksjon som komponist med en verkliste som spenner fra liturgisk musikk til symfoniske verker, kammermusikk og solistisk klavermusikk. Han har mottatt flere priser og utmerkelser for sine komposisjoner og hans musikk oppføres over hele verden. Plagge har vært kunstnerisk leder for Talentskolen ved Bærum kommunale kulturskole i 23 år og ble i 2009 tilsatt som professor ved Norges musikkhøgskole og ved Høgskolen i Nord-Trøndelag. Fra 2013 til 2016 var han kunstnerisk leder for «IRIS-prosjektet», Sparebankstiftelsens og Dextra Musicas 3-årige elitesatsing for vestregionen.'
	}
];

export default class JuryPage extends Component {

	render() {
		return(
			<div>
				<div className="container">
					<div className="row">

						<div className="col s12">
							<div className="section">
								<h4><span className="logo-font">ArtEx</span> Faglig Råd</h4>
								<div className="divider"></div>
								<p className="flow-text">Faglig råd er oppnevnt av Styringsgruppen i ArtEx som består av rektorene fra Norges musikkhøgskole, Kunsthøyskolen i Oslo, dekan ved Den norske filmskolen og daglig leder i Talent Norge. Faglig råd skal sikre at kunnskapsutvikling og faglighet skjer i henhold prosjektets formål. Rådet skal involvere og forplikte representanter fra det profesjonelle kunstfeltet, nasjonalt og internasjonalt, innstiller talenter til programmet og ansetter mentorer, samt har det faglige ansvaret for innholdet i ArtEx.</p>
							</div>
						</div>

						{jury.map((juror) => {

							const imgUrl = "/images/jury/" + juror.image;

							return (
								<div className="col s12 l6">
									<div className="card hoverable">
										<div className="card-image waves-effect waves-block waves-light">
											<img className="activator bw" src={imgUrl} />
										</div>
										<div className="card-content">
											<span className="card-title activator grey-text text-darken-4">{juror.name}<i className="mdi mdi-unfold-more right"></i></span>
											
										</div>
										<div className="card-reveal">
											<span className="card-title grey-text text-darken-4">{juror.role}<i className="mdi mdi-close right"></i></span>
											<p>
												<b>{juror.name} </b>
												{juror.about}
											</p>
										</div>
									</div>
								</div>
							);
						})}						
						
					</div>
				</div>
			</div>
		);
	}
}