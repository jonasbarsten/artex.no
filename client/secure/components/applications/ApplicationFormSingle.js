import React, {Component} from 'react';
import Quill from 'quill';

import FileUploadWrapper from '../files/FileUploadWrapper.jsx';
import Countdown from '../utilities/countdown';

export default class ApplicationFormSingle extends Component {

	componentDidMount() {

		this.quill = new Quill('#motivation-container', {
			modules: {
				toolbar: [
					['bold', 'italic', 'underline', 'strike'],
					['link', 'blockquote'],
					[{ 'color': [] }, { 'background': [] }],
					[{ 'align': [] }],
					[{ list: 'ordered' }, { list: 'bullet' }]
				]
			},
			placeholder: 'Your motivation ...',
			theme: 'snow'
		});

		// Initialize the editor with content from DB, quill complains if there is nothing
		if (this.props.application.motivation) {
			this.quill.clipboard.dangerouslyPasteHTML(this.props.application.motivation);
		}
		
		
		Materialize.updateTextFields();
	}

	saveForm (event) {
		event.preventDefault();

		// const applicationId = this.props.application._id;

		// var motivation = $('#motivation-container .ql-editor').html();
		// var motivationLength = this.quill.getLength();

		// const form = {};

		// form.nationality = this.refs.nationality.value;
		// form.education = this.refs.education.value;
		// form.motivation = motivation;
		
		Bert.alert('Saving failed, deadline reached', 'danger', 'fixed-top', 'fa-frown-o');

		// if (motivationLength < 4000) {
		// 	Meteor.call('updateApplication', applicationId, form, (error, result) => {
		// 		if (error) {
		// 			Bert.alert('Saving failed, check your internet connection', 'danger', 'fixed-top', 'fa-frown-o');
		// 		} else {
		// 			Bert.alert('Document saved', 'success', 'fixed-top', 'fa-smile-o');
		// 		}
		// 	});
		// } else {
		// 	Bert.alert('Saving failed, motivation over 4000 characters', 'danger', 'fixed-top', 'fa-frown-o');
		// }
	}


	render() {
		const doc = this.props.application;

		return (
			<div className="z-depth-1">
				<div className="row">
					<h4 className="form-header center-align">{doc.name}</h4>
				</div>
				<hr />
				{/*<div className="row">
					<Countdown />
				</div>*/}

				<div className="row">
					<div className="col s12 m6">
						<div className="card teal">
							<div className="card-content white-text">
								<span className="card-title">Orientering</span>
								<p>Skriv kort om deg selv og din motivasjon  for deltakelse i ArtEx (max 4000 tegn).</p>
								<ul>
									<li>Hvorfor søker du ArtEx og hva du ønsker du å få ut av din deltakelse i programmet?</li>
									<li>Hva er dine forutsetninger for deltakelse?</li>
									<li>Hva er dine forventinger til ArtEx?</li>
									<li>Hva kan du som deltager tilby fellesskapet og de andre deltakerne i ArtEx?</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col s12 m6">
						<div className="card blue">
							<div className="card-content white-text">
								<span className="card-title">Dokumentasjon og vedlegg</span>
								
								<ul>
									<li>Dokumentasjon av kunstnerisk virke kan legges ved søknaden, sammen med CV.</li>
									<li>De kunstneriske vedleggene må være representative for deg og ditt virke der du er i dag og bør i hovedsak dokumentere nyere arbeider.</li>
									<li>Maks 7 vedlegg som dokumenterer kunstnerisk virke og CV kan vedlegges søknaden.</li>
									<li>Last opp dokumentasjon.</li>
									<li>Last opp cv.</li>
									<li>Last bevis på utdanning.</li>
									<li>Legg ved link til eventuell musikk og video.</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col s12 m6">
						<div className="card yellow">
							<div className="card-content">
								<span className="card-title">Generelt</span>
								
								<ul>
									<li>Av hensyn til Faglig Råds arbeidsmengde, og for å styrke prinsippet om lik behandling av alle søknader, må vedleggsvolumet begrenses.</li>
									<li>Ufullstendige søknader, eller søknader ikke levert til fristen blir ikke vurdert.</li>
									<li>Frist: 1. desember 2016 </li>
									<li>Samtaler for aktuelle Talenter blir gjort av Faglig Råd fra medio januar 2017 </li>
									<li>Programdeltaker vil bli tatt opp i ArtEx fra vinter 2017 og for 2 år. Det er Faglig Råd sammen med Talent Norge som behandler og vurdere søknadene.</li>
									<li>Spørsmål om opptak sendes til <a href="mailto:monica@talentnorge.no">Monica</a></li>
									<li>Avslag på søknad om plass i ArtEx programmet kan gis uten begrunnelse. Talent Norge er ikke underlagt forvaltningsloven. Dette innebærer at det ikke er mulig å klage på selskapets beslutninger.</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="divider"></div>

				<div className="row">
					<h4 className="form-header center-align">Søknad</h4>
				</div>

				<div className="row">
					
					<form className="col s12" onSubmit={this.saveForm.bind(this)}>
						<div className="row">

							<div className="input-field col s6">
								<label htmlFor="nationality-field">Nationality</label>
								<input
									type="text"
									id="nationality-field"
									ref="nationality"
									defaultValue={doc.nationality}
								/>
							</div>

							<div className="input-field col s6">
								<label htmlFor="education-field">Education</label>
								<input 
									type="text"
									id="education-field"
									ref="education"
									defaultValue={doc.education}
								/>
							</div>

						</div>

						<div className="row">
							<div className="input-field col s12">
								<div id="motivation-container">
									
								</div>
							</div>
						</div>

						<br />
						<br />
						<button className="btn waves-effect waves-light" type="submit">Save</button>
					</form>

					

					<div className="col s12">

						<p>{this.props.files.length} / 7 attachments</p>

						<FileUploadWrapper files={this.props.files} attachToType='application' attachToId={doc._id} max="7"/>

					</div>

				</div>
			</div>
		);
	}
}