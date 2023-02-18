export default function Image(data){
    const {src, alt, title, height, width} = data;
    const vImg = document.createElement('img');
    vImg.src = src;
    if ( alt != null ) vImg.alt = alt;
    if ( title != null ) vImg.title = title;
    if(width) vImg.setAttribute('width', width);
    if(height) vImg.setAttribute('width', height);
    return vImg;
}