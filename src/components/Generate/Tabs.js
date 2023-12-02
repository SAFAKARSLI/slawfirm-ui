import { Nav, Stack } from "react-bootstrap"
import TabItem from "./TabItem"

export default function Tabs({active}) {

  const TABS = [
    {href: "../generate/retainer_agreement",
    title: "Retainer Agreement"},

    {href: "../generate/written_plea",
    title: "Written Plea"}
  ]

    return (
          <Nav variant="tabs">
            {TABS.map((e,i) => {
              return <TabItem href={e.href} title={e.title} active={active==i}/>
            })}
          </Nav>
    )
}