let contacts = []

const save = ()  => {
    console.log('save contact')

    let name = document.querySelector('#name').value
    let surname = document.querySelector('#surname').value
    let phone = document.querySelector('#phone').value
    let address = document.querySelector('#address').value

    let contact = {
        name:name,
        surname:surname,
        phone:phone,
        address:address,
        data: name+':'+surname+':'+phone+':'+address
    }

    console.log(contact)
    console.log(name,surname,phone,address)


    let contactList = document.querySelector("#contact-list")

    let element_Li = document.createElement('LI')
    element_Li.className  ="contact-list-item searchable"

    var div = `
    <div id='' class='contact-list-item-left'>
        <label class='contact-list-item-left-name'>${name}</label>
        <label class='contact-list-item-left-surname'>${surname}</label>
        <label class='contact-list-item-left-phone'>${phone}</label>
        <label class='contact-list-item-left-address'>${address}</label>
    </div>
    <div class='contact-list-item-right'>
        <i class='far fa-trash-alt alt'  onclick='remove(event)'></i>
    </div>`  

    element_Li.innerHTML = div

    document.querySelector("#contact-list").appendChild(element_Li)
    
    document.querySelector('#name').value = ''
    document.querySelector('#surname').value = ''
    document.querySelector('#phone').value = ''
    document.querySelector('#address').value = ''


    contacts.push(contact)
    console.log('contactList=',contacts)
    console.log(div)

}

const remove = e => {
    console.log('remove contact')
    console.log(e)
    let target = e.target
    
    let parentLI = target.parentElement.parentElement
    let parentLU = parentLI.parentElement

    if(parentLU)
        parentLU.removeChild(parentLI)

}

const search = event => {
    console.log('Seach Contact')
    if(event.code!= 'Enter')
        return
    let searchValue = event.target.value
    console.log('search=', searchValue.toLowerCase())
    let contactList = document.getElementsByClassName("searchable")

    // let list = contactList.getElementsByClassName('contact-list-item')

    //console.log(contactList)
    
    for (let i = 0; i < contactList.length; i++) {
        let listLabel = contactList[i].getElementsByTagName("label")
        console.log('listLabel=', listLabel)
        
        let hasFound = false
        for (let j = 0; j < listLabel.length; j++) {
            console.log('**listLabel[j]=',listLabel[j].innerHTML)
            let labelValue=listLabel[j].innerHTML
            let result = labelValue.toLowerCase().search(searchValue.toLowerCase())
            console.log('result=',result)
            
            console.log('contactList[i]=', contactList[i])
            if(result >=0) {
                hasFound = true
                break
            }
        }
        console.log('hasFound=', hasFound)
        if (hasFound || !searchValue)
            contactList[i].className  ="contact-list-item searchable"
        else
            contactList[i].className  ="contact-list-item-hidden searchable"

        console.log('contactList[i]=', contactList[i])
    }

    console.log(event.target.value)
}