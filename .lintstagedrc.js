module.exports = {
  '**/*.(ts|tsx)': () => 'yarn tsc',
  '**/*.(ts|tsx|js)': filenames => [
    `yarn eslint ${filenames.join(' ')} --fix`,
  ],
}
