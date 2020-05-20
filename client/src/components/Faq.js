import React, { Component } from "react";
import Navigation from "./Navigation";
export default class Faq extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="content weights text-white p-5 h-auto">
          <h1 className="pt-5 border-bottom ">Frequently asked questions</h1>

          <div className="p-4">
            <h3>Do I need a referral to be seen?</h3>
            <p>
              No, physiotherapists are primary providers, therefore can assess
              diagnose and register your injury for ACC purposes. It is
              recommended that patients keep in touch with their own GP’s.
              Certain insurers sometimes do require you to see a GP before
              authorizing physio treatment. Furthermore medical certificates for
              work purposes must be done via a GP. Our physiotherapists are able
              to liaise with your GP if and when its appropriate.
            </p>
          </div>
          <div className="p-4">
            <h3> What happens on the initial appointment?</h3>
            <p>
              During the initial appointment the physio will first take a
              detailed history from you with regards to your injury and medical
              history. We may also discuss your occupation, sports and hobbies
              so we can get a good grasp of what you get up to. This helps us
              formulate our goals with you for your treatment. Following this
              they will examine you and then a diagnosis and prognosis will be
              discussed with you during this session. The treatment will then
              begin!
            </p>
          </div>
          <div className="p-4">
            <h3>What times are you open?</h3>
            <p>
              This is clinic dependent, please check individual clinics for
              hours of operation. Alternatively book online.
            </p>
          </div>
          <div className="p-4">
            <h3>What should I wear ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              voluptas quas inventore voluptatem temporibus nemo saepe suscipit
              provident harum magnam.
            </p>
          </div>
          <div className="p-4">
            <h3>What can I expect on subsequent appointments?</h3>
            <p>
              At your subsequent appointment, the physio will ask you how you
              responded to the previous visit and continue treating you. There
              will be constant reassessments during each subsequent visit to
              ensure we are doing are upmost to get your injury better as
              quickly as possible.
            </p>
          </div>
          <div className="p-4">
            <h3>How long does a treatment session last?</h3>
            <p>
              Generally the initial treatment lasts between 30 – 40 minutes and
              follow up sessions are 20 minutes, but can go longer depending on
              your injury.
            </p>
          </div>
          <div className="p-4">
            <h3>What should I wear ?</h3>
            <p>
              Depends on your injury. If possible please wear shorts and a
              singlet. However, we would like you to be as comfortable as
              possible so dress as you wish.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
