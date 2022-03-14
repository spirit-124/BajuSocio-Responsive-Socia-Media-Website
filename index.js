//SIDEBAR

const menuItem = document.querySelectorAll(".menu-item");

//MESSAGES
const messageNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// THEME 
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const coloPalette = document.querySelector('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

// Remove active class from all the menu Items 
// ==============================SIDEBAR========================

const changeActiveItem = () =>{
    menuItem.forEach(item =>{
        item.classList.remove('active');
    })
}
menuItem.forEach(item =>{
    item.addEventListener('click',() =>{
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'Notification'){
            document.querySelector('.notification-popup').
            style.display = 'none';
        }
        else{
            document.querySelector('.notification-popup').
            style.display = 'block';
            document.querySelector('#Notifications .notification-count').style.display = 'none';
        }
    })
})

// ==============================MESSAGES=========================

// Search Chats 
messageSearch.addEventListener('keyup',searchMessage);

const searchMessage =() =>{
    const val = messageSearch.value.toLowerCase();
    // console.log(val);
    message.forEach(chat =>{
        let name = chat.querySelectorAll('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1 ){
            chat.style.display = 'flex';
        }
        else{
            chat.style.display = 'none'; 
        }
    })
}



// Highlights the messages box on clicking to message icon 
messageNotification.addEventListener('click',() =>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNotification.querySelector('.notification-count').style.display ='none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    },2000);
})

// THEME/DISPLAY CUSTOMIZATION 


const openThemeModal = () =>{
    themeModal.style.display = 'grid';
}

// close Modal 

const closeThemeModa = (e) =>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

themeModal.addEventListener('click',closeThemeModa);

theme.addEventListener('click', openThemeModal);




// ==========================FONTS============== 
// Remove active class from the span or font Size Selectors

const removeSizeSelector = () =>{
    fontSizes.forEach(size => {
        size.classList.remove('active')
    })
}


fontSizes.forEach(size =>{
    let fontSize;

    size.classList.toggle('active');

    size.addEventListener('click',() =>{
        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left' , '5.4rem');
            root.style.setProperty('--sticky-top-right' , '5.4rem');
        }
        else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left' , '5.4rem');
            root.style.setProperty('--sticky-top-right' , '-7rem');
        }
        else if(size.classList.contains('font-size-3')){
            fontSize = '15px';
            root.style.setProperty('--sticky-top-left' , '-2rem');
            root.style.setProperty('--sticky-top-right' , '-17rem');
        }
        else if(size.classList.contains('font-size-4')){
            fontSize = '18px';
            root.style.setProperty('--sticky-top-left' , '-5rem');
            root.style.setProperty('--sticky-top-right' , '-25rem');
        }
        else if(size.classList.contains('font-size-5')){
            fontSize = '22psx';
            root.style.setProperty('--sticky-top-left' , '-12rem');
            root.style.setProperty('--sticky-top-right' , '-35rem');
        }
        // Change font size of the root element.
        document.querySelector('html').style.fontSize = fontSize;
    })

    
    
})

// Remove active class from the coloPalette. 

const changeActiveColorClass = () =>{
    coloPalette.forEach(colorPicker =>{
        colorPicker.classList.remove('.active');
    })
}

// Change Primary Colors 

coloPalette.forEach(color =>{
    color.addEventListener('click' , () =>{
        let primary;
        changeActiveColorClass();

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }
        else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }
        if(color.classList.contains('color-3')){
            primaryHue = 352;
        }
        if(color.classList.contains('color-4')){
            primaryHue = 152;
        }
        if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('.active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})


// theme Background values 
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// Changes Background color 
const changeBG = () =>{
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
}

Bg2.addEventListener('click', () =>{
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    // add active class 
    Bg2.classList.add('active');
    // remove active class from the others . 
    Bg3.classList.remove('active');
    Bg1.classList.remove('active');
    changeBG();
})


// ========================= END ================ 