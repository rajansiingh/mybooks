//TODO : Implement generic form renderer here

// {
//     "form":{
//         "fields":[
//         {
//             "type":"select",
//             "options": ["Option A", "Option B", "OptionB"],
//             "label": "Select from List"
//         },
//         {
//             "type":"text",
//             "value": "",
//             "placeholder": "Enter your Name",
//             "label": "Department"
//         },
//         {
//             "type": "email",
//             "value": "",
//             "placeholder": "Enter your Email",
//             "label": "Email"
//         },
//         {
//             "type": "number",
//             "value": "",
//             "placeholder": "Enter a random number",
//             "label": "Random Number"
//         }
//     ],
//     "submitUrl" : "API_URL"
//     }
//  }
export default function Form(data){
    const {form: fields , submitUrl} = data;
    return '<span>I am Form Data</span>';
}