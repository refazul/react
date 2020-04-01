# Project Info
# This info is presented in a widget when you share.
# http://framerjs.com/docs/#info.info

Framer.Info =
	title: "Flipboard's Flipping Effect"
	author: "Lunatics"
	twitter: "@jobsfield"
	description: ""


# total filp pages, cover included
count = 3

# these are arrays to store the fliped pages
flipers = []
fronts = []
backs = []
frontMasks = []
 
# set screen perspective
Screen.perspective = 2200


# create a page component to drive the flip motion
pages = new PageComponent
	width: Screen.width
	height: Screen.height
	
pages.scrollHorizontal = false

# fine tune the page animation
pages.animationOptions =
	curve: "spring(200,30,0)"	

# this makes the page turn with half screen swipe
pages.speedY = 2


# create the upper part for the cover
# z position is important

firstUpperHalfCover = new Layer
	width: Screen.width
	height: Screen.height / 2 - 44
	backgroundColor: null
	z: -.000001
firstUpperHalfCover.style = 
		"background-image" : "url(images/0.jpg)"
		"background-position" : "top"

# create all filp pages and page component pages with one single loop

for i in [0..count-1]
	# page component's pages
	page = new Layer
		width: Screen.width
		height: Screen.height
		y: Screen.height * i
		parent: pages.content
		backgroundColor: null
		
	# flip page container
	fliper = new Layer
		width: Screen.width
		height: Screen.height / 2-44
		y: Screen.height / 2 - 44
		backgroundColor: "rgba(0,0,0,0)"
		originY: 0
		
	# give container orders!	
	fliper.i = i	
		
	back = new Layer
		name: "back"
		superLayer: fliper
		width: Screen.width
		height: Screen.height / 2 - 44
		rotationX: 180 
	
	# using html's "top" & "bottom" feature to display the right part of a page		
	back.style = 
		"background-image" : "url(images/#{count - i}.jpg)"
		"background-position" : "top"
# 		"backface-visibility" : "hidden"	
			
	front = new Layer
		name: "front"
		superLayer: fliper
		width: Screen.width
		height: Screen.height / 2 - 44	
			
	front.style =
		"background-image" : "url(images/#{count - (i+1)}.jpg)"
		"background-position" : "bottom"
# 		"backface-visibility" : "hidden"
	
					
	frontMask = new Layer
		superLayer: front
		width: front.width
		height: front.height
		opacity: 1
		backgroundColor: "black"

	# put all created layers into array
	flipers.push(fliper)
	fronts.push(front)
	backs.push(back)
	frontMasks.push(frontMask)
	
	
# interactions, all driven by the page component's content.y		
pages.content.on "change:y", ->
	
	for i in [ 0...count]
		
		# this drives everthing else. it converts the content.y position into each fliper's X rotation.
		
		e = count - i - 1
		flipers[i].rotationX = Utils.modulate(pages.content.y,[-10+(Screen.height)*(-1)*e, Screen.height * (-1)*(e+1)], [0,180],true)

		fronts[i].brightness = Utils.modulate(flipers[i].rotationX,[0,180], [100,80],true)
		
		# exclude the exceeded larger one		
		if i + 1 <= count - 1
			backs[i+1].brightness = Utils.modulate(flipers[i].rotationX,[70, 180], [100,50],true)

		else 
			firstUpperHalfCover.brightness = Utils.modulate(flipers[count-1].rotationX,[70,180], [100,50],true)	
		
		# same as alove, exclude the smaller Number					
		if i - 1 >= 0
			frontMasks[i-1].opacity = Utils.modulate(flipers[i].rotationX,[0,100], [.9,0],true)
		else 
			frontMasks[count-1].opacity = 0	

# control the rotated page's opacity.
											
for i in [0...flipers.length]
	flipers[i].on "change:rotationX", ->
		this.bringToFront()
		if this.rotationX >= 90
			fronts[this.i].opacity = 0
			backs[this.i].opacity = 1
		else
			fronts[this.i].opacity = 1
			backs[this.i].opacity = 0	
				
frontMasks[count-1].opacity = 0	




tabbar = new Layer
	width: 750
	height: 88
	image: "images/tabbar.png"
	y: Screen.height - 88
