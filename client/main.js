
// VOLUNTEER JS///////////////////////////////////////////////////////

const userForm = document.getElementById('userFormBox')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const phone = document.getElementById('phone')
const email = document.getElementById('email')
const city = document.getElementById('city')
const state = document.getElementById('state')
const zipcode = document.getElementById('zipcode')
const saveBtn = document.getElementById('save')


const createUserInfo = (evt) => {
    evt.preventDefault()
    // console.log('hello')
    
    let bodyObj = {
        fname: firstName.value,
        lname: lastName.value,
        phone: phone.value,
        email: phone.value,
        city: city.value,
        state: state.value,
        zipcode: zipcode.value
    }
    // console.log(bodyObj)

    axios.post("http://localhost:5500/signup", bodyObj)
    .then(res => {
        console.log(res.data)
        alert(res.data)
    }).catch((err) => {
        console.log(err)
    })
}

if (userForm) userForm.addEventListener('submit', createUserInfo)


// BUNNIES////////////////////
const randomBun = document.getElementById('randomBunBtn')

const getBunny = () => {
    // console.log('hit getbunny')
    axios.get("http://localhost:5500/adoptions")
    .then(res => {
        const data = res.data;
        alert(data);
    }).catch(error => {
        console.log(error)
    })
};

if (randomBun) randomBun.addEventListener('click', getBunny)


// ITEMS ////////////////////////////
const itemsContainer = document.getElementById('items-container')
// const itemsCard = document.createElement('div')

const getItems = () => {
    console.log('hit getItems')
    axios.get("http://localhost:5500/shop")
    .then(res => {
        console.log(res.data)
    }).catch(error => {
        console.log(error)
    })
    
}
// itemsCard.innerHTML = `
// <div class="itemscard">
// <div>
//     <img src="${items.image}">
//     <h2 class="title">${items.title}</h2>
//     <h3>${items.price}</h3>
// </div>
// </div>
// `

// itemsContainer.appendChild(itemsCard)

getItems()
