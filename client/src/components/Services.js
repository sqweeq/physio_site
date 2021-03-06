import React, { Component } from "react";
import Navigation from "./Navigation";
export default class Services extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="content weights text-white h-auto pb-5 p-5">
          <h1 className="pt-5 border-bottom">Services</h1>
          <div className="row w-100">
            <div className="col-sm-12 col-md-6 col-lg-4 text-center p-5">
              <img
                className="img-services img-fluid d-block mx-auto rounded-circle
                img-thumbnail"
                src="https://irp-cdn.multiscreensite.com/c51c754b/dms3rep/multi/mobile/vertebrale_back_physio.jpg"
                alt="assess-service"
              />
              <h3 className="py-3">Full Assessment</h3>
              <p>
                Accurate diagnostic techniques involving biomechanics, gait,
                sport specific functional movements and others
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 text-center p-5">
              <img
                className="img-services img-thumbnail img-fluid d-block mx-auto rounded-circle"
                src="https://www.completewellnessphysio.com.au/wp/wp-content/uploads/2015/09/physiotherapy-treatment.jpg"
                alt="manual-service"
              />
              <h3 className="py-3">Manual Therapy</h3>
              <p>
                Application of passive movement to a joint either within
                ('mobilisation') or beyond its active range of movement
                ('manipulation'). This includes oscillatory techniques, high
                velocity low amplitude thrust techniques, sustained stretching
                and muscle energy techniques.
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 text-center p-5">
              <img
                className="img-services img-thumbnail img-fluid d-block mx-auto rounded-circle"
                src="data:image/jpeg;base64,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"
                alt="soft-service"
              />
              <h3 className="py-3">Soft Tissue Therapy</h3>
              <p>
                Soft Tissue Therapy (STT) is the assessment, treatment and
                management of soft tissue injury, pain, and dysfunction of the
                musculoskeletal system. A soft tissue therapist will use deep
                tissue massage skills to treat you along with manual stretching,
                myofascial release and trigger point therapy.
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 text-center p-5">
              <img
                className="img-services img-thumbnail img-fluid d-block mx-auto rounded-circle"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStjB1j0BzCZ2bd1gVuppPwm9FeVg3Lb0rSDCsJR4kjSMjtROGB"
                alt="tens-service"
              />
              <h3 className="py-3">TENS Therapy</h3>
              <p>
                Transcutaneous electrical nerve stimulation (TENS) therapy
                involves the use of low-voltage electric currents to treat pain.
                A small device delivers the current at or near nerves. TENS
                therapy blocks or changes your perception of pain.
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 text-center p-5">
              <img
                className="img-services img-fluid img-thumbnail d-block mx-auto rounded-circle"
                src="https://news-image-prod-imgix.tech.tvnz.co.nz/content/dam/images/news/2014/11/22/acupuncture.jpg?w=800&h=450&fit=crop&auto=format"
                alt="accupuncture-service"
              />
              <h3 className="py-3">Accupuncture</h3>
              <p>
                Western Acupuncture is used by physiotherapists to achieve pain
                relief via the stimulation of the nervous system, such as the
                brain and spinal cord to produce the body's own pain relieving
                neuro-chemicals, such as endorphins for pain relief; melatonin
                to promote sleep and serotonin to promote well being.
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 text-center p-5">
              <img
                className="img-services img-fluid img-thumbnail d-block mx-auto rounded-circle"
                src="https://www.bu.edu/files/2015/10/h_research_15-9093-THERABANDS-0201.jpg"
                alt="correct-service"
              />
              <h3 className="py-3">Corrective Exercises</h3>
              <p>
                Search Results Featured snippet from the web ​Corrective
                Exercise is a treatment technique that utilizes positions and
                movement to isolate weak areas of the body. Weakness is rarely
                due to a muscle shrinking in size, but is more commonly seen as
                a result of pain in nearby tissue. Pain reduces the function and
                strength in the surrounding muscles.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
