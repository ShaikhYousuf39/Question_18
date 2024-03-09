import { reverse } from "dns";

// store places in array
let placestoVisit:string[] = ["Makkah","Madina","Turkey","Switzerland","Canada", ];

// array in its original order
console.log("Orignal order:", placestoVisit)

// array in alphabetical order without modifying actual list
console.log("Alphabetical order:", [...placestoVisit].sort())

// Showing that array is still in its original order
console.log("Orignal order after sorting:", placestoVisit)

// array in reverse alphabetical order without changing the order of the original list
console.log("In reverse alphabetical order:", [...placestoVisit].sort().reverse())

// Showing that array is still in its original order
console.log("Orignal order after reverse alphabetical sorting:", placestoVisit)

// array in reverse order without changing the order of the original list
console.log("Reversed order:", placestoVisit.reverse())

// array in reverse order without changing the order of the original list
console.log("Orignal order after reverse sorting:", placestoVisit.reverse())

// array in alphabetical order without modifying actual list
placestoVisit.sort()
console.log("Sorted in Alphabetical order:" , placestoVisit)

// array in alphabetical order without modifying actual list
placestoVisit.sort((a,b)=> b.localeCompare(a))
console.log("Sorted in Reversed Alphabetical order:", placestoVisit)