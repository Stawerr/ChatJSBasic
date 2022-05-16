//Create elements DOM
const container=document.createElement('div')
container.id='main-container'
container.class=''
document.querySelector('body').appendChild(container)

const form=document.createElement('form')
form.method='post'
form.id='form'
document.querySelector('#main-container').appendChild(form)

const inputName=document.createElement('input')
inputName.type="text"
inputName.id="name"
inputName.name="name"
inputName.placeholder="Please insert your name"
document.querySelector('#form').appendChild(inputName)

const inputMessage=document.createElement('input')
inputMessage.type="text"
inputMessage.id="message"
inputMessage.name="message"
inputMessage.placeholder="Please inser your message"
document.querySelector('#form').appendChild(inputMessage)

const buttonSubmit=document.createElement('button')
buttonSubmit.type='submit'
buttonSubmit.id="add"
buttonSubmit.textContent='Send message'
document.querySelector('#form').appendChild(buttonSubmit)

const ul=document.createElement('ul')
document.querySelector('body').appendChild(ul)

class Message{
    name
    message
    constructor(obj){
        this.name=obj.name
        this.message=obj.message
    }
    getName(){
        return this.name
    }
    setName(value){
        this.name=value
    }
    getMessage(){
        return this.message
    }
    setMessage(value){
        this.message=value
    }
}

const messageStore = []

function createMessage(name,message){
    clear()

    const m = new Message({name:name,message:message})
    messageStore.push(m)

    print()
}

function clear(){
    messageStore.forEach((m,index)=> {
        document.getElementById("li_" + index).remove()
        document.getElementById("but_" + index).remove()
    })
}

function print(){
    messageStore.forEach((m,index)=>{
        const liEl = document.createElement('li')
        liEl.className="container"
        const but = document.createElement("button")
        
        liEl.textContent=`${m.getName()} ${m.getMessage()}`
        liEl.id = "li_" + index
        but.id = "but_" + index
        but.textContent= "Delete Message"
        document.querySelector('ul').append(liEl,but)
        
        const elem = document.getElementById(but.id)

        elem.onclick = function() {
            clear()
            messageStore.splice(index, 1)
            print()
        }
    })
}
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        if(e.target.name.value!=='' && e.target.message!==''){
            createMessage(e.target.name.value,e.target.message.value)
        }
        else{
            alert ("Invalid input")
        }
    })