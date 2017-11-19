const log = () => console.log.bind(console)

const e = (selector) => document.querySelector(selector)

const es = (selectors) => document.querySelectorAll(selectors)

const bindEvent = (element, eventName, callback) => {
    element.addEventListener(eventName, callback)
}

const bindAll = (selector, eventName, callback) => {
    var elements = document.querySelectorAll(selector)
    for(var i = 0; i < elements.length; i++) {
        var e = elements[i]
        bindEvent(e, eventName, callback)
    }
}

const removeClassAll = (className) => {
    var selector = '.' + className
    var elements = document.querySelectorAll(selector)
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i]
        e.classList.remove(className)
    }
}

const banner = (newIndex) => {
		var imgId = '#photo-'+ String(newIndex)
        var className = 'active'
		removeClassAll(className)
		var c = e(imgId)
		c.classList.add(className)
        var n = (-9) * (newIndex)
        e('.box-reflect').style.transform = `translateX(${n}rem)`;
}

const anyImg = () => {
    var selector = '.photo'
    bindAll(selector, 'click', function(event){
		var self = event.target
		var newIndex = Number(self.dataset.id)
        var all = self.closest('.all')
        banner(newIndex)
		all.dataset.active = newIndex
	})
}

const before = () => {
    var selector = '.before'
	bindAll(selector, 'click', function(event){
    var self = event.target
    var all = self.closest('.all')
	var index = Number(all.dataset.active)
    var imgs = Number(all.dataset.imgs)
	var newIndex = (index + imgs - 1) % imgs
    banner(newIndex)
	all.dataset.active = newIndex
    })
}

const after = () => {
    var selector = '.after'
    bindAll(selector, 'click', function(event){
        var self = event.target
        var all = self.closest('.all')
    	var index = Number(all.dataset.active)
        var imgs = Number(all.dataset.imgs)
    	var newIndex = (index + imgs + 1) % imgs
        banner(newIndex)
    	all.dataset.active = newIndex
    })
}

const action = () => {
    before()
    after()
}

const __main = () => {
    anyImg()
    action()
}

 __main()
