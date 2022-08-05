// import variables from `.env`
import 'dotenv/config'
import { Client } from '@notionhq/client'
import Joplin from './joplin.js'

const joplin = new Joplin(process.env.JOPLIN_TOKEN, process.env.JOPLIN_CLIPPER_PORT)
const notion = new Client({auth: process.env.NOTION_TOKEN});
const joplinNotebookID = process.env.JOPLIN_NOTEBOOK_ID;
const notionDatabaseID = process.env.NOTION_DATABASE_ID;

// async function addItem(text) {
//     try  {
//         const response = await notion.pages.create({
//             parent: {database_id: databaseID},
//             properties: {
//                 title: {
//                     title: [
//                         {
//                             "text": {
//                                 "content": text
//                             }
//                         }
//                     ]
//                 }
//             },
//         })
//         console.log(response);
//         console.log("Success! Entry added.");
//     } catch (error) {
//         console.error(error.body);
//     }
// }

// addItem("Yurts in Big Sur, California");