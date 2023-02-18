export default function Node(data){
    const {html} = data;
    const newDiv = document.createElement("div");
    // sanitize HTML here 
    newDiv.innerHTML = html;
    return newDiv;
}