import React, { Component } from 'react';

const participants = [
	{
		name: 'Amalie Stalheim',
		instrument: 'Cellist',
		image: 'amalie.jpg',
		about:  'Amalie Stalheim (f. 1993, Bergen) er en prisvinnende cellist og en av Skandinavias fremste unge musikere. Hun begynte å spille cello da hun var 6 år gammel, og nå inne i sitt siste år på det utøvende masterstudiet ved Edsberg slott ved Kungliga Musikhögskolan i Stockholm, Sverige. Amalie studerer med celloprofessor Torleif Thedéen. Amalie er allerede ettertraktet som solist og kammermusiker og det siste året har hun har vært solist med flere profesjonelle orkestre i Norge og i Sverige. Hun vant en av Sveriges største konkurranser for klassiske musikere, Ljunggrenska tävlingen i 2015, blir jevnlig invitert til å delta på festivaler i inn- og utland, og ble tildelt Firmenich Prize ved det prestisjetunge Verbier Festival Akademiet i Sveits i 2015. I 2016 var Amalie Stalheim en av fem unge klassiske utøvere som ble nominert til Statoilprisen, og hun har tidligere mottatt større stipender fra Kungliga Musikaliska Akademin i Sverige, YAMAHA Europe Music Foundation i Sverige, Den Nordiske Första St Johannisorden i Sverige og SpareBank 1 SR-Bank sitt stipend G9alt for unge musikk-talenter.'
	},
	{
		name: 'Grete Sofie Borud Nybakken',
		instrument: 'Danser',
		image: 'grete.jpg',
		about: 'Grete Sofie Borud Nybakken (f. 1993, Fetsund) er utdannet ved Den Norske Opera og Balletts Ballettskole og The Royal Ballet School i London, og har vært ansatt som ballettdanser ved Den Norske Opera og Ballett siden 2011. Hun har danset en rekke fremtredende roller i det klassiske repertoaret, blant annet som Sukkerfeen i Dinna Bjørn’s Nøtteknekkeren, Myrtha i Giselle, Lescaut’s elskerinne i Manon og Kitty i Christian Spucks Anna Karenina. I det moderne repertoaret har hun blant annet danset i ballettene Falling Angels og No More Play av Jiří Kylián, Forsythes The Vertiginous Thrill of Exactitude og Nacho Duatos Without Words, samt danset rollen som Regine i Cina Espejord og Marit Moum Aunes produksjon Ghosts - Ibsens Gengangere. I tillegg har hun medvirket i stykker av en rekke norske koreografer som Alan Lucien Øyen, Ingun Bjørnsgaard og Hege Haagenrud. I 2014 vant hun Anders Jahres pris for yngre kunstnere.'
	},
	{
		name: 'Ida Elise Broch',
		instrument: 'Skuespiller',
		image: 'ida.jpg',
		about: 'Ida Elise Broch (f. 1987, Oslo) er utdannet fra Statens Teaterhøyskole ved Kunsthøgskolen i Oslo, hun jobber som freelance skuespiller og er å se både på teaterscenen og film. Hun er kjent fra filmer som Switch og Mannen som elsket Yngve, og fra TV-seriene Det tredje øyet og Lilyhammer. Hun vant Beste kvinnelige skuespiller under Gullruten i 2015 for sin rolle i tredje sesong av Lilyhammer.'
	},
	{
		name: 'Mariama Slåttøy',
		instrument: 'Danser',
		image: 'mariama.jpg',
		about: 'Mariama Slåttøy (f. 1992, Trondheim) er utdannet fra Balletthøgskolen ved Kunsthøgskolen i Oslo med en bachelorgrad i utøvende dans. Etter endt utdanning har hun medvirket i fire produksjoner for Oslo Danse Ensemble hvor hun har jobbet med koreografene Jo Strømgren, Subjazz, Fredrik «Benke» Rydman, Toni Ferraz og Ole Martin Meland. Hun har også turnert med Riksteatret og spilt i musikalene Chicago ved Oslo Nye Teater og Singin’ in the Rain ved Folketeatret. I tillegg har hun hatt en rekke danseoppdrag for ulike arrangementer, TV-opptredener, og medvirket i musikkvideoer og flere filmprosjekter.'
	},
	{
		name: 'Ole Christian Haagenrud',
		instrument: 'Pianist',
		image: 'ole.jpg',
		about: 'Ole Christian Haagenrud (f. 1989, Oslo) blir regnet som en av de mest lovende unge pianister i Norge. I 2015 avsluttet han det prestisjefylte diplomstudiet ved Norges musikkhøgskole der han hadde professor Jens Harald Bratlie og professor Håvard Gimse som sine lærere. Ole Christian har vunnet Robert Levins Festspillpris og en andre rekke priser. Han har spilt med orkestre som Bergen Filharmoniske Orkester og Kringkastingsorkesteret ved flere anledninger. I tillegg til solistoppdrag er han en svært ettertraktet kammermusiker og akkompagnatør, og har samarbeidet med musikere som Lars Anders Tomter, Henning Kraggerud og Arve Tellefsen. Ole Christian har opptrådt på en lang rekke festivaler i Norge og i utlandet, og har holdt konserter på flere av de største scenene i Europa. Han hadde sin internasjonale debutkonsert i Concecertgebouw i Amsterdam i 2016.'
	},
	{
		name: 'Simon Tillaas',
		instrument: 'Filmregissør',
		image: 'simon.jpg',
		about: 'Svensk-eritreiske Simon Tillaas (f. 1985, Stockholm) er filmregissør med utdannelse fra Den norske filmskolen på Lillehammer. Hans eksamensfilm Den lille døden, vant nasjonale og internasjonale priser, deriblant en av de gjeveste europeiske filmprisene for filmstudenter: VFF Young Talent Award på The International Festival of Film Schools i München.'
	},
	{
		name: 'Aasne Vaa Greibrokk',
		instrument: 'Filmregissør',
		image: 'aasne.jpg',
		about: 'Aasne Vaa Greibrokk (f. 1982, Bodø) er utdannet ved Nordland kunst- og filmfagskole og Den norske filmskolen på Lillehammer. Hennes kortfilmer har vært tatt ut til internasjonale festivaler. Eksamensfilmen Til hvem det måtte angå vant pris for beste film på Studentfilmfestivalen i Lillehammer. Hun debuterte som spillefilmregissør i 2016 med Alt det vakre (Reykjavik International Film Festival og Hamptons International Film Festival).'
	},
	{
		name: 'Ensemble Allegria',
		instrument: '',
		image: 'allegria.jpg',
		about: 'Ensemble Allegria er et av de fremste klassiske ensemblene i Norge, og har siden oppstarten i 2008 begeistret publikum med sine energiske og kommuniserende fremførelser. Ensemblet drives av musikerne selv, og gjester jevnlig festivaler som Festspillene i Bergen, Oslo Kammermusikkfestival, Ultimafestivalen, Hardanger Musikkfest og Festspillene i Nord-Norge. Ensemble Allegria har samarbeidet med solister som Truls Mørk, Christian Ihle Hadland, Martin Fröst, Tine Thing Helseth og Lawrence Power, og har de siste årene hatt et tett samarbeid med Det Norske Solistkor. I 2012 ble Ensemble Allegria tildelt Statoils klassiske talentstipend, som første ensemble noensinne. Orkesteret har gitt ut to plater på LAWO Classics, den siste ble nominert til Spellemannprisen for 2015. Ensemble Allegria er i ArtEx representert ved Maria Eikefet og Maria Angelika Carlsen.'
	},
	{
		name: 'Maria Angelika Carlsen',
		instrument: 'Filoinist',
		image: 'maria-a.jpg',
		about: 'Maria Angelika Carlsen (f. 1988, Nesodden) ble ansatt som konsertmester 2 i Stavanger symfoniorkester høsten 2011 og fikk jobb i samme stilling i Kringkastingsorkesteret i august 2014. Sesongen 17/18 er hun tilbake i Stavanger i et vikariat som 1. konsertmester. Maria har vært konsertmester og kunstnerisk leder i Ensemble Allegria siden starten i 2008. Hun avsluttet våren 2011 sin bachelorgrad ved Norges musikkhøgskole i Oslo, I løpet av denne tiden tok hun et opphold i København og ved Det kongelige danske musikkonservatorium, der hun studerte med Serguei Azizian. Maria har variert erfaring som solist, der høydepunktene har vært oppdrag med Bergen Filharmoniske Orkester, Stavanger symfoniorkester, Kristiansand Symfoniorkester, Tromsø symfoniorkester, Norges musikkhøgskoles symfoniorkester og Ensemble Allegria.  Maria Angelika er en aktiv kammermusiker, og har spilt i saler som Wigmore Hall, Carnegie Hall (Zankel), Universitetets Aula og Conservatoire i Brüssel, med kammermusikkpartnere som Martin Fröst, Lars Anders Tomter, Henning Kraggerud, Håvard Gimse, Karen Gomyo og Leif Ove Andsnes. Sammen med Eva Stalheim, Marthe Husum og Frida Fredrikke Waaler Wærvågen spiller hun i Atem String Quartet. Maria spiller på en Guiseppe Rocca fra 1850, utlånt av Dextra Musica.'
	},
	{
		name: 'Maria Eikefet',
		instrument: 'Filoinist',
		image: 'maria-e.jpg',
		about: 'Maria Eikefet (f. 1989, Lindås) er utdannet fiolinist ved Norges musikkhøgskole. Hun er en allsidig musiker som etter studiene blant annet har jobbet som distriktsmusiker på Sortland i Vesterålen og gjort over 200 konserter i Nordland fylke med egne produksjoner for klavertrio. Maria har vært fiolinist i Ensemble Allegria siden høsten 2008, og fra 2013 har hun i tillegg jobbet som orkesterets daglige leder.'
	},
	{
		name: 'Edvard Munch Ensemble',
		instrument: '',
		image: 'munch.jpg',
		about: 'Halvannet år etter sin lansering høsten 2015 har Edvard Munch Ensemble allerede rukket å få stor anerkjennelse for sin nyskapende formidling av klassisk musikk. Fem av Norges fremste unge utøvere har gått sammen om å skape en helt ny konsertopplevelse der kjent og ukjent kammermusikk flettes sammen med sceniske, litterære og visuelle elementer som vises på scenen når musikken spilles. Hvert av ensemblets prosjekter er basert på et spesifikt tema som presenteres ikke bare gjennom det musikalske og kunstartene som vises, men også gjennom ensemblets egne visuelle profil. Ensemblet har så langt opptrådt bl.a. i Stormen Konserthus, Bærum kulturhus, Den Norske Opera og Drammens Teater og har samarbeidet bl.a. med KODE i Bergen og Universitetet i Oslo. Dextra Musica er ensemblets faste samarbeidspartner i satsningen på formidling overfor barn og unge. Edvard Munch Ensemble er i ArtEx representert ved Thormod Rønning Kvam og Victoria Putterman.'
	},
	{
		name: 'Victoria Putterman',
		instrument: 'Filoinist',
		image: 'victoria.jpg',
		about: 'Den New York-fødte norske fiolinisten Victoria Putterman (f. 1992) er utdannet fra The Juilliard School, Barratt Due musikkinstitutt og Hochschule für Musik “Hanns Eisler” i Berlin. Hun har opptrådt som solist og kammermusiker i USA og en rekke europeiske land på prestisjetunge arenaer, bl.a. Lincoln Center i New York, Wigmore Hall i London, Helsinki Music Center, Festspillene i Bergen, Den Sorte Diamant i København og Oslo Konserthus. Som tenåring ble hun kåret til 1. prisvinner i Ungdommens Musikkmesterskap (både duo og solo) samt i internasjonale konkurranser i Tsjekkia og Italia. Siden 2007 har hun jobbet tett med Itzhak Perlman etter å ha blitt tatt opp ved hans talentprogram og blir regelmessig invitert til konsertoppdrag tilknyttet programmet både i USA og andre land. I det siste har hun blant annet vært på turné som solist med Oslo Camerata i Mozart Sinfonia concertante sammen med Henning Kraggerud. I tillegg til å være kunstnerisk leder og fiolinist i Edvard Munch Ensemble spiller hun regelmessig i Oslo-Filharmonien.'
	},
	{
		name: 'Thormod Rønning Kvam',
		instrument: 'Pianist',
		image: 'thormod.jpg',
		about: 'Thormod Rønning Kvam (f. 1991, Røyken) har de siste årene etablert seg blant Norges mest fremadstormende unge pianister. Han har spilt på direktesendinger i radio og TV og har allerede rukket å opptre på viktige konsertarenaer både i Sverige, Russland, Ungarn, Italia, Østerrike, Tyskland, Nederland og England. Har siden 2010 også blitt veiledet jevnlig både av Jiři Hlínka, Håvard Gimse, Christian Ihle Hadland og Leif Ove Andsnes. Rønning Kvam har i en årrekke hatt stor interesse for idéskaping og nye kreative initiativer og var kunstnerisk leder for Fagerborgfestspillene og RisørUNG før han i 2015 var med på å stifte Edvard Munch Ensemble, der han er pianist og administrativ leder.'
	}
];

class ParticipantsPage extends Component {
	render () {
		return (
			<div id="participants-front" className="container">
				<div className="row">
					<div className="col s12">
							<div className="section">
								<h4><span className="logo-font">ArtEx</span> Deltakere</h4>
								<div className="divider"></div>
							</div>
						</div>

					{participants.map((participant, i) => {

						const imgUrl = "/images/participants/" + participant.image;

						return (
							<div key={i} className="col s12 l6">
								<div className="card">
									<div className="card-image">
										<div>
											<img className="activator bw" src={imgUrl} />
										</div>
										<span className="card-title">{participant.instrument} <b>{participant.name}</b></span>
		            				</div>
									
									<div className="card-reveal">
										<span className="card-title grey-text text-darken-4">{participant.name}<i className="mdi mdi-close right"></i></span>
										<p>{participant.about}</p>
									</div>

								</div>
							</div>

						);
					})}
				
				</div>

			</div>
		);
	}
}

export default ParticipantsPage;