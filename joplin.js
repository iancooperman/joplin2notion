import fetch from 'node-fetch'
import 'dotenv/config'

let url = new URL("http://localhost:" + process.env.JOPLIN_CLIPPER_PORT + "/notes")
url.searchParams.append("token", process.env.JOPLIN_TOKEN)


async function getNotes(notebookID) {
    let foldersURL = new URL("http://localhost:" + process.env.JOPLIN_CLIPPER_PORT + "/folders/" + process.env.JOPLIN_NOTEBOOK_ID + "/notes")

    foldersURL.searchParams.append("token", process.env.JOPLIN_TOKEN)

    const res = await fetch(foldersURL.href)
    const data = await res.json()
    
    return data
}

async function getNoteData(noteID) {
    let noteURL = new URL("http://localhost:" + process.env.JOPLIN_CLIPPER_PORT + "/notes/" + noteID)

    const res = await fetch(noteURL.href)
    const data = await res.json()

    return data
}

getNotes()
    .then(res => {
        res.items.forEach(element => {
            console.log(element.id)
        });
    })