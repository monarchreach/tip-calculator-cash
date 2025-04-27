import { Fragment } from "react"

interface SchemaOrgProps {
  schema: Record<string, any>
}

export function SchemaOrg({ schema }: SchemaOrgProps) {
  return (
    <Fragment>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </Fragment>
  )
}
