// initialise the file system
const fs = require('fs')

const file_path = 'coding_qual_input.txt'

// decode message function
function decode(message_file) {
    // calls function to read the file and assigns it as an object to a variable
    const word_dictionary = readFileToDictionary(message_file)

    // calls function to create the triangular decode sequence 
    const decode_sequence = createDecodeSequence(word_dictionary)

    // call an output message
    let output_message = ""

    // iterate through the decode sequence
    for (const val of decode_sequence) {
        // use each item in the decode sequence as a key to assign the word from the dictionary to the output message
        output_message += word_dictionary[val] + " "
    }
    // trims the trailing whitespace
    const trimmed = output_message.trim()
    return trimmed
}
// function to read the file, and store the data in a dictionary using the number as the key
function readFileToDictionary(message) {
    try {
        const data = fs.readFileSync(message, 'utf8')
        const dictionary = {}

        for (const line of data.split('\n')) {
            const [key, value] = line.trim().split(' ')
            dictionary[parseInt(key)] = value
        }

        return dictionary
    } catch (err) {
        console.error('Error reading file:', err)
        return {}
    }
}

// function to create a triangular sequence up to the number of keys in the file
function createDecodeSequence(word_dictionary) {
    const object_length = Object.keys(word_dictionary).length
    let decode_sequence = []
    let num = 1
    let increment = 2
    while (num <= object_length) {
        decode_sequence.push(num)
        num += increment
        increment++
    }
    return decode_sequence
}

console.log(decode(file_path))