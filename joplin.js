import fetch from 'node-fetch'
import 'dotenv/config'


class Joplin {
    constructor(joplinToken, joplinPort) {
        this.token = joplinToken
        this.port = joplinPort

        this.getNotesFromNotebook.bind(this)
    }


    //This function gets notes from a specified notebook, using the notebook's ID. The fields parameter specifies which fields to include in the response.
    // @param {string=} notebookID - The id of the notebook you want to get notes from, as extracted from the notebook's external link
    // @param {Array[string]=} fields - The specific fields wanted in the returned response. Valid fields can be found in this table: https://joplinapp.org/api/references/rest_api/#properties
    async getNotesFromNotebook(notebookID, fields) {
        const fieldsString = fields.join()

        let items = []
        let pageNum = 1 
        let data = null

        do {
            let tempURL = "http://localhost:" + this.port + "/folders/" + notebookID + "/notes"
            let foldersURL = new URL(tempURL)
            foldersURL.searchParams.append("token", this.token)
            foldersURL.searchParams.append("fields", fieldsString)
            foldersURL.searchParams.append("page", pageNum)
        
            const res = await fetch(foldersURL.href)
            data = await res.json()
            items = items.concat(data.items)

            pageNum++
        }
        while (data.has_more)
        
        return items
    }
}


let joplin = new Joplin(process.env.JOPLIN_TOKEN, process.env.JOPLIN_CLIPPER_PORT)
joplin.getNotesFromNotebook(process.env.JOPLIN_NOTEBOOK_ID, ["id", "title", "body", "created_time", "latitude", "longitude", "altitude", "is_todo", "todo_due", "todo_completed"])
    .then(res => console.log(res))