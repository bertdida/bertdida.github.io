import React, { lazy } from "react";
import { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import { Loader } from "components/Loader";
import { NotFound } from "pages/errors";

const About = lazy(() => import("pages/about"));
const Projects = lazy(() => import("pages/projects"));
const Contact = lazy(() => import("pages/contact"));

export function Routes() {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}
