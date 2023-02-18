import fetch from '../http';

export default async function getModuleForContext({ context }){
    // TODO : Call Actual API here
    const data = [{
        status: "success",
        statusCode: "200",
        data:[{
            id: "jsnjxYVGH",
            widgetType:"popup", // type of widget to be injected
            widgetContent: [{
                type:'banner',
                src: 'https://www.intuit.com/oidam/intuit/ic/en_us/images/01-g/building20-hero5-icom-all-1920x1080.jpg',
                width: 300,
                height: 300
            },{
                type:'rfrf',
                text: 'Hello',
            }],
            frequency: "2",
            time: "24" // in interval of 24 hours widget will be shown as frequency is 2     
           }
        ]
     },{
        status: "success",
        statusCode: "200",
        data:[{
            id: "jshxUYhjb",
            widgetType:"inline", // type of widget to be injected
            widgetContent: [],
            frequency: "2",
            time: "24" // in interval of 24 hours widget will be shown as frequency is 2     
           }
        ]
     }]
    const min = 0;
    const max = 1;
    const randomIndex = Math.floor(Math.random() * (max - min + 1) + min)
     
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(data[randomIndex])
        }, 2000)
    })
}