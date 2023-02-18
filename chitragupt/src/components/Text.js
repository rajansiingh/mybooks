export default function Text(data){
    const {text} = data;
    return document.createTextNode(text);
}