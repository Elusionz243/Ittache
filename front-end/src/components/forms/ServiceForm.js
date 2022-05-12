import { useState } from "react";
import { ChromePicker } from "react-color";
import simpleColorConverter from "simple-color-converter";

export default function ServiceForm() {
  const initialFormData = {
    //Client Information
    firstName: "",
    lastName: "",
    email: "",
    //Brand Awareness
    companyName: "",
    servicesAndProducts: "",
    targetAudience: "",
    companyStrengths: "",
    ownerStrengths: "",
    verbiageToAvoid: "",
    license: "false",
    //Creative Process
    //logo
    makeLogo: "",
    logoDescription: "",
    vectors: "false",
    //color scheme
    color1: "",
    color1Hex: "#FF0000",
    color2: "",
    color2Hex: "#00FF00",
    color3: "",
    color3Hex: "#0000FF",
    //Marketing Material
    translation: "",
    translationDescription: "",
    flyers: "false",
    postcards: "false",
    letterheads: "false",
    envelopes: "false",
    magazineAds: "false",
    tvAds: "false",
    //sales
    needSalesServices: "",
    //Tools and Services
    website: "false",
    mobileApp: "false",
    emailAccounts: "false",
    amount: 0,
    personOrDepartment: "",
    socialMedias: "false",
    instagram: "false",
    facebook: "false",
    other: "",
    thirdParty: "",
    thirdPartyURL: "",
    interactive: "",
    copyEditor: "",
    customDomain: "",
    customDomainHostingSite: "",
    customDomainURL: "",
    userWebsiteIdeas: "",
    developerTips: "",
    developerWarnings: "",
    userEngagement: "",
    timeline: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setFormData({ ...formData, [name]: value });
  };

  const getResults = () => {
    const questions = document.querySelectorAll("label");
    questions.forEach(question => console.log(question));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getResults();
  };

  return (
    <>
      <div className="container my-3">
        <form onSubmit={handleSubmit}>
          {/* User Information */}
          <div className="card p-3">
            <div className="card-title d-flex justify-content-center">
              <h3 className="text-decoration-underline">
                Personal Information
              </h3>
            </div>
            <div className="d-flex py-3">
              <div className="w-50 mx-3">
                <label
                  htmlFor="firstName"
                  id="firstName"
                  className="form-label question"
                >
                  First Name:
                </label>
                <input
                  name="firstName"
                  className="form-control answer"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="w-50 mx-3">
                <label htmlFor="lastName" id="lastName" className="form-label">
                  Last Name:
                </label>
                <input
                  name="lastName"
                  className="form-control"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mx-3">
              <label htmlFor="email" id="email" className="form-label">
                Email:
              </label>
              <input
                name="email"
                type="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
              />
              <div name="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
          </div>
          {/* Brand Awareness */}
          <div className="card p-3">
            <div className="card-title d-flex justify-content-center">
              <h3 className="text-decoration-underline">Brand Awareness</h3>
            </div>
            <div className="py-3">
              <div className="m-3">
                <label
                  id="companyName"
                  htmlFor="companyName"
                  className="form-label"
                >
                  What is your company name:
                </label>
                <input
                  name="companyName"
                  className="form-control w-50"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>
              <div className="m-3">
                <label
                  id="servicesAndProducts"
                  htmlFor="servicesAndProducts"
                  className="form-label"
                >
                  In as much detail as possible, describe your services and/or
                  products:
                </label>
                <textarea
                  className="form-control"
                  name="servicesAndProducts"
                  value={formData.servicesAndProducts}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="m-3">
                <label
                  id="targetAudience"
                  htmlFor="targetAudience"
                  className="form-label"
                >
                  Who is your target audience?
                </label>
                <input
                  name="targetAudience"
                  className="form-control"
                  value={formData.targetAudience}
                  onChange={handleChange}
                />
              </div>
              <div className="m-3">
                <label
                  id="companyStrengths"
                  htmlFor="companyStrengths"
                  className="form-label"
                >
                  What do you consider the strengths of your company?
                </label>
                <textarea
                  name="companyStrengths"
                  className="form-control"
                  value={formData.companyStrengths}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="m-3">
                <label
                  id="ownerStrengths"
                  htmlFor="ownerStrengths"
                  className="form-label"
                >
                  What do you consider your strengths as owner/supplier?
                </label>
                <textarea
                  name="ownerStrengths"
                  className="form-control"
                  value={formData.ownerStrengths}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="m-3">
                <label
                  htmlFor="verbiageToAvoid"
                  className="form-label question"
                  id="verbiageToAvoid"
                >
                  What verbiage or phrases do we need to avoid in your industry?
                </label>
                <textarea
                  name="verbiageToAvoid"
                  className="form-control answer"
                  value={formData.verbiageToAvoid}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="m-3">
                <label id="license" className="form-label" htmlFor="license">
                  Is your industry regulated and require a license to operate?
                </label>
                <div className="form-check d-flex flex-column">
                  <label htmlFor="licenseTrue" className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="license"
                      value={true}
                      onChange={handleChange}
                      id="licenseTrue"
                    />
                    Yes
                  </label>
                  <label htmlFor="licenseFalse" className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="license"
                      value={false}
                      onChange={handleChange}
                      id="licenseFalse"
                    />
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* Creative Process */}
          <div className="card p-3">
            <div className="card-title d-flex justify-content-center">
              <h3 className="text-decoration-underline">Creative Process</h3>
            </div>
            <div className="py-3">
              <h5>Logo</h5>
              <div className="m-3">
                <label id="makeLogo" htmlFor="makeLogo" className="form-label">
                  Do you need assistance developing a logo?
                </label>
                <textarea
                  className="form-control"
                  value={formData.makeLogo}
                  name="makeLogo"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="m-3">
                <label htmlFor="logoDescription" className="form-label">
                  <p>
                    If yes, please describe your logo idea in as much detail as
                    possible.
                  </p>
                  <p>
                    If no, are your logos stored as vector files for scalable
                    use in print and online media?
                  </p>
                </label>
                <textarea
                  className="form-control"
                  value={formData.logoDescription}
                  name="logoDescription"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="m-3">
                <h5>Color Scheme</h5>
                <div className="d-flex flex-column">
                  <label id="colors" className="form-label">
                    Provide up to three colors, in order of preference, you
                    would like us to use in the creative process:
                  </label>
                  <div className="d-flex justify-content-evenly">
                    <div className="d-flex flex-column">
                      <label
                        htmlFor="color1"
                        className="form-label d-flex flex-row justify-content-evenly"
                      >
                        Color 1:
                        <div
                          style={{
                            width: "50px",
                            height: "3ch",
                            backgroundColor: formData.color1Hex,
                            border: "1px solid grey",
                          }}
                        ></div>
                      </label>
                      <ChromePicker
                        color={formData.color1Hex}
                        onChangeComplete={(color) => {
                          const colorConverted = new simpleColorConverter({
                            rgba: color.rgb,
                            to: "pantone",
                          });
                          setFormData({
                            ...formData,
                            color1: colorConverted.color,
                            color1Hex: color.hex,
                          });
                        }}
                      />
                    </div>
                    <div className="d-flex flex-column">
                      <label
                        htmlFor="color2"
                        className="form-label d-flex flex-row justify-content-evenly"
                      >
                        Color 2:
                        <div
                          style={{
                            width: "50px",
                            height: "3ch",
                            backgroundColor: formData.color2Hex,
                            border: "1px solid #2a2a2a",
                          }}
                        ></div>
                      </label>
                      <ChromePicker
                        color={formData.color2Hex}
                        onChangeComplete={(color) => {
                          const colorConverted = new simpleColorConverter({
                            rgba: color.rgb,
                            to: "pantone",
                          });
                          setFormData({
                            ...formData,
                            color2: colorConverted.color,
                            color2Hex: color.hex,
                          });
                        }}
                      />
                    </div>
                    <div className="d-flex flex-column">
                      <label
                        htmlFor="color3"
                        className="form-label d-flex flex-row justify-content-evenly"
                      >
                        Color 3:
                        <div
                          style={{
                            width: "50px",
                            height: "3ch",
                            backgroundColor: formData.color3Hex,
                            border: "1px solid #2a2a2a",
                          }}
                        ></div>
                      </label>
                      <ChromePicker
                        color={formData.color3Hex}
                        onChangeComplete={(color) => {
                          const colorConverted = new simpleColorConverter({
                            rgba: color.rgb,
                            to: "pantone",
                          });
                          setFormData({
                            ...formData,
                            color3: colorConverted.color,
                            color3Hex: color.hex,
                          });
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Marketing Materials */}
              <div className="m-3">
                <h5>Marketing Materials</h5>
                <label id="translation" className="form-label">
                  Will you need translation services?
                </label>
                <div className="form-check d-flex flex-column">
                  <label htmlFor="translation" className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      onChange={handleChange}
                      value="true"
                      name="translation"
                    />
                    Yes
                  </label>
                  <label htmlFor="translation" className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      onChange={handleChange}
                      value="false"
                      name="translation"
                    />
                    No
                  </label>
                </div>
                {formData.translation === "true" ? (
                  <div className="m-3">
                    <label
                      htmlFor="translationDescription"
                      className="form-label"
                    >
                      What languages will you need help translating?
                    </label>
                    <textarea
                      className="form-control"
                      value={formData.translationDescription}
                      onChange={handleChange}
                      name="translationDescription"
                    ></textarea>
                  </div>
                ) : null}
              </div>
              <div className="m-3">
                <label id="advertisements" className="form-label">
                  Do you intend to have:
                </label>
                <div className="form-check d-flex flex-column">
                  <label id="flyers" className="form-check-label">
                    Flyers
                    <input
                      type="checkbox"
                      checked={formData.flyers === "true" ? true : false}
                      onChange={handleChange}
                      name="flyers"
                      value={formData.flyers === "false" ? "true" : "false"}
                      className="form-check-input"
                    />
                  </label>
                  <label id="postcards" className="form-check-label">
                    Postcards
                    <input
                      type="checkbox"
                      checked={formData.postcards === "true" ? true : false}
                      onChange={handleChange}
                      name="postcards"
                      value={formData.postcards === "false" ? "true" : "false"}
                      className="form-check-input"
                    />
                  </label>
                  <label id="letterheads" className="form-check-label">
                    Letterheads
                    <input
                      type="checkbox"
                      checked={formData.letterheads === "true" ? true : false}
                      onChange={handleChange}
                      name="letterheads"
                      value={
                        formData.letterheads === "false" ? "true" : "false"
                      }
                      className="form-check-input"
                    />
                  </label>
                  <label id="envelopes" className="form-check-label">
                    Envelopes
                    <input
                      type="checkbox"
                      checked={formData.envelopes === "true" ? true : false}
                      onChange={handleChange}
                      name="envelopes"
                      value={formData.envelopes === "false" ? "true" : "false"}
                      className="form-check-input"
                    />
                  </label>
                  <label id="magazineAds" className="form-check-label">
                    Magazine Ads
                    <input
                      type="checkbox"
                      checked={formData.magazineAds === "true" ? true : false}
                      onChange={handleChange}
                      name="magazineAds"
                      value={
                        formData.magazineAds === "false" ? "true" : "false"
                      }
                      className="form-check-input"
                    />
                  </label>
                  <label id="tvAds" className="form-check-label">
                    TV Ads
                    <input
                      type="checkbox"
                      checked={formData.tvAds === "true" ? true : false}
                      onChange={handleChange}
                      name="tvAds"
                      value={formData.tvAds === "false" ? "true" : "false"}
                      className="form-check-input"
                    />
                  </label>
                </div>
              </div>
              <div className="m-3">
                <h5>Sales</h5>
                <label
                  id="needSalesServices"
                  className="form-label"
                  htmlFor="needSalesServices"
                >
                  Do you need sales services, such as presentations, copy,
                  voiceovers, or Zoom meetings?
                </label>
                <textarea
                  className="form-control"
                  value={formData.needSalesServices}
                  onChange={handleChange}
                  name="needSalesServices"
                ></textarea>
              </div>
            </div>
          </div>
          {/* Tools & Services */}
          <div className="card p-3">
            <div className="d-flex justify-content-center">
              <h3 className="text-decoration-underline">Tools & Services</h3>
            </div>
            <div className="m-3">
              <label id="features" className="form-label">
                Do you intend to have a:
              </label>
              <div className="form-check d-flex flex-column">
                <label
                  id="website"
                  htmlFor="website"
                  className="form-check-label"
                >
                  Website
                  <input
                    type="checkbox"
                    checked={formData.website === "true" ? true : false}
                    onChange={handleChange}
                    value={formData.website === "true" ? "false" : "true"}
                    name="website"
                    className="form-check-input"
                  />
                </label>
                <label
                  id="mobileApp"
                  htmlFor="mobileApp"
                  className="form-check-label"
                >
                  Mobile App
                  <input
                    type="checkbox"
                    checked={formData.mobileApp === "true" ? true : false}
                    onChange={handleChange}
                    value={formData.mobileApp === "true" ? "false" : "true"}
                    name="mobileApp"
                    className="form-check-input"
                  />
                </label>
                <label
                  id="emailAccounts"
                  htmlFor="emailAccounts"
                  className="form-check-label"
                >
                  Personalized email accounts
                  <input
                    type="checkbox"
                    checked={formData.emailAccounts === "true" ? true : false}
                    onChange={handleChange}
                    value={formData.emailAccounts === "true" ? "false" : "true"}
                    name="emailAccounts"
                    className="form-check-input"
                  />
                  {formData.emailAccounts === "true" ? (
                    <div className="m-3">
                      <label
                        htmlFor="amount"
                        className="form-label d-flex flex-column"
                      >
                        Roughly how many?
                        <input
                          value={formData.amount}
                          className="form-control"
                          name="amount"
                          onChange={handleChange}
                        />
                      </label>
                      <label
                        id="personOrDepartment"
                        htmlFor="personOrDepartment"
                        className="form-label"
                      >
                        <div className="form-check d-flex flex-column">
                          <label
                            id="personalizedEmails"
                            htmlFor="personalizedEmails"
                            className="form-check-label"
                          >
                            By Person
                            <input
                              type="radio"
                              value="By person"
                              name="personOrDepartment"
                              className="form-check-input"
                              onChange={handleChange}
                            />
                          </label>
                          <label id="department" htmlFor="department">
                            By Department
                            <input
                              type="radio"
                              value="By department"
                              name="personOrDepartment"
                              onChange={handleChange}
                              className="form-check-input"
                              id="department"
                            />
                          </label>
                        </div>
                      </label>
                    </div>
                  ) : null}
                </label>
                <label
                  id="socialMedias"
                  className="form-check-label"
                  htmlFor="socialMedias"
                >
                  Social media
                  <input
                    type="checkbox"
                    value={formData.socialMedias === "true" ? "false" : "true"}
                    name="socialMedias"
                    onChange={handleChange}
                    checked={formData.socialMedias === "true" ? true : false}
                    className="form-check-input"
                  />
                  {formData.socialMedias === "true" ? (
                    <div className="form-check d-flex flex-column">
                      <label
                        id="instagram"
                        htmlFor="instagram"
                        className="form-check-label"
                      >
                        Instagram
                        <input
                          className="form-check-input"
                          value={
                            formData.instagram === "true" ? "false" : "true"
                          }
                          checked={formData.instagram === "true" ? true : false}
                          name="instagram"
                          type="checkbox"
                          onChange={handleChange}
                        />
                      </label>
                      <label
                        id="facebook"
                        className="form-check-label"
                        htmlFor="facebook"
                      >
                        Facebook
                        <input
                          type="checkbox"
                          onChange={handleChange}
                          value={
                            formData.facebook === "true" ? "false" : "true"
                          }
                          checked={formData.facebook === "true" ? true : false}
                          name="facebook"
                          className="form-check-input"
                        />
                      </label>
                      <label
                        id="other"
                        htmlFor="other"
                        className="form-label d-flex flex-column"
                      >
                        Other
                        <input
                          onChange={handleChange}
                          value={formData.other}
                          className="form-control"
                          name="other"
                        />
                      </label>
                    </div>
                  ) : null}
                </label>
                <label
                  id="thirdParty"
                  htmlFor="thirdParty"
                  className="form-check-label"
                >
                  Third-party site manager
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value={formData.thirdParty === "true" ? "false" : "true"}
                    checked={formData.thirdParty === "true" ? true : false}
                    onChange={handleChange}
                    name="thirdParty"
                  />
                  {formData.thirdParty === "true" ? (
                    <label
                      htmlFor="thirdPartyURL"
                      className="form-label d-flex flex-column my-3"
                    >
                      Please provide the URL to the third-party managing site
                      <input
                        className="form-control"
                        value={formData.thirdPartyURL}
                        onChange={handleChange}
                        name="thirdPartyURL"
                      />
                    </label>
                  ) : null}
                </label>
                <label
                  id="interactive"
                  htmlFor="interactive"
                  className="form-check-label"
                >
                  Interactive screens with push/pull data
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value={formData.interactive === "true" ? "false" : "true"}
                    checked={formData.interactive === "true" ? true : false}
                    name="interactive"
                    onChange={handleChange}
                  />
                </label>
              </div>
              <label
                id="copyEditor"
                htmlFor="copyEditor"
                className="form-label"
              >
                Copy editor/manager in-house or use our services?
              </label>
              <input
                className="form-control"
                value={formData.copyEditor}
                onChange={handleChange}
                name="copyEditor"
              />
              <div className="form-check d-flex flex-column">
                <label
                  id="customDomain"
                  htmlFor="customDomain"
                  className="form-check-label"
                >
                  Do you have a domain registered?
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={handleChange}
                    value={formData.customDomain === "true" ? "false" : "true"}
                    checked={formData.customDomain === "true" ? true : false}
                    name="customDomain"
                  />
                  {formData.customDomain === "true" ? (
                    <div className="m-3">
                      <label
                        htmlFor="customDomainHostingSite"
                        className="form-label  d-flex flex-column"
                      >
                        What site are you using to host your custom domain?
                        <input
                          className="form-control"
                          value={formData.customDomainHostingSite}
                          name="customDomainHostingSite"
                          onChange={handleChange}
                        />
                      </label>
                      <label
                        id="customDomainURL"
                        htmlFor="customDomainURL"
                        className="form-label"
                      >
                        What's your custom domain URL?
                        <input
                          className="form-control"
                          value={formData.customDomainURL}
                          name="customDomainURL"
                          onChange={handleChange}
                        />
                      </label>
                    </div>
                  ) : null}
                </label>
              </div>
              <div className="d-flex flex-column">
                <label
                  id="userWebsiteIdeas"
                  className="form-label my-3"
                  htmlFor="userWebsiteIdeas"
                >
                  What ideas do you have currently? What websites are attractive
                  to you that could serve as a model?
                  <textarea
                    className="form-control"
                    value={formData.userWebsiteIdeas}
                    name="userWebsiteIdeas"
                    onChange={handleChange}
                  ></textarea>
                </label>
                <label
                  id="developerTips"
                  className="form-label"
                  htmlFor="developerTips"
                >
                  When working with parties like our company, what has worked
                  well in the past?
                  <textarea
                    className="form-control"
                    value={formData.developerTips}
                    name="developerTips"
                    onChange={handleChange}
                  ></textarea>
                </label>
                <label
                  id="developerWarnings"
                  className="form-label"
                  htmlFor="developerWarnings"
                >
                  When working with parties like our company, what has NOT
                  worked well in the past?
                  <textarea
                    className="form-control"
                    value={formData.developerWarnings}
                    name="developerWarnings"
                    onChange={handleChange}
                  ></textarea>
                </label>
                <label
                  id="userEngagement"
                  className="form-label"
                  htmlFor="userEngagement"
                >
                  When working with parties like our company, how engaged do you
                  want to be in the creative process?
                  <textarea
                    className="form-control"
                    value={formData.userEngagement}
                    name="userEngagement"
                    onChange={handleChange}
                  ></textarea>
                </label>
                <label id="timeline" className="form-label" htmlFor="timeline">
                  What is your timeline and what elements of the design process
                  are priority?
                  <textarea
                    className="form-control"
                    value={formData.timeline}
                    name="timeline"
                    onChange={handleChange}
                  ></textarea>
                </label>
              </div>
            </div>
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
