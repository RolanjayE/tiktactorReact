const ACCESS_KEY = 'Kh5fsFNIaoqMKHEUckJTkRtXZApy0PfZDLVMnrwaTQU'

/**
 * Set all the important dom ELEMENT
 * 
 * main element is a container of our boxes
    * next is a button
    * pre is a button
    * page is our counter
 * 
 */

const main = document.getElementById('main')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
let page = 1;

/**
 * Get a photo in unflash API
 * 
 * 
 */
const getPhoto = async () => {

    /**
     * fetch a data and convert as json
     */

    const responce = await fetch(`https://api.unsplash.com/photos/?page=${page}&client_id=${ACCESS_KEY}`)
    const data = await responce.json();

    /**
     * loop the responce data because its array that have 10 length
     *  then create a elemnt for boxes and append it to the main
     */

    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        const imageCon = document.createElement('div')
        imageCon.className = "image-con"
        imageCon.innerHTML = `<div class="image"><img src="${element.urls.small}"></div>`
        main.append(imageCon)
        console.log(element.urls.small)
    }
}

/**
 * call the function getPhoto()
 */

getPhoto();

/**
 * check a if next button is click
 * set the main as empty string
 * increament a page
 * then call a getPhoto function for new responce
 * 
 */

next.addEventListener('click', ()=> {
    page++
    main.innerHTML = "";
    getPhoto();
    console.log(page)
})

/**
 * check a if prev button is click
 * check if page is greater then 0
 * set decrement
 * set the main as empty sting
 * call the getPhoto
 * 
 */ 

prev.addEventListener('click', ()=> {
    if(page >= 0) {
        page--
        main.innerHTML = "";
        getPhoto();
    }
})
