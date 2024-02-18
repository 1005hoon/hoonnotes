module.exports = {
  '**/*.(ts|tsx|js)': filenames => [
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`
  ],
  // Format MarkDown and JSON
  '**/*.(md|mdx|json)': filenames =>
    `yarn prettier --write ${filenames.join(' ')}`
}
