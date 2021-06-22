import React, { Component } from "react";
import Quill from "quill";
import swal from "sweetalert";
import M from "materialize-css";

import FileUploadWrapper from "../files/FileUploadWrapper.jsx";
import Countdown from "../utilities/countdown";

export default class ApplicationFormSingle extends Component {
  componentDidMount() {
    this.quill = new Quill("#motivation-container", {
      modules: {
        toolbar: [
          ["bold", "italic", "underline", "strike"],
          ["link", "blockquote"],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
          [{ list: "ordered" }, { list: "bullet" }],
        ],
      },
      placeholder: "Your motivation ...",
      theme: "snow",
    });

    // Initialize the editor with content from DB, quill complains if there is nothing
    if (this.props.application.motivation) {
      this.quill.clipboard.dangerouslyPasteHTML(
        this.props.application.motivation
      );
    }

    M.updateTextFields();
  }

  saveForm(event) {
    if (event) {
      event.preventDefault();
    }

    const applicationId = this.props.application._id;

    var motivation = $("#motivation-container .ql-editor").html();
    var motivationLength = this.quill.getLength();

    const form = {};

    form.nationality = this.refs.nationality.value;
    form.education = this.refs.education.value;
    form.motivation = motivation;

    // Bert.alert('Saving failed, deadline reached', 'danger', 'fixed-top', 'fa-frown-o');

    if (motivationLength <= 4000) {
      Meteor.call("updateApplication", applicationId, form, (error, result) => {
        if (error) {
          Bert.alert(
            "Saving failed, check your internet connection",
            "danger",
            "fixed-top",
            "fa-frown-o"
          );
        } else {
          Bert.alert("Document saved", "success", "fixed-top", "fa-smile-o");
        }
      });
    } else {
      Bert.alert(
        "Saving failed, motivation over 4000 characters",
        "danger",
        "fixed-top",
        "fa-frown-o"
      );
    }
  }

  submitApplication() {
    this.saveForm();

    swal(
      {
        title: "Are you sure? / Er du sikker?",
        text: "You can't undo this and the application will be locked for further editing / Du kan ikke angre dette og søknaden vil ikke lenger kunne editeres.",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Submit! / Send inn!",
        closeOnConfirm: true,
      },
      () => {
        Meteor.call(
          "lockApplication",
          this.props.application._id,
          (err, res) => {
            if (err) {
              console.log(err);
            } else {
              Bert.alert(
                "Application submitted!",
                "success",
                "fixed-top",
                "fa-smile-o"
              );
            }
          }
        );
      }
    );
  }

  render() {
    const openRegistration = true;

    if (!openRegistration) {
      return <h4>Applications may no longer be edited</h4>;
    }

    const doc = this.props.application;

    if (!doc) {
      return <h1>Loading</h1>;
    }

    if (doc.locked) {
      return <h1>Application already submitted</h1>;
    }

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
                <p>
                  Skriv kort om deg selv og din motivasjon for deltakelse i
                  PopUp (max 4000 tegn).
                </p>
                <ul>
                  <li>
                    Hvorfor søker du PopUp og hva du ønsker du å få ut av din
                    deltakelse i programmet?
                  </li>
                  <li>
                    Hva slags mål ønsker du å ha oppnådd i løpet av programmet?
                  </li>
                  <li>
                    Beskriv, så konkret som mulig, hva du ønsker å bruke de
                    økonomiske midlene på, og hvordan bruken vil bidra til
                    kunstneriske utvikling?
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col s12 m6">
            <div className="card blue">
              <div className="card-content white-text">
                <span className="card-title">Dokumentasjon og vedlegg</span>
                <p>Legg ved følgende vedlegg:</p>
                <ul>
                  <li>Kunstnerisk CV</li>
                  <li>
                    Skriv kort om deg selv og din motivasjon for deltakelse i
                    PopUp (max 4000 tegn) – se "orientering". 
                  </li>
                  <li>
                    Dokumentasjon av kunstnerisk virke (legg ved link til musikk
                    - enten på Spotify / SoundCloud, eller YouTube, eller last
                    opp mp3)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col s12 m6">
            <div className="card yellow">
              <div className="card-content">
                <span className="card-title">Generelt</span>
                <ul>
                  <li>Søknadsfrist: 1 september 2021.</li>
                  <li>
                    Samtaler med aktuelle kandidater blir gjort av ekstern
                    faggruppe og Talent Norge, i løpet av september.
                  </li>
                  <li>
                    Det er faggruppen i tillegg til prosjektleder som behandler
                    og vurderer søknadene.
                  </li>
                  <li>
                    Programdeltakere blir tatt opp i PopUp fra 1 oktober 2021 -
                    og for 1 år.
                  </li>
                  <li>
                    Spørsmål om opptak sendes til prosjektkoordinator Øystein
                    Skar,{" "}
                    <a href="mailto:oystein.skar@talentnorge.no">
                      oystein.skar@talentnorge.no
                    </a>
                  </li>
                  <li>
                    Avslag på søknad om plass i programmet gis uten begrunnelse.
                    Dette innebærer at det ikke er mulig å klage på selskapets
                    beslutninger.
                  </li>
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
                <div id="motivation-container"></div>
              </div>
            </div>

            <br />
            <br />
            <button className="btn waves-effect waves-light" type="submit">
              Save
            </button>
          </form>

          <div className="col s12">
            <p>{this.props.files.length} / 7 attachments</p>

            <FileUploadWrapper
              files={this.props.files}
              attachToType="application"
              attachToId={doc._id}
              max="7"
            />
          </div>
        </div>

        <div className="row">
          <button
            onClick={this.submitApplication.bind(this)}
            className="btn waves-effect red col s12"
          >
            SUBMIT / SEND INN
          </button>
        </div>
      </div>
    );
  }
}
