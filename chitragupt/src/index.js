import getModuleForContext from './core/http/apis/getModuleForContext';
import renderModules from './core/renderer/widgetRender';

class Chitragupt {
    constructor({appName, cb = ()=>{} }) {
        this.appName = appName;
        this.cb = cb;
    }

    updateContext = ({ context, $el} = {}) => {
        // context is getting the widgetConfig calling API
        // $el is referernce to element where you want append the widgets if undefined it will inject in body
        this.render({ context, $el });
        
    };

    async render({context, $el }){
        const widgetData = await getModuleForContext({context});
        if(widgetData.status === 'success'){
            renderModules(widgetData.data, $el, this.cb);
        }
    }
}

export default Chitragupt;