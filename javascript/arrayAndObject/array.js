/* array */

{} // object
[] // array 

const note = ["sithumin", "paneiphyu", "samsouta", "santhein", "nyimya", "Yangon", "Mandalay", "Taunggyi",]


// push
note.push("bago")
// call array
// array index starts 0 --> 
note[5] 

// how much array 
note.length

const noteInfor = note.length - 1
noteInfor = 8 - 1 //--> 7
note[noteInfor]
// Taunggyi

// how to push font 
// but use other method  (unshift)
note.unshift("Ayetheryar")

// how to remove last item 

note.pop()

// how to remove first item 

note.shift()

// how to remove all item 

note.splice(2, 2)

// unknown index 

note.indexOf("yangon")

const indexOf = note.indexOf("Yangon")
note.splice(indexOf, 1)





