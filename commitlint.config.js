// Super-linter issue: commitlint does not obey the LINTER_RULES_PATH.
// https://github.com/super-linter/super-linter/issues/6316
export default {
  extends: ['@commitlint/config-conventional'],
  helpUrl: 'https://www.conventionalcommits.org/',
  ignores: []
}
