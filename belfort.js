const map = document.querySelector("#map")
const paths = map.querySelectorAll(".map__image a")
const links = map.querySelectorAll(".map__list a")

// Polyfill du forEach
if (NodeList.prototype.forEach === undefined){
    NodeList.prototype.forEach() === function (callback){
        [].forEach.call(this,callback)
    }
}

let activeArea = function (id,type){
    map.querySelectorAll('.is-active').forEach(function (item){
        item.classList.remove('is-active')
    })
    if (id !== undefined){
        document.querySelector('#list-'+type+'-'+id).classList.add('is-active')
        document.querySelector('#'+type+'-'+id).classList.add('is-active')
    }else{
        if (type !== undefined){
            document.querySelector('#'+type).classList.add('is-active')
            document.querySelector('#list-'+type).classList.add('is-active')
        }
    }
}

paths.forEach(function (path){
    path.addEventListener('mouseenter', function (){
        let id = (this.id.split('-')[1])
        let type = (this.id.split('-')[0])
        console.log(id,type)
        activeArea(id,type)
    })
})

links.forEach(function (link){
    link.addEventListener('mouseenter', function (){
        let id = (this.id.split('-')[2])
        let type = (this.id.split('-')[1])
        activeArea(id,type)
    })
})

map.addEventListener('mouseover', function (){
    activeArea()
})