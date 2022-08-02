import fetch from 'node-fetch'
import 'dotenv/config'

let url = new URL("http://localhost:" + process.env.JOPLIN_CLIPPER_PORT + "/notes")
url.searchParams.append("token", process.env.JOPLIN_TOKEN)


async function getNoteMetadataFromNotebook(notebookID) {
    let foldersURL = new URL("http://localhost:" + process.env.JOPLIN_CLIPPER_PORT + "/folders/" + process.env.JOPLIN_NOTEBOOK_ID + "/notes")
    foldersURL.searchParams.append("token", process.env.JOPLIN_TOKEN)

    const res = await fetch(foldersURL.href)
    const data = await res.json()
    
    return data
}

async function getNote(noteID) {
    let noteURL = new URL("http://localhost:" + process.env.JOPLIN_CLIPPER_PORT + "/notes/" + noteID)
    noteURL.searchParams.append("token", process.env.JOPLIN_TOKEN)
    noteURL.searchParams.append("fields", "id,title,body")
    console.log(noteURL.href)

    const res = await fetch(noteURL.href)
    const note = await res.json()

    return note
}

getNoteMetadataFromNotebook()
    .then(res => {
        let noteIDs = []
        res.items.forEach(note => {
            noteIDs.push(note.id)
        });
        return noteIDs
    })
    .then(async noteIDs => {
        let notes = []
        for (let i = 0; i < noteIDs.length; i++) {
            const note = await getNote(noteIDs[i])
            notes.push(note)
        }

        return notes
    })
    .then(notes => {
        notes.forEach(note => console.log(note.body))
    })