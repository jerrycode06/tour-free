import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Image LightBox
import SimpleReactLightbox from "simple-react-lightbox";

//Layout default import from components.
import defaultLayout from "./components/layouts/main";
import secondLayout from "./components/layouts/main-two";

//Import wrapping layout
import Layout from "./components/app";

//Import all page from components
import aboutUs from "./components/pages/about-us/AboutUs";
import destinations from "./components/pages/dubai/Destinations";
import international from "./components/pages/international/International";
import bothDestinations from "./components/pages/both-destination/BothDestination";
import tnc from "./components/pages/tnc/TermsAndConditions";
import packages from "./components/pages/package/Packages";
import contact from "./components/pages/contact/Contact";
import faq from "./components/pages/faq/Faq";
import error from "./components/pages/404/404";
import guide from "./components/pages/guide/GuideComponent";
import gallary from "./components/pages/gallary/GalleryComponent";
import packageSidebar from "./components/pages/package/PackageSidebar";
import packageStandard from "./components/pages/package/PackageStanderd";
import packageDetails from "./components/pages/package/PackageDetails";
import blog from "./components/pages/blog/BlogComponent";
import blogSidebar from "./components/pages/blog/BlogSidebar";
import blogStandard from "./components/pages/blog/BlogStandard";
import blogDetails from "./components/pages/blog/BlogDetails";
import FloatingButtons from "./components/common/floating-buttons"

//Initializations All Css
import "./index.css";
import "./index.scss";
import TermsAndConditions from "./components/pages/tnc/TermsAndConditions";
import TermsAndConditionsMain from "./components/pages/tnc-main/TermsAndConditionsMain";
import PrivacyPolicy from "./components/pages/privacy-policy/PrivacyPolicy";
import Activities from "./components/pages/dubai-activities/Activities";
import ActivityDetails from "./components/pages/dubai-activities/ActivityDetails";
import HotelsDubai from "./components/pages/dubai-hotels/HotelsDubai";
import Error from "./components/pages/404/404";

//Default Warniing Error Hide
console.log = console.warn = console.error = () => { };

/*
 * Version : 0.1
 * Event : Rendering all content to web.
 * Actions: Define all routes and page.
 * @return html
 * */

class Root extends React.Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <Switch>
          <Route exact path="/" component={defaultLayout} />
          <Route
            path={`${process.env.PUBLIC_URL}/home-page-2`}
            component={secondLayout}
          />
          <Layout>
            <Route
              path={`${process.env.PUBLIC_URL}/about-us`}
              component={aboutUs}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/dubai/destination`}
              component={destinations}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/dubai/activities`}
              component={Activities}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/dubai/activity-details/:name`}
              component={ActivityDetails}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/dubai/hotels`}
              component={HotelsDubai}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/international/destination`}
              component={international}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/holidays`}
              component={bothDestinations}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/tnc`}
              component={TermsAndConditions}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/termsAndConditions`}
              component={TermsAndConditionsMain}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/privacy-policy-overview`}
              component={PrivacyPolicy}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/package`}
              component={packages}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/package-sidebar`}
              component={packageSidebar}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/package-standard`}
              component={packageStandard}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/package-details/:name`}
              component={packageDetails}
            />
            <Route path={`${process.env.PUBLIC_URL}/faq`} component={faq} />
            <Route path={`${process.env.PUBLIC_URL}/404`} component={error} />
            <Route path={`${process.env.PUBLIC_URL}/guide`} component={guide} />
            <Route
              path={`${process.env.PUBLIC_URL}/gallary`}
              component={gallary}
            />
            <Route path={`${process.env.PUBLIC_URL}/blog`} component={blog} />
            <Route
              path={`${process.env.PUBLIC_URL}/blog-sidebar`}
              component={blogSidebar}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/blog-standard`}
              component={blogStandard}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/blog-details/:id`}
              component={blogDetails}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/contact`}
              component={contact}
            />
            <Route path="/404" element={<Error />} />
            <Route path="*" element={<Error />} /> {/* Catch-all route */}

          </Layout>
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <Root />
    </SimpleReactLightbox>
    <FloatingButtons />
  </React.StrictMode>,
  document.getElementById("root")
);
