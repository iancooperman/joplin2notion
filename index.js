// import variables from `.env`
import 'dotenv/config'
import { Client } from '@notionhq/client'
import Joplin from './joplin.js'
import render from './joplinToNotionFormatting.js'

const joplin = new Joplin(process.env.JOPLIN_TOKEN, process.env.JOPLIN_CLIPPER_PORT)
const notion = new Client({auth: process.env.NOTION_TOKEN});
const joplinNotebookID = process.env.JOPLIN_NOTEBOOK_ID;
const notionDatabaseID = process.env.NOTION_DATABASE_ID;


// essentially a main function
async function processNotes() {
    const data = await joplin.getNotesFromNotebook(joplinNotebookID, ["title", "body", "created_time", "updated_time"])
    for (let note of data) {
        render(note.body)
        // addPageToNotionDatabase(notionDatabaseID, note.title, note.body)
    }
}

processNotes()


async function addPageToNotionDatabase(databaseID, title, body) {
    try  {
        const response = await notion.pages.create({
            parent: {database_id: databaseID},
            properties: {
                title: {
                    title: [
                        {
                            "type": "text",
                            "text": {
                              "content": title,
                              "link": null
                            },
                            "annotations": {
                              "bold": false,
                              "italic": false,
                              "strikethrough": false,
                              "underline": false,
                              "code": false,
                              "color": "default"
                            },
                            "plain_text": "Grocery List",
                            "href": null
                          }
                    ]
                }
            },
            children: [
                {
                    object: "block",
                    type: "paragraph",
                    paragraph: {
                        "rich_text": [
                            {
                                "text": {
                                    "content": body
                                }
                            }
                        ]
                    }
                }
            ]
        })
        console.log(response);
        console.log("Success! Entry added.");
    } catch (error) {
        console.error(error.body);
    }
}

// addItem("Yurts in Big Sur, California");