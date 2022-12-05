const topics = require("./../../utils/topics");

module.exports = (args) => {
    const res = [];
    topics.map((topic) => {
        res.push(topic.topicName);
    });
    return res;
};
