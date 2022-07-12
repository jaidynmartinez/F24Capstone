
// VOLUNTEER JS///////////////////////////////////////////////////////

const userForm = document.getElementById('user-form')
const firstNameInput = document.getElementById('first-name')
const lastNameInput = document.getElementById('last-name')
const phoneInput = document.getElementById('phone-number')
const emailInput = document.getElementById('email')
const addressInput = document.getElementById('address')
const cityInput = document.getElementById('city')
const stateInput = document.getElementById('state')
const zipCodeInput = document.getElementById('zip-code')
const saveBtn = document.getElementById('save')


const getUserInfo = () => {
    axios.get('http://localhost:5500/user') 
    .then(res => {
        const user = res.data[0]
        
        const {
            first_name: firstName, 
            last_name: lastName, 
            phone: phone, 
            email,
            city, 
            state, 
            zipcode: zipCode
        } = user
        
        firstNameInput.value = firstName
        lastNameInput.value = lastName
        phoneInput.value = phone
        emailInput.value = email
        cityInput.value = city
        stateInput.value = state
        zipCodeInput.value = zipCode
    })
}

const updateInfo = () => {
    let body = {
        firstName: firstNameInput.value, 
        lastName: lastNameInput.value, 
        phone: phoneInput.value, 
        email: emailInput.value,
        city: cityInput.value, 
        state: stateInput.value, 
        zipCode: zipCodeInput.value
    }
    
    axios.put('http://localhost:5500/user', body)
    .then(res => console.log(1, res))
    .catch(err => console.log(err))
}

userForm.addEventListener('submit', (e) => {
    e.preventDefault()
    updateInfo()
})

const submitHandler = (evt) => {
    evt.preventDefault()
    console.log('hello')
    
    let bodyObj = {
        fname: fname.value,
        lname: lname.value
    }
    
    axios.post("http://localhost:5500/signup", bodyObj)
    .then(res => {
        alert('hobby added')
    })
    fname.value = ''
    lname.value = ''
}
saveBtn.addEventListener('click', submitHandler)

// BUNNIES////////////////////
const randomBun = document.getElementById('randomBun')

const getBunny = () => {
    axios.get("http://localhost:5500/adoptions")
    .then(res => {
        const data = res.data;
        alert(data);
    }).catch(error)
};

randomBun.addEventListener('click', getBunny)


// ////////////////////////////
getUserInfo()
