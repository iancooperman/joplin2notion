import { marked } from 'marked'

function render (md) {
    const result = marked.parse(md)
    console.log(result)
}

function renderParagraph(pTag) {
    
}







export default render