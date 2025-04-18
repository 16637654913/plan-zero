module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        "type-enum": [2, "always", ["foo"]],
        "header-max-length": [1, "always", 10]
    },
};