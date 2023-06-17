import Airtable from "airtable"

const ACCESS_TOKEN = process.env.GATSBY_AIRTABLE_ACCESS_TOKEN
const BASE_ID = process.env.GATSBY_AIRTABLE_BASEID

export const PAGES = {
  about: "aboutPage",
}

export function table(tableName) {
  const base = new Airtable({
    apiKey: ACCESS_TOKEN,
  }).base(BASE_ID)

  return base(tableName)
}
