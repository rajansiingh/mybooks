**Chitragupt HLD / LLD**

**HLD**

![](chitragupt_hld.png)

**MyBooks:**  App where framework needs to be imported

**chitragupta.js** : JS framework to inject popup/interstitial/inline widgets on App

**Services :** API Layer where services for both framework & dashboard is written

**DataStore:** DB where data is getting persisted

**Chitragupt Dashboard Panel:** New App onboarding panel where widgets (popup/interstitial/inline) can be configured for different context in App


**LLD**

1) Modules
- contains widgets and their styling that will be injected in the app
1) Services
- all APIs that need to be called resides in this 
1) widgetrender
- A component deciding which widget to render 
1) Utils 
- helper functions 

![](folder_sturcture.png)

![](flow_diagram.png)

**Services** 

There can be multiple services for Chitragupt dashboard Panel:

1) onboardApp() -> will generate a API key which can be used to initiate chitragupt framework
1) configureContext(context, widgetConfigurations) -> will set widgetConfigurations such as widgetType, widgetData, frequency (how may times to show), timeLimit: (In what time interval)
1) deleteContext(context)  -> will delete the preconfigured widgetConfigurations for a context

and some more APIs

But our main focus will be API that is required to framework

1) **getWidgetForContext(context)**: It will be a GET call that will  return the wiget Configuration set for that context 

**    





**Sample Response :** 



`   `{

`   `"status": "success",

`   `"statusCode": "200",

`   `"data":[{

`       `"id": "200",

`       `"widgetType":"inline/popup/interstitial", // type of widget to be injected

`       `"widgetContent": {

`       `},

`       `“”

`       `"frequency": "2",

`       `"time": "24" // in interval of 24 hours widget will be shown as frequency is 2     

`      `}

`   `]

}



widgetContent may additionally contains components data to display

1) banner - a image URL of banner

{

`   `"type": "banner",

`   `"src": "image\_url",

`   `"alt": ""

}

1) html - entire html string

{

`   `"type": "html",

`   `"node": "<div>hello</di>"

}

1) form - 

{

`   `"form":{

`       `"fields":[

`       `{

`           `"type":"select",

`           `"options": ["Option A", "Option B", "OptionB"],

`           `"label": "Select from List"

`       `},

`       `{

`           `"type":"text",

`           `"value": "",

`           `"placeholder": "Enter your Name",

`           `"label": "Department"

`       `},

`       `{

`           `"type": "email",

`           `"value": "",

`           `"placeholder": "Enter your Email",

`           `"label": "Email"

`       `},

`       `{

`           `"type": "number",

`           `"value": "",

`           `"placeholder": "Enter a random number",

`           `"label": "Random Number"

`       `}

`   `],

`   `"submitUrl" : "API\_URL"

`   `}

}

1) text - text String 

{

`   `"type": "text",

`   `"string": "hello how are you?"

}


Similarly we can design more widget Content components that will give more choices to showcase.


**Performance of Framework:**

The performance of framework depends on :

1) Size of framework library : We can use minfying and compressing techniques to optimize using webpack / rollup
1) Calling Script behaviour in app - We can use defer OR async so that it doesnot block the rendering of the main app where it is being called.  
1) We are creating dynamic in-memory elements using document.createElement , rather than appending to real DOM multiple times  we  we will append it only when all the processing has been done saving all calculations. [layout, css]
1) We can use API Caching for getWidgetForContext(context) call for few hours.

**Variability for region, locale:**

We can use **navigator.language** to detect current locale of use and we can pass the same to our APIs & so basically APIs has to support different locales.

And suppose if some Constant framework related data is there, we can keep the language translations in form JSON and based on user locale we can pick it from there.

**n** avigator.languag


