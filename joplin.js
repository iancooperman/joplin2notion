import fetch from 'node-fetch'
import 'dotenv/config'


//This function gets notes from a specified notebook, using the notebook's ID. The fields parameter specifies which fields to include in the response.
// @param {string=} notebookID - The id of the notebook you want to get notes from, as extracted from the notebook's external link
// @param {Array[string]=} fields - The specific fields wanted in the returned response. Valid fields can be found in this table: https://joplinapp.org/api/references/rest_api/#properties
async function getNotesFromNotebook(notebookID, fields) {
    const fieldsString = fields.join()

    let foldersURL = new URL("http://localhost:" + process.env.JOPLIN_CLIPPER_PORT + "/folders/" + notebookID + "/notes")
    foldersURL.searchParams.append("token", process.env.JOPLIN_TOKEN)
    foldersURL.searchParams.append("fields", fieldsString)

    const res = await fetch(foldersURL.href)
    const data = await res.json()
    
    return data
}

getNotesFromNotebook(process.env.JOPLIN_NOTEBOOK_ID, ["id", "title", "body", "created_time", "latitude", "longitude", "altitude", "is_todo", "todo_due", "todo_completed"])
    .then(res => console.log(res))