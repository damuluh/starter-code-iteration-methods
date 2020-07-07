// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
const main = document.querySelector('main')

function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA" + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

// Append the katas to this element:


const greenEyes1 = users.filter(user => user.eyeColor === "green")
// main.append(JSON.stringify(greenEyes1))

printKata(1, greenEyes1)


const isActives = users.filter(user => user.isActive === true)

printKata(2, isActives)



const emails = users.map(user => user.email)

printKata(4, emails)


const companyproperty = users.some(user => user.company === 'OVATION')

printKata(5, companyproperty)


const ageover38 = users.find(user => user.age > 38)

printKata(6, ageover38)

const ageover$active38 = isActives.find(user => user.isActive === true)

printKata(7, ageover$active38)

// printKata(8, ageover$active38)



// printKata(9, ageover$active38)


