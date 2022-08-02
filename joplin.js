import fetch from 'node-fetch'
import 'dotenv/config'

let url = new URL("http://localhost:" + process.env.JOPLIN_CLIPPER_PORT + "/notes")
url.searchParams.append("token", process.env.JOPLIN_TOKEN)


async function getNotesFromNotebook(notebookID) {
    let foldersURL = new URL("http://localhost:" + process.env.JOPLIN_CLIPPER_PORT + "/folders/" + process.env.JOPLIN_NOTEBOOK_ID + "/notes")
    foldersURL.searchParams.append("token", process.env.JOPLIN_TOKEN)
    foldersURL.searchParams.append("fields", "id,title,body")

    const res = await fetch(foldersURL.href)
    const data = await res.json()
    
    return data
}

getNotesFromNotebook()
    .then(res => console.log(res))