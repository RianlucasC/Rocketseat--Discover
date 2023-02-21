module.exports = {
    getFlag : function  (str) {
        if (str == "--name") {
            return process.argv[0];
        } else if (str == "--greeting") {
            return process.argv[1];
        } else {
            return "invalido";
        }
    }
} 