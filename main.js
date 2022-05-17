const bodybox=document.createElement('div')
bodybox.id='bodybox'
document.querySelector('body').appendChild(bodybox)

const chatborder=document.createElement('div')
chatborder.id='chatborder'
document.querySelector('#bodybox').appendChild(chatborder)

const formular=document.createElement('form')
formular.method='post'
formular.id='form'
document.querySelector('#bodybox').appendChild(formular)

const chat=document.createElement('input')
chat.type="text"
chat.name="message"
chat.id='message'
chat.placeholder="Hi there! Type here to talk to me."
document.querySelector('#form').appendChild(chat)

const sendButton=document.createElement('button')
sendButton.id='sendButton'
sendButton.textContent='Send'
document.querySelector('#form').appendChild(sendButton)

class Message{
    message
    constructor(obj){
        this.message=obj.message
    }
    getMessage(){
        return this.message
    }
    setMessage(value){
        this.message=value
    }
}

const messageStore = []

function createMessage(message){

    clear()
    const m = new Message({message:message})
    messageStore.push(m)
    print()
    
}

function clear(){
    messageStore.forEach((m,index)=> {
        document.getElementById("chatlog" + index).remove()
        document.querySelector('hr').remove()
    })
}

 function print(){
    messageStore.forEach((m,index)=>{
        const p=document.createElement('p')
        p.className="chatlog"
        p.id="chatlog"+index
        p.textContent=`${m.getMessage()}`
        const hr=document.createElement('hr')
        document.querySelector('#chatborder').append(p,hr)
        
    })
}
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        if(e.target.message.value!==''){
            createMessage(e.target.message.value)
        }
        else{
            alert ("Invalid input")
        }
    })