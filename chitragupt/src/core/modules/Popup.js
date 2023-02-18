export default class Popup {
    constructor($html) {
        this.$html = $html;
        this.initialise();
    }
    
    initialise() {
        const mainContainer = document.createElement('div');
        mainContainer.id = 'jsModal';
        mainContainer.setAttribute("class",'modal open')

        const overlay = document.createElement('div');
        overlay.setAttribute("class", "modal__overlay jsOverlay");
        mainContainer.append(overlay);

        overlay.onclick = function(){
            mainContainer.remove();
        }
   
        const modelContainer = document.createElement('div');
        modelContainer.setAttribute("class",'modal__container');

        const button = document.createElement('button');
        button.setAttribute("class",'modal__close jsModalClose')
        button.innerHTML = '&#10005' ;
        modelContainer.append(this.$html);
        modelContainer.append(button);

        button.onclick = function(){
            mainContainer.remove();
            
        }

        mainContainer.append(modelContainer);

        mainContainer.append(this.createStyles());
        document.body.append(mainContainer);
    }

    createStyles() {
        const styleTag = document.createElement('style');
        styleTag.innerHTML = `
        .modal{
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 20;
            padding: 30px;
            width:  100%;
            height: 100%;
            margin: 0;
            padding: 0;
            display: none;
        }

            
        .modal.open{
              display: block;
        }
            
        .modal__overlay{
              position: fixed;
              top: 0;
              left: 0;
              bottom: 0;
              right: 0;
              z-index: 21;
              background-color: rgba(0,0,0,0.7);
        }
            
        .modal__close{
              position: absolute;
              top: 10px;
              right: 10px;
              border: none;
              outline: none;
              background: none;
              font-size: 24px;
              color: #747474;
              font-weight: bold;
            }

        .modal__close:hover{
                color: #000;
              }
            
        .modal__container{
              position: relative;
              z-index: 22;
              width: 400px;
              height: 200px;
              top: 50%;
              transform: translateY(-50%);
              box-shadow:  0 0 10px #fff;
              margin: 0 auto;
              padding: 30px;
              background-color: #fff;
              text-align: center;
            }
        `.replace(/^\s+|\n/gm, '');

        return styleTag;
    }
}