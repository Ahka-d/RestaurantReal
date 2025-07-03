
const htmlabout= ()=>{
    const content = document.getElementById('content')
    const contacts = document.createElement('section')
    contacts.setAttribute('class','about')
    contacts.innerHTML = `

    <span> Links:
    <p><a href="">Facebook</a></p>
    <p><a href="">Instagram</a></p>
    <p><a href="">Twitter</a></p>
    </span>
    `
    content.appendChild(contacts)
}

export default htmlabout