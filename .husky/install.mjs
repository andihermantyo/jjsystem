// Skip Husky install in production and CI
if (process.env.APP_VARIANT === 'production') {
  process.exit(0);
}
const husky = (await import('husky')).default;
console.log(husky());
