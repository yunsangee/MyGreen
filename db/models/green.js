const db = require('../database')
const memoSchema = require('./green_memo')
const diarySchema = require('./green_diary')
const attributeSchema = require('./green_attribute')

// required: true 인 필드는 필수 필드임. 값 없이 도큐먼트를 만들면 ValidationError를 throw함.
const greenSchema = new db.Schema({
  userID: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  profile: Buffer,
  memo: memoSchema,
  diary: [diarySchema],
  attribute: {
    type: attributeSchema,
    required: false
  }
});

const green = db.model('green', greenSchema)

module.exports = green