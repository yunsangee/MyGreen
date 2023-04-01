const db = require('../database')

const diarySchema = new db.Schema({
    date: {
      type: Date,
      required: true
    },
    images: [Buffer],   // 일기 속 사진들
    content: {
        type: String,
        required: true
    }
});

module.exports = diarySchema