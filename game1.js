window.onload = function() {
    let allpuz = ["drag", "drag2", "drag3"]
    
    allpuz.forEach(function(id) {
        let parent = document.getElementById(id)
        if (parent) {
            let children = Array.from(parent.children)
            children.sort(function() { return Math.random() - 0.5; })
            
            parent.innerHTML = ""
            for (let i = 0; i < children.length; i++) {
                parent.appendChild(children[i])
            }
        }
    })
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id)
}

function dropOver(ev) {
    ev.preventDefault()
}

function drop(ev) {
    ev.preventDefault()
    let data = ev.dataTransfer.getData("text") 
    
    let pictur = document.getElementById(data)
    let target = ev.target

    if (target.className == "images") {
        target = target.parentNode
    }

    if (pictur && target.children.length == 0) {
        target.appendChild(pictur)
    }
}