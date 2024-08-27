let countId = 0;


function encrypt_text(input_box) {
    let arregloVariable = input_box.split('')
    for (let x = 0; x <= arregloVariable.length - 1; x++) {
        if (arregloVariable[x] == 'a') {
            arregloVariable[x] = "ai"
        } else if (arregloVariable[x] == 'e') {
            arregloVariable[x] = "enter"
        } else if (arregloVariable[x] == 'i') {
            arregloVariable[x] = "imes"
        } else if (arregloVariable[x] == 'o') {
            arregloVariable[x] = "ober"
        } else if (arregloVariable[x] == 'u') {
            arregloVariable[x] = "ufat"
        }
    }
    let convertString = arregloVariable.toString()
    let idAdd = countId++
    let elementToShow = ` <div class="return_message">
                            <h1>Texto Encriptado</h1>
                            <div class = "return_message_txt">
                            <h1 class="m0" id='${idAdd}'>${convertString.replaceAll(',', '')}</h1>
                            <i class="fas fa-copy" onclick="copyElementById('${idAdd}')"></i>
                            </div>
                        </div>`;
    let containerDom = document.getElementById('containerText')
    containerDom.innerHTML += elementToShow;
    console.log(convertString.replaceAll(',', ''));
}

function desencrypt_text(input_box) {
    let arregloVariable = input_box.split('')
    for (let x = 0; x <= arregloVariable.length - 1; x++) {
        if (arregloVariable[x] == 'a') {
            if (arregloVariable[x + 1] == 'i') {
                arregloVariable[x] = "a"
                arregloVariable[x + 1] = ""
            }
        } else if (arregloVariable[x] == 'e') {
            if (arregloVariable[x + 1] == 'n' &&
                arregloVariable[x + 2] == 't' &&
                arregloVariable[x + 3] == 'e' &&
                arregloVariable[x + 4] == 'r'
            ) {
                arregloVariable[x] = "e"
                arregloVariable[x + 1] = ""
                arregloVariable[x + 2] = ""
                arregloVariable[x + 3] = ""
                arregloVariable[x + 4] = ""
            }
        }
        else if (arregloVariable[x] == 'i') {
            if (arregloVariable[x + 1] == 'm' &&
                arregloVariable[x + 2] == 'e' &&
                arregloVariable[x + 3] == 's'

            ) {
                arregloVariable[x] = "i"
                arregloVariable[x + 1] = ""
                arregloVariable[x + 2] = ""
                arregloVariable[x + 3] = ""
            }
        } else if (arregloVariable[x] == 'o') {
            if (arregloVariable[x + 1] == 'b' &&
                arregloVariable[x + 2] == 'e' &&
                arregloVariable[x + 3] == 'r'

            ) {
                arregloVariable[x] = "o"
                arregloVariable[x + 1] = ""
                arregloVariable[x + 2] = ""
                arregloVariable[x + 3] = ""
            }
        } else if (arregloVariable[x] == 'u') {
            if (arregloVariable[x + 1] == 'f' &&
                arregloVariable[x + 2] == 'a' &&
                arregloVariable[x + 3] == 't'

            ) {
                arregloVariable[x] = "u"
                arregloVariable[x + 1] = ""
                arregloVariable[x + 2] = ""
                arregloVariable[x + 3] = ""
            }
        }
    }
    let convertString = arregloVariable.toString()
    let idAdd = countId++
    let elementToShow = ` <div class="return_message">
                            <h1>Texto Desencriptado</h1>
                            <div class = "return_message_txt">
                            <h1 class="m0" id='${idAdd}'>${convertString.replaceAll(',', '')}</h1>
                            <i class="fas fa-copy" onclick="copyElementById('${idAdd}')"></i>
                            </div>
                        </div>`;
    let containerDom = document.getElementById('containerText')
    containerDom.innerHTML += elementToShow;
    console.log(convertString.replaceAll(',', ''));
}

function reception(action) {
    const regex = /^[a-z\s]+$/;
    let input = document.getElementById('input_box').value;
    if(regex.test(input) == true){
        let text = document.getElementById("input_box").value
        let elementToShow = ` <div class="input_message">
                                <h1>Texto Validar</h1>
                                <div class="input_message_txt">
                                <h1 class="m0">${text}</h1>
                                </div>
                            </div>`;
        let containerDom = document.getElementById('containerText')
        containerDom.innerHTML += elementToShow;
        document.getElementById("input_box").value = ""
    
        if (action == "encrypt") {
            encrypt_text(text)
        } else {
            desencrypt_text(text)
        }
    }else{
        alert('Ingresa texto sin caracteres especiales o mayúsculas.')
    }

}

function copyElementById(id) {

    let h1Element = document.getElementById(id);
    let tempInput = document.createElement("input");
    tempInput.value = h1Element.innerText;
    document.body.appendChild(tempInput);
    tempInput.select(); //web
    tempInput.setSelectionRange(0, 99999); //cell
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Texto copiado al portapapeles");

}

