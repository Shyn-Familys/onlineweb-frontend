module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'color-named': 'never',
    'string-quotes': 'single',
    'at-rule-no-unknown': null,
    'at-rule-empty-line-before': null,
    'property-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'declaration-empty-line-before': 'never',
    'shorthand-property-no-redundant-values': true,
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',
    'declaration-block-no-redundant-longhand-properties': true,
    'selector-max-type': [
      0,
      {
        ignore: ['child', 'descendant'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'local'],
      },
    ],
  },
};
