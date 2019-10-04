import React from "react"
import Loadable from "@loadable/component"


const ClientSideRenderedHomepage = Loadable(() => import('./../components/Homepage'))

export default function Index () {
    return (
      <ClientSideRenderedHomepage />
    )
}
