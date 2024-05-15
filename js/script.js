const list=['pane','frutta','verdura','cipolle','pasta','formaggio'];
let i=0;
const ulElem=document.querySelector('ul');

while (i < list.length){
    const element= document.createElement('li');
    element.append(list[i]);

    ulElem.appendChild(element);
    i++;
}