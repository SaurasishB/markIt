let linkArray=[]
const s=document.getElementById("save_ip")
const ulEl=document.getElementById("ul_el")
const inputEl=document.getElementById("input_el")
const d=document.getElementById("del_ip")
let links=JSON.parse(localStorage.getItem("linkArray"))
const st=document.getElementById("saveTab_ip");

if(links){
    linkArray=links
    printList()
}
s.addEventListener("click",()=>{
    if(inputEl.value!=""){
        linkArray.push(inputEl.value)
        printList()
        inputEl.value=""
        localStorage.setItem("linkArray",JSON.stringify(linkArray))
    }
})

d.addEventListener("click",()=>{
    localStorage.clear();
    linkArray=[]
    printList()
})

st.addEventListener("click",()=>{
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        linkArray.push(tabs[0].url);
        printList();
        localStorage.setItem("linkArray",JSON.stringify(linkArray));
    });
})

function printList(){
    let listItem=""
    for(let i=0;i<linkArray.length;i++){
        listItem += `
        <li>
            <a target='-blank' href='${linkArray[i]}'>
                ${linkArray[i]}
            </a>
        </li>`
    }
    ulEl.innerHTML=listItem
}

/* creat a save tab button to save the current tab and creat the current tab
 google it*/