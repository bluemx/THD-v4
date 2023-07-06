var cpage = window.location.pathname.split("/").pop();
const localkey = 'thehomedepotemailgame'
const api = 'https://bluetest.mx/THD/Services.aspx';
const urlParams = new URLSearchParams(window.location.search)
const registeredText = '<strong class="h5">¡Gracias por jugar!</strong><br>Ya hemos registrado tu participación.';
const errorText = '<strong class="h5">Ocurrió un error</strong><br>Verifica tu url e intenta de nuevo.';


const getlocal = () => {
    const data64 = window.localStorage.getItem(localkey)
    if(data64){
        const dataStr = window.atob(data64)
        const data = dataStr || {}
        const dataJson = JSON.parse(data)
        return dataJson
    } else {
        return {}
    }
}
const storelocal = (key, val) => {
    var data = getlocal()
    data[key] = val
    window.localStorage.setItem(localkey, window.btoa(JSON.stringify(data)))
    
}
const createlocal = () => {
    window.localStorage.setItem(localkey, window.btoa('{}'))
}


const verifylocal = (key) => {
    var data = getlocal()
    if(data.hasOwnProperty(key)){
        return true
    } else {
        console.log('not verified')
        history.back()
    }
}

const ValidateSurvey =  async () => {
    const res = await axios.post(api+'/ValidateSurvey', JSON.stringify({ SurveyID: getlocal().SurveyID }))
    if(res.data == -1 || res.data == '-1'){
        return false
    } else {
        return true
    }
}


/* ########## */
/*const FNindex = async () => {
    createlocal()
    const SurveyID = urlParams.get('SurveyID')
    if(SurveyID){
        storelocal('SurveyID', SurveyID)
        const res = await ValidateSurvey();
        if(res){
            const form = document.getElementById('emailform')
            form.onsubmit = (e) => {
                e.preventDefault()
                const email = document.getElementById('emailinput').value
                storelocal('Email', email)
                window.location = 'select.html'
            }
        } else {
            document.querySelector('form').innerHTML = registeredText;
        }
    } else {
        document.querySelector('form').innerHTML = errorText;
    }
}*/ //SURVEY ID

const FNindex = async () => {
    createlocal()
    
    const form = document.getElementById('emailform')
    form.onsubmit = (e) => {
        e.preventDefault()
        const email = document.getElementById('emailinput').value
        storelocal('Email', email)
        window.location = 'select.html'
    }
        
}

const FNselect = async () => {
    /*
    const res = await ValidateSurvey();
    if( !res ) {
        window.location = 'index.html'
    }
    verifylocal('SurveyID')
    */
    verifylocal('Email')
}
const FNactivity =  async () => {
    /*
    const res = await ValidateSurvey();
    if( !res ) {
        window.location = 'select.html'
    }
    verifylocal('SurveyID')
    */
    verifylocal('Certificate')
    window.addEventListener("message", (event) => {
        var data = null
        try {
            data = JSON.parse(event.data)
        } catch {
            return false
        }
        if(data.state == 'gameopen'){
            document.querySelector('.loading').style.display = 'none';
        }
        if(data.state == 'btn_gameclose'){
            history.back()
        }
        if(data.state == 'gameover' || data.state == "'gameover'"){
            document.querySelector('.participation').style.display = 'flex';
        }
    }, false);
}
/* ########## */
switch(cpage){
    case  '':
    case 'index.html':
        FNindex();
        break;
    case 'select.html':
        FNselect();
        break;
    case 'activity.html':
        FNactivity();
        break;
    default:
        window.location = 'index.html'
        break;
}



