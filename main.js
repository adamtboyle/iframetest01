document.querySelector('#select1').addEventListener('click', onClick);
document.querySelector('#select2').addEventListener('click', onClick);
document.querySelector('#amount').addEventListener('click', onClick);
window.addEventListener("message", receiveMessage);

function onClick(e) {
    let val;

    val = e.target.id;

    console.log(`event click target id: ${val}`);
    window.postMessage('Hello');
    window.parent.postMessage('Hello Parent');
    parent.postMessage('Parent Post2');
    switch(val) {
        case 'select1':
                postClickMessage('0000001');
            break;
        case 'amount':
                postClickMessage('0000002');
            break;
        case 'select2':
                postClickMessage('0000003');
            break;
    }

}

function postClickMessage(value) {
    window.postMessage('Hello Post Function');
}

function receiveMessage(e) {
    console.log('e.data: '+e.data);
}
