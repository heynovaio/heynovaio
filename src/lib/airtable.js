import Airtable from "airtable"

const ACCESS_TOKEN = process.env.AIRTABLE_ACCESS_TOKEN
const BASE_ID = process.env.AIRTABLE_BASEID
// const ABOUT_ID = process.env.AIRTABLE_ABOUT_ID

export const PAGES = {
  about: "aboutPage",
}

export function table(tableName) {
  const base = new Airtable({
    apiKey: ACCESS_TOKEN,
  }).base(BASE_ID)

  return base(tableName)
}
