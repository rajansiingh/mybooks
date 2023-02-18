import checkIfRender from "../../utils/checkIfRender";
import Form from "../../components/Form";
import Text from "../../components/Text";
import Image from "../../components/Image";
import Node from "../../components/Node";
import InlineWidget  from "../modules/InlineWidget";
import Popup from "../modules/Popup";


const renderWidgets = (widgetItems) =>{
    const $html = document.createElement('div');
    $html.style.display = 'flex';
    $html.style.alignItems = 'center';
    $html.style.justifyContent = 'center';
    widgetItems.forEach(item => {
        const {type} = item
           switch(type){
            case 'form':
                $html.append(Form(item));
                break;
            case 'text':
                $html.append(Text(item));
                break;
            case 'banner':
                $html.append(Image(item));
                break;
            case 'html':
                $html.append(Node(item));
                break;
            default:
                console.log('Nothing to render');
                break;
           }
    });
    return $html;
}

export default function renderModules(widgetData, $el){
    widgetData.forEach(item => {
        const {time, frequency, widgetContent, widgetType, id} = item
        if(checkIfRender(id,frequency,time)){
            const widgetHtml = renderWidgets(widgetContent);
           switch(widgetType){
            case 'popup':
                new Popup(widgetHtml);
                break;
            case 'inline':
                new InlineWidget();
                break;
            case 'interstitial':
                // TODO : call Interstitial Widget when implemented
                break;
            default:
                console.log('Nothing to render')
                break;
           }
        }
    });
 
}