const buffer = new Buffer.from("Ashutosh")
console.log(buffer)

// Methods of buffer
console.log(buffer.toString());

// toJSON() method returns the JSON representation of the buffer
console.log(buffer.toJSON());

// length() method returns the length of the buffer
console.log(buffer.length);

// isEncoding() method returns true if the buffer is encoded
console.log(Buffer.isEncoding('utf8'));

// isBuffer() method returns true if the buffer is a buffer
console.log(Buffer.isBuffer(buffer));

