module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        "type-enum": [2, "always", ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore']],
        'scope-empty': [2, 'always'], // scope 不可为空
        "header-max-length": [2, "always", 30]
    },
    helpUrl: "https://commitlint.js.org/reference/rules-configuration.html#rules-configuration"
};